---
title: "Start Using Javascript for Statistics"
date: 2015-05-30 17:27:17
author: John Vandivier
---



This article argues that data scientists and others should increasingly employ Javascript for statistical operations.

First, let's cover what is normally used and why. The normal things employed for statistical operation include R, STATA, SPSS, and recently there has been increased interest in Python. There always seem to come and go smaller apps, languages, and libraries as well every few years, but those are the big ones. Why is that the case?
<ol>
	<li>Code Base - R has a ton of plug-and-play code that does exactly what statisticians need. Proprietary systems like STATA and SPSS have plugins and so on as well.</li>
	<li>Network Effect - A large code base is only a tiny subset of the overall network effect. These systems have loads of people already using them, liquid professionals markets, and network incentives for continued development, stability, and growth. Tons of documentation, classes are available for all of them, they have name identification and generally favorable reputations, and so on.</li>
	<li>Ease of Use - I dare to argue that R is not easy to use. STATA used to be terrible but it has gotten much better with many functions in drop down menus instead of needing to use a command line ish type of thing. SPSS, however, and other app vendors, have a reputation for being very easy to use which has driven some of thise demand.</li>
	<li>Vectorization - <a href=\"http://www.statisticsblog.com/2013/02/statistical-computation-in-javascript-%E2%80%94-am-i-nuts/\">This bro points to it</a> as a key need in stats which makes JS look bad and R and others look good. I think he means <a href=\"http://en.wikipedia.org/wiki/Vectorization_(mathematics)\">mathematical vectorization</a>, not graphical SVG stuff which I will cover seperately.</li>
	<li>Visualization - Traditional data visualization can be done but it is static and generally low quality. Visualization is important for understanding and communicating the importance or meaning of data, and it can also be just fun to do and create an incentive for interaction.</li>
	<li>Server Side or Local Processing - Server side or local processing power is generally larger than browser side processing power, at least when we are talking about servers that process big data. Average Joe's computer will take much longer to process the same set, or in many cases just not be able to process the set period. Adding the browser layer can make this issue bigger.</li>
	<li>Hardware Accelerated Processing - Being able to accelerate via GPU or whatever gives a big performance boost.</li>
	<li>Parallel Processing - Being able to execute parallel processing gives a big big performance boost.</li>
	<li>Large File Size, Chunking, Timing Out, Resuming, Failing, and So On - Being able to resume process execution from an automatic save point is great because processing large data can take time and sometimes power, network, processing, or other interruptions occur. It's useful to be able to turn your computer back on and resume. This is also related to the idea of chunking and large file sizes. Large file sizes take longer to process, but also sometimes the file is so large it can't be loaded into memory all at once. In other words, it can't be processed for reasons other than time. Chunking lets you break a big file up and stream it a piece at a time so you can handle bigger data.</li>
	<li>Open Source - SPSS and STATA are closed source. We should ditch them now. R is nice and open, but it is seen as difficult and exotic. Also, it's open nature is only as valuable as its network and code base which are type-matched to stats but small.</li>
</ol>
<p style=\"text-align: center;\"><strong>JS Does These Things</strong></p>
I'm not going to claim JS does all of this better. Quite opposite. There are spots I am well aware JS is inferior, but I do think JS can do all of these things at least sufficiently. I also think JS is better at some of these things.

In fact, my core argument is that I think JS is sufficiently better at a sufficient number of things that we as individuals, and indeed the global computation community, would be net better off in the productivity and utilitarian senses to focus on JS for stats.

In the same order:
<ol>
	<li>Code Base - JS has a far bigger code base. Although JS is better for gathering and visualizing data, it's not clear that it is better or worse for processing data compared to R. However, the JS community is very big and if it focuses on stats for even a short time this should easily cure any issues.</li>
	<li>Network Effect - The JS network is larger than competitors. Perhaps the key reason to encourage JS statistics is because JS is for reasons of scale, scope, and network. JS statistics would open the floodgates for mass statistical implementation and use. It also goes hand in hand with the growth of analytics which is primarily JS. Finally, javascript-based statistics would mean cheaper data scientists and better wages for web and JS developers, and perhaps additional industry economies as the markets would somewhat merge. Currently, <a href=\"http://www.payscale.com/research/US/Job=Data_Scientist,_IT/Salary\">data scientists</a> are paid more than <a href=\"http://www.payscale.com/research/US/Skill=JavaScript/Salary\">web or JS developers</a> on median.</li>
	<li>Ease of Use - I would argue JS is much easier to use and learn than R. JS is an introductory programming skill. Many people who learn R would end up learning JS anyway. Many people who learn JS and never get into data science will still find it useful for other reasons.</li>
	<li>Vectorization - Call me crazy but I think this is something very easy to do in JS. I have done column-to-row transposition and written algorithms to flatten or inflate complex or multidimensional arrays and objects. While I rolled my own without a library, there seem to be libraries for this functionality including <a href=\"http://sylvester.jcoglan.com/\">Sylvester</a> and <a href=\"https://www.google.com/search?q=vectorization+library&amp;ie=utf-8&amp;oe=utf-8#q=javascript+vectorization+library\">others</a>. Admittedly I haven't used them. Maybe that bro's article which criticized JS is just not up to date or maybe he knew about them and they just aren't that good. In principle, however, I see no reason for this to be done in JS. It's at worst an underdeveloped code base issue imho.</li>
	<li>Visualization - <a href=\"http://d3js.org/\">D3.JS</a>. Game over. But really, JS wins all over on visualization including dynamic, real-time, mass sharable, reactive visualizations.</li>
	<li>Server Side Processing - Server-side JS didn't exist a long time ago. A little bit ago it was a new thing. Now it's common. Node, Backbone, Meteor, and many others show that it is powerful and not going anywhere.</li>
	<li>Hardware Accelerated Processing - We now have support for hardware acceleration of browsers and browser processed languages.</li>
	<li>Parallel Processing - JS now has support for parallel processing. <a href=\"http://adambom.github.io/parallel.js/\">Eg</a>.</li>
	<li>Large File Size, Chunking, Timing Out, Resuming, Failing, and So On - JS streaming and chunking has made the previously serious issue of timing out and breaking a thing of the past. <a href=\"http://www.resumablejs.com/\">Eg</a>.</li>
	<li>Open Source - JS wins the open source game hands-down. Also, the ability for cross-implementation of stats in JS-based open source is larger because the JS open source community is so big.</li>
</ol>
EDIT: I also just came across this thing. It turns out even R knows how slow R is because vectorization in R dramatically speeds everything up by <a href=\"http://www.johnmyleswhite.com/notebook/2013/01/24/writing-better-statistical-programs-in-r/\">essentially converting to C according to this guy</a>.