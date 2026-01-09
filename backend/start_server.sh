#!/bin/bash
# Start the Counter-Battery Duel server

cd "$(dirname "$0")"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt --quiet

# Start server
echo "Starting Counter-Battery Duel Server..."
echo "WebSocket: ws://localhost:8000/ws/{player_id}"
echo "REST API:  http://localhost:8000/"
echo ""
uvicorn server:app --host 0.0.0.0 --port 8000 --reload
