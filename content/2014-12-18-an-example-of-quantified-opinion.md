---
title: An Example of Quantified Opinion
date: 2014-12-18 15:01:52
author: John Vandivier
---



This article demonstrates the method of quantified opinion. Quantified opinion is a logic-based probabilistic method, a field of statistics, which constructs a statistical model from the opinions of individuals.

Quantified opinion is unique from something like a survey or poll because it is particularly meant to address extremely low sample sizes ( 1 &lt; n &lt; 5), and it is also meant to address immensely complex questions which are generally not a good fit for the usual kind of poll or survey.

While other articles on the website have discussed the theory of the method to varying degrees (at least <a href=\"http://www.afterecon.com/economics-and-finance/quantified-ordinal-modelling-action/\">here</a> and <a href=\"http://www.afterecon.com/economics-and-finance/conversations-mises-university-2014/\">here</a>), this article will simply give an example of application without much theory. This example is also based on a real-life application which I used in a professional setting.

A group of political consultants is debating whether or not they should invest in a project. The project will temporarily increase their ability to earn revenue, but they need to determine a rational expectation for that increase.

The consultants agree:
<ol>
	<li>There will be some increase.</li>
	<li>The increase will be less than 100%.</li>
	<li>There are two levels of increased revenue: An optimal level and a maximum level. The optimum level considers the cost of the project, while the maximum level assumes a limitless spending budget. The maximum level is larger than the optimal level.</li>
	<li>The real cost of the project is somewhere between the optimal level and the maximum level.</li>
</ol>
Question 1: Ceteris paribus, what is the rational expectation for the magnitude of the increase?

Question 2: Give some measure of confidence. This should include a confidence interval and the appropriate confidence level for that interval. Any confidence level you choose is fine, it need not be a standard level such as a = 1%, 5%, 10%, etc.

Answer 1:
<ol>
	<li>Let's call the optimal level increase P (because \"O\" looks like zero) and the maximum level increase M. Let's call the real level R.</li>
	<li>From assumptions 1 and 2, we know that 0 &lt; P &lt; 100%. The rational, or risk-minimizing, estimate for P is 50%.</li>
	<li>From assumptions 2 and 3, we know that P &lt; M &lt; 100%. The rational, or risk-minimizing, estimate for M is 75%.</li>
	<li>The rational, or risk-minimizing, estimate for R is 62.5%.</li>
</ol>
Answer 2:
<ol>
	<li>Assuming that P is not 50%, the two equally rational next-best choices would be 25% and 75%. The distribution we are assuming is that there is an equal likelihood of any particular outcome in the range. Because the possible range is 0 &lt; P &lt; 1, we must rationally be 50% confident that .25 &lt; P &lt; .75.</li>
	<li>We could also say that we are 75% confident that 12.5% &lt; P &lt; 87.5%, etc ad infinitum.</li>
</ol>
Although we could go the opposite direction and find values when we are less than 50% confident, it is usually not helpful to find such values because the assumption would be that you are more confident in P' than you are in P. P + P' = 1, where P' is the probability that P is not true.

An exception would be a \"lesser of the evils\" scenario. In this scenario we are not confident in any value and so we must choose the value we are most confident in, even if confidence is less than 50%.

It is interesting to note that the deviations and confidence levels are also subject to quantified opinion. There are three approaches to this process which is a kind of revision or verification process. The first approach is that I do not engage in a revision process. This method is called minimal quantified opinion. This approach sacrifices expert precision on purpose, in order to minimize bias.

The second approach is called rational-lead revision. In this method, the surveyor asks whether or not a value is acceptable to the expert. It is well known that asking whether a value is acceptable is biased toward approval of that value when compared to simply asking for a value in a neutral question, and this is done intentionally under the assumption that the surveyor's rational deductive approach is less biased than the alternative, third approach, which is simply to ask the expert for their estimated values.

The third approach is called expert-lead revision. In this method, the surveyor neutrally asks for the expert's confidence interval and level. The response is taken at face value, and it is simply noted in the interpretation portion of the analysis.

An example of the rational-lead approach is as follows. I might say, \"Dear expert, based on your opinion I have rationally assumed that you are 50% confident that P is between 25% and 75%. Is this appropriate, too confident, or not confident enough?\" Note that I used \"appropriate\" first and \"not confident enough\" in order to:
<ol>
	<li>Intentionally bias the expert towards approval.</li>
	<li>Intentionally bias the expert away from overconfidence bias, which experts are known to exhibit.</li>
</ol>
If the expert responds that he is more confident, we could either adjust the 50% confidence level upward to 75%, or we could adjust the confidence interval inward a step from (25%, 75%) to (X,Y), where X is between 25% and 50%, and Y is between 75% and 50%. That is, we would move from (25%, 75%) to (37.5%, 62.5%). We would then execute another round, asking, \"Are these new values appropriate, too confident, or not confident enough?\" And so on.

An example of expert-lead revision would go as follows. I would say, \"Dear expert, based on your opinion I have rationally found the ideal value of P to be 50%. In your expert opinion, what is an appropriate confidence interval which includes this value, and what is your level of confidence in that interval?\" One problem here, of course, is that not all experts understand statistical confidence. This is another reason we might prefer approach #2. However, the surveyor could simply explain those things to the expert and continue to allow the expert to neutrally raise their own estimated values.

You can also have a spectrum of possibility between expert-lead and rational-lead. It's also true that the revision process can work with groups of individuals. It doesn't need to be a single expert.

Another interesting question is, \"What does it matter if the expert is wrong?\" Of course, the answer is the expert's reputation. When an expert gives their opinion on these values they are essentially creating a wager against their own reputation. If they lose the wager, they lose all or a portion of their reputation as an expert. If they win the wager, they gain reputation.

Now, it might be the case that an expert doesn't have much reputation to lose, or the expert doesn't value their reputation very much. In cases like these, the incentive to estimate correctly which comes from fear of reputation loss may not be significant or sufficient to produce rigorous results. These questions might be addressed in a pre-assessment, or the risk might be assumed by the surveyor, but there are ways to combat this risk.

One way is to offer financial incentive. Basically, tell the expert that they will get less money if they are wrong and more money if they are right. The larger the difference, the larger the incentive. You can also do sensitivity testing here by adjusting values and perhaps determine the preference elasticity of the incentive, which may be strongly related to the preference elasticity of reputation as well, or the preference for income. That would be interesting because of the literature on diminishing marginal utility from income and so on.

While this may sound odd or you may be suspicious that this could introduce massive bias and error, we actually have evidence to suggest that this is not the case. We have two general evidences and two specific evidences. Generally:
<ol>
	<li>This is how markets work. Actors maximize their income and it empirically turns out that this does not usually go hand in hand with production of misinformation. It can in some cases, but the market norm is that production of good information leads to efficiency.</li>
	<li>This is how financial investment works. Actors maximize return on investment by making wagers as carefully as possible using the best information possible. Don't view the actor as the business which may disseminate bad information. The expert undergoing the quantified opinion process is more like the investor acting on available information rather than the business creating favorable information.</li>
</ol>
Specifically:
<ol>
	<li>PredictIt uses betting to predict political events, such as elections. They seem to be having some success, although I don't have specific data at the moment.</li>
	<li><a href=\"http://bitbet.us/\">BitBet</a> is a bitcoin-based enterprise through which you can bet on anything. All bets take the form of \"Yes\" vs \"No\" and a series of technical rules particular to each individual bet are made public. If those rules are fulfilled, the yeas win. Otherwise the nays win. I have used the site several times and anecdotally it is extremely precise. One problem is that the bets are taken over a wide window of time, so that sometimes the late betters have significantly more information. This problem is solved because early betters earn multipliers on their wagers, but the effect remains that the outcome is often very similar to the final estimation, even if it was very different at an earlier time.</li>
</ol>
In conclusion, expert opinion can be forced into a stuffy inhuman box of math! Isn't it great? Just kidding. This approach is not a cure-all. It is simply a tool to help experts disclose information in a mathematically useful and way. It helps identify areas of confidence, reduce risk, reduce bias, and enable experts who may be focused on subjective issues to communicate information in a way that lends itself to objective processes, such as statistical forecasting and model building.