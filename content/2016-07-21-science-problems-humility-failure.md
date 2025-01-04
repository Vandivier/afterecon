---
title: Science Problems: Humility Failure
date: 2016-07-20 22:03:22
author: John Vandivier
---



This article discusses the failure of practicing scientists and data analysts to correct for a well known problem: Their own overconfidence.

This article has 3 sections:
<ol>
 	<li>Intro</li>
 	<li>The Problem</li>
 	<li>One Possible Solution</li>
</ol>
&nbsp;
<p style=\"text-align: center;\">Section 1: Intro</p>
Here are a couple cool things disregarded all too often in science and data analysis:
<ol>
 	<li>Small or hypersmall data sets (1-100 observations)</li>
 	<li>Humility</li>
</ol>
I've talked about how <a href=\"http://www.afterecon.com/economics-and-finance/meta-economics/\">small data is cool</a> in the past so let me talk about humility today.

Given a large data set, what are the odds that an analyst will foreknow the variables of interest and their likely shapes?

Not only is the likelihood small, the analyst will tend to <a href=\"https://en.wikipedia.org/wiki/Overconfidence_effect\">overestimate</a> their own ability.

Moreover, the patterns they search for will have selection bias. The tends toward <a href=\"https://en.wikipedia.org/wiki/Cherry_picking\">cherry picking</a> and may contain self-serving bias, with or without malintent.

The obvious correction is to allow the data to tell it's own story. How can we do that? Instead of allowing the analyst to check for patterns, allow a computer to check all possible patterns.

A factorial regression would be an algorithm which allows a computer to run every combination of regressions among a data set.

A primitive factorial regression would be a Factorial OLS. Given 3 columns in a data set, a machine would run 3! = 3*2*1 OLS regressions.

A more sophisticated program would allow for k types of regressions (OLS, quadratic, cubic, log...), so a more full factorial analysis might be k(n!).

&nbsp;
<p style=\"text-align: center;\">Section 2: The Problem</p>
The computer would assert the ideal regression, rather than the biased whims of an analyst.

Such an analysis would represent a humble approach: Learning from the data instead of searching for evidence of a preferred answer.

<a href=\"http://stats.stackexchange.com/questions/68181/performing-all-possible-regressions-in-r\">Here is a data analysis stack exchange post</a> where an individual asks how to do exactly what I described as a factorial regression, using R.

He gets shot down by like everyone.

One reason rings out: data-mining bias.

However, I am here to tell you: No amount of data-mining bias can overcome the benefits of data-mining.

Whoa what? Yes.

The error introduced by randomly guessing can be corrected for through <a href=\"https://en.wikipedia.org/wiki/Bonferroni_correction\">Bonferroni</a> or <a href=\"https://en.wikipedia.org/wiki/%C5%A0id%C3%A1k_correction\">Sidak</a> Correction.

However, none of these corrections will penalize the first-winning regression in such a way that the second-winning regression ever becomes preferred.

Corrections will reduce our confidence in the first-winning regression, and perhaps to such an extent that we see no significant winners; but it will always preserve the rank order of model quality.

I'm certainly a pragmatist: If your intuition happens to lead you into a great model, use it! Bayesian results are often more straightforward to interpret, test, and use. However, there is forever some element of bias which can't be rooted out from the Bayesian approach.

In real life, however, the benefits of many models outweigh whatever insignificant bias might remain from a Bayesian input.

On the other hand, in some situations a Bayesian model might be more difficult: What if you are so unfamiliar with a data context or so unconvinced by any apparent intuition that you can't generate a meaningful Bayesian input, hypothesis, or theory? Then a pure mathematical descriptive, exploratory approach may be best.

A factor analysis, including a factor regression, is a great addition to any <a href=\"https://en.wikipedia.org/wiki/Exploratory_data_analysis\">Exploratory Data Analysis</a> (EDA). Why choose between Bayes and Bonferroni? Use them both in your EDA and discuss the differences!

Now, be careful: Data-mining can result in some weird models. These models should generally not be interpreted causally, or even at all, without further research and causal reasoning.

However, data-mined models will produce mathematically optimal forecasts and expectations when given new data that fits the model.

Simplification makes interpretation easier, but it doesn't make for more accurate analysis or forecasting. Data mining models makes interpretation hard, but it's technically useful.

Probably some balance is efficient: I'm just trying to argue against dismissing data mining out of hand. It's a useful technique.

Simplification of models into theory can also happen in many ways: I vote for emergent simplification over imposed simplification:
<ul>
 	<li>Emergent simplification takes an algorithmically produced model and systematically eliminates minimally beneficial parameters until a useful or meaningful model remains.</li>
 	<li>Imposed simplification takes the intuition of an analyst and seeks to extract affirmation out of a data set.</li>
</ul>
&nbsp;
<p style=\"text-align: center;\">Section 3: One Possible Solution</p>
Going back to how this program might work...k(n!) is just the beginning! Given a data set with age as a column, a skilled analyst might recognize that certain factors might be increasing or decreasing in marginal age.

So a cool machine would be able to generate age^2 and age^3 and test those as factors.

The possibilities are infinite - which is kind of cool and also kind of bad, because that can make such a program hard to create.

One solution would be a measure of complexity and a user-specified complexity cap.

The accuracy of a model would be reasonably expected to gain with a diminishing marginal effect with respect to complexity.

The input of processing power and time required to execute a program of linearly increasing complexity is reasonably expected to increase exponentially.

In combination with small data, however, this is a one-two punch for extracting powerful, user-tailored data in a cheap, feasible way.

This sort of analysis can yield insightful and unexpected results. Here's another advantage: It destroys overconfidence bias.

Why? Because the analyst has not asserted a hypothesis to test and they have not selected the search space of models.

Now, it may still be a fair criticism that the analyst may have selected the data set, but there are a few simple retorts to such a criticism:
<ol>
 	<li>No I didn't! Many large data sets are established and analysts are essentially data-takers.</li>
 	<li>Yes. On purpose! Data optimized for application is often selected from a small pool on purpose - eg \"I only care about my customers, not the whole market\"</li>
 	<li>True, but the result is easily reproduced with other data sets.</li>
 	<li>True, but it's better than if I had a weird data set <em>and</em> overconfidence bias!</li>
</ol>
Of course, none of those retorts hold up to evidence that the data set is truly tampered with.

Tangentially: Genetic optimizations are kind of like this factorial thing, because models can emerge from data rather than being imposed on the data.

Genetic optimization is one kind of regression that scientists are usually pretty interested in using it.

There's also an awesome Javascript library for it. <a href=\"http://subprotocol.com/system/genetic-regression-curve.html\">Demo</a>. <a href=\"https://github.com/subprotocol/genetic-js\">Github</a>.