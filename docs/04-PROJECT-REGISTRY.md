# LambdaMatters Project Registry & Artifact Standards

This document establishes the canonical registry of all existing artifacts published by LambdaMatters, alongside the structural standard for onboarding future works.

---

## 1. Active Research Reports

### Report 01: Newton Reborn
* **Full Title:** Newton Reborn: Discovering the Inverse-Square Law with Generative AI
* **Subtitle:** A Variational-Autoencoder-Centered Pipeline for Data-Driven Physical Law Discovery
* **Author:** Raghu Ugare
* **Canonical Citation:** `LM-TR-2026-01` (October 2026)
* **Core Law:** Black-box neural networks fit training curves ($R^2 = 0.940$) but fail sharply under extrapolation ($R^2 = 0.626$ with 5.9x error). Combining VAE information bottlenecks with symbolic regression recovers exact physical equations.
* **Key Metrics:**
  * Algebraic Recovery: Exact $m_1 m_2 / r^2$ recovered ($R^2 = 1.000$)
  * 1000x Extrapolation Retention: $R^2 = 0.998$ (vs $0.626$ for neural MLP)
  * VAE Denoising Gain: 11.4% log-space MSE reduction
* **Primary Artifacts:**
  * Technical Report: `Newton_Reborn_Writeup.pdf`
  * Symbolic Discovery Pipeline: Genetic programming + deep RNN policy gradient (REINFORCE)

---

### Report 02: Compiled Intent
* **Full Title:** Compiled Intent: Enforcing Architectural Invariants for LLM Coding Agents
* **Author:** Vijay Anant
* **Canonical Citation:** `LM-TR-2026-02` (September 2026)
* **Core Law:** The Ammunition Effect (large prompt context causes models to rationalize taking forbidden architectural shortcuts).
* **Key Metrics:**
  * Context Payload: -94.6%
  * Rule Enforcement Gain: +17.9%
  * Working Footprint: ~750 tokens
* **Primary Artifacts:**
  * Technical Report: `compiled-intent.pdf`
  * Rust Coprocessor: `github.com/vijayanant/compiled-intent`
  * ArchEval Benchmark: `github.com/vijayanant/compiled-intent-research`
  * Author Deep-Dive Essay: `vijayanant.com/posts/compiled-intent/`

---

## 2. Systems & Protocols

### Compitent Engine (`intent`)
* **Lead Architect:** Vijay Anant
* **Implementation:** Rust
* **Description:** A headless architectural coprocessor and Model Context Protocol (MCP) server that compiles design intent into synchronized Apache Arrow and LanceDB indices.
* **Capabilities:**
  * IDE integration via stdio MCP for Claude Desktop, Cursor, and Windsurf.
  * Local and offline execution via Tantivy and LanceDB with zero telemetry.
  * Pre-commit and CI boundary gates intercepting git diffs.

---

### Akshara
* **Lead Architect:** Vijay Anant
* **Implementation:** Rust
* **Description:** An offline-first, encrypted data architecture for collaborative state without trusted central servers.
* **Capabilities:**
  * Content-addressed Merkle-DAG state graphs with causal reconciliation independent of wall-clock time.
  * Hierarchical deterministic identity with master seed derivation.
  * Zero-knowledge relays using XChaCha20-Poly1305 authenticated encryption.

---

## 3. Algorithms & Mathematical Papers

### AutoCombo
* **Authors:** Raghu Ugare & Vijay Ananth
* **Title:** A fast, simple algorithm to compute optimal 'combo'
* **Core Mathematical Insight:** By viewing items in a catalog as unique prime numbers, shopping carts and item combos become unique composite numbers. Multiset subset containment collapses into a single integer modulo divisibility operation ($S \equiv 0 \pmod{C}$).
* **Format:** Mathematica / Technical monograph

---

## 4. Selected Conference Presentations

### Category Theory at Functional Conf (2018)
* **Title:** (Why?) Should You Know Category Theory?
* **Speakers:** Vijay Anant & Raghu Ugare
* **Venue:** Functional Conf 2018
* **Topic:** How categorical abstractions (functors, monads, natural transformations) help programmers deal with software complexity, moving from algebraic structures to probabilistic modeling.

---

### Have You GADT? at Functional Conf (2019)
* **Title:** Have You GADT? GADTs for Eliminating Runtime Checks
* **Speakers:** Vijay Anant & Raghu Ugare
* **Venue:** Functional Conf 2019
* **Topic:** Using Generalized Algebraic Data Types in typed functional programming (Haskell) to encode program invariants in the type system, turning partial functions into total functions and moving runtime errors to compile time.

---

## 5. Standard for New Artifact Admissions

Any future work proposed for inclusion on LambdaMatters must provide:
1. **Title & Descriptive Subtitle**
2. **Explicit Author Attribution** (linking to author's canonical personal site)
3. **One-Sentence Hook / Problem Statement**
4. **Three Empirical Metrics or Formal Invariants**
5. **Direct Links to Verifiable Artifacts** (GitHub repository, downloadable PDF, or benchmark suite)
