---
title: "Log Growth Rates: Stop Doing That"
date: 2015-10-14 01:51:47
author: John Vandivier
---



In economics and also widely in statistics and data science, it is considered acceptable to use log growth rates. In fact, you would have a hard time passing my intro Ph.D. macro class without them.

But they shouldn't be used.

The validity of how log growth rates are often used depends on a simplification. The simplification is to assume that ln(1+X) ~= X.

But it's not true.

Many textbooks and professors will say that the assumption is valid \"for small X,\" but what is small X? I did the math for you and it's pretty shocking how non-robust this widespread assumption is.

With a significance level of 5%, that assumption is significantly invalid with a growth rate as small as 11%.

<a href=\"/wp-content/uploads/2015/10/ln-approximation-test.xlsx\">Download this excel spreadsheet to see the math</a>.

Don't believe me that this trick is widely used? Here are some sources:
<ol>
	<li><a href=\"http://people.duke.edu/~rnau/411log.htm\">Statistical Forecasting at Duke University</a></li>
	<li><a href=\"http://academics.hamilton.edu/economics/cgeorges/macro-topics-files/growth.pdf\">Hamilton University</a></li>
	<li><a href=\"http://www.eso.uzh.ch/modul3/HowToPre_en.html?lesson.section=unit&amp;section.label=HowToPre_1\">University of Zurich</a></li>
</ol>
One possible defense of this bad assumption is to say that year-to-year economic growth is generally smaller than 11%.

Well. Depends what you mean by 'generally'.

<a href=\"http://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?order=wbapi_data_value_2011+wbapi_data_value+wbapi_data_value-first&amp;sort=asc\">WorldBank notes 11 countries</a> where the absolute value of the GDP growth rate was more than 11% in 2011. It's alot of 11s I know. That's out of 189 countries where the data was available. That's a significant percentage.

If you are concerned with developing economies then changes that large are normal. If you only care about the US economy then you can get away with a comparison over a few years.

But what if you start comparing longer sets of data over time? The error is cumulative. So even the most developed countries cannot be validly analyzed over horizons of 10+ years without incurring significant error.