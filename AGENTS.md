# AGENTS.md

## Canonical agent rules and skills location

The canonical location for repository agent rules and reusable skills is `.agents/`.

- Rules: `.agents/rules/`
- Skills: `.agents/skills/`
- General agent guidance: `.agents/README.md`

Agents must consult and follow the applicable files under `.agents/` when performing work. The top-level `agents/` directory is reserved for the monorepo's implemented AI agents and their source documentation; it is not the canonical location for repository rules or reusable skills.

## Required memory-bank files at session start

Before making any code or documentation changes, the agent must read the following files in this order:

1. `memory-bank/projectbrief.md`
2. `memory-bank/techContext.md`
3. `memory-bank/progress.md`

These files establish the current business context, technical constraints, and project progress. If work has already been started in a previous session, the agent must confirm the current state before editing anything else.

## Mandatory pre-commit workflow

The agent must follow this sequence before every commit:

1. Read the required memory-bank files listed above.
2. Review the pending work with `git diff` and confirm the scope of the changes.
3. Run the required validation for the affected work: tests, linting, type checks, or any project-specific verification required by the changed code.
4. Update `memory-bank/progress.md` if the implementation or status changed in any meaningful way.
5. Confirm the final diff contains only intended changes and no accidental edits.
6. Commit the changes with a clear, specific message that describes the work completed.

If validation fails at any step, the agent must fix the issue or clearly report the blocker before continuing to commit.

## Protected files and folders

The following repository paths are protected and must not be modified without explicit developer confirmation:

- `CONTEXT.md`
- `CONTEXT.es.md`
- `README.md`
- `README.es.md`
- `.gitignore`
- `.devcontainer/`
- `memory-bank/`

These files define the project baseline, repo documentation, and the memory-bank state used by the agent. Any request to change them requires explicit approval from the developer unless the task specifically exists to update the project memory or repo-level documentation.

## Working rules

- Keep edits scoped to the task.
- Do not add unrelated files or refactor unrelated code.
- If protected paths must be changed, request confirmation first.
- Prefer small, reviewable commits over broad changes.
- Keep the memory-bank aligned with the real project state.

## Major implementation learning requirement

After every major implementation, create a lesson-style Markdown file in the root-level `masterLearnings/` directory. Each lesson must explain the reason for the implementation, what was implemented, the important design choices, the learning takeaway, how the result was verified, and possible next steps.

This requirement is always active for major changes to project structure, architecture, user-facing behavior, backend behavior, agent capabilities, workflows, or development processes. The detailed rule is documented at `.agents/rules/major-implementation-learning.md`.
