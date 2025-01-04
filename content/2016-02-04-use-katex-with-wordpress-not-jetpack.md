---
title: Use KaTeX with WordPress - Not JetPack
date: 2016-02-04 03:16:36
author: John Vandivier
---



This short article will give a few reasons that you should use <a href=\"https://khan.github.io/KaTeX/\">KaTeX</a> with WordPress instead of <a href=\"https://jetpack.me/support/beautiful-math-with-latex/\">JetPack Beautiful Math</a>, assuming that you need some sort of math <a href=\"https://en.wikipedia.org/wiki/TeX\">tex</a> solution.

Why would you want to use tex? To write and display complex math functions in a pleasant way. I use tex here on the site in some of the <a href=\"http://www.afterecon.com/exams/\">exams</a> I offer.

I can think of 4 reasons to use KaTeX instead of JetPack, but the first 2 are my big reasons:
<ol>
	<li>Compatability
<ol>
	<li>I currently use <a href=\"https://wordpress.org/plugins/watu/\">Watu Quizzes</a> on the site. Beautiful Math conflicts with it and KaTeX doesn't.</li>
	<li>Of course I could switch from Watu, and I probably will eventually, but this signals a more general problem.</li>
</ol>
</li>
	<li>Ease of Use
<ol>
	<li>I may be different as I write HTML fluently, but I prefer the syntax for KaTeX.</li>
</ol>
</li>
	<li>Closeness to real TeX
<ol>
	<li>See below images to visually compare for yourself.</li>
	<li>The difference between KaTeX and TeX seems to be the need to use an extra \"\\\"</li>
	<li>Beautiful Math uses a \"$latex\" syntax that doesn't resemble the real deal as much to me.</li>
</ol>
</li>
	<li>Modularity
<ol>
	<li>KaTeX is implemented as open source JS + CSS. That is easy to extend and bring in to all sorts of applications.</li>
	<li>Beautiful Math is implemented as a component of JetPack, which means it is PHP-based and hard to extend or transfer.</li>
</ol>
</li>
	<li>Performance?
<ol>
	<li>I guess? I didn't do speed tests myself but KaTeX brags about how it is the fastest tex web rendering engine.</li>
	<li>I'm not officially counting this in my 4 official reasons, but worth mentioning.</li>
</ol>
</li>
</ol>
<p style=\"text-align: center;\"><strong>Some Images</strong></p>


[caption id=\"attachment_5496\" align=\"aligncenter\" width=\"530\"]<img class=\"wp-image-5496 size-full\" src=\"http://www.afterecon.com/wp-content/uploads/2016/02/katex-code.png\" alt=\"katex-code\" width=\"530\" height=\"283\" /> Writing with KaTeX in the WP text view page editor. Perhaps more verbose, but I prefer this syntax.[/caption]

&nbsp;

[caption id=\"attachment_5494\" align=\"aligncenter\" width=\"615\"]<img class=\"wp-image-5494 size-full\" src=\"http://www.afterecon.com/wp-content/uploads/2016/02/jetpack-code.png\" alt=\"jetpack-code\" width=\"615\" height=\"122\" /> Writing with Beautiful Math. It feels ugly to me.[/caption]

&nbsp;

[caption id=\"attachment_5495\" align=\"aligncenter\" width=\"427\"]<img class=\"wp-image-5495 size-full\" src=\"http://www.afterecon.com/wp-content/uploads/2016/02/rendering.png\" alt=\"rendering\" width=\"427\" height=\"234\" /> The most important part: The output! This is in the context of a Watu Quiz question. The Watu-incompatible Beautiful Math is on top and KaTeX is on bottom.[/caption]
<p style=\"text-align: left;\">  Now, on to finish converting my Watu Quiz questions to KaTeX...</p>