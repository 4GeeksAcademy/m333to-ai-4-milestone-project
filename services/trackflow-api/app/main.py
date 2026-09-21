from fastapi import FastAPI

app = FastAPI(title="TrackFlow API", version="0.1.0")


@app.get("/")
def read_root():
    return {
        "service": "TrackFlow API",
        "status": "online",
        "message": "Operations backend for warehouse, transit, and support workflows."
    }


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "environment": "development",
        "region_scope": ["Los Angeles", "Spain"]
    }


@app.get("/operations/summary")
def operations_summary():
    return {
        "active_hubs": 14,
        "shipment_exceptions": 28,
        "support_queue": 96,
        "route_health": "94.8%",
        "coverage": "24/7",
        "context": "Warehouse to doorstep visibility across regional and international logistics flows."
    }
