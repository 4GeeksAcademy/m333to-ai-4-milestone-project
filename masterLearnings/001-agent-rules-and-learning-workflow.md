# Lesson 001: Agent Rules and Learning Workflow

## Reason

The project needed a consistent way to store agent rules and reusable skills, plus a repeatable learning record after major implementation work. Keeping these expectations explicit helps prevent process knowledge from being lost and makes implementation decisions easier to study later.

## What was implemented

- Added `.agents/` as the canonical location for agent rules and skills.
- Added `.agents/rules/major-implementation-learning.md` with an always-active rule.
- Added the root-level `masterLearnings/` directory.
- Added `masterLearnings/README.md` with the lesson purpose, format, and naming convention.
- Updated `AGENTS.md` to reference `.agents/rules/` and `.agents/skills/`.
- Updated `AGENTS.md` to require a lesson file after every major implementation.

## Design choices

The rules and skills live under `.agents` because they are repository-level agent configuration rather than application code. The lessons live in `masterLearnings` at the repository root because they are intended to be easy for the developer to find, read, and use as a long-term learning record.

The lesson format includes reason, implementation, design choices, verification, and next steps so each entry teaches the decision process instead of only recording a changelog.

## Learning takeaway

A strong project process should document both what the software does and how development decisions are made. Separating operational agent rules from educational implementation lessons keeps each resource focused while making both discoverable.

## Verification

The new directories and files were created in the expected locations, and `AGENTS.md` now explicitly identifies `.agents` as the canonical rules and skills directory and `masterLearnings/` as the required lesson destination.

## Next steps

After the next major implementation, create the next numbered lesson in `masterLearnings/` and follow the required sections from `.agents/rules/major-implementation-learning.md`.
