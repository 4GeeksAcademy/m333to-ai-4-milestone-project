# Weekly Feedback Insights

## 1. Objective

Automatically extract, summarize, and categorize user feedback from weekly research interview transcripts into a standardized insights report to accelerate product design iterations.

## 2. Documented Inputs

The skill requires the following structured inputs before execution:

- `transcripts` (Type: Array of Strings/Files, Required): Text files or text strings containing raw audio transcripts of weekly user interviews.
- `target_persona` (Type: String, Optional): The primary target user profile (for example, "First-time E-commerce Shopper") to focus context during analysis.
- `project_tags` (Type: Array of Strings, Required): Keywords or feature areas to tag insights against (for example, `["Onboarding", "Checkout Flow", "Navigation"]`).
- `report_destination` (Type: String, Required): Target directory or integration path where the markdown report should be generated.

## 3. Explicit and Verifiable Acceptance Criteria

To verify that the agent skill has successfully completed its run, the output must satisfy all of the following:

- Format Verification: The generated artifact is a valid Markdown document with headings for:
  - Executive Summary
  - Key Pain Points
  - User Desires/Feature Requests
  - Actionable Design Recommendations
- Categorization Rules: 100% of identified pain points and feature requests must include at least one valid tag from the provided `project_tags` list.
- Quote Grounding: Every summarized finding must include at least one direct quote from the source transcript as supporting evidence.
- No Unprocessed Inputs: The output report explicitly lists the total number of processed transcripts matching the input count (for example, "Processed 5 of 5 transcripts").

## 4. Execution Behavior

When invoked, the agent must:

1. Read all transcript inputs and normalize them into a consistent text format.
2. Group findings by theme while keeping source evidence attached to each point.
3. Identify pain points, desires, and feature requests and map each to one or more tags from `project_tags`.
4. Produce a Markdown report at `report_destination` containing the required headings and evidence-backed summaries.
5. Include a final section that records the transcript-processing count and confirms the total number of inputs processed.

## 5. Output Requirements

The generated report must:

- Be written as Markdown.
- Include direct transcript quotes for each summarized insight.
- Tag every pain point and feature request with a valid value from `project_tags`.
- Clearly state how many transcripts were processed and whether the count matches the input total.
- Be suitable for design iteration and stakeholder review.

## 6. Usage Notes

This skill is intended for weekly research synthesis workflows in product discovery and UX design. It is best used when a team needs a structured and evidence-backed summary of customer language without manually reviewing every transcript line by line.
