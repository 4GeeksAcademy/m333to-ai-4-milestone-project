# Project rules and working agreements

These rules keep the work coherent, safe, and reviewable. Repository-specific milestone briefs can add requirements; they do not erase these defaults unless the project owner explicitly resolves a conflict.

## Product and scope

1. **Start from the user and problem.** Name the TrackFlow user, pain point, expected outcome, and acceptance criteria before expanding a feature.
2. **Keep work incremental.** Prefer a small, complete, demonstrable slice over a broad unfinished system. The project owner prefers step-by-step, human-directed agent assistance.
3. **Follow the active milestone.** For the public website, use `Milestone_1_context.md` as the detailed specification. Do not mix in future company roadmap features unless requested.
4. **Keep the audiences distinct.** TrackFlow sells logistics services to e-commerce brands (B2B); package recipients are a separate B2C audience. The website inquiry form is for prospective business clients, not shipment tracking or consumer returns.
5. **Make automation accountable.** For support or operational automation, state what the system may do, what it must not do, what uncertainty triggers escalation, and how a human can review or take over. Keep consequential decisions explainable and appropriately human-supervised.

## Sources and factual accuracy

6. **Respect source precedence.** Follow direct user instructions first, then the relevant milestone brief, then company context and supporting notes. Raise conflicts rather than silently inventing a resolution.
7. **Separate fact from proposal.** Fictional company details are scenario inputs; proposed systems are not implemented systems. Never claim real carrier access, live data, deployment, compliance, or production readiness without evidence.
8. **Keep known contradictions visible.** The TrackFlow brief has a CEO-name inconsistency (Thomas Harry in the overview; Daniel Espinoza in Executive Direction). Do not present either as conclusively resolved until clarified.
9. **Use synthetic data by default.** Do not commit real customer, recipient, employee, shipment, credential, or other sensitive data. Label illustrative/demo data as synthetic.

## Repository and implementation

10. **Put work in the right place.** Follow root and folder READMEs. UIs belong in `uis/`, APIs/background services in `services/`, data assets and pipelines in `data/`, agents in `agents/`, reusable agent instructions in `skills/`, tool servers in `mcps/`, orchestration in `workflows/`, reusable libraries in `packages/`, and cross-cutting docs in `docs/`.
11. **Document substantial deliverables.** Give each app, service, agent, pipeline, or other substantial component a local README describing purpose, setup/run steps, key configuration, and tests where applicable. Update related folder catalogs when appropriate.
12. **Avoid unsupported assumptions.** Inspect existing code and configuration before choosing a framework, dependency, command, or architecture. Do not presume root workspace tooling or a backend exists.
13. **Keep changes focused.** Avoid unrelated refactors and unnecessary dependencies. Do not overwrite working user changes or remove existing content without a reason.
14. **Protect secrets and privacy.** Never commit tokens, passwords, private keys, or actual personal data. Use environment variables and documented placeholders; do not log sensitive fields unnecessarily.
15. **For the website milestone, honor the spec.** Preserve the required content, responsive/accessibility/SEO goals, form fields, validation rules and messages, low-volume warning, success state, and Schema.org organization data. Do not silently omit requirements.

## Verification and communication

16. **Inspect before editing.** Read the applicable brief, local README, and target implementation.
17. **Verify with configured checks.** Run relevant tests/build/lint/validation only where supported by the repository. If no check exists or it cannot be run, disclose that rather than implying success.
18. **Report evidence precisely.** Distinguish implemented, tested, accepted, and deployed. State the checks run, results, limitations, and any follow-up.
19. **Keep memory current.** Record material decisions and technical changes in the memory bank; update dated progress after substantial work. Keep exact detailed requirements in their source briefs.
20. **Honor the user's execution boundary.** If the user asks for planning only, do not inspect, modify, or run anything until explicitly authorized. When execution is authorized, stay within the requested scope.
