---
title: "Kitchen Sink Regression and Horse Racing"
date: 2020-05-04 12:52:59
author: John Vandivier
---



<!-- wp:paragraph -->
<p>I recently had a paper rejected due to the use of parameter horse racing and kitchen sink regression. This article describes a critical issue with that rejection criteria.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A kitchen sink regression occurs when an analyst takes all available data and regresses it against some dependent variable. This risks overfitting where relationships are found in a data set but fail to exist in the real world. This is problematic for forecasting, policy creation, and real world application.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If, however, the data set is constrained to include factors of interest, then a kitchen sink does not risk over-fitting in this way. This kind of constrained kitchen sink regression is useful in order to adjudicate between multiple operationalizations, or measures of the same abstract concept.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>While constrained kitchen sink regressions are good for adjudication, unconstrained kitchen sink regressions are useful for discovery. Perhaps you uncover a statistical relation between seemingly unrelated variables in a data set. It can make you think and you might uncover a non-obvious reason that the two are in fact logically related. You may conduct additional testing to prove or disprove your new hypothesis.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is research at its finest. This data-driven research approach is much akin to a child walking outside and seeing nature for the first time. This stands in contrast to a theory-driven approach, which is much like a child being born knowing everything and never bothering to open its eyes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is, there are cases where theory is either silent or incapable of deciding between two measures. One of several real cases in my <a href=\"https://github.com/Vandivier/research-dissertation-case-for-alt-ed/tree/master/papers/section-127-effects\">working paper on Section 127</a> is the case of the real price of education.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>PCE and CPI are both respected measures of inflation. It is also possible to create an education-specific index of inflation. Are any of these theoretically preferred? Not really. One might argue that PCE is a current best practice because it is what the Federal Reserve uses, but this would be easily overcome by statistical evidence on importance. In fact, statistical evidence on importance is objectively used to select from among these three variables. Any analyst selection would be prone to analyst bias and error.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Horse racing explanatory variables occurs when multiple operationalizations are regressed in a multiple regression against some dependent variable. I argue this is a good practice because, as just demonstrated in part:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>As a matter of research process, the analyst often explores data first and searches for an explanatory theory later. This honest process allows nature to inform the researcher, rather than supposing researchers are born knowing theories and truth prior to observing the real world.</li><li>Even in cases where theories exist, they may not be able to decide the optimal operationalization with respect to a particular data set.<ol><li>Different factors might be good and bad for different reasons, so what is best overall, or should both be included? This is a fundamentally empirical, not theoretical-logical, issue. Horse racing solves the problem.</li></ol></li><li>This approach is unsupervised and object, not subjective.</li><li>This approach yields models of higher statistical explanatory power.<ol><li>As a rule, context-specific data dominates best practices.</li><li>If a business can generate a model which causally predicts own sales best using CPI, this dominates the objection that PCE is a best practice. Best practices are useful heuristics and defaults for when better information is absent or indeterminant.</li><li>Google is one of many examples of companies that <a href=\"https://neilpatel.com/blog/googles-culture-of-success/\">values internal data to optimize processes</a>, rather than deferring to best practices which are based on industry aggregate data.</li></ol></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The methodological focus on model forecasting utility is <a href=\"https://www.jstor.org/stable/2228046?seq=1\">a Friedmanian perspective</a>, but with an interest in uncovering new factors of interest or adjudicating between known factors of interest. This position is robust to <a href=\"https://mises.org/library/forecasting-model-solution\">a teleological critique</a> which is sometimes levied toward the Friedmanian approach.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Following this methodology, kitchen sink regression is a good idea. Anyway I don't see how this could be considered subjective or biased. The analyst is literally regressing all available factors on the dependent variable, so where is the analytical bias? Nowhere. Other approaches are comparatively inferior in this regard.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Following a kitchen sink regression, round-robin reduction of the model using statistical significance is, again, a bias-free process. It is a pure statistical process which can identify the most significant and important factors in a model.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One can also take a step back and horse race dependent variables. In the Section 127 paper identified prior, I faced a dependent variable selection problem so I tried a kitchen sink regression against total university enrollment and also against public university enrollment. The former resulted in a model with higher explanatory power (r-squared), so I selected it. A journal editor objected that this was arbitrary - but of course it isn't! This is an objective selection technique.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Suppose you are a business. Suppose you have two target consumer groups and some data on your users. From this data, you are able to create a statistically meaningful model for each group, but for one group the explanatory power is higher. You proceed to write up a white paper with analysis focused on that model. Would anyone that you work with be annoyed? I don't think so. I think it's good work. Perhaps you even write up a second whitepaper on the other. It's hardly an objection to the former that the latter could exist. One might argue that one without the other is an incomplete analysis, but that was not the criticism I received. I was told that choosing one variable over the other on the grounds of predictability is an invalid choice criterion, even when both are relevant from a policy perspective.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>EDIT: 5/4/2020</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I can actually demonstrated comparative non-robustness of the stipulated model technique using my analysis related to the Section 127 paper. Consider <a href=\"https://github.com/Vandivier/research-dissertation-case-for-alt-ed/commit/874e026299c86e9eb96a841bff88f5b90a9ae81d#diff-9096cb72c5c0a52ceeec555e1764312eR31\">this git commit</a>. Notice that Anderson-Hsiao adjustment of the model called roi-1 yields an IV model with high explanatory power and at least one significant explanatory variable. In contrast, adjustment of roi2 yields an insignificant model.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Roi-1, called -1 because it is not one of the models presented in the paper, is generated by unsupervised optimization, or horse racing, on a constrained kitchen sink model. Roi2 is generated by making a stipulated adjustment. That is, by an analyst choosing one factor over another on purely logical and theoretical, rather than empirical, grounds.</p>
<!-- /wp:paragraph -->