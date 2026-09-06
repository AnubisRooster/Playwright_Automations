# Graph Report - Playwright_Automations  (2026-09-06)

## Corpus Check
- Corpus is ~9,562 words - fits in a single context window. You may not need a graph.

## Summary
- 19 nodes · 13 edges · 7 communities (1 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- playwright.config.ts
- playwright.config2.js
- run()
- graphify_pipeline.py
- e2e.spec.ts
- portalogin.ts

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

## Communities (7 total, 5 thin omitted)

### Community 1 - "playwright.config2.js"
Cohesion: 0.50
Nodes (3): config, { devices }, testRailOptions

## Knowledge Gaps
- **7 isolated node(s):** `{ saveVideo }`, `testRailOptions`, `config`, `{ devices }`, `testRailOptions` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 14 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `{ saveVideo }`, `testRailOptions`, `config` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._