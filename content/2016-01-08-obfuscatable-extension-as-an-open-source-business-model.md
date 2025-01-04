---
title: Obfuscatable Extension as an Open Source Business Model
date: 2016-01-08 16:30:12
author: John Vandivier
---



This article discusses an approach to open source as a business model.

We all know about the traditional approach. That is, you open source some software and charge for implementation, maintenance, or on-call services. This could be considered the Sprinter Model. Everyone knows how to run, but professional sprinters are just so good at it that they are the ones who get paid. Plain ol' performance.

There is another approach I have become a big fan of recently which is open sourcing some base code and having people pay for extensions. WordPress is a big deal for this.

Notoriously, though, these extensions can be pirated or stolen rather easily. After I buy a WordPress plugin and see the code for it, I can copy, paste, tweak, and redistribute with relative ease, even if it is against some unenforceable contract or license.

One solution is to allow obfuscatable extensions. That is, extensions which people don't get to see the code for. I am talking about 2 things in particular here:
<ol>
	<li>Back-End Services</li>
	<li>Data</li>
</ol>
Front end code is hard to obfuscate, but the back-end can be set up to be very private. I also hope your database is well guarded.

Now, people will pay for your data. We know this. They will also pay for your cool extended services. Consider the following scenario:
<ol>
	<li>Someone downloads <a href=\"https://github.com/Vandivier/card-game\">my cool card game app</a>.</li>
	<li>They extend the back-end service with card game rules. In effect, they construct a unique game for which the code is private.</li>
	<li>They get people to sign up for this game on their website, etc.</li>
</ol>
Because the app excepts back-end extensions, it allows for <a href=\"https://en.wikipedia.org/wiki/Obfuscation_%28software%29\">obfuscatable</a> extension.

Because you can't really pirate these extensions they have a stronger market incentive for development, fostering open source.

Keep developing the obfuscatable extensions and when they get tired and old then open source them.
<ol>
	<li>“tired and old” made rigorous = when expected return from reputation benefits, user increase benefits, and other open sourcing benefits &gt; expected return from obfuscating.</li>
	<li>OR when expected return from obfuscating ~ 0… “Why not open source” attitude.</li>
	<li>Cool hypothesis? All information eventually has greater returns to publicity compared to obfuscation…Supports eventual market flourishing due to free information.</li>
</ol>