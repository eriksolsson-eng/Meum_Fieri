"""
Counter-Battery Duel Server
FastAPI WebSocket server for LAN multiplayer mortar combat

Run with: uvicorn server:app --host 0.0.0.0 --port 8000 --reload
"""
import asyncio
import json
import uuid
from typing import Dict, Set
from contextlib import asynccontextmanager

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

from game_state import game_manager, GamePhase, GameMatch
from ballistics import ballistics


# ============================================================================
# Connection Management
# ============================================================================

class ConnectionManager:
    """Manages WebSocket connections for all players"""
    
    def __init__(self):
        # player_id -> WebSocket
        self.active_connections: Dict[str, WebSocket] = {}
        # match_id -> set of player_ids
        self.match_players: Dict[str, Set[str]] = {}
    
    async def connect(self, websocket: WebSocket, player_id: str):
        """Accept a new connection"""
        await websocket.accept()
        self.active_connections[player_id] = websocket
        print(f"[CONNECT] Player {player_id} connected")
    
    def disconnect(self, player_id: str):
        """Remove a connection"""
        if player_id in self.active_connections:
            del self.active_connections[player_id]
        print(f"[DISCONNECT] Player {player_id} disconnected")
    
    async def send_to_player(self, player_id: str, message: dict):
        """Send message to a specific player"""
        if player_id in self.active_connections:
            try:
                await self.active_connections[player_id].send_json(message)
            except Exception as e:
                print(f"[ERROR] Failed to send to {player_id}: {e}")
    
    async def broadcast_to_match(self, match_id: str, message: dict, exclude: str = None):
        """Broadcast message to all players in a match"""
        match = game_manager.get_match(match_id)
        if not match:
            return
        
        for player_id in match.mortars.keys():
            if player_id != exclude:
                await self.send_to_player(player_id, message)
    
    async def broadcast_all(self, message: dict):
        """Broadcast to all connected players"""
        for player_id in self.active_connections.keys():
            await self.send_to_player(player_id, message)


manager = ConnectionManager()


