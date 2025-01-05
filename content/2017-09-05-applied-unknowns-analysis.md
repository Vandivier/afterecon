---
title: "Applied Unknowns Analysis"
date: 2017-09-05 15:36:55
author: John Vandivier
---



One of the major Austrian critiques of certain kinds of analysis focuses on uncertainty. You can make a forecast based on certain data, but something unexpected might come along and muck everything up. In the past I have described <a href=\"http://www.afterecon.com/economics-and-finance/further-contra-uncertainty/\">ways of overcoming this issue</a>. These article contains 3 sections which do the following:
<ol>
 	<li>Argues for a better model of overcoming uncertainty in theory</li>
 	<li>Gives a concrete example based on some estimates I produced at work recently</li>
 	<li>Provide links to my writings on Kirzner</li>
</ol>
<strong>Section I - Overcoming Uncertainty in Theory</strong>

I work in an Agile Scrum software engineering project. Agile Scrum is a project management approach that involves many things, but relevant to this article is the fact that individual software engineers need to provide work estimates for newly defined tasks on a regular basis. These tasks can vary widely in scope. They are a great manifestation of uncertainty. As an experienced software developer, I expect that most of my tasks will fall under several broad categories and make use of skills specific to that category. For example, data changes may involve SQL skills, style changes may involve CSS or Bootstrap skill, and changes to UI logic may involve familiarity with JavaScript and libraries such as Angular.

I also expect to occasionally run into an entirely new requirement, the likes of which I have never seen before. That is the uncertain part. For junior developers, or individuals learning to program, this is not even occasional. Running into new problems from their individual perspective is routine. However, almost none of these problems are new to the entire software development community as a whole, except that sometimes they are. I ran into a number of issues using the JavaScript API for Office which were, at the time, completely new issues even to Microsoft experts. Essentially through trial and error, I was able to discover new solutions and prove with near certitude that other issues were insoluble. The trial code which I constructed and tested was based on tangential familiarity: I didn't know exactly what X would do, but I new more generally about the language or certain function calls and patterns in other contexts.

Through this discovery process I was able to overcome uncertainty. Those who are somewhat familiar with Kirzner will find this language strikingly similar to his, but those who are intricately familiar with Kirzner will realize that the similarity in language hides a completely different understanding of the terms. Kirznerian discovery is based on a magical quality called alertness. It takes a binary value and can neither be trained nor described as a trial and error process. I'm not a fan of his approach, see Section III for a collection of articles where I discuss his stuff in more detail.

The discovery process I outlined is very much in line with a particular Hayekian notion of knowledge. Hayek states the following on <a href=\"http://www.library.fa.ru/files/Hayek-Individualism.pdf\">p 155 of Individualism and Economic Order</a>:
<blockquote>But much of the knowledge that is actually utilized is by no means \"in existence\" in this ready-made form. Most of it consists in a technique of thought which enables the individual engineer to find new solutions rapidly as soon as he is confronted with new constellations of circumstances.</blockquote>
This comes dangerously close to coinciding with the Schumpeterian notion of an entrepreneur-as-inventor, in contrast to the classic Misesian entrepreneur-as-arbitrageur or risk taker. I believe the statement renders research productivity as a major category of so-called tacit knowledge. It seems to blur the line between what might be called potential and actual knowledge. See <a href=\"http://www.afterecon.com/education/skills-overcoming-uncertainty/\">this article</a> where I discuss two components of research productivity: research skill and environmental facilitation.

<strong>Section II - A Concrete Example</strong>

All of the above is to argue for a better model of overcoming uncertainty in theory. This section gives a concrete example based on some estimates I produced at work recently.

I had to produce some LOEs, which are estimates of level of effort in terms of hours, for work. There were about 100 tasks to estimate and I had a couple hours to create the estimates. The problem is that I didn't understand the description of the requirement for some of these. So I estimated the ones which I understood and I left the others as unknown. You could say their estimates were uncertain, and they are particularly appropriate called uncertain even in the Knightian sense because I did not have a good qualitative understanding of their constitution.

Yet, I was able to produce a total estimate. How? By leveraging <a href=\"http://www.afterecon.com/economics-and-finance/categorical-certainty-contra-radical-uncertainty/\">categorical certainty</a> and <a href=\"http://www.afterecon.com/economics-and-finance/rational-estimation-price-uncertainty/\">ordinal correction</a>. Even if I didn't understand these tasks, I new that they were tasks, and I have an estimate of the LOE for an average task. Watch out! The average estimated task is plausibly less complex than the average non-estimated task, so we have a reason to believe that unestimated tasks are systematically more complex and thus time consuming to complete.

Here's how I could still produce a credible estimate. Consider the following simplified/fictitious set of task data:
<ol>
 	<li>Produce new thing, 5 hours</li>
 	<li>Fix broken thing, 3 hours</li>
 	<li>Make a second thing, 4 hours</li>
 	<li>Make another different thing, ?</li>
 	<li>Fix another thing, ?</li>
</ol>
I could separate user stories and defects into separate categories, but in this particular case I didn't. I considered them all members of a single group identified as tasks. The average estimated task will take 4 hours in this contrived example. So a risk-neutral estimate of additional work would be 4 hours/item. A risk-averse estimate, corrected for uncertainty, would be 8 hours. In practice, I chose half way in between because I did not think any of the tasks, even the ones I didn't quite understand, would be genuine outliers justifying a doubled or higher estimate to other tasks.

The known estimates totaled 12 hours. The unknowns were estimated at another 12 hours. Over time I can collect data about the actual time to complete for the known and unknown groups and thereby replace the 50% margin which was originally arrived at using ordinal logic with something based on historical observation.

Is this estimate credible? I would say yes but I would also ask what makes any estimate credible. It fulfilled the reason for which it was needed, in order to create a larger work estimate which would be used to create a working delivery schedule. Of course this is not without the possibility of error, but neither would any estimate using any method be. Perhaps the only wrong thing I could have done would be to through my hands up and say \"I'm just too uncertain to make any sort of estimate.\" That would have really broken the process, and of equal importance is the fact that it would have been a flat lie.

<strong>Section III - Some links to my writings on Kirzner</strong>
<ol>
 	<li>Dec 2016  - <a href=\"http://www.afterecon.com/economics-and-finance/4-problems-austrian-economics/\">4 Problems with Austrian Economics</a></li>
 	<li>Sept 2016 - <a href=\"http://www.afterecon.com/economics-and-finance/rational-estimation-price-uncertainty/\">Rational Estimation and Price Under Uncertainty</a></li>
 	<li>Oct 2016   - <a href=\"http://www.afterecon.com/economics-and-finance/the-kirznerian-delta-fsr-or-abundance/\">The Kirznerian Delta: FSR or Abundance?</a></li>
</ol>