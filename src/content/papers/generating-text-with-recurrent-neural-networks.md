---
title: Generating Text With Recurrent Neural Networks (2011)
slug: generating-text-with-recurrent-neural-networks
date: 2019-06-28
authors: Ilya Sutskever, James Martens, Geoffrey Hinton
source: https://www.cs.utoronto.ca/~ilya/pubs/2011/LANG-RNN.pdf
---

Recurrent Neural Networks (RNNs) are verypowerful sequence models that do not enjoywidespread use because it is extremely diffi-cult to train them properly.Fortunately, re-cent advances in Hessian-free optimization havebeen able to overcome the difficulties associatedwith training RNNs, making it possible to applythem successfully to challenging sequence prob-lems. In this paper we demonstrate the powerof RNNs trained with the new Hessian-Free op-timizer (HF) by applying them to character-levellanguage modeling tasks. The standard RNN ar-chitecture, while effective, is not ideally suitedfor such tasks, so we introduce a new RNNvariant that uses multiplicative (or “gated”) con-nections which allow the current input charac-ter to determine the transition matrix from onehidden state vector to the next. After trainingthe multiplicative RNN with the HF optimizerfor five days on 8 high-end Graphics ProcessingUnits, we were able to surpass the performanceof the best previous single method for character-level language modeling – a hierarchical non-parametric sequence model. To our knowledgethis represents the largest recurrent neural net-work application to date.
