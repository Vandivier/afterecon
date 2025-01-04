---
title: A Priori Probability: Larger Values
date: 2015-01-30 15:27:49
author: John Vandivier
---



This article will cover how to handle a priori statistical or probabilistic reasoning when the estimated value is larger than the baseline value.

<a href=\"http://www.afterecon.com/other/example-quantified-opinion/\">In this article</a> I show that for any probability P | 0 &lt; P &lt; 1, the risk-minimizing estimate for P is .5. This can be expanded to proportional estimates of frequency, value, and more.

For example, let's say that the rate of consumption of cheeseburgers, C, is known to be less than the rate of consumption of hotdogs, H, and greater than zero, although the specific rates of consumption of hot dogs and cheeseburgers are unknown. Under these assumptions we know that 0 &lt; C &lt; H. We can rationally estimate C = .5H to minimize risk.

This is essentially a priori probabilistic reasoning or deductive statistical reasoning. There is a large problem here which is, \"If you don't know the specific rates then how would you know which is greater?\" I call this the Supposition Problem. The short answer is that sometimes you know, sometimes you don't know with certainty but you have a good indication, and sometimes you have no clue but you are in a situation where a decision must be made and this approach amounts to rigorous guessing which is better than non-rigorous guessing. Two cases where we have good reason to apply this method are:
<ol>
	<li>Ordinal data lacking cardinal data. We know that A is less than or before B, just not by how much.</li>
	<li>Quantified opinion, intuition, or connoisseurship. We are dealing with experts than know that A is more frequent or better than B, but they don't know precisely by what degree. In other words, this translates into ordinal data.</li>
</ol>
Basically it all boils down to using ordinal data to estimate cardinal data. For this reason the process may be also called ordinal reasoning and it underpins an ordinal distribution which I have basically outlined in previous articles although not in detail and I won't do that here either.

The point of this article is what to do when we don't know that A is less than B. What if we only know that A is <em>greater</em> than B? Writing the question this way makes the answer obvious, but I actually just realized it.

The previous problem was that if all we know is that A is greater than B then the bounding range is B &lt; A &lt; infinite. Using the usual approach we would find the central point of the range as the risk-minimizing option. Tangentially, if we don't know the distribution then we assume a flat one just as when we don't know the shape of a curve we assume a linear one. Anyway, the middle of this distribution would be (B + infinite)/2 which almost always breaks down the math.

The obvious answer is simply to redefine the relationship between A and B. Instead of saying that we know A is greater than B, we say that we know that B is less than A and we are back into an acceptable form. When 0 &lt; B &lt; A, we know that the rational estimate of B = .5A. By the same token, a rational estimate of A = 2B.