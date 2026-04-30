# GEO Monitoring & Topic / Prompt Metrics — Overview

**Purpose.** This document summarizes how the **Monitoring & Competitive Dashboard** section works in the TrustRadius GEO insights prototype, so stakeholders can review or share it outside the app.

**Audience.** Product, customer success, sales engineering, and buyers evaluating GEO visibility tracking.

---

## 1. Where this lives in the product

- Navigate to the **GEO Dashboard** and open the **Monitoring** tab (alongside Research, Execution, etc.).
- The **Monitoring** area focuses on **share of voice**, **citations**, and **sentiment** across AI platforms, with optional competitive and citation context.

---

## 2. Global time period (Monthly / Quarterly / Yearly)

At the top of the Monitoring view, users choose **Monthly**, **Quarterly**, or **Yearly**. That choice drives:

| Selection   | Typical meaning in this UI                                      |
|------------|------------------------------------------------------------------|
| **Monthly**   | Month-sized buckets (e.g., Jan through Dec in the mock data).   |
| **Quarterly** | Quarter-sized buckets (e.g., Q1–Q4).                         |
| **Yearly**    | Year-sized buckets (e.g., multi-year trend).                    |

**Change vs prior period.** For each metric, the dashboard shows movement **versus the immediately previous bucket** of the same granularity (prior month, prior quarter, or prior year).

**Trend across the selected view.** For each metric, a **trend line** summarizes movement **from the first to the last bucket** in the currently selected period type (using a primary AI platform series for consistency). This answers “how did we trend across this timeframe?” in one glance.

---

## 3. Scope: Topic, all prompts, or one prompt

A **scope** control lets users align metrics with how they think about the program:

| Scope                      | Use case |
|---------------------------|----------|
| **Topic**                 | Roll-up for the selected research topic across **all tracked prompts**. |
| **All tracked prompts**   | Aggregate view across prompts (when provided in the build). |
| **By prompt**             | Deep dive on a **single** tracked prompt from a dropdown. |

The **Topic & prompt metrics** table always lists the **topic row** plus **one row per tracked prompt**, so users can compare prompt-level performance under the same timeframe settings.

---

## 4. Topic & prompt metrics table (summary row)

Each row is a **collapsible card**. The summary shows:

1. **Topic / prompt** — Name and, for the topic row, a label that it covers all selected prompts.
2. **Monthly volume** — Demand-style volume (from topic research data in the prototype), with a simple relative bar for comparison across rows.
3. **Share of voice** — Current headline % for the selected period, **change vs prior period**, and **period trend** (first → last bucket).
4. **Citations** — Same structure: level, **% change vs prior period**, and **trend**.
5. **Sentiment** — Score on a 0–100 style scale, **points change vs prior period**, and **trend (score)**.

**Note.** In the prototype, underlying numbers are **sample data** for demonstration. A production implementation would connect to live measurement pipelines.

---

## 5. Expanded row (detail)

Expanding a row adds:

- **Breakdown by LLM** — Share of voice, citations, and sentiment **by AI platform** (e.g., ChatGPT, Perplexity, Claude, Gemini), including change over the **same** selected period (Monthly / Quarterly / Yearly).
- **Most commonly cited sources** — Domains often referenced in AI answers for that topic or prompt.
- **Most commonly cited pages** — Pages linked most often; at prompt scope this can reflect tracked TrustRadius and other destinations.

This is where users validate *which* platforms drive the roll-up numbers shown in the summary.

---

## 6. Other Monitoring-adjacent elements (prototype)

- **Toolbar context** — Shows the active **period label** (Monthly / Quarterly / Yearly) and **scope label** (topic, all prompts, or prompt).
- **Generated insights** — Short narrative lines derived from the current scope and period (mock logic).
- **TrustRadius visibility** — Separate panels for mention volume, citations driven, top pages, and page-type mix (when present in the build).
- **Export report** — May be a placeholder in the demo; for sharing static material, use this document or export from your editor (see below).

---

## 7. How to export this document

You can turn this file into something easy to email or present:

| Tool | Steps |
|------|--------|
| **Markdown preview** | Open this file in VS Code, Cursor, or GitHub; print or **Print → Save as PDF**. |
| **Google Docs** | Paste the contents or **File → Open → Upload** a `.md` file (Docs imports basic structure). |
| **Microsoft Word** | Open Word → **Open** → choose this `.md` file, or paste from preview. |
| **Slack / email** | Copy sections as needed, or attach this file as-is. |

**File location in the repo:** `docs/GEO-Monitoring-Dashboard-Overview.md`

---

## 8. Revision note

This overview matches the **Topic & prompt metrics** behavior as of the hackathon prototype: period selector drives summary metrics and trends; expanded panels follow the same period for LLM-level tables.

---

*TrustRadius GEO insights — internal / demo documentation.*
