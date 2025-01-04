---
title: "Skills in Overcoming Uncertainty"
date: 2017-09-04 15:47:25
author: John Vandivier
---



This article outlines some skills in overcoming uncertainty. It's heavily biased toward software engineering. I also talk about environmental variables which help overcome uncertainty and risk in software development.

Tldr: Skills include the ability to research, the ability to trial and error, and the practice of regularly learning, each of which have generic and project-specific components.
<ol>
 	<li>Skills (by no means exhaustive)
<ol>
 	<li>Ability to research
<ol>
 	<li>Using the internet
<ol>
 	<li>Familiarity with key websites such as Google, Stack Overflow, GitHub, and others.</li>
 	<li>Ability to query those search engines effectively.
<ol>
 	<li>Using search engine-specific techniques. Like knowing that \"site:afterecon.com \" prepended in your google search will restrict results to the AfterEcon site.</li>
 	<li>Using relevant keywords.</li>
</ol>
</li>
 	<li>Ability to quickly identify useful content.
<ol>
 	<li>Using ratings where available.</li>
 	<li>Using contextual info where available. Like if a solution is posted on a forum, read through the forum thread a bit to see if others said it's good, bad, or needs to be tweaked a certain way.</li>
 	<li>Reading signals. If a person's code is poorly formatted, variables are poorly named, and so on, it may be generally indicative of a low ability to code and therefore you may not trust their proposed solution. Likewise if they are writing non-code in an incomprehensible or obviously ignorant way, such as a dude on Stack Overflow stating that promises are synchronous, you may discount their expected efficacy. Not to 0, but appropriately.</li>
</ol>
</li>
</ol>
</li>
 	<li>Using people
<ol>
 	<li>Having a network</li>
 	<li>Knowing who is more junior or senior and along which margins</li>
 	<li>Using social media as a search engine by asking people instead of Google.</li>
</ol>
</li>
 	<li><a href=\"http://www.afterecon.com/philosophy-religion-and-apologetics/8-general-critical-thinking-skills/\">General Critical Thinking Skills</a></li>
</ol>
</li>
 	<li>Ability to quickly trial and error.
<ol>
 	<li>While trialing, periodically reassess if you are making progress. In coding, a 20 minute rule is a good rule of thumb.</li>
 	<li>Openness to new ideas and thinking in a variety of ways. High IQ would help.</li>
 	<li>Certain kinds of knowledge:
<ol>
 	<li>Technical knowledge. Eg familiarity with how JavaScript works.</li>
 	<li>Broader professional knowledge. Eg familiarity of patterns from outside of JavaScript. For example, Java has strong typing. Could a pattern from their world solve your problem? Knowledge of how testers think, how users think, how managers think, database admins, and so on.</li>
 	<li>Technical process-specific knowledge. Knowing how JavaScript works in general is very different from knowing the particular technical process of a specific application. A developer can be productive with a certain application but have little transferable knowledge and vice versa. It helps to have both.</li>
 	<li>Business knowledge or non-technical process knowledge. When trying to solve an issue it helps greatly to reproduce that issue. Reproducing and solving an issue is much easier if you know what the user was doing and why. Having knowledge about the way end users use software helps in this regard. It will also help you identify areas of improvement or fixing which they may not have actually thought of. Related is knowledge of the magnitude of certain issues. This will help you prioritize fixes and improvements. Given two new features, which one do users care about more?</li>
</ol>
</li>
</ol>
</li>
 	<li>Regular learning
<ol>
 	<li>Neuroplasticity is a thing. If you are constantly thinking about new things and learning you will develop a physiological ability to learn more quickly.</li>
 	<li>Learning all the time decreases the odds that you run into a new problem to begin with.</li>
</ol>
</li>
</ol>
</li>
 	<li>Environment
<ol>
 	<li>Allow failure. Contingency plan all the way through the vertical. The business should offer a guarantee to a client. Guarantees, ironically, are an admission of the possibility of failure. \"You will like it or your money back\" is what I'm talking about when I say guarantee. All the way down to the individual software developer. Developers should say \"I estimate X will be done in Y hours,\" not \"X will be done in Y hours,\" and estimates should be understood as subject to some degree of risk.
<ol>
 	<li>Agile is great at this. The whole notion of point estimation is that a point is not a concrete estimate associated to a date of completion. It's just an ordinal estimate of difficulty or complexity. I personally advocate doing point estimation and also an hours-based LOE estimate. The two measures should be eventually consistent and consumers and producers need to eventually agree on a timeline for completion, even if it's an interval estimate subject to risk.</li>
</ol>
</li>
 	<li>Allow changes of any size at any time. Writing architectural decisions into a business contract is one of the many stupid things I see done all of the time. Why is a technical or proposal writer, who knows nothing about how to code, deciding the architecture for a project?
<ol>
 	<li>Here's one reason businesses do it: The project is predicated on reusing an existing business capability. For example, in project 1 our firm made a solution which we can reuse to cut production time for project 2. OK this is a good line of thinking, but please include a clause along the lines of \"If we begin implementing project 2 and realize that the solution from project 1 is actually a piece of shit, we are allowed to change.\"</li>
 	<li>This is very much in line with Agile Scrum or Learn Startup pivots.</li>
</ol>
</li>
 	<li>Iterative solutioning. I like 2 or 3 week sprints which is the standard Agile practice.</li>
 	<li>Collect a ton of metrics about stuff you think is correlated to productivity</li>
 	<li>Having a decent sample size helps. Obviously hiring fewer people has a financial advantage, but if you can afford to have several employees you will cut risk by normalizing estimation and also boost the ability to specialize as needed and leverage a greater knowledge and skill base.</li>
</ol>
</li>
</ol>