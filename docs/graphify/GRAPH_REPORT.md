# Graph Report - Playwright_Automations  (2026-09-28)

## Corpus Check
- Corpus is ~14,927 words - fits in a single context window. You may not need a graph.

## Summary
- 34 nodes · 31 edges · 5 communities (4 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- graphify_pipeline.py
- playwright.config2.js
- e2e.spec.ts
- play.py

## God Nodes (most connected - your core abstractions)
1. `run()` - 2 edges
2. `{ saveVideo }` - 1 edges
3. `testRailOptions` - 1 edges
4. `config` - 1 edges
5. `{ devices }` - 1 edges
6. `testRailOptions` - 1 edges
7. `config` - 1 edges
8. `{ saveVideo }` - 1 edges
9. `Self-contained graphify pipeline for CI. Builds a knowledge graph over this…` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (5 total, 1 thin omitted)

### Community 0 - "graphify_pipeline.py"
Cohesion: 0.13
Nodes (13): graphify_analyze, graphify_build, graphify_cluster, graphify_detect, graphify_export, graphify_extract, graphify_llm, graphify_report (+5 more)

### Community 1 - "playwright.config2.js"
Cohesion: 0.25
Nodes (5): config, { devices }, testRailOptions, config, testRailOptions

### Community 2 - "e2e.spec.ts"
Cohesion: 0.40
Nodes (4): { saveVideo }, { saveVideo }, ref_playwright_test, ref_playwright_video

### Community 3 - "play.py"
Cohesion: 0.50
Nodes (3): run(), Playwright, playwright_sync_api

## Knowledge Gaps
- **7 isolated node(s):** `{ saveVideo }`, `testRailOptions`, `config`, `{ devices }`, `testRailOptions` (+2 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 24 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `{ saveVideo }`, `testRailOptions`, `config` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `graphify_pipeline.py` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._