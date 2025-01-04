---
title: How to Fix Missing Observations in STATA
date: 2016-04-11 10:00:22
author: John Vandivier
---



This article notes a technical problem that STATA noobs like myself may run into where it looks like STAT is failing to import certain variables or observations properly.

A big thanks to Joshua Ingber who solved this issue for me.

This article will solve a particular case of missing observations, not the general case. The general case could originate in a number of ways.

Problem description:
<ol>
	<li>Import delimited data into STAT</li>
	<li>STATA reports that it imported the variable, but when you enter \"sum myvariablename\", STATA states that there are 0 observations.</li>
	<li>Use the toolbar at the top of the STATA GUI and open the data browser by clicking Data -&gt; Data Editor -&gt; Data Editor (Browse)</li>
	<li>Notice that the data appears in the browser even though it is not reported using \"sum\"</li>
</ol>
<p style=\"text-align: center;\">What's really going on?</p>
<p style=\"text-align: left;\">The issue is that your numerical data was interpreted by STATA as a string. We need to tell STATA that the variable is numerical by running the following:</p>
<p style=\"text-align: left;\">\"destring myVariableName, gen(myNewVariableName)\"</p>
<p style=\"text-align: left;\">Problem solved! Now sum works:</p>
<p style=\"text-align: left;\"><img class=\"aligncenter wp-image-5553 size-full\" src=\"http://www.afterecon.com/wp-content/uploads/2016/04/sum-pernp.png\" alt=\"sum-pernp\" width=\"585\" height=\"305\" /></p>