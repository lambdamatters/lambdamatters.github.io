---
reportNumber: "LM-TR-2026-01"
reportType: "Technical Report"
title: "Newton Reborn: Discovering the Inverse-Square Law with Generative AI"
author: "Raghu Ugare"
authorUrl: "/raghu/"
institution: "LambdaMatters"
date: "2026-10"
formattedDate: "October 2026"
disciplines: "Mathematics · Machine Learning Optimization"
summary: 'Neural networks fit training curves, not physical laws: a standard MLP reaches $R^2 = 0.940$ in-distribution but collapses under $1000\times$ extrapolation ($R^2 = 0.626$ with $5.92\times$ error). If Isaac Newton were born today with a laptop of generative AI tools, could he rediscover gravity without assuming its formula in advance? By using a Variational Autoencoder bottleneck as an unsupervised denoiser, this pipeline enables unconstrained genetic search and an autoregressive RNN policy to rediscover the exact inverse-square law ($m_1 m_2 / r^2$), maintaining flat $R^2 = 0.998$ retention across planetary scales.'
metrics:
  - num: "R² = 1.000"
    label: "Exact Law Recovery"
  - num: "R² = 0.998"
    label: "1000× Extrapolation (vs 0.626 MLP)"
  - num: "-11.4%"
    label: "VAE Denoising Log-MSE"
  - num: "r = -2.000"
    label: "Discovered Distance Exponent"
isComingSoon: true
comingSoonText: "Paper & Code (Release Coming Soon)"
tableData:
  title: "Extrapolation Benchmark: Black-Box Neural Network vs Discovered Symbolic Law"
  caption: "Evaluated across three regimes of increasing distance from the training distribution. The black-box MLP error increases roughly 6-fold, while the discovered symbolic law exhibits flat, near-perfect extrapolation."
  headers: ["Evaluation Regime", "MLP R²", "MLP Typical Error", "Symbolic Law R²", "Symbolic Typical Error"]
  rows:
    - ["In-range (training distribution)", "0.996", "×1.05", "0.998", "×1.16"]
    - ["10× beyond training range", "0.908", "×1.36", "0.981", "×1.16"]
    - ["1000× beyond training range", "0.626", "×5.92", "0.998", "×1.16"]
references:
  - "Kingma, D. P., & Welling, M. (2014). Auto-Encoding Variational Bayes. International Conference on Learning Representations (ICLR)."
  - "Higgins, I., et al. (2017). beta-VAE: Learning Basic Visual Concepts with a Constrained Variational Framework. International Conference on Learning Representations (ICLR)."
  - "Petersen, B. K., et al. (2021). Deep Symbolic Regression: Recovering Mathematical Expressions from Data via Risk-Seeking Policy Gradients. International Conference on Learning Representations (ICLR)."
  - "Hayes, C. F., et al. (2025). Deep Symbolic Optimization: Reinforcement Learning for Symbolic Mathematics. arXiv:2505.10762."
  - "Udrescu, S.-M., & Tegmark, M. (2020). AI Feynman: A Physics-Inspired Method for Symbolic Regression. Science Advances, 6(16)."
  - "Brunton, S. L., Proctor, J. L., & Kutz, J. N. (2016). Discovering Governing Equations from Data by Sparse Identification of Nonlinear Dynamical Systems (SINDy). PNAS, 113(15)."
bibtexId: "bibtex-01"
bibtex: |
  @techreport{ugare2026newtonreborn,
    title       = {Newton Reborn: Discovering the Inverse-Square Law with Generative AI},
    author      = {Ugare, Raghu},
    institution = {LambdaMatters},
    number      = {LM-TR-2026-01},
    year        = {2026},
    month       = {October},
    url         = {https://lambdamatters.com/reports/newton-reborn/}
  }
order: 2
---

### The 21st-Century Newton Paradox
Imagine Isaac Newton born today before the inverse-square law of gravitation has been written down. Rather than deriving it analytically, he faces a flood of noisy, decentralized sensor measurements pouring in from 24 worldwide laboratories spanning 8 orders of magnitude ($10^{-6}$ to $3 \times 10^4$). A modern deep neural network easily achieves $R^2 = 0.940$ on training data, creating the illusion that the problem is solved.

### The Extrapolation Wall: Interpolation vs. Law
High in-distribution accuracy is not evidence of having captured a physical law. Pushed to a regime $1000\times$ beyond the training distribution (evaluating planetary separations the network never observed), the black-box neural network collapses catastrophically ($R^2 = 0.626$ with typical prediction errors of $\approx 5.92\times$). Neural networks are curve-fitters that interpolate within known conditions; they possess zero structural inductive bias for physical invariance.

### The VAE Information Bottleneck as an Unsupervised Denoiser
Raw real-world measurement noise drowns symbolic search algorithms, causing genetic trees to bloat and overfit. Because gravitational force lies on a 3-dimensional manifold inside 4D feature space $(\log m_1, \log m_2, \log r, \log F)$, a from-scratch NumPy $\beta$-VAE ($\beta = 0.4$) constrained to a 3-dimensional latent space forces the network to spend its limited channel capacity encoding the shared physical signal while discarding idiosyncratic laboratory noise. The unsupervised bottleneck reduces force estimation log-MSE by $11.4\%$ without ever seeing the hidden ground-truth oracle.

### Dual Unconstrained Symbolic Discovery
Free of any power-law assumptions, two independent generative search procedures operate on the VAE-denoised representation:

1. **Genetic Programming (GP):** Evolutionary tree search over basic arithmetic operators converges within 15 generations to:
$$m_1 / (r / (m_2 / r)) \equiv \frac{m_1 m_2}{r^2}$$
2. **Generative RNN Policy (REINFORCE):** An autoregressive recurrent neural network emitting prefix-notation tokens with arity-budget constraints independently discovers an algebraically identical form (verified numerically to $R^2 = 1.000$).
3. **DSO Hybrid Bootstrapping:** Seeding the genetic population with RNN candidate batches (Deep Symbolic Optimization, Hayes et al. 2025) converges to the exact law within only 5 outer iterations.

### Scale Invariance Across Planetary Regimes
At $1000\times$ extrapolation, the discovered closed-form law retains $R^2 = 0.998$ invariant across scales. A correctly structured symbolic formula does not care how far inputs are from a training set it never had, demonstrating that generative modeling and symbolic regression can discover fundamental physical invariants purely from noisy data.
