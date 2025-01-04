---
title: "Computational vs Economic Efficiency"
date: 2015-06-29 03:01:36
author: John Vandivier
---



Efficiency is a concept in both economics and programming. This article will compare and contrast these two views of efficiency.

Efficient coding can be described in 3 ways. These 3 descriptions often  but not always imply essentially the same implementation:
<ol>
	<li>Efficient code is <a href=\"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself\">DRY</a>, not duplicative. Efficient code is reusable, modular, and generalized, not overly specified.</li>
	<li>Efficient code is concisely written and small in character or byte size. Efficient code is written on a need to know basis, presenting the minimal information needed to accomplish requested functionality.</li>
	<li>Efficient code executes as quickly as possible with minimal resource usage and requirements.</li>
</ol>
Economic efficiency means getting the best benefit for the least cost. Economic efficiency agrees with computational efficiency essentially in only one case: When a program requires less resources to run, including both time and hardware as resources, then it can be executed literally in a less expensive way because we don't have to purchase expensive computers or waste a bunch of time to run it.

There are many cases, however, where efficient coding is not economically efficient. In these cases the code may be optimized from a technical resource usage point of view but it is not optimized from the point of view of maximizing profitability on the market for supply, demand, or other reasons. Examples include:
<ol>
	<li>When code is technically optimized it may not be readable. Such is the case with <a href=\"https://en.wikipedia.org/wiki/Minification_%28programming%29\">minified code</a>, for example. This can create supply problems of productivity. <a href=\"http://stackoverflow.com/questions/6453235/what-does-damp-not-dry-mean-when-talking-about-unit-tests\">DAMP code</a> is not technically efficient but it may be economically ideal because it improves productivity.</li>
	<li>Convenience coding or hacking can allow for rapid production with suboptimal code. Sometimes getting to market ASAP matters more than optimized coding from a business perspective.</li>
	<li>User experience sometimes demands duplication. In Microsoft Word, for example, there are at least 3 ways to turn text bold. You can use control + b, you can click the button in the ribbon, or you can trigger a listener function from a plugin. While this creates a degree of technical duplication it is economically efficient because it improves demand for Microsoft Word by improving the product from a usability standpoint.</li>
	<li>Sometimes it is good to organize a program in a way that is <a href=\"https://en.wikipedia.org/wiki/Loose_coupling\">loosely coupled</a>, decentralized, and implements <a href=\"https://en.wikipedia.org/wiki/Separation_of_concerns\">separation of concerns</a>. These approaches create redundancy in order to reduce the likelihood and impact of system failure or improve security. For example, the decentralized operation of the bitcoin blockchain involves many people downloading and duplicating the same blockchain.</li>
	<li>Ensuring maximum environmental compatibility may involve duplication. For example, you might have to write a particular function a number of times in order for it to be compatible with Firefox, IE, older versions of IE, Linux, Mac, Windows, desktops, tablets, cell phones, and so on.</li>
</ol>
The question becomes: How should we code by default? I think we have to mutually maximize supply and demand and I think this generally means preferring economic efficiency to technical efficiency.

Agile methods do a solid job of maximizing demand by frequently retargeting developer tasks to ensure production code is meeting consumer preferences.

Agile methods are ideally coupled with a development style that maximizes development speed toward whatever product customers are demanding and excludes code or methods that doesn't service that objective.