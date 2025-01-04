---
title: Contra Sample Splitting
date: 2016-12-15 15:00:17
author: John Vandivier
---



Marek Kirejczyk discussed a negative trend in software development called <a href=\"https://blog.daftcode.pl/hype-driven-development-3469fc2e9b22#.1di3jw7xp\">Hype Driven Development</a>. I'm here to argue the same thing happens in data, econometrics, and academia.

I'll give two examples: the p-value and sample splitting. My real focus here is to convince the reader that sample splitting is a trendy trick but it is in fact bad for analysis.

The standardization of the .05 alpha level for a successful p-value test was never logically derived and it was always a professional norm. Essentially, it was all hype. Now the profession is <a href=\"https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf\">finally starting to change</a>.

Now there's another thing called <a href=\"http://www.ssc.wisc.edu/~bhansen/papers/ecnmt_00.pdf\">sample splitting</a>. I've seen it used in a few contexts:
<ol>
 	<li>Threshold Estimation</li>
 	<li><a href=\"http://stats.stackexchange.com/questions/130470/to-use-interactions-or-to-split-the-sample\">Interaction Modelling</a></li>
 	<li><a href=\"https://www.youtube.com/watch?v=xd75_tOuzU0\">Robustness Testing</a>
<ol>
 	<li><a href=\"http://www.econtalk.org/archives/2016/09/susan_athey_on.html\">A more involved discussion with Susan Athey of Stanford University here</a>.</li>
</ol>
</li>
</ol>
At this time I'm only prepared to criticize #3. The idea here is that if you have a large sample you can generate two random subsamples, derived a model on one, and forward-test it on the other. This is an exceedingly weak robustness test and in fact this process will cause you to lose particular patterns. Consider the following:
<ol>
 	<li>Sample splitting is not real forward-testing or meta-analysis. The following occur in real cross-sample analysis, but not in sample splitting:
<ol>
 	<li>Reduced exposure to measurement bias.</li>
 	<li>Reduced exposure to cherry-picking specifications.</li>
 	<li>Implicit robustness checks due to various unexpected and/or unobserved differences.</li>
</ol>
</li>
 	<li>Sample splitting may cause certain independent variables to appear in one sample and not the other.</li>
 	<li>Sample splitting may cause certain cross-relations between independent variables to exist in one sample and not the other.
<ol>
 	<li>Even if both variables are in both places, the significance of a cross-correlation may be lost.</li>
 	<li>This may be due to the absence of variance-reducing covariates in one or another subsample.</li>
</ol>
</li>
 	<li>Sample splitting may cause an analyst to miss the significance of variables which are significant but have a high variance.
<ol>
 	<li>Using the full/pooled/aggregated sample will allow the analyst to identify the coefficient more precisely.</li>
 	<li>If you are really stuck on sample splitting, consider pooling afterward and adopting the pooled coefficient, esp when the confidence intervals on either sample are consistent.</li>
</ol>
</li>
 	<li>Since you're not doing real cross-sample analysis as per (1) then really your just checking for variable significance with smaller n.
<ol>
 	<li>This is cool, but you don't need to engage the whole sample splitting process to do that.</li>
</ol>
</li>
 	<li>Why 2 subsamples? A real test would leverage, at best, f(n) subsamples and check for robustness at each level.
<ol>
 	<li>f(n) is like this: Start with one sample, then two, then three, and so on until each subsample has 2 observations each. Then you're done, with #subsamples = n/2.</li>
 	<li>The point of this is to check for cross-sample durability of variable significance. This is supposedly the lauded quality of sample splitting.</li>
 	<li>But, the same comprehensive durability check is implicit in the ordinary p-value of the specification in the aggregated sample.</li>
</ol>
</li>
</ol>
It is really point 6.3 which makes my case most strongly. I am not asserting that sample splitting does not check for robustness. I am asserting that it checks for robustness in a way which is mathematically equivalent to not having split the sample, and as a result is an utter waste of time in practice.

Tangentially: Becker and Stigler discuss the existance of fashions and fads about scientific doctrine in the classic <a href=\"http://www.jstor.org.mutex.gmu.edu/stable/1807222\">De Gustibus Non Est Disputandum</a>.