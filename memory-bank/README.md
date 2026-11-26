# TrackFlow project memory bank

This directory is the durable, concise working context for future project sessions. Read these files before planning or implementing a feature:

1. [`projectbrief.md`](./projectbrief.md) — what TrackFlow is, what this project aims to build, stakeholder context, source precedence, and known domain contradictions.
2. [`techContext.md`](./techContext.md) — repository layout, observed technical state, constraints, and verification practices.
3. [`projectRules.md`](./projectRules.md) — how to scope, implement, document, and validate work in this repository.
4. [`progress.md`](./progress.md) — dated factual project snapshot, verified work, blockers, and next agreed steps.

## How to use this memory

- Treat the memory bank as a project map, not as a replacement for authoritative briefs or source code. Reopen referenced files when exact requirements matter.
- Keep durable facts and decisions here; keep detailed milestone acceptance criteria in the milestone brief and implementation-specific instructions beside the implementation.
- On finding a conflict, identify both sources and resolve it explicitly with the project owner. Do not silently rewrite uncertain facts as truth.
- Update `progress.md` after substantial work. Update `techContext.md` when the architecture/tooling changes. Add new enduring decisions to `projectRules.md` or the relevant brief.
- Date snapshots and distinguish proposed, implemented, verified, and deployed work.