# ============================================================================
# FastAPI Application
# ============================================================================

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan - startup and shutdown"""
    print("=" * 50)
    print("Counter-Battery Duel Server Starting")
    print("=" * 50)
    yield
    print("Server shutting down...")


app = FastAPI(
    title="Mortar Duty Multiplayer Server",
    version="0.1.0",
    lifespan=lifespan
)

# CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============================================================================
# REST Endpoints (for debugging/admin)
# ============================================================================

@app.get("/")
async def root():
    """Server status"""
    return {
        "status": "online",
        "game": "Counter-Battery Duel",
        "version": "0.1.0",
        "active_matches": len(game_manager.matches),
        "connected_players": len(manager.active_connections)
    }


@app.get("/matches")
async def list_matches():
    """List all active matches"""
    return {
        "matches": [m.to_dict() for m in game_manager.matches.values()]
    }


@app.get("/matches/{match_id}")
async def get_match(match_id: str):
    """Get specific match details"""
    match = game_manager.get_match(match_id)
    if not match:
        return {"error": "Match not found"}
    return match.to_dict()


# ============================================================================
# WebSocket Game Logic
# ============================================================================

async def handle_message(player_id: str, data: dict):
    """Process incoming WebSocket message"""
    msg_type = data.get("type", "")
    
    if msg_type == "create_match":
        await handle_create_match(player_id)
    
    elif msg_type == "join_match":
        match_id = data.get("match_id")
        await handle_join_match(player_id, match_id)
    
    elif msg_type == "quick_join":
        await handle_quick_join(player_id)
    
    elif msg_type == "leave_match":
        await handle_leave_match(player_id)
    
    elif msg_type == "ready":
        await handle_ready(player_id)
    
    elif msg_type == "fire":
        deflection = data.get("deflection", 0)
        elevation = data.get("elevation", 350)
        charge = data.get("charge", 3)
        await handle_fire(player_id, deflection, elevation, charge)
    
    elif msg_type == "update_aim":
        deflection = data.get("deflection", 0)
        elevation = data.get("elevation", 350)
        await handle_update_aim(player_id, deflection, elevation)
    
    elif msg_type == "chat":
        message = data.get("message", "")
        await handle_chat(player_id, message)
    
    else:
        await manager.send_to_player(player_id, {
            "type": "error",
            "message": f"Unknown message type: {msg_type}"
        })


async def handle_create_match(player_id: str):
    """Create a new match and join it"""
    match_id = str(uuid.uuid4())[:8]
    match = game_manager.create_match(match_id)
    game_manager.join_match(match_id, player_id)
    
    await manager.send_to_player(player_id, {
        "type": "match_created",
        "match_id": match_id,
        "match": match.to_dict()
    })
    print(f"[MATCH] Created match {match_id} by {player_id}")


async def handle_join_match(player_id: str, match_id: str):
    """Join an existing match"""
    if not match_id:
        await manager.send_to_player(player_id, {
            "type": "error",
            "message": "No match_id provided"
        })
        return
    
    success = game_manager.join_match(match_id, player_id)
    match = game_manager.get_match(match_id)
    
    if success and match:
        # Notify the joining player
        await manager.send_to_player(player_id, {
            "type": "match_joined",
            "match_id": match_id,
            "match": match.to_dict()
        })
        
        # Notify other players in match
        await manager.broadcast_to_match(match_id, {
            "type": "player_joined",
            "player_id": player_id,
            "match": match.to_dict()
        }, exclude=player_id)
        
        print(f"[MATCH] Player {player_id} joined match {match_id}")
    else:
        await manager.send_to_player(player_id, {
            "type": "error",
            "message": f"Could not join match {match_id}"
        })


async def handle_quick_join(player_id: str):
    """Find an open match or create one"""
    match = game_manager.find_open_match()
    
    if match:
        await handle_join_match(player_id, match.match_id)
    else:
        await handle_create_match(player_id)


async def handle_leave_match(player_id: str):
    """Leave current match"""
    match = game_manager.get_player_match(player_id)
    if match:
        match_id = match.match_id
        game_manager.leave_match(player_id)
        
        await manager.send_to_player(player_id, {
            "type": "match_left"
        })
        
        await manager.broadcast_to_match(match_id, {
            "type": "player_left",
            "player_id": player_id,
            "match": match.to_dict()
        })


async def handle_ready(player_id: str):
    """Player signals ready to start"""
    match = game_manager.get_player_match(player_id)
    if not match:
        return
    
    # Check if all players ready (simplified: just need 2 players)
    if len(match.mortars) >= 2 and match.phase == GamePhase.WAITING:
        match.start_match()
        
        await manager.broadcast_to_match(match.match_id, {
            "type": "match_started",
            "match": match.to_dict()
        })
        print(f"[MATCH] Match {match.match_id} started!")


async def handle_fire(player_id: str, deflection: float, elevation: float, charge: int):
    """Process a fire command"""
    match = game_manager.get_player_match(player_id)
    if not match or match.phase != GamePhase.ACTIVE:
        await manager.send_to_player(player_id, {
            "type": "error",
            "message": "Cannot fire - match not active"
        })
        return
    
    mortar = match.mortars.get(player_id)
    if not mortar or mortar.is_destroyed:
        return
    
    if mortar.rounds_remaining <= 0:
        await manager.send_to_player(player_id, {
            "type": "error",
            "message": "No rounds remaining!"
        })
        return
    
    # Update mortar state
    mortar.deflection = deflection
    mortar.elevation = elevation
    mortar.rounds_fired += 1
    mortar.rounds_remaining -= 1
    
    # Calculate impact
    impact_x, impact_y, dispersion = ballistics.calculate_impact_point(
        mortar.position_x, mortar.position_y,
        deflection, elevation, charge
    )
    
    # Apply dispersion for actual impact
    actual_x, actual_y = ballistics.apply_dispersion(impact_x, impact_y, dispersion)
    
    # Calculate flight time (simplified)
    charge_data = ballistics.CHARGE_TABLE.get(charge, (300, 1200, 140))
    flight_time = 3.0 + (charge * 0.5)  # Rough estimate
    
    # Notify all players of outgoing round
    await manager.broadcast_to_match(match.match_id, {
        "type": "round_fired",
        "player_id": player_id,
        "deflection": deflection,
        "elevation": elevation,
        "charge": charge,
        "flight_time": flight_time
    })
    
    # Schedule impact check
    asyncio.create_task(process_impact(
        match.match_id, player_id, actual_x, actual_y, flight_time
    ))
    
    print(f"[FIRE] Player {player_id} fired: DEF={deflection}, EL={elevation}, CHG={charge}")


async def process_impact(match_id: str, firing_player: str, 
                        impact_x: float, impact_y: float, flight_time: float):
    """Process round impact after flight time"""
    await asyncio.sleep(flight_time)
    
    match = game_manager.get_match(match_id)
    if not match or match.phase != GamePhase.ACTIVE:
        return
    
    # Check for hits on all enemy mortars
    results = []
    for player_id, mortar in match.mortars.items():
        if player_id == firing_player or mortar.is_destroyed:
            continue
        
        result = ballistics.check_hit(impact_x, impact_y, 
                                     mortar.position_x, mortar.position_y)
        
        if result.damage > 0:
            results.append({
                "target_player": player_id,
                "distance": result.distance_to_target,
                "damage": result.damage,
                "is_kill": result.is_hit
            })
            
            if result.is_hit:
                mortar.is_destroyed = True
                print(f"[HIT] Player {player_id} mortar destroyed by {firing_player}!")
    
    # Broadcast impact result
    await manager.broadcast_to_match(match_id, {
        "type": "round_impact",
        "firing_player": firing_player,
        "impact_x": impact_x,
        "impact_y": impact_y,
        "results": results
    })
    
    # Check for winner
    winner = match.check_winner()
    if winner:
        await manager.broadcast_to_match(match_id, {
            "type": "match_ended",
            "winner": winner,
            "match": match.to_dict()
        })
        print(f"[MATCH] Match {match_id} ended - Winner: {winner}")


async def handle_update_aim(player_id: str, deflection: float, elevation: float):
    """Update player's aim (for spectators/training mode)"""
    match = game_manager.get_player_match(player_id)
    if not match:
        return
    
    mortar = match.mortars.get(player_id)
    if mortar:
        mortar.deflection = deflection
        mortar.elevation = elevation


