---
title: "Kaldor-Hicks Problems"
date: 2017-01-26 15:00:08
author: John Vandivier
---



This article discusses notions of economic efficiency, notes a main one employed by applied economists to be Kaldor-Hicks efficiency, and discusses a few issues with that concept.

Here are some kinds of economic efficiency:
<ol>
 	<li>Pareto efficiency - loved by theorists but <a href=\"http://econfaculty.gmu.edu/bcaplan/e854/pc1.htm\">not feasible</a>
<ol>
 	<li>It means a move which improves utility of at least one agent and reduces the utility of no agent</li>
</ol>
</li>
 	<li><a href=\"https://en.wikipedia.org/wiki/Kaldor%E2%80%93Hicks_efficiency\">Kaldor-Hicks</a> efficiency - sometimes employed by theorists and practically useful
<ol>
 	<li>It means a move which improves total surplus, even if some particular agents lose utility</li>
</ol>
</li>
 	<li>Technical efficiency - used on occasion in micro theory and practically useful to some degree
<ol>
 	<li>It means cost minimization for a given objective. Eg produce X units in the cheapest way possible.</li>
</ol>
</li>
 	<li><a href=\"http://www.afterecon.com/economics-and-finance/unpacking-vandivier-coase-theorem/\">Nonremediableness</a> - obscure but Oliver Williamson used it and I approve.</li>
 	<li>Absence of market failure - Depending on your definition of market failure, you can be in a kaldor-hicks inefficient position or a technically inefficient position, but there is no market failure.
<ol>
 	<li>Eg David Friedman's definition: Market failure is when individual preference does not lead to a group-optimal result. This might be called a Smithian failure eg the invisible hand didn't work.</li>
 	<li>Or the Williamson definition: The outcome may not be kaldor-hicks efficient but it is not feasibly remediable. So these concepts do overlap.</li>
 	<li>Alternatively, others define market failure specifically as a kaldor-hicks inefficient result on the market.</li>
</ol>
</li>
 	<li>Exhaustion of gains from trade.</li>
</ol>
In applied work most economists use Kaldor-Hicks efficiency. For example, when doing a cost-benefit analysis of some proposed policy like a change to a tax. Consider a reduction in the income tax. In a shallow way this seems to be a pareto improvement. Who could be opposed? Isn't this financially a strict gain for everyone? But practically in the real world people get pissed even about stuff like this. Someone might say \"Why is the income tax reduction even across the board? Shouldn't we provide a bigger reduction for the poor and a smaller reduction for the rich?\" If anyone voices such an opinion then they suffered some disutility from the change and it cannot be considered a pareto improvement, even if it is a kaldor-hicks improvement.

There is a counter-argument by fans of pareto-improvements that we can just compensate the losers, but practically this doesn't happen. Even when it does happen the reimbursements accrue to a subset of the appropriate people and a value of reimbursement which is often one-size-fits-all and otherwise suboptimal.

So anyway, folks use Kaldor-Hicks. It's pretty good but is it flawless? Hardly. Here are some issues:
<ol>
 	<li>Issues in measuring willingness to pay.</li>
 	<li>Issues in lexicographic preference, infinite, and set theory
<ol>
 	<li>aka perfectly inelastic demand or vertical demand</li>
 	<li>Shout out to the brilliant <a href=\"https://twitter.com/SladeMendenhall\">Slade Mendenhall</a> for reminding me of the word lexicographic</li>
</ol>
</li>
 	<li>Standard vs modified Kaldor-Hicks</li>
</ol>
I. Issues in willingness to pay (WTP):
<ol>
 	<li>Limited expressiveness
<ol>
 	<li>Traditional WTP is constrained by income. You can't actually pay more money than you have.</li>
 	<li>This limits <a href=\"https://electology.org/expressiveness-approval-vs-ranked-ballots\">expressiveness</a> in the sense of political science and voting systems.</li>
 	<li>In some contexts this is good: We don't care about person X's unconstrained demand, we want their constrained demand which contains info about their productivity, intelligence, etc.</li>
 	<li>Except some people are poor by coincidence or nature: In other words there is a misleading signal going by their endowment alone. Sometimes smart folks are born poor.</li>
 	<li>Looking at unconstrained demand or demand as a share of income might be more expressive.</li>
 	<li>But, consider the extrema of even share of income: 0 and 100%.
<ol>
 	<li>You could have two things which you would not pay for either one, but you still prefer one if given the choice of free consumption.</li>
 	<li>Or, you have two things you would pay everything for, but you would choose one if forced. Eg my life or my wife's: I would pay all for either but I would save hers if forced to choose.</li>
</ol>
</li>
</ol>
</li>
 	<li>Constrained vs unconstrained demand (kind of related to <a href=\"http://www.afterecon.com/economics-and-finance/true-demand/\">this old post</a> I had forgotten about)
<ol>
 	<li>Continuing along point 1.6.2, consider this: I would pay all my possible income to save my own life, but I would also pay that much to save my wife's life. Call this value I(L). So what is my willingness to pay for both of our lives? Traditional WTP would say it is still only I(L), but common sense might tell us we should add these values and get 2I(L). On further reflection we might say, \"Actually, if I had more than 2I(L) available, I would pay an arbitrarily high amount! My WTP is infinite!\" This creates an issue the traditional analyst avoids by only allowing the constrained values, but I have another approach which may be more expressive that will be discussed later with vertical demand.</li>
 	<li>WTP is a point value but future income follows a forecasting distribution: I'm not certain of my future income, it could fall in some range. Unconstrained demand better addresses this. What if I have X dollars, what if I have Y dollars? I wouldn't buy this car with my current income, but if I got a raise of $X then I might buy it. Or, try to calculate discounted lifetime income under the consideration that the real interest rate is uncertain: You can get a point estimate but a real statistician would prefer a confidence interval since no particular point has a substantive likelihood.</li>
 	<li>Bliss points are things and it would be useful in some economic contexts to identify an agent's bliss point, but this point might fall outside their constrained demand or current income.</li>
</ol>
</li>
 	<li>Willingness to pay vs willingness to accept: <a href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2883536/\">These guys have better details than me</a>.</li>
</ol>
II. Issues in lexicographic preference, infinite, and set theory:
<ol>
 	<li>As discussed in II.1.6.2 and II.2.1, my unconstrained demand for some good might be infinite. And yet we as humans are capable of ranking the preference of these goods. For example, I can value my life infinitely and the life of my wife infinitely and yet admit that I value her life more than my own. How can such a comparison be logically coherent or analytically understood? By using set theory.</li>
 	<li>To use set theory we need to establish the sets, note their divergent rate of progress, take the ratio, and this identifies relative preference. Notice this approach is importantly different than traditional WTP measurement yet we obtain relative preference at the end, which is useful economic information.</li>
 	<li>Example set: consider a bad which is likelihood of death.
<ol>
 	<li>We have established that 100% likelihood has an unconstrained WTP of infinite to avoid this bad.</li>
 	<li>Now, consider that we are only dealing with a 1 in 11 million chance of death. Would we pay an infinite amount?</li>
 	<li>Probably not, as revealed by the fact that people often consume plane flights and <a href=\"https://curiosity.com/topics/how-do-people-survive-plane-crashes-curiosity/\">this is the chance of death from riding on a plane flight</a>. But we would pay something, as revealed by the fact that consumers prefer safer flights and cars, etc.</li>
 	<li>Let's say I would pay $100 to reduce my chance of death by 10% (so that it becomes 90% of 1 in 11 million) then I would pay another $100 to reduce the chance by another 10% (so it becomes 81% of 1 in 11 million), and so on. We can construct a function to describe this pattern of demand: Chance of Death = (1/(11M))*.9^(WTP/100)</li>
 	<li>Maybe review those <a href=\"http://www.purplemath.com/modules/logrules.htm\">log rules</a> as we continue.</li>
 	<li>Therefore, ln(Chance of Death) = ln((1/(11M))*.9^(WTP/100)) = ln((1/(11M)) + (WTP/100)*ln(.9)</li>
 	<li>Therefore, [ln(Chance of Death) - ln((1/(11M))]*100/ln(.9) = WTP</li>
 	<li>So, it's ugly but we got a WTP function. Now, consider that I would pay double for my wife's safety. The long and short is we get a similar function: [ln(Chance of Death) - ln((1/(11M))]*200/ln(.9)</li>
 	<li>We can take the ratio WTP(me)/WTP(wifey) = 1/2. We just got a relative preference for comparing infinite value of lives. #mindblown.</li>
 	<li>I don't think this info can be obtained using traditional cost-benefit or Kaldor-Hicks approaches. Many analysts who do cost of life evaluation opt for a revealed preference approach similar to some of what I did by comparing a person's willingness to buy a more or less safe car for example.</li>
</ol>
</li>
</ol>
III. Issues in standard vs modified Kaldor-Hicks
<ol>
 	<li>Standard Kaldor-Hicks says we should maximize social surplus. But the thing is, some people are douchebags. Why would I want to weight the preferences of murderers and pedophiles equally to my own? I can instead use a modified Kaldor-Hicks to maximize group-wise surplus.</li>
 	<li>There are pros and cons to modified Kaldor-Hicks. Pro: I can exclude the douchebags and come up with a better analysis which incentivizes good behavior. Con: Someone has to decide who the douchebags are and what good behavior means, and maybe this decider ends up being the douchebag and the whole system is messed up bc a loser got elected to public office and is legislating what they think is good but which is in fact stupid. Not hypothetical. Happens all the time.</li>
 	<li>I'm not sure I have the right answer but I would propose a few things:
<ol>
 	<li>Presuming we can get the proper moral code identified, modified Kaldor-Hicks seems better</li>
 	<li>A central government w/ calculation problems, public choice malincentives, etc, probably won't identify the proper moral code.</li>
 	<li>A polycentric market for law might be theoretically ideal to obtain the most efficient moral code, but we can't exactly implement such a market at the moment.</li>
 	<li>Perhaps as long as we are stuck with central government, standard Kaldor-Hicks is best for public policy</li>
 	<li>At the micro level and in my own personal life, modified Kaldor-Hicks is certainly preferred. I don't want government regulating my moral code, but I definitely want to include my moral code in my considerations of my personal utility optimization.</li>
</ol>
</li>
</ol>