---
title: "The 9 Most Important States for Entrepreneurship"
date: 2016-04-09 23:14:59
author: John Vandivier
---



This article describes some preliminary results from an ongoing <a href=\"https://en.wikipedia.org/wiki/Exploratory_data_analysis\">EDA</a>. Specifically, we look at the 10 states which are significantly associated with the rate of self-employment.
<p style=\"text-align: center;\"><strong>Intro</strong></p>
I've been conducting an EDA as part of an econometrics class in my Ph.D. program and I thought I would blog it. Readers will learn specific techniques in data analysis and also more generally how to interpret results. There will be at least 5 articles in this series and this article is the first.

The data analysis is currently being conducted in STATA using the <a href=\"https://www.census.gov/programs-surveys/acs/data/pums.html\">ACS 2014 1-year PUMS data set</a> from the US Census Bureau. You can replicate the analysis using the do files and instructions found on my <a href=\"https://github.com/Vandivier/data-science-practice\">GitHub project</a>.

The central research question under investigation is, \"Do workers in the IT sector have a higher rate of self-employment?\" While the paper for class is focused on that question, here on the blog I will deviate and explore anything I find interesting in the course of research. For example? Today's topic.
<p style=\"text-align: center;\"><strong>The 9 Most Important States for Entrepreneurship</strong></p>
<p style=\"text-align: left;\">There are 9 states which have a coefficient which is significant at the 2% significance level in the prediction of the rate of self-employment at the individual level. 6 states have a negative correlation and 3 states have a positive correlation:</p>

<ul>
	<li style=\"text-align: left;\">Good States: Georgia, Minnesota, and South Dakota</li>
	<li style=\"text-align: left;\">Bad States: Alabama, Colorado, Hawaii, New York, North Carolina, Tennessee, and Utah</li>
</ul>
There is a huge caveat here: The regression run to determine which states are significant is corrected for a variety of factors <span style=\"text-decoration: underline;\">other than wealth and income</span>. Wealth and income are obviously important and they also interact with the state variable due to local differences in the cost of living, income, and costs associated with running a business like corporate taxes and so on.

Later in the series I will discuss the change to these 9 states after correcting for income and wealth.

The specific regression is in the .do file on GitHub and it looks like this: \"reg self isit sciengrlp agep agesquared ismale schl pwgtp _marriage2 _state* _cit2\"