async def handle_chat(player_id: str, message: str):
    """Broadcast chat message to match"""
    match = game_manager.get_player_match(player_id)
    if match:
        await manager.broadcast_to_match(match.match_id, {
            "type": "chat",
            "player_id": player_id,
            "message": message[:200]  # Limit message length
        })


# ============================================================================
# WebSocket Endpoint
# ============================================================================

@app.websocket("/ws/{player_id}")
async def websocket_endpoint(websocket: WebSocket, player_id: str):
    """Main WebSocket endpoint for game communication"""
    await manager.connect(websocket, player_id)
    
    # Send welcome message
    await manager.send_to_player(player_id, {
        "type": "connected",
        "player_id": player_id,
        "message": "Welcome to Counter-Battery Duel!"
    })
    
    try:
        while True:
            data = await websocket.receive_json()
            await handle_message(player_id, data)
            
    except WebSocketDisconnect:
        manager.disconnect(player_id)
        
        # Leave any match the player was in
        match = game_manager.get_player_match(player_id)
        if match:
            await handle_leave_match(player_id)
    
    except Exception as e:
        print(f"[ERROR] WebSocket error for {player_id}: {e}")
        manager.disconnect(player_id)


# ============================================================================
# Main Entry Point
# ============================================================================

if __name__ == "__main__":
    import uvicorn
    print("Starting Counter-Battery Duel Server...")
    print("Connect at: ws://localhost:8000/ws/{player_id}")
    uvicorn.run(app, host="0.0.0.0", port=8000)
