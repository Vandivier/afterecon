---
title: Further Against Logarithmic Transformation
date: 2015-10-27 13:04:45
author: John Vandivier
---



<a href=\"http://www.afterecon.com/economics-and-finance/log-growth-rates-stop-doing-that/\">I previously wrote</a> about that using logarithmic transformations outside of a narrow range is statistically invalid and results in an exponentially increasing level of error.

Perhaps more important than the statistical error committed by the log transformation is the gross disregard for logic and mathematical properties. In this article I will show log transformations are absurd by giving examples of various other transformations which would be allowed by the same logic.

The argument is that ln(r+1) <strong>≈</strong> r for \"small values\" of r. <a href=\"http://www.afterecon.com/economics-and-finance/log-growth-rates-stop-doing-that/\">I calculated this to mean r &lt; |.11| at the 95% confidence level</a>. There would be a smaller allowable range for higher confidence levels.

Given X <strong>≈</strong> Y where |(X-Y)/X| &lt; alpha, let's browse the available transformations for the 95% confidence level. That is, alpha = 5%.

Under these conditions, there exist some X and Y such that:
<ul>
	<li>X <strong>≈</strong> Y, Y = K</li>
	<li>X <strong>≈</strong> Y, Y = -X</li>
	<li>X <strong>≈</strong> Y, Y = 1/X</li>
	<li>X <strong>≈</strong> Y, Y = KX</li>
	<li>X <strong>≈</strong> Y, Y = X^K</li>
</ul>
Clearly these rules are absurd. Sure, they are true over some range, but they are not actually true. They each violate basic mathematical properties for many/most values of X and K (some constant), even if not all values of X and K.

These approximations are what we would call hacks in programming. They are invalid rules implemented because they get you some result you want, but they are not generally valid. The problem is that log transformations are a hack which is used by several entire industries.

Let's suppose I don't care about the error because it will be insignificant. Again, the appropriate level of statistical significance is another issue I have written about, but let's assume that away for the moment.

With such a broad range of transformations available, why is the log transformation best? It's not. It's sometimes useful to simplify taking a derivative, but quite often a different approximation could be used to further simplify taking the derivative, but using that other approximation would be considered wrong.

By whoever it is that gets to decide these things.