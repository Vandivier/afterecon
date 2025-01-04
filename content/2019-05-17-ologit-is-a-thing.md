---
title: "Ologit is a Thing"
date: 2019-05-16 20:54:10
author: John Vandivier
---



<!-- wp:paragraph -->
<p>I recently published <a href=\"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3387110\">a 44 page working paper to SSRN</a>. I've been fortunate enough to hear a couple comments so far, and I hope they keep coming in. One friend noticed that I didn't try an ordered logistic regression. I responded that my left-hand variable was not binary and this friend responded in more polite terms to the effect that I obviously had no clue what an ordered logistic regression was. He was quite right.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href=\"https://stats.idre.ucla.edu/stata/dae/ordered-logistic-regression/\">Ordered logistic regression</a>, or ologit for short, is like a logistic regression, but it doesn't require a binary response or outcome variable. Instead, it supports finitely many ordered values within the explained variable. Because my papers analyzes a survey response on a scale of 1 to 10, it's an ideal candidate for such a thing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ologit has pseudo r2, not r2, so it isn't quite comparable to our OLS models, but the long ologit model receives pseudo r2 of .1290, which isn't super great as far as I can tell. See <a href=\"https://github.com/Vandivier/research-dissertation-case-for-alt-ed/blob/master/papers/alt-ed-survey/190516-may-ologit/stata/analysis-1-ologit-exploration.do\">the stata file here</a>. Oprobit performed worse than ologit. Regarding significant factors, we mostly get the same results, but we notably find a collector effect, which in other analyses are insignificant.</p>
<!-- /wp:paragraph -->

<!-- wp:image {\"id\":7160} -->
<figure class=\"wp-block-image\"><img src=\"http://www.afterecon.com/wp-content/uploads/2019/05/image.png\" alt=\"\" class=\"wp-image-7160\"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In addition to the ologit check, I can add to the existing 44 page paper in two other ways. The first is to note that I did check using time as a categorical variable rather than a continuous variable. This does detect a single particularly pessimistic time period at ctime1 = 21677, p = 0.019, but that's the only significant period and this approach only improves the adjusted r-squared by .0003, which is unimportant. Moreover, a categorical approach removes my ability to describe marginal effects which are theoretically important.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The second is to add a single article to the literature mentioned in the introductory section which argues for the importance of alternative education as a topic in research with large social impact. <a href=\"http://www.afterecon.com/economics-and-finance/tax-cuts-great-even-dont-improve-x/\">My own research and Friedman’s law</a> indicate that government expenditure has an inefficiency multiplier of about .5. <a href=\"http://www.afterecon.com/economics-and-finance/the-triple-cost-of-government/\">Here are a few theories</a> explaining that effect. The new information is found in Corey DeAngelis' article <em><a href=\"https://www.washingtonexaminer.com/opinion/school-choice-works-for-a-third-of-the-cost\">School choice works — for a third of the cost</a></em>. Suppose this indicates a generalized 1/3 education policy efficiency multiplier for government. That would be significantly worse than the usual 1/2 policy efficiency multiplier for industries in general. This would further highlight education as an industry with higher than normal returns from research and social awareness.</p>
<!-- /wp:paragraph -->