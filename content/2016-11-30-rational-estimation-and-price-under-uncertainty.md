---
title: Rational Estimation and Price Under Uncertainty
date: 2016-11-30 01:59:23
author: John Vandivier
---



This article talks about ways to deal with uncertainty, and I will also briefly define the concept in contrast with simple risk.
<ol>
 	<li>Definitions: Uncertainty vs Risk</li>
 	<li>Rational Estimation without Uncertainty</li>
 	<li>Rational Estimation with Uncertainty</li>
</ol>
<p style=\"text-align: center;\"><strong>1 - Definitions: Uncertainty vs Risk</strong></p>

<ol>
 	<li>Uncertainty and risk are both not simple economic phenomena. They are generic elements of complex systems.</li>
 	<li>They are both represented as error in a forward-tested model, but only risk is captured in a backward-tested model.</li>
 	<li><a href=\"https://en.wikipedia.org/wiki/Risk\">Risk</a>
<ol>
 	<li>A probability of some event</li>
 	<li>Sometimes, the expected value of some event: The probability multiplied by the payoff</li>
 	<li>Think of your budget: You have a line item for gas, but there is some risk you will go a bit above or below that amount.</li>
 	<li>You are familiar with the kind of event</li>
 	<li>You may have bought insurance for this thing because you knew beforehand it might happen</li>
</ol>
</li>
 	<li>Uncertainty
<ol>
 	<li>Synonyms
<ol>
 	<li><a href=\"https://en.wikipedia.org/wiki/Knightian_uncertainty\">Knightian Uncertainty</a></li>
 	<li><a href=\"https://en.wikipedia.org/wiki/Wicked_problem\">Wicked Problem</a></li>
 	<li><a href=\"http://econfaculty.gmu.edu/pboettke/summer/summer%20docs/kirzner1997.pdf\">Kirzner's sheer ignorance</a></li>
 	<li><a href=\"https://en.wikipedia.org/wiki/There_are_known_knowns\">Donald Rumsfeld's Unknown unknowns</a></li>
 	<li><a href=\"https://wiki.mises.org/wiki/Case_probability\">Mises' Case Probability</a></li>
</ol>
</li>
 	<li>Think of your budget: You have a category for \"Other\" or \"Unexpected Expenditure\"</li>
 	<li>You probably didn't buy insurance for this thing because you don't know what it is and no one sells \"Other Stuff Insurance\" (yet...?)</li>
</ol>
</li>
</ol>
<p style=\"text-align: center;\"><strong>2 - Rational Estimation without Uncertainty</strong></p>
Before we go on to estimating the costs of uncertainty (which I argue can be done), what are some principles of estimation when uncertainty is not the case?
<ol>
 	<li>If you have lots of data, do a regression. If you don't, take an average. You never have no data.
<ol>
 	<li>The regression should be linear by default unless you have some reason for another approach.</li>
</ol>
</li>
 	<li>Direction-ambiguous bias doesn't invalidate or prevent estimation; it preserves the point estimate.
<ol>
 	<li>If I could spend more, less, or the same on gas as I budgeted, should I throw out the budget? No! It means I budgeted the optimal estimate.</li>
 	<li>Obviously, if you have some reason to think the weight one way is bigger then you can apply some correction. But if you just don't know the errors offset in either direction.</li>
 	<li>More error in both directions will reduce our confidence in our point-estimate, but it doesn't shift the value of the point estimate.</li>
</ol>
</li>
 	<li>Direction-specified bias can be corrected using ordinal logic
<ol>
 	<li>If I know I will spend more on gas next month, how should I proceed?
<ol>
 	<li>Ask yourself, \"How much more?\" Based on your answer:
<ol>
 	<li>\"I don't know.\" Assume no change. This is also an axiomatic way to justify the default usage of the linear regression.</li>
 	<li>\"A small amount more.\" Small relative to what? The original value. New budgeted value = 1.5(Original)</li>
 	<li>\"An even amount.\" New budgeted value = Original</li>
 	<li>\"A large amount more.\" New budgeted value = 2(Original)</li>
</ol>
</li>
 	<li>I have a long personal literature on ordinal modelling for more detail including the maths:
<ol>
 	<li><a href=\"http://www.afterecon.com/other/ordinal-modelling-applied-to-connoisseurship/\">Ordinal Modelling Applied to Connoisseurship</a></li>
 	<li><a href=\"http://www.afterecon.com/other/priori-probability-larger-values/\">A Priori Probability: Larger Values</a></li>
 	<li><a href=\"http://www.afterecon.com/other/example-quantified-opinion/\">An Example of Quantified Opinion</a></li>
 	<li><a href=\"http://www.afterecon.com/economics-and-finance/quantified-ordinal-modelling-action/\">Quantified Ordinal Modelling of Action</a></li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
 	<li>Abstraction reduces the accuracy of estimation, but doesn't prevent the possibility of estimation
<ol>
 	<li>Corollary: The accuracy of a forecast is roughly commensurate with the number of observable input or input properties
<ol>
 	<li>This is why micro-founded economic models are more accurate than aggregate models. Eg, including individual level characteristics improve accuracy</li>
 	<li>You can do a bit of handling for unobserved heterogeneity, but not much. You pretty much get 1 extra parameter in addition to observable data.</li>
</ol>
</li>
 	<li>Any set of observations, events, or items can be abstracted to some level such that they belong to a common class.</li>
 	<li>Any item belonging to a common class can be estimated on the grounds of the other items belonging to the class.</li>
 	<li>So a maximum-likelihood estimate of any item can be obtained. The tricky part is reducing the error such that substantial confidence or usefulness is gained.</li>
</ol>
</li>
 	<li>Information contained in the model is represented in the portion of variation explained.
<ol>
 	<li>Corollary: Ignorance is represented as a smaller share of variation explained, more error in forecasting, and/or less confidence in estimation of various parameters.</li>
</ol>
</li>
</ol>
<p style=\"text-align: center;\"><strong>3 - Rational Estimation with Uncertainty</strong></p>
I argue that case probability estimation is possible, contrary to what Mises has said, for two reasons:
<ol>
 	<li>Everything can be classified at some level of abstraction, even if it is a retrospective category for \"Unforeseen costs\" or \"Other\"
<ol>
 	<li>If you have never suffered an unforeseen cost then you:
<ol>
 	<li>Probably shouldn't budget for it, or</li>
 	<li>Budget for it at the rate of a foreseen cost since this is your only rational <a href=\"https://en.wikipedia.org/wiki/Focal_point_(game_theory)\">focal point / Schelling point</a></li>
</ol>
</li>
 	<li>If you have some data, even if it is small-n but definitely for large-n, on the frequency and payoff of unexpected events then use that.</li>
</ol>
</li>
 	<li>It is possible to demand surprise
<ol>
 	<li>Or, exert effort or money to influence the own-rate of surprise or the rate of discovery</li>
 	<li>There are things I know alot about and things I don't know alot about
<ol>
 	<li>If I engage in an activity I know very little about it is easy for me to be surprised
<ol>
 	<li>Eg visiting China: Known unknown = I have to learn Mandarin.</li>
 	<li>Unknown unknown = I don't know!
<ol>
 	<li>But I can set aside some cash for it just in case</li>
 	<li>More cash set aside reduces the potential negative consequence</li>
 	<li>At the cost of foregoing known rewards</li>
</ol>
</li>
</ol>
</li>
 	<li>If I engage in an activity I know alot about it is hard for me to be surprised
<ol>
 	<li>Eg talking about economics: I have probably already heard it and even if it's new I doubt it's highly surprising</li>
 	<li>Or, getting a desk job and never doing new things. The same tasks over and over. No learning, no discovery.</li>
</ol>
</li>
</ol>
</li>
 	<li>A friend suggested that things I know alot about actually increase my ability to be surprised: Fine, it's possible, but I was still able to influence the own-rate of surprise</li>
</ol>
</li>
 	<li>Tangentially, it should be possible to estimate the rate of innovation whether such rate is endogenous or totally random.</li>
</ol>
Here are some applications:
<ol>
 	<li>Budget for unknown expenditures</li>
 	<li>Include an \"Other\" category in surveys</li>
 	<li>In Agile planning, you can plan using points which are associated with unknown requirements</li>
 	<li>Give Rumsfeld extra money even though he doesn't have a specific thing to spend it on (I'm not really recommending this, but it's the conclusion of his remark)</li>
 	<li>When investing, double the risk premium to include a rational estimate of Knightian Uncertainty
<ol>
 	<li>Note: Don't assume an increase to risk unless you have a reason. Knightian Uncertainty could reduce you risk.</li>
 	<li>Another Note: Rational doesn't actually mean true or accurate. It just means you got nothing better. It's definitely better than the idea that estimation is impossible.</li>
 	<li>A Third Note: But like, what are you going to do, allow for infinite uncertainty? That's not rational or solvable, but we assume uncertainty all the time. Uncertainty is solvable.</li>
</ol>
</li>
 	<li>Key point: It is possible to estimate the frequency and cost (or benefit) of a surprise, but it is not possible to precisely identify the kind or content of a surprise.
<ol>
 	<li>In that case it wouldn't be a surprise; the precise content is revealed in the moment of discovery.</li>
 	<li>But, it may be possible to estimate the broad nature of a surprise.
<ol>
 	<li>Eg there is an emerging field of medicine likely to bring more inventions compared to legacy fields.</li>
 	<li>Very hard to do at a social level as it stands; maybe not too hard for a self-reflecting individual to recognize high potential areas of personal discovery or surprise.</li>
</ol>
</li>
</ol>
</li>
</ol>