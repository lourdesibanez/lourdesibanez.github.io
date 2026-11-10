---
title: "Explainable credit risk"
kicker: "AI · Machine Learning · University"
summary: "A machine learning model that predicts whether a loan application would be approved or rejected under a credit union's current policy, and makes the rules it applies visible."
cardSummary: "A decision tree that predicts loan approval for a credit union with 84.82% precision. Chosen because it's explainable: every decision reads as a rule."
order: 0
categories: [ia]
tags: ["Python", "Scikit-Learn", "Pandas", "EDA", "Decision trees", "Cross-validation"]
cover: { src: "/assets/riesgo-crediticio/cover.svg", alt: "Decision tree diagram: it first checks whether the applicant has defaulted, then whether the installment exceeds 30% of income", fit: "cover" }
hero: { fit: "cover", images: [ { src: "/assets/riesgo-crediticio/cover.svg", alt: "Decision tree diagram: it first checks whether the applicant has defaulted, then whether the installment exceeds 30% of income" } ] }
stats:
  - { value: "84.82%", label: "Precision · Approved class" }
  - { value: "5-Fold", label: "Stratified cross-validation" }
  - { value: "962", label: "Applications analyzed" }
facts:
  - { label: "Type", value: "University project" }
  - { label: "Course", value: "Artificial Intelligence Lab" }
  - { label: "Date", value: "October 2026" }
  - { label: "Target client", value: "Credit union" }
  - { label: "Team", value: "Lourdes Ibañez · Vanesa Contreras" }
  - { label: "School", value: "Engineering · UNLPam" }
  - { label: "Learning", value: "Supervised · binary classification" }
  - { label: "Stack", value: "Python · Pandas · Scikit-Learn" }
---

## The challenge

A credit union receives applications every day and needs to answer one concrete question: **would this new application be approved or rejected under the current policy, and which rules are being applied?**

The second half of that question matters as much as the first. In a financial institution, a model that's simply "accurate" isn't enough: you have to be able to explain each decision to a loan officer, an auditor or the member themselves. That's why explainability was a requirement from day one, not a nice-to-have.

I worked on it with Vanesa Contreras at the School of Engineering (UNLPam), using a dataset of **962 applications** with socioeconomic and credit variables.

## What the data told us

Before modeling, we ran an exploratory analysis to understand the typical applicant and which variables drive the decision. *(Chart labels are in Spanish, as in the original notebook.)*

**The typical applicant** earns around $780,000 (ARS) and asks for about $1.5 million, almost twice their salary. Both distributions are right-skewed (a few very high values pull the mean up), so we used the **median** to describe them.

<figure class="chart">
  <a href="/assets/riesgo-crediticio/histograma.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/histograma.png" alt="Histograms of monthly income (median 0.78 million) and requested amount (median 1.51 million), both right-skewed" loading="lazy"></a>
  <figcaption>Income and requested amount: in both, the mean sits to the right of the median because of extreme values.</figcaption>
</figure>

**No single numeric variable decides on its own.** The strongest correlation is between requested amount and the installment-to-income ratio (r = 0.33): the bigger the loan, the more the installment weighs on the salary. By contrast, what applicants earn and what they borrow are practically unrelated (r = −0.04).

<figure class="chart">
  <a href="/assets/riesgo-crediticio/correlacion.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/correlacion.png" alt="Correlation matrix of age, income, job tenure, amount, installments and installment-to-income ratio" loading="lazy"></a>
  <figcaption>Correlation matrix of the numeric variables.</figcaption>
</figure>

**Bigger loans, more rejections.** Splitting applications by outcome, the largest amounts cluster on the rejected side (r = −0.27 between amount and approval).

<figure class="chart">
  <a href="/assets/riesgo-crediticio/dispersion.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/dispersion.png" alt="Scatter of income vs. amount with no clear pattern, and requested amounts split by outcome: rejected applications reach much higher amounts" loading="lazy"></a>
  <figcaption>Left: income vs. amount, no linear relationship. Right: the highest amounts end up rejected.</figcaption>
</figure>

**Default history is almost decisive:** out of 140 applications from defaulters ("Moroso"), 134 were rejected (96%).

<figure class="chart">
  <a href="/assets/riesgo-crediticio/historial.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/historial.png" alt="Approved and rejected by credit history: good payers 365 approved and 130 rejected, defaulters 6 approved and 134 rejected, no history 188 approved and 80 rejected" loading="lazy"></a>
  <figcaption>Approved and rejected applications by credit history.</figcaption>
</figure>

**Earning more helps, but it isn't enough.** Approved applicants have a somewhat higher median income (about $840,000 vs. $700,000), but the ranges overlap almost completely: plenty of rejected applicants earn more than many approved ones.

<figure class="chart">
  <a href="/assets/riesgo-crediticio/ingresos.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/ingresos.png" alt="Box plot of monthly income for approved and rejected applications, with close medians and overlapping ranges" loading="lazy"></a>
  <figcaption>Monthly income of approved and rejected applications.</figcaption>
</figure>

That was the key takeaway for choosing the model: since no variable explains the decision on its own, we needed one that could combine several rules at once.

## Cleaning strategy

Two variables had a lot of missing data, and we handled them differently depending on how much they contributed to the problem:

- **`relacion_cuota_ingreso` (installment-to-income ratio) → median imputation.** About 40% of records were missing, but it's the variable that best measures ability to pay. Dropping it would have meant losing the most important signal (and, as shown below, it became the tree's second rule), so we filled the gaps with the median, which is robust to outliers.
- **`nro_sucursal` (branch number) → dropped.** More than 83% of values were missing, and the branch says nothing about a person's risk. Imputing it would only have added noise.
- **Records without a date → dropped.** These were the only rows we removed; every other risk variable was kept.

## Model and results

We framed it as a **supervised binary classification** problem (approved / rejected) and chose a **decision tree** (Scikit-Learn's `DecisionTreeClassifier`, max depth 5) for two reasons:

1. **It's explainable:** every prediction reads as a sequence of *if… then…* rules that anyone in the credit department can understand and challenge, and that make it possible to justify a rejection to the member.
2. **It doesn't assume linear relationships**, which mattered once the exploratory analysis showed that no variable relates linearly to the decision.

<figure class="chart">
  <a href="/assets/riesgo-crediticio/arbol.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/arbol.png" alt="First three levels of the decision tree: the first split is whether the applicant has defaulted, the second whether the installment-to-income ratio exceeds 0.301, then the number of installments and the amount" loading="lazy"></a>
  <figcaption>First 3 levels of the tree. Green: the node predicts Approved; lilac: Rejected. Tap the image to see it full size.</figcaption>
</figure>

**Why prioritize precision?** For the credit union, the most expensive mistake is a **false positive**: approving a loan for someone who then can't repay it. So we optimized **precision for the "Approved" class**: when the model says "approve", we want it to be wrong as rarely as possible, even if that means being more conservative with some borderline cases.

To avoid depending on a single data split, we validated with **stratified 5-fold cross-validation** (each fold keeps the same approved/rejected ratio). The result: an **average precision of 84.82%**.

## From data to business rules

Reading the tree's first levels, the credit union's policy boils down to three rules:

<div class="rules">
  <div class="rule"><b>01 · Defaults first</b>It's the tree's first split: 96% of applications from defaulters end up rejected. It should be checked before any other variable.</div>
  <div class="rule"><b>02 · Installment up to 30%</b>If the applicant hasn't defaulted and the installment takes up to 30% of their income, 82% are approved. Above 30%, 90% are rejected.</div>
  <div class="rule"><b>03 · Watch short terms</b>Even with the installment under control, applications with 9 installments or fewer are approved only 48% of the time, versus 86% with longer terms. Short terms and large amounts deserve a closer look.</div>
</div>

## Next steps

- Try different maximum depths (`max_depth`) and split criteria to push precision further.
- Compare the tree against other models, such as **Random Forest**, to see whether precision can go up without losing too much explainability.
