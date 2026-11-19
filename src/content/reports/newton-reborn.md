---
reportNumber: "Report 01"
title: "Newton Reborn: Discovering the Inverse-Square Law with Generative AI"
author: "Raghu Ugare"
authorUrl: "/raghu/"
date: "2026-10"
formattedDate: "October 2026"
disciplines: "Σ Mathematics × ∂ Machine Learning"
metrics:
  - num: "R² = 1.000"
    label: "Exact Law Recovery"
  - num: "R² = 0.998"
    label: "1000× Extrapolation"
  - num: "-11.4%"
    label: "VAE Denoising MSE"
isComingSoon: true
comingSoonText: "Paper & Repo (Release Coming Soon)"
bibtexId: "bibtex-01"
bibtex: |
  @techreport{ugare2026newtonreborn,
    title       = {Newton Reborn: Discovering the Inverse-Square Law with Generative AI},
    author      = {Ugare, Raghu},
    institution = {LambdaMatters},
    number      = {LM-TR-2026-01},
    year        = {2026},
    month       = {October},
    url         = {https://lambdamatters.com}
  }
order: 1
---

**Black-box neural networks fit training curves, not physical laws.** While a standard multilayer perceptron reaches R² = 0.940 in-distribution, its accuracy collapses under extrapolation (R² = 0.626 at 1000× range). By coupling an information-theoretic VAE bottleneck (β = 0.4) with symbolic regression via risk-seeking policy gradients, this pipeline rediscovers Newton's exact inverse-square law (F = G·m₁m₂/r²) from 20,000 noisy observations without prior functional assumptions, retaining **R² = 0.998** across 1000× extrapolation.
