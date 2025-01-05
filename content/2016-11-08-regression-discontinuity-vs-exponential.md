---
title: "Regression-Discontinuity vs Exponential"
date: 2016-11-08 14:42:43
author: John Vandivier
---



Consider a set of data which is a good fit for a regression-discontinuity design. An example would be the difference in the level of alcohol consumed before and after an individual's 21st birthday. In many cases it is also possible to model this same data using an exponential function. This article asserts that the RD approach is a simpler alternative to an exponential design, where the exponential design is better.

The key flaw in RD: There are no discrete events in reality. Discrete events are arbitrary categories, but in reality all events are continuous events. An RD explanation is fundamentally a discontinuous explanation while an exponential model is fundamentally continuous.

RD is effectively just as accurate as exponential design at the level of the discrete unit and at the moment of the event, but they cannot be used for extrapolation. The exponential model is more useful for extrapolation and also may be used inside the moment of the event (eg extrapolation within the day)

How to find optimal sized window...bias vs variance. Do I buy it?

Some academics have suggested that one or the other model should dominate. That is, they hold one of the following views:
<ol>
 	<li>When data may be modeled by an exponential function, it is necessarily inappropriate to use a regression-discontinuity design.</li>
 	<li>When data may be modeled by a regression-discontinuity design, it is necessarily inappropriate to construct an exponential model of explanation.</li>
</ol>
In contrast, I propose the following:
<ol>
 	<li>Either model is fine, and in theory they result in the same explanations on the even
<ol>
 	<li>wait nah...using an RD when exponential is more appropriate will tend to overestimate the effect through a process called discrete concentration. Eg consider that 2/3 of the 21st birthday effect is felt in the afternoon and only 1/3 is felt in the morning. That is, the 21st birthday effect is more precisely a 21st birthday evening effect. This precision is lost through temporal aggregation from nanoseconds to minutes to days.</li>
</ol>
</li>
 	<li>If you're super cool you will do both and give a robustness check on the effect.</li>
</ol>
There is no asymptotic event. There are only quasi-asymptotic events. Eg a \"day\" is an arbitrary unit and a quasi-asymptotic event may occur at the discrete point of a single day, but in reality time is continuous and there is no

RD running variable: percentile vs discrete-unit on the axis?

RD optimal window selection: Assignment is ideally effectively random. Narrower windows are more plausibly random. That is, the assignment of observations into groups is more likely due to random variation instead of treatment variation when windows are small. Consider GPA. Is a window of 3.9 to 4.0 acceptably wide, or too wide? It depends on the standard deviation on GPA. If the standard deviation is .1 or more, no problem! If it's smaller than .05 you are likely in trouble bc that means there is less then ~5% chance (2 SDs) that a person received a 3.9 instead of a 4.0 due to random variation alone.

But maybe there are times where the event effect is literally vertical...? I don't think so but maybe. We would need to check that the \"curved corner\" has an explanatory power of 0. More likely, we will find that there is no significant explanatory difference between the RD model and the exponential model. In which case the immediate effect estimate can be found either way, but useful values for extrapolation should come from the continuous exponential model. Also, marginal effects would for sure need that one.