---
title: "Why Use Points for Estimation?"
date: 2018-04-04 11:04:57
author: John Vandivier
---



I've often been asked to map points to hours as part of an estimation process. This kind of works and kind of doesn't. I'll give my rule of thumb at the end, but first I want to defend the use of story points qua story points.

If the only purpose of story points is to map on to hours, then why not use hours to begin with? The introduction of story points in that case merely obfuscates the variable of interest and makes accurate estimation harder, so the result is an inaccurate forecast. If the goal is an hourly estimate then estimates should be done in hours.

Clearly, then, there are two possibilities:
<ol>
 	<li>Story points have some other utility</li>
 	<li>Story points have no utility.</li>
</ol>
I argue in favor of the former. Experience leads me to believe the two main factors give utility to story points:
<ol>
 	<li>Using abstract points eases the mind of developers, reducing the estimate padding and noise associated with fear of being held to a deadline.</li>
 	<li>Using points makes comparison easier.
<ol>
 	<li>Similar stories may vary at the hourly level, but they don't vary by much.</li>
 	<li>Similar stories are also implemented similarly, and the level of complexity and risk is also similar.</li>
 	<li>These factors are exactly what points capture, allowing the grouping of stories by kind to occur naturally.</li>
 	<li>Then, people can logically say \"This kind of story is this number of points, but this other kind is more or less complex/risky, so let me modify the points by 1 level.\"
<ol>
 	<li>Where a Fibonacci level is like 5-&gt;8 or 5-&gt;3.</li>
 	<li>Basically, the imprecision of points here becomes an advantage. Where a manager could complain \"Why is this 16 hours and not 15? What makes you so sure?!\" They have no room to complain with points. The developer moved the estimate just one level and this is easily logically defended.</li>
</ol>
</li>
</ol>
</li>
</ol>
Because points are imprecise, it's also faster and easier for developers to generate accurate point estimates based on limited information, where they could not generate accurate hourly estimates given the same information. However, after teams develop estimation routines around points, there emerges a normal ratio of time per point. This is properly a retrospective observation, it is not proper to declare hours per point prescriptively. Why? Because if you declare the hours per point prescriptively, you have just removed the easing effect (benefit 1) and the advantaged imprecision of points (benefit 2). You also incurred the resolution cost of points. So you are net worse off. You should have just done hours.

The method I recommend has the best of both world in my view. It's a triple estimation approach:
<ol>
 	<li>Release planning with quickly generated point estimates</li>
 	<li>Revisit and update estimates as needed during elaboration time</li>
 	<li>Add hourly estimates and actual hours during elaboration and development time</li>
</ol>
This allows retrospective identification of the natural, non-forced, hours-to-points ratio. These hours are actuals, not estimates, which is even better. So now you can have developers go estimate a backlog in terms of points and get an actual hour estimate without directly asking them for it, resulting in an hourly estimate with minimal error. Much less than the biased, obviously high estimate you would have gotten by asking directly.

Googling around to see why other folks like points turned up <a href=\"http://www.agilebuddha.com/agile/agile-estimation-9-reasons-why-you-should-use-story-points/\">this article discussing 9 reasons to use points</a>. I think it's pretty good, but my notes on their 9 points are below:
<ol>
 	<li>Points don't make things more accurate by using velocity for planning.
<ol>
 	<li>It makes things more accurate in the short run by not forcing developers to commit to hourly estimates they are (properly) uncomfortable with.</li>
 	<li>It makes things more accurate in the long run by producing an low-bias instrument for hourly estimation.</li>
</ol>
</li>
 	<li>I agree! Using points reduces the need to re-estimate each work item because the point itself is a variable construct, like a size-based estimate.</li>
 	<li>I agree. This is a subtle observation, but a great one.
<ol>
 	<li>Using points actually shifts the whole Agile mindset from a time-minimization process to a productivity-maximization process.</li>
 	<li>This processes may be mathematically and even economically isomorphic, but they are attitudinally worlds apart.</li>
 	<li>Asking \"how can I improve our productivity\" is a positive psycho-sociological approach.</li>
</ol>
</li>
 	<li>This was my point #1. Totally agree.</li>
 	<li>Agree. It also focuses the client on clarifying and simplifying requirements, rather than focusing them on timeline and cost.</li>
 	<li>I agree. Because points are targeted to the average developer, not me in particular, it forces developers to converse and uncover what the average developer even looks like.</li>
 	<li>Meh. I guess.</li>
 	<li>Interesting. I'll have to read the paper. This seems to overlap with my point #2.</li>
 	<li>Absolutely agree.</li>
</ol>
Finally, below is my rule of thumb. The way I describe this rule of thumb is that I bring it up during onboarding. Different teams estimate along different norms, so I only bring it up as a starting point and an introduction to my team starting expectations. It's always taken to be a rule of thumb and a starting point, it's never taken to be binding.
<ol>
 	<li>1 point means the item is already done and a tester has already approved or it doesn't need to be tested. It just needs to be recorded in our Agile requirements tracking software.</li>
 	<li>2 points means it will take less than an hour to develop or it's already developed. It mainly needs to be tested.</li>
 	<li>3 points means it will take about a day, maybe a part of a second day.</li>
 	<li>5 points means 2-3 days.</li>
 	<li>8 points is roughly a week.</li>
 	<li>13 points is roughly two weeks.
<ol>
 	<li>In Agile teams with a 2 week sprint there is no guarantee that time will be left for testing, but it's possible.</li>
</ol>
</li>
 	<li>21 points means it will take more than three weeks.
<ol>
 	<li>It is too large for a typical Agile sprint, regardless of whether the team uses 1, 2, or 3 week sprints. (Sprints over 3 weeks are not a best practice.)</li>
</ol>
</li>
</ol>
Related: <a href=\"http://www.afterecon.com/programming/agile-estimation-repoint-not-repoint/\">Agile Estimation: To Repoint or Not to Repoint?</a>