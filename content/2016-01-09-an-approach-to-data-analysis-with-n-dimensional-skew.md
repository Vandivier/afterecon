---
title: An Approach to Data Analysis with N-Dimensional Skew
date: 2016-01-09 16:30:53
author: John Vandivier
---



There is probably already a standard approach for the problem which I am calling n-dimensional skew but I don't know what it is, and I'm not even sure I named the problem in a standard way, but I thought of a cool solution to a real data analysis problem so I am going to talk about it.

This is an approach for analyzing data when it is skewed in all sorts of directions, not just the standard 1-dimensional kind of skew called <a href=\"https://en.wikipedia.org/wiki/Skewness\">skewness</a>. The proposed solution is to construct an angular probability function. Let's consider a real life example with 2-dimensional skew: The fluctuation of personal expenditure with age.

The x-axis is age in years and the y axis is cost of expenditure, for a particular expenditure not the total per year. As a result we have many particular expenditures at each year.
<ol>
	<li>One might notice that bottom-line expenses are relatively constant while top-line expenses grow with respect to age.
<ol>
	<li>A mechanism might be that food costs are somewhat constant in real terms while consumption of big-ticket items like cars, houses, and caring for dependents increase with age.</li>
</ol>
</li>
	<li>One problem in traditional analysis of such data, particularly with forecasting, is that traditional econometric approaches make assumptions about the vertical skew of that data.
<ol>
	<li>An <a href=\"https://en.wikipedia.org/wiki/Ordinary_least_squares\">OLS</a>, for example, entirely ignores changes in what I am calling vertical skew. That is, the y-values for a particular x-value have some skew of their own.</li>
	<li>OLS doesn't discern between the top and bottom of a distribution, and I think it goes through the mean at each point. I'm pretty sure the assumption of <a href=\"https://en.wikipedia.org/wiki/Homoscedasticity\">homoscedasticity</a> is a formalization of this ignorance. Or that the errors are normal, following a normal distribution, as opposed to a skewed one.</li>
</ol>
</li>
	<li>So in this example if top line expenditures are increasing and the bottom line is constant then we can see the so-called vertical skew is increasing with respect to age.</li>
	<li>One approach is to estimate the top-line and bottom line separately, then make some assumption about the vertical distribution for any particular age. Perhaps the vertical distribution follows a regular pattern. For example so far we have assumed that the skew is always in a single direction increasing strictly with age, perhaps even proportionally.</li>
	<li>Now consider that the bottom line is decreasing as the top line is increasing, but at different rates. Moreover, the patterns reverse at retirement age.
<ol>
	<li>It is now a more precise approach to estimate three trends: a median trend, the top line trend, and the bottom trend. Previously the median trend was implicit in the others.</li>
	<li>We start to see that it may be difficult to create a generic distribution change function.</li>
</ol>
</li>
	<li>Now consider that the reversal at retirement is asymmetrical. Finally, consider that there are many such asymmetric pivot points.
<ol>
	<li>Perhaps the reversal in bottom-line expenditure is proportionally smaller than the reversal in top-line expenditure, because we cut way back on luxuries after retirement, but we only barely cut back on groceries.</li>
	<li>Not only is there a pivot-point at retirement age, but there could be one at the legal smoking age, the legal drinking age, the average age of marriage, and several others.</li>
	<li>It is relatively clear that a generic distribution change function is at best subject to a large degree of error relative to an alternative, and at worst entirely unfeasible to construct, where the alternative is an angular probability function.</li>
</ol>
</li>
	<li>There are two approaches to angular probability here described, and a range of approaches between them. There is a simple approach and a complex approach. In the simple approach we estimate the full angular probability distribution of a point of interest and we assume that all points in the respective estimate paths conform to a constant function of change.</li>
</ol>
<p style=\"text-align: center;\">The Angular Probability Function</p>

<ol>
	<li>In the expenditure by age example we might estimate the top-line trend has a constant rate of change and the bottom-line path has a constant change of 0.</li>
	<li>These trends can be expressed as functions of age, but they can also be expressed recursively as functions of prior expenditure and an angular probability.</li>
	<li>Consider that a movement from (x1,y1) to (x2,y2) entails some 2-space angle. We can pair each possible movement to a probability. These probabilities can be chained to create trend probabilities. There is a simple approach and a complex approach.</li>
	<li>Simple approach: We estimate an angular probability function at the beginning of the distribution, or perhaps some other point of interest.
<ol>
	<li>In the expenditure example this would be at age 1 or perhaps 0.</li>
	<li>Each path is now a function of the some angle.</li>
	<li>There are a variety of variations on the definition of the angle idea. For example, an angle of 90 might be the straightforward angle when dealing with degrees.</li>
	<li>On the other hand, the 0-angle might be horizontal with respect to X, allowing the straight down angle to be -.5(pi) in radians. This might be mathematically desirable if the lower half of the distribution tends in a negative direction.</li>
	<li>We can estimate these trends with a continuous function across all possible angles, or using a piecewise function or set of functions. Perhaps 1 path per degree.</li>
</ol>
</li>
	<li>In the complex approach we do not hold that trends on a particular path conform to some constant change function. Instead, every point has its own change function.
<ol>
	<li>In the complex approach there is no such thing as a trend function. Every point has its own change function.</li>
	<li>In this approach a point becomes an object rather than a coordinate or positional value. It is a position value with a separate attribute which is an angular change function.</li>
	<li>We could be really crazy and allow a 360-degree change function instead of a simple forward-trajectory approach. In fact, why stop at 360 degrees? We could allow for n-dimensional probabilistic movement paths from a given point.</li>
	<li>The benefit of this approach is good old fashioned precision. We can handle all sorts of distribution shapes with respect to any number of factors and still capture distributional effects.
<ol>
	<li>You could have a distribution with a large circular or oval shaped gap right in the middle and it wouldn’t reduce precision.</li>
	<li>Star shapes? Yes, there are some implications for error when there is a discontinuous change, at least if we use continuous functions to describe the angular probability function, which we probably would.</li>
	<li>Although ostensibly you could use a crazy large database map or matrix instead of a continuous function to describe the possible movement paths and their probabilities.</li>
</ol>
</li>
</ol>
</li>
</ol>