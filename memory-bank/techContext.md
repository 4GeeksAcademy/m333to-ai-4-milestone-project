# Technical context

## Repository shape

This is a milestone-based AI Engineering monorepo, not yet a single configured application workspace. The root `README.md` describes the intended responsibilities:

- `uis/` — user-facing applications; `uis/website/` contains the public website milestone.
- `services/` — APIs and background services.
- `data/` — source data, pipelines, processed data, and evaluations.
- `agents/`, `skills/`, `mcps/`, `workflows/` — agents, reusable capabilities, tool servers, and automation.
- `packages/`, `shared/` — reusable code and shared assets.
- `docs/`, `infra/`, `scripts/`, `internal/` — architecture docs, deployment, scripts, and developer tools.

Use the relevant folder README before adding a deliverable. Keep new work in its owning folder and document each app, service, agent, pipeline, or other substantial component with a local README. Avoid placing unrelated implementations at the repository root.

## Observed state (2026-11-26)

- The repository includes the starter monorepo structure and a populated TrackFlow `CONTEXT.md`.
- `Milestone_1_context.md` contains the public website brief and acceptance criteria.
- `uis/website/` contains `application.html`, `index.html`, `styles.css`, `validation.js`, and `vercel.json`.
- `packages/shared/package.json` and shared TypeScript types exist, but the root README says no root workspace runner is configured.
- No root `AGENTS.md` guidance is present (the file was whitespace-only when checked).
- The three original memory-bank files were whitespace-only before this documentation was added.

This is an inventory, not a verification of runtime behavior. Recheck the repository before relying on it, and update this section when meaningful architecture or tooling changes.

## Technical constraints and defaults

- Follow the actual milestone and existing code before selecting frameworks or adding dependencies. Do not assume a backend, database, deployment platform, test runner, or package manager beyond what is explicitly configured.
- The website milestone explicitly requests Tailwind, responsiveness, accessibility, SEO, and complete form validation. Preserve its required content, field rules, messages, and Schema.org data.
- Keep the website's lead form clearly intended for e-commerce businesses; do not represent it as parcel tracking or consumer returns support.
- Prefer small, understandable, documented components over premature service decomposition. The root guide recommends one centralized FastAPI backend if/when a company API is built, but this is a future recommendation, not evidence that such a backend exists.
- Treat sample or fictional operational data as illustrative. Do not put real personal, client, shipment, or credential data in the repository.

## Verification practice

Before changing code, inspect the target folder's README and current implementation. After changes, run only the relevant checks that are actually configured; report what was run and any limitations. Do not claim a feature is tested, deployed, integrated, secure, or production-ready without evidence.

