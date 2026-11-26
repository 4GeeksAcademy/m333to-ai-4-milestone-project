# Project brief — TrackFlow Tech

## Purpose

This repository is the continuing AI Engineering project for **TrackFlow**, a fictional last-mile delivery, warehouse management, and reverse-logistics company. The goal is to build a coherent set of milestone deliverables that address real operational needs, rather than a collection of disconnected demos. Keep the company and user problem in view whenever adding a feature.

## Company at a glance

- Founded in 2009; operates in the United States and Spain.
- Warehouses in Los Angeles and Zaragoza; approximately 130 employees and €9 million annual revenue (briefing figures).
- Serves e-commerce brands, especially in fashion, electronics, and cosmetics.
- Core services: warehouse storage/picking/packing, last-mile delivery, and reverse logistics/returns.
- Works with multiple carriers and serves both business clients (B2B) and parcel recipients (B2C).
- Current operations rely on disconnected warehouse systems, a legacy ERP, manual processes, and poorly documented integrations. Inventory, shipment, carrier, and returns information is not unified; reporting and customer support are heavily manual.

## What we are building

Build practical software, data products, and AI-enabled workflows for TrackFlow Tech. The long-term direction in the company brief includes:

1. Unified warehouse and inventory visibility across Los Angeles and Zaragoza.
2. Better order ingestion and warehouse operations workflows.
3. Carrier recommendation, unified tracking, and carrier performance reporting.
4. Returns decision support, collection workflows, and returns analytics.
5. Customer support tools for tracking and returns, supported by a searchable knowledge base and human escalation.
6. Client reporting, executive dashboards, and operational telemetry.

Treat these as a product direction, not as a claim that every system or integration already exists. Select a concrete user, problem, and milestone scope before implementing a feature.

## Initial milestone and current project focus

`Milestone_1_context.md` defines the first deliverable: a public, responsive TrackFlow website for prospective e-commerce clients. It should explain warehouse management, last-mile delivery, reverse logistics, and US/Spain coverage, and provide a validated business inquiry form. The form qualifies leads using company/contact details, product type, countries, estimated monthly shipping volume, services of interest, current 3PL status, and privacy consent. It is for prospective businesses—not consumers looking to track a parcel or initiate a return.

The milestone asks for an accessible, SEO-conscious site, a chosen base language (Spanish/English enhancement is optional), complete validation and specified feedback, and the supplied Organization Schema.org markup. Use the milestone briefing as the acceptance criteria when working on that deliverable.

The repository also contains `uis/website/` files. Their presence alone does not establish that every milestone requirement is implemented or verified; inspect and test before making claims about completion.

## Product values and learning goals

The project owner's stated interests in `Choice-company.md` are understanding the real parcel journey from warehouse to recipient; how cross-border operations and systems interact; multilingual customer support; round-the-clock operations; and where automation should hand off to human support. The owner also proposed a project-management aide that helps prioritize work and explore options, while keeping the human in control and delivering work in small, explicitly guided steps. Use these as useful product-design context, not as permission for an agent to make uncontrolled changes.

## People and stakeholders from the brief

- Thomas Harry — founder/CEO in the company overview.
- Andrés Kim — CTO, based with the technology team in Zaragoza.
- Ana Whitfield — Warehouse Operations.
- Carlos Vega — Last Mile and Carrier Management.
- Sofía Ramos — Reverse Logistics.
- Valentina Cruz — Customer Experience.
- Miguel Torres — Commercial and Client Relations; stakeholder for the website milestone.

**Known source inconsistency:** the company overview names Thomas Harry as CEO, while the Executive Direction section names Daniel Espinoza. Do not silently choose one or propagate both as settled fact. Keep this discrepancy visible until the project owner or authoritative brief resolves it. Likewise, use the milestone-specific wording where its requirements differ from broader company aspirations.

## Sources and precedence

1. User's direct instructions in the current conversation.
2. The relevant milestone brief (`Milestone_1_context.md`) for milestone-specific scope and acceptance criteria.
3. `CONTEXT.md` for the broader company/domain baseline.
4. Other repository notes and memory-bank documents for project rationale, working rules, and recorded progress.

When sources conflict, call out the conflict and ask or record an explicit resolution. Do not invent company facts, implemented capabilities, integrations, or compliance guarantees.

