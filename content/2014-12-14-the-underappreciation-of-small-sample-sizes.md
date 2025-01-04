---
title: The Underappreciation of Small Sample Sizes
date: 2014-12-14 03:22:12
author: John Vandivier
---



This article is a discussion of statistical methods and it argues that statistical analysis can and should be utilized more often for small sample sizes.
<p style=\"text-align: center;\"><strong>The Unremarkable Difference Between n = 3 and n = 30
</strong></p>
There is a large difference between 0 and 3 observations. There is not much difference, however, between a sample size of 3 and a sample size of 30, other than the power of the test including the confidence in resulting estimates.
<ul>
	<li>1 sample means we can form rational estimates.</li>
	<li>2 samples helps us estimate in which ways a population may be heterogeneous and homogenous. 2 samples is also the minimum number of points needed to create a line.</li>
	<li>3 samples allows us to begin to asses dominance, or a usual case even in the face heterogeneity, which is a main point of statistical analysis. 3 samples is also the minimum number of points needed to create a curve.</li>
	<li>More than 3 samples allows increased confidence.</li>
</ul>
<a href=\"http://stats.stackexchange.com/questions/37993/is-there-a-minimum-sample-size-required-for-the-t-test-to-be-valid\">This article talks a bit more about the fact that the real minimum for a t-test is n = 3 at most</a>, noting that the 1908 paper by Student which first put forth the t-test used a sample size of n = 4.

Any model should be forward-tested to ensure real validity. Current or historical fit is not enough. Having a logical or theoretical grounding also helps. For example, population growth is theoretically grounded in an s-curve model. When in doubt, use OLS. Functional form selection may introduce selection bias, and OLS is a linear model. The average of all different kinds of odd curves would be a simple line. It's also good to test the forecasting power of the simple average for these small sample sizes relative to whatever model you may be working with.

For samples less than 3, probabilistic reasoning can be used to create estimates without statistical analysis.