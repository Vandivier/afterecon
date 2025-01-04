---
title: Epsilon Likelihood in Ordinal Logic
date: 2022-05-11 12:02:43
author: John Vandivier
---



<!-- wp:paragraph -->
<p>Arbitrary significance is dead, long live arbitrary significance.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This article adds to the concept of ordinal logic that has been constructed on this blog by discussing epsilon likelihood. As a review, some articles on ordinal logic are linked at the end.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>I. Reviewing the Death of Arbitrary Significance</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In 2016, the American Statistical Association (ASA) <a href=\"https://amstat.tandfonline.com/doi/full/10.1080/00031305.2016.1154108#.YnvDLejMKHs\">released a statement of guidance related to p-values</a>. <a href=\"https://www.apa.org/science/about/psa/2016/03/p-values\">The APA took note</a> and interviewed the executive director of the ASA. Together these organizations officiated the beginning of the 'post p&lt;0.05 era.' Many individual scholars had long held this alpha threshold was arbitrary and inferior to a wide array of other measures. Finally, the world leaders in statistical analysis agreed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the case of economics, for example, economic importance is far more meaningful, which is to say actually meaningful. Now, in theory, the journals would be forced to accept analysis on those grounds. In practice, this announcement was largely ignored. Standard significance levels continued to be reported. Journals continued to reject findings due to low significance, label results with a p-value less significant than 0.1 as an underpowered, non-serious study, and so on, even continuing to grossly conflate significance and importance. Scholars continued to abuse statistics with statements like \"we find no evidence that X\" because results around X were \"insignificant\" at some arbitrarily grounded threshold.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I, on the other hand, had been ahead of this curve, dealing with axiomatically-grounded thresholds using ordinal logic as early as 2014, when I published \"<a href=\"https://www.afterecon.com/economics-and-finance/quantified-ordinal-modelling-action/\">Quantified Ordinal Modelling of Action</a>\" here on this blog. I also wrote many other articles including applications of this framework. See the last section of this article for a collection of links reviewing ordinal logic.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is an embarrassment to the natural sciences that it took until 2019 for biology to recognize this issue, with <a href=\"https://royalsocietypublishing.org/doi/10.1098/rsbl.2019.0174\">an announcement in The Royal Society</a> that \"The reign of the p-value is over\" and a discussion in Nature about \"<a href=\"https://www.nature.com/articles/d41586-019-00874-8\">It’s time to talk about ditching statistical significance</a>\" with the subtitle \"Looking beyond a much used and abused measure would make science harder, but better.\" Nature seems to admit that arbitrary significance is attractive in part simply because it is easy, at the cost of being less correct. As of today, essentially every leading body of scholars is agreed with this view, yet much research continues to be rejected in the journals along such lines, even in the fields of psychology and economics, which were early-comers to this lens. My sense of current industry is at least similarly dismal on average.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>II. A Review of Ordinal Computation, and Ordinal Logic as a Complexity Guard</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An ordinal transpose of the plain-language statement \"A is probable\" may be rendered as p(A) > 0.5. Under specific yet common conditions we may also state p(A) > p(A').</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When computing a point estimate for p(A), we have relatively low resolution on the simple statement that \"A is probable.\" Given the range from 0.5 to 1, a point estimate of 0.75 is optimal by simple error minimization.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now consider that p(B) is \"very probable,\" which we translate to mean p(B) > p(A) | p(A) > 0.5. Now the estimable range for p(B) is from 0.75 to 1 and the point estimate becomes 0.875. This can be described as \"probable with two degrees of ordinal confidence.\" Degrees of confidence are usefully applied in comparisons of confidence and can also be applied within a bayesian framework to produce logically-grounded bayesian inputs and computations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now, suppose that I think the true probability is greater than 0.75 but less than 0.875. I take the average and obtain 0.8125. Note that 1-.5^2.5 ~= 0.8232, so the stepped ordinal logic process is not isomorphic to an expression of the power of two. An expression of the power of two is quite parsimonies, but the ordinal expression becomes verbose. The ordinal expression of \"between 0.75 and 0.875\" is like \"this event is less than very probable but more than simply probable.\" Basically, we are trying to describe the step-wise traversal of a binary probability tree using plain language. Ordinal expression creates a useful complexity check by asking, \"Do you really have a sufficient number of reasons to make this number of moves? Is your resolution of estimation logically justified?\"</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>III. Epsilon-Likelihood and Ordinal Logic</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Bryan Caplan is one who has often raised the issue of translating from plain language to a proper statistical estimate. <a href=\"https://www.econlib.org/archives/2017/08/tristans_tetloc.html\">Tristan Caplan's Tetlockian Glossary</a> is a great example of such a discussion. Ordinal logic provides a correct approach for solving this, but the language can become strange. Epsilon-likelihood is valuable in one respect as a means of solving this language problem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Consider that the statement p(A) > 0.5 can be re-written with no loss of generality as p(A) = 0.5+I+e, where I is a non-negative integer and e is <a href=\"https://mathworld.wolfram.com/Epsilon.html\">epsilon</a>. If we want to be extra picky then we can stipulate that e is a finite transform or positive finite approximation of epsilon, being arbitrarily small, but never reaching the limit of zero. This pickiness is fair enough because it is true that some event cannot be correctly called probable when the likelihood is at exactly 0.5.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What does this epsilon concept gain us? Basically just one thing as far as I can see at the moment: A convenient, parsimonious way to distinguish events that are probable with an expected point estimate near even odds from the ordinary point estimate, which would be substantially higher at about 0.75 without further qualification.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As examples, consider the expressions \"epsilon likelihood,\" \"probable with zero degrees of confidence,\" and \"probable with epsilon confidence\" as shorthand for ~0%, ~50%, and ~50%, respectively.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>IV. A Heuristic Transpose of Alpha Norms into Ordinal Logic</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ordinal logic tells us that p &lt; 0.5 means some coefficient is more likely to exist rather than to not exist. Put another way, the true effect is probably closer to the given estimate rather than zero. Put a third way, eliminating the factor is expected to decrease information contained in the model (some exceptions if the factor is perfectly partialled and similar edge cases).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Importance analysis tells us that in some cases p > 0.5 could still be interesting if a factor has a large magnitude, robustness across specifications, or promise for feasible application in the real world. We should worry about statistical credibility at this point and seek to gather more samples or otherwise reduce p to get a \"probably not wrong\" estimate, but we may not want to throw out the factor altogether. Of course, the same is true if we have theoretical reason to case about the factor. With those exceptions, I tend to quickly throw out variables with p > 0.5 simply because of the level of effort to parse out true effects, robustness test, and so on. The return on investment to research time often becomes a net loss with such factors.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ordinal logic tells us about three more interesting cases outside of traditional norms, and after that we will see that it overlaps with traditional normal analysis.</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>p-value between 0.25 and 0.5 would be considered nonexistent by traditional p-value analysis, ordinal analysis says they are unlikely with less than one degree of confidence. Maybe worth further exploration but not strong enough to assert ordinal unlikeliness. A risk-averse scholar might rationally buffer against accepting these.</li><li>0.125 &lt; p-value &lt; .25 is considered unlikely and an ordinal model would seek to keep these while traditional analysis would reject them. Notice that these factors empirically do typically contribute to information criterion and adjusted r-squared improvements.</li><li>Traditional analysis would arbitrarily become interested at p-value &lt; 0.1, but with ordinal analysis I think we have a compelling reason to accept p-value &lt; 0.125 as strong. These are events that are unlikely with more than two degrees of confidence.</li><li>Unlikely with three degrees of confidence evaluates to p &lt; (0.5^4 = 0.0625) and so becomes compatible with the traditional 0.1 cutoff.</li><li>Five degrees = 0.5^6 ~= 0.03, compatible with traditional 0.05.</li><li>Six degrees = 0.5^7 ~= 0.0078, compatible with traditional 0.01.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Notice that these heuristic mappings also help identify interesting qualitative studies. If a study raises four to six reasons for outcome X, this maps on well to something that should establish a traditionally compelling case. That, of course, assumes no reasons found for outcome X', which would need to be further accounted for, similar to what we see in bayesian analysis, and potentially directly leveraging modified bayesian math.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>IV. A Collection of Review Material on Ordinal Logic</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Dec 2014, <a href=\"https://www.afterecon.com/other/example-quantified-opinion/\">An Example of Quantified Opinion</a></li><li>Jan 2015, <a href=\"https://www.afterecon.com/other/priori-probability-larger-values/\">A Priori Probability: Larger Values</a></li><li>March 2015, <a href=\"https://www.afterecon.com/other/ordinal-modelling-applied-to-connoisseurship/\">Ordinal Modelling Applied to Connoisseurship</a></li><li>Sept 2016, <a href=\"https://www.afterecon.com/economics-and-finance/rational-estimation-price-uncertainty/\">Rational Estimation and Price Under Uncertainty</a></li><li>Sept 2017, <a href=\"https://www.afterecon.com/economics-and-finance/applied-unknowns-analysis/\">Applied Unknowns Analysis</a></li><li>Dec 2018, <a href=\"https://www.afterecon.com/philosophy-religion-and-apologetics/christianity-without-certainty-is-ok/\">Christianity Without Certainty is OK</a></li><li>May 2021, <a href=\"https://www.afterecon.com/economics-and-finance/some-austrians-cant-take-a-win/\">Some Austrians Can’t Take a Win</a></li></ol>
<!-- /wp:list -->