---
title: "Ordinal Modelling Applied to Connoisseurship"
date: 2015-03-19 06:45:33
author: John Vandivier
---



Suppose the smartest guy in the world and disagrees with everyone else.
<p style=\"text-align: center;\"><strong>Question:</strong></p>
According to the <a href=\"http://www.afterecon.com/other/priori-probability-larger-values/\">ordinal model of a priori statistical reasoning</a>, what is the minimum number of people that would have to exist in the world in order to render his opinion statistically invalid?

Assume that a statistically invalid opinion is defined as one which has a less than or equal to 50% chance of being true. Assume that you possess ordinal intelligence information for each person, but no reliable cardinal information.
<p style=\"text-align: center;\"><strong>Answer:</strong></p>
If two people held mutually exclusive and collectively exhaustive views without ordinal weighting we would assign them each a 50% chance of being correct. If two people hold mutually exclusive and collectively exhaustive views with ordinal weighting, then we assign the higher weighted person's belief a probability of 67% and the alternative a 33% probability.

This can be deduced either by solving: (A + B = 1 &amp;&amp; .5A = B) || (A + B = 1 &amp;&amp; A = 2B)

We are either estimating that the smarter guy is twice as likely to be correct, or that the alternative is half as likely to be correct. It seems a small distinction here, but as the number of observations grow it will affect our function.

I prefer to use the diminishing function because it allows us to solve complex questions without introducing infinite. It also makes it obvious that the limit of the value of each claim is 0.

Interestingly, this implies that the marginal value of information is 0 in a competitive market, but very large in a market with few players. This is consistent with market assumptions.

If two people disagree with the genius then the probabilities would be 57.2%, 28.6%, and 14.3%, respectively.One solution is: (A + B + C = 1 &amp;&amp; .5A = B &amp;&amp; .5B = C) =&gt; 7C = 1 =&gt; C ≈ 14.3.

Let's say the number of observations is N and we will define the \"final-claim probability\" as the probability of the least likely outcome. In the case above, N = 3 and the final-claim probability is (1/7), or ≈ 14.3%.

Notice that the final-claim probability of N is the number 1 divided by the sum of pascal's triangle up until the Nth row. A quick and general way to express this sum is as Σ(2^i) for each i from i = 0 to i = N-1.Now let's suppose that we have 4 total claims. 1 + (1 + 1) + (1 + 2 + 1) + (1 + 3 + 3 + 1) = 15. The final-claim probability is (1/15), or ≈ 6.7%.

The first-claim probability, which is the probability that the genius is right in our example, can be solved for in two different ways:
<ol>
	<li>Double the final-claim probability to get the next most likely claim probability, then double that one, and so on, until we reach the first-claim probability. In general, this is described as (P(first-claim) * 2^(N-1)).</li>
	<li>Take the sum of the numbers in the last row of pascal's triangle for N and multiply that by the final-claim probability. In this case that would be (1/15)*(1 + 3 + 3 + 1).</li>
</ol>
Using either method, the result in this case would be that the first-claim probability is ≈ 53.3%.

With 5 total claims, 1 + 2 + 4 + 8 + 16 = 31. P(final claim) = 1/31. P(first claim) = 16/31.

Anyway the limit of the first claim probability as N increases is 50%. You could throw significance levels in and get a smaller number, but technically the population would need to be infinite to question the genius' idea.

Is this a problem for application of the model in the real world? I would make 5 quick points:
<ol>
	<li>Prima facie this seems to make the model less appealing in application to the real world. In the real world, if everyone in a market disagrees with someone then that person is probably wrong. I would like to see a model adaptation in which P(first claim) approaches 0 as N increases.</li>
	<li>However, our question assumes that we know this person is the smartest person. In the real world the market usually doesn't disagree with the smartest person. Given this information, perhaps the result is good and appropriate that we should be indifferent between the genius and the aggregate of all other people as the total number of people increases. It could be the case that the genius is smarter than the whole aggregation of them! With this perspective, perhaps the lack of realistic application is due to our question rather than our model.</li>
	<li>The ordinal model isn't designed to deal with n &gt; 30 anyway. We should employ traditional statistics at scale. Still, it was indicated that n &lt; 30 could lead to P(first claim) &lt; 50%, provided we have a model that adjusts the limit to 0.</li>
</ol>