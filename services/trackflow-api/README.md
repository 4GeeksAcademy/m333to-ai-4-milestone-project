# TrackFlow API

This service provides the central backend for the TrackFlow logistics domain. It exposes the operational data and endpoints needed by the internal dashboard and future integrations.

## Purpose

The API is designed to support:

- shipment and hub status queries
- operational monitoring endpoints
- support workflow data access
- future automation and AI orchestration integration

## Stack

- Python
- FastAPI
- Pydantic

## Local run

```bash
python -m venv .venv
source .venv/bin/activate
pip install fastapi uvicorn
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Notes

This is an initial service scaffold that follows the repo’s monorepo structure and can be extended with route modules for shipments, hubs, support, and monitoring.
