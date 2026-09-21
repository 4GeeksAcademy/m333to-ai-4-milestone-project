# Weekly Feedback Insights

## 1. Objective

Automatically extract, summarize, and categorize user feedback from weekly research interview transcripts into a standardized insights report to accelerate product design iterations.

## 2. Documented Inputs

- `transcripts` (Type: Array of Strings/Files, Required): Raw transcript text or files.
- `target_persona` (Type: String, Optional): The main user profile to focus the analysis.
- `project_tags` (Type: Array of Strings, Required): Tags that must be used for pain points and feature requests.
- `report_destination` (Type: String, Required): Output directory or integration path for the generated markdown report.

## 3. Explicit and Verifiable Acceptance Criteria

- The output is a Markdown report with these headings: Executive Summary, Key Pain Points, User Desires/Feature Requests, and Actionable Design Recommendations.
- Every pain point and feature request includes at least one tag from `project_tags`.
- Every summarized finding includes at least one direct quote from the transcript.
- The report states the processed transcript count, for example: "Processed 5 of 5 transcripts".

## 4. Execution Behavior

1. Read and normalize all transcript inputs.
2. Group findings by theme while preserving source evidence.
3. Tag pain points and feature requests using the provided `project_tags` list.
4. Write the markdown report to `report_destination`.
5. Include a final transcript-processing confirmation at the end of the report.

## 5. Output Requirements

- Markdown format
- Evidence-backed findings with transcript quotes
- Valid tags from `project_tags`
- Total processed transcript count stated explicitly
- Suitable for design iteration and stakeholder review
