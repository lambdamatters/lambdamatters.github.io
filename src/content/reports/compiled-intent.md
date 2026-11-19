---
reportNumber: "Report 02"
title: "Compiled Intent: Enforcing Architectural Invariants for LLM Coding Agents"
author: "Vijay Anant"
authorUrl: "/vijay/"
date: "2026-09"
formattedDate: "September 2026"
disciplines: "⇄ Systems × ∂ AI"
metrics:
  - num: "-94.7%"
    label: "Context Payload"
  - num: "+15.4%"
    label: "Adversarial Gain"
  - num: "~820"
    label: "Token Footprint"
downloadUrl: "https://github.com/vijayanant/compiled-intent-research/releases/latest/download/compiled-intent.pdf"
downloadLabel: "Download Report (PDF)"
repoUrl: "https://github.com/vijayanant/compiled-intent"
repoLabel: "Engine (Rust) ↗"
benchmarkUrl: "https://github.com/vijayanant/compiled-intent-research"
benchmarkLabel: "ArchEval Benchmark ↗"
authorEssayUrl: "https://vijayanant.com/posts/compiled-intent/"
authorEssayLabel: "Author's Essay ↗"
isComingSoon: false
bibtexId: "bibtex-02"
bibtex: |
  @techreport{anant2026compiledintent,
    title       = {Compiled Intent: Enforcing Architectural Invariants for LLM Coding Agents},
    author      = {Anant, Vijay},
    institution = {LambdaMatters},
    number      = {LM-TR-2026-02},
    year        = {2026},
    month       = {September},
    url         = {https://lambdamatters.com}
  }
order: 2
---

**Wikis don't compile.** When teams dump entire specification documents into an agent's prompt, models exhibit the **Ammunition Effect**, using background prose and historical trade-offs to rationalize architectural shortcuts. The Compitent engine indexes architecture specifications into normalized vector and AST databases, retrieving only concise, normative constraint chunks (~750 tokens). Context payload drops by **94.6%** while rule enforcement improves by **12.8% to 17.9%** across local models.
