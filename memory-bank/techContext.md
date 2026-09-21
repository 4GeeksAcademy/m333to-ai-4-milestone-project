# Technical Context

## Technology stack

The project follows a modern monorepo structure designed around a central operations platform.

- Backend: Python with FastAPI as the primary application API.
- Frontend: Web dashboard layer for operational monitoring and support workflows.
- Shared code: TypeScript package for reusable types and contracts across services and UI.
- Data layer: Raw and processed logistics datasets, plus pipeline scripts for ETL and metrics generation.
- AI layer: Agent capabilities, reusable skills, and workflow automation for support and operations tasks.
- Automation: Workflow orchestration tools for notifications, event triggers, and operational actions.
- Infrastructure: Docker-based local environment for service orchestration and deployment support.
- Analytics: Python-based data processing and evaluation for operational KPIs and quality checks.

## Architectural decisions

1. Centralized backend
   - A single FastAPI service is used as the primary business backend instead of a fragmented microservice setup.
   - This keeps the architecture simpler during early development while allowing expansion by domain.

2. Monorepo organization
   - The repository is divided by responsibility so product, data, AI, infra, and workflow code stay separated but aligned.
   - This mirrors how real logistics teams organize engineering work across operational systems.

3. Shared contracts
   - Shared schemas and types are used to standardize key domain objects such as shipments, routes, events, and service interactions.
   - This reduces mismatch between backend logic and UI behavior.

4. Event-driven operational model
   - The business flow is modeled around shipment events, warehouse transitions, transit updates, and exception handling.
   - This supports dashboards, workflow automation, and future AI-driven monitoring.

5. AI-assisted operations
   - The architecture includes room for customer support and operations copilots without mixing AI logic directly into the transport domain.
   - Reusable skills and agents can be added as the project grows.

## Technical constraints

- The system must operate continuously in a 24/7 logistics environment.
- It must handle international and regional differences, including U.S. and Spain-based operations.
- It should support multilingual communication patterns and cross-border operational considerations.
- Shipment and customer data must be handled responsibly with attention to privacy and security.
- The solution must remain maintainable as volume, event streams, and support requests grow.
- The project is being built incrementally from a starter monorepo, so architecture choices must remain modular and extensible.
- Integration with carriers, warehouse systems, and operational tools must be based on clear contracts and observable failure handling.
