"""
Game State Management for Counter-Battery Duel
Handles match state, player positions, and mortar status
"""
from dataclasses import dataclass, field
from typing import Dict, Optional
from enum import Enum
import time
import random


class GamePhase(Enum):
    WAITING = "waiting"      # Waiting for players
    COUNTDOWN = "countdown"  # 3-2-1 start
    ACTIVE = "active"        # Game in progress
    FINISHED = "finished"    # Match complete


@dataclass
class MortarState:
    """State of a single mortar position"""
    player_id: str
    deflection: float = 0.0      # Current aim deflection (mils)
    elevation: float = 350.0     # Current aim elevation (mils)
    position_x: float = 0.0      # Grid position X (meters)
    position_y: float = 0.0      # Grid position Y (meters)
    rounds_fired: int = 0
    rounds_remaining: int = 20
    is_destroyed: bool = False
    last_fire_time: float = 0.0
    
    def to_dict(self) -> dict:
        return {
            "player_id": self.player_id,
            "deflection": self.deflection,
            "elevation": self.elevation,
            "position_x": self.position_x,
            "position_y": self.position_y,
            "rounds_fired": self.rounds_fired,
            "rounds_remaining": self.rounds_remaining,
            "is_destroyed": self.is_destroyed
        }


@dataclass
class GameMatch:
    """Represents a single counter-battery duel match"""
    match_id: str
    phase: GamePhase = GamePhase.WAITING
    mortars: Dict[str, MortarState] = field(default_factory=dict)
    start_time: Optional[float] = None
    end_time: Optional[float] = None
    winner: Optional[str] = None
    
    # Match settings
    max_players: int = 2
    grid_size: float = 2000.0    # 2km x 2km area
    min_distance: float = 500.0  # Minimum spawn distance between mortars
    
    def add_player(self, player_id: str) -> bool:
        """Add a player to the match"""
        if len(self.mortars) >= self.max_players:
            return False
        if player_id in self.mortars:
            return False
            
        # Generate random position
        pos_x, pos_y = self._generate_spawn_position()
        
        self.mortars[player_id] = MortarState(
            player_id=player_id,
            position_x=pos_x,
            position_y=pos_y
        )
        return True
    
    def remove_player(self, player_id: str) -> bool:
        """Remove a player from the match"""
        if player_id in self.mortars:
            del self.mortars[player_id]
            return True
        return False
    
    def _generate_spawn_position(self) -> tuple[float, float]:
        """Generate spawn position ensuring minimum distance from other players"""
        max_attempts = 100
        
        for _ in range(max_attempts):
            x = random.uniform(100, self.grid_size - 100)
            y = random.uniform(100, self.grid_size - 100)
            
            # Check distance from existing mortars
            valid = True
            for mortar in self.mortars.values():
                dist = ((x - mortar.position_x)**2 + (y - mortar.position_y)**2)**0.5
                if dist < self.min_distance:
                    valid = False
                    break
            
            if valid:
                return (x, y)
        
        # Fallback: return corner positions
        if len(self.mortars) == 0:
            return (200, 200)
        return (self.grid_size - 200, self.grid_size - 200)
    
    def start_match(self) -> bool:
        """Start the match if enough players"""
        if len(self.mortars) < 2:
            return False
        self.phase = GamePhase.ACTIVE
        self.start_time = time.time()
        return True
    
    def check_winner(self) -> Optional[str]:
        """Check if there's a winner (last mortar standing)"""
        alive_mortars = [m for m in self.mortars.values() if not m.is_destroyed]
        
        if len(alive_mortars) == 1:
            self.winner = alive_mortars[0].player_id
            self.phase = GamePhase.FINISHED
            self.end_time = time.time()
            return self.winner
        elif len(alive_mortars) == 0:
            self.phase = GamePhase.FINISHED
            self.end_time = time.time()
            return "draw"
        
        return None
    
    def to_dict(self) -> dict:
        return {
            "match_id": self.match_id,
            "phase": self.phase.value,
            "mortars": {pid: m.to_dict() for pid, m in self.mortars.items()},
            "start_time": self.start_time,
            "winner": self.winner,
            "player_count": len(self.mortars),
            "max_players": self.max_players
        }


class GameStateManager:
    """Manages all active matches"""
    
    def __init__(self):
        self.matches: Dict[str, GameMatch] = {}
        self.player_to_match: Dict[str, str] = {}  # player_id -> match_id
    
    def create_match(self, match_id: str) -> GameMatch:
        """Create a new match"""
        match = GameMatch(match_id=match_id)
        self.matches[match_id] = match
        return match
    
    def get_match(self, match_id: str) -> Optional[GameMatch]:
        """Get a match by ID"""
        return self.matches.get(match_id)
    
    def get_player_match(self, player_id: str) -> Optional[GameMatch]:
        """Get the match a player is in"""
        match_id = self.player_to_match.get(player_id)
        if match_id:
            return self.matches.get(match_id)
        return None
    
    def join_match(self, match_id: str, player_id: str) -> bool:
        """Have a player join a match"""
        match = self.matches.get(match_id)
        if not match:
            return False
        
        if match.add_player(player_id):
            self.player_to_match[player_id] = match_id
            return True
        return False
    
    def leave_match(self, player_id: str) -> bool:
        """Have a player leave their current match"""
        match_id = self.player_to_match.get(player_id)
        if not match_id:
            return False
        
        match = self.matches.get(match_id)
        if match:
            match.remove_player(player_id)
        
        del self.player_to_match[player_id]
        return True
    
    def find_open_match(self) -> Optional[GameMatch]:
        """Find a match that's waiting for players"""
        for match in self.matches.values():
            if match.phase == GamePhase.WAITING and len(match.mortars) < match.max_players:
                return match
        return None


# Global game state manager
game_manager = GameStateManager()
