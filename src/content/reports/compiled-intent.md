---
reportNumber: "LM-TR-2026-02"
reportType: "Technical Report"
title: "Compiled Intent: Enforcing Architectural Invariants for LLM Coding Agents"
author: "Vijay Anant"
authorUrl: "/vijay/"
institution: "LambdaMatters"
date: "2026-10"
formattedDate: "October 2026"
disciplines: "Systems Architecture · AI Verification"
summary: 'Code syntax is blind to intent: compilers and generic AI review bots applaud clean code while rubber-stamping fatal architectural violations because they only know what was built, not what is forbidden. Stuffing specification documents into prompts backfires: models use peripheral documentation as cognitive ammunition to rationalize developer shortcuts. Compitent compiles declared design intent into an AST-bounded offline coprocessor (~820 tokens), raising adversarial enforcement accuracy by $+15.4$ percentage points while cutting context payloads by $94.7\%$.'
metrics:
  - num: "+15.4%"
    label: "Adversarial Gain over Oracle"
  - num: "-94.7%"
    label: "Context Payload vs Stuffing"
  - num: "-61.0%"
    label: "Context vs Single-File Oracle"
  - num: "~820"
    label: "Tokens / Active KV Cache"
downloadUrl: "https://github.com/vijayanant/compiled-intent-research/releases/latest/download/compiled-intent.pdf"
downloadLabel: "Download Report (PDF)"
repoUrl: "https://github.com/vijayanant/compiled-intent"
repoLabel: "Compitent Engine (Rust) ↗"
benchmarkUrl: "https://github.com/vijayanant/compiled-intent-research"
benchmarkLabel: "ArchEval Benchmark Suite ↗"
authorEssayUrl: "https://vijayanant.com/posts/compiled-intent/"
authorEssayLabel: "Author's Technical Essay ↗"
isComingSoon: false
tableData:
  title: "ArchEval Benchmark: Task-Level Accuracy & Context Footprint (N=117)"
  caption: "Evaluated across 117 benchmark items at temperature T=0 on local hardware. Accuracy values reported as Qwen 2.5 Coder (14B) / Gemma 3 (12B). Injected context reflects prompt overhead loaded into the model's Key-Value cache."
  headers: ["Architecture Strategy", "PR Audit (N=39)", "Adversarial Traps (N=39)", "Arch Trivia (N=39)", "Overall Accuracy", "Mean Context Payload"]
  rows:
    - ["Zero Context", "41.0% / 33.3%", "38.5% / 53.8%", "23.1% / 52.6%", "34.2% / 46.6%", "~250 tokens"]
    - ["Oracle (Single File)", "71.8% / 66.7%", "59.0% / 66.7%", "94.9% / 92.3%", "75.2% / 75.2%", "~2,100 tokens"]
    - ["Prompt Stuffing (Bounded)", "64.1% / 74.4%", "69.2% / 69.2%", "92.3% / 97.4%", "75.2% / 80.3%", "~15,400 tokens"]
    - ["Compiled Intent (Coprocessor)", "69.2% / 79.5%", "74.4% / 82.1%", "94.9% / 87.2%", "79.5% / 82.9%", "~820 tokens"]
references:
  - "Liu, N. F., Lin, K., Hewitt, J., et al. (2023). Lost in the Middle: How Language Models Use Long Contexts. Transactions of the Association for Computational Linguistics (TACL), 12, 157-173."
  - "Shi, F., Chen, X., Misra, K., et al. (2023). Large Language Models Can Be Easily Distracted by Irrelevant Context. International Conference on Machine Learning (ICML 2023)."
  - "Cormack, G. V., Clarke, C. L., & Büttcher, S. (2009). Reciprocal Rank Fusion Outperforms Condorcet and Individual Rank Learning Methods. SIGIR '09, 758-759."
  - "Barnett, S., Kurniawan, S., Thudumu, S., et al. (2024). Seven Failure Points When Engineering a Retrieval Augmented Generation System. CAIN 2024."
  - "Hui, B., Yang, J., Cui, Z., et al. (2024). Qwen2.5-Coder Technical Report. arXiv:2409.12186."
  - "Perry, D. E., & Wolf, A. L. (1992). Foundations for the Study of Software Architecture. ACM SIGSOFT Software Engineering Notes, 17(4), 40-52."
bibtexId: "bibtex-02"
bibtex: |
  @techreport{anant2026compiledintent,
    title       = {Compiled Intent: Enforcing Architectural Invariants for LLM Coding Agents},
    author      = {Anant, Vijay},
    institution = {LambdaMatters},
    number      = {LM-TR-2026-02},
    year        = {2026},
    month       = {October},
    url         = {https://lambdamatters.com/reports/compiled-intent/}
  }
order: 1
---

### Syntax Is Blind to Intent
Typecheckers, compilers, and generic AI review bots verify syntax, memory safety, and API signatures. They are fundamentally blind to human architectural intent: the non-negotiable boundaries, protocol invariants, and design trade-offs declared in Architecture Decision Records (ADRs). Code changes that introduce severe violations (such as silent telemetry PII leaks or direct SQL database mutations bypassing append-only audit ledgers) compile cleanly, pass linters, and get rubber-stamped by AI reviewers. Code reflects *what was built*, but intent defines *what is forbidden, and why*.

### The Ammunition Effect
When teams attempt to teach models their architecture by stuffing entire specification files into prompts, enforcement degrades. In adversarial PR reviews, engineers attach persuasive rationalizations to questionable code. Handing an LLM a 20-page document does not make it a strict auditor: the model goes spelunking through peripheral footnotes and testing mocks, using them as cognitive ammunition to rationalize the author's shortcut. Supplying whole-document context causes enforcement accuracy to drop by 15.4 percentage points ($74.4\%$ to $59.0\%$ on Qwen 14B; $82.1\%$ to $66.7\%$ on Gemma 12B).

### Why Code RAG and File-Reading Tools Fail
Indexing existing code syntax only teaches models to replicate historical technical debt. Autonomous agent tool calling (`read_file`) suffers from the *Unknown Unknowns Trap* (an agent inspecting a network sync handler will never know to open a separate diagnostics spec to check privacy invariants) and the *Whole-File Avalanche* (dumping 3,000 words per tool call triggers the exact same Ammunition Effect across expensive round-trips).

### The Compitent Coprocessor
We present the **Compitent Engine** (Compiled Intent), a headless architectural coprocessor implemented in Rust. The engine decouples offline markdown indexing from runtime generation. Using Abstract Syntax Tree (AST)-bounded parent-child chunking, dense 300-character child vectors are linked to full structural parent headings within Apache Arrow columnar batches and LanceDB. Sibling chunks are collapsed to prevent top-k starvation, and hybrid Tantivy BM25 scalar search and dense vector embeddings are fused via Reciprocal Rank Fusion (RRF) with adaptive score-tolerance gating.

### Empirical Validation (ArchEval)
Across 117 benchmark tasks ($N=117$, $T=0$) spanning architectural trivia, routine PR audits, and adversarial traps, Compiled Intent matches or outperforms prompt stuffing and oracle baselines while cutting context payload by $61.0\%$ against single-file oracle retrieval and by $94.7\%$ against multi-specification stuffing (~820 vs ~15,400 tokens). On adversarial test cases, isolating normative constraints raises enforcement accuracy by 15.4 percentage points, proving that attention hygiene and compiling intent beats context stuffing for reliable coding agent governance.
