---
title: "Agile Estimation: To Repoint or Not to Repoint?"
date: 2018-03-27 11:42:09
author: John Vandivier
---



There is a minority practice in Agile Scrum sometimes called Repointing. This article describes the practice, compares it to the usual practice, and concludes by recommending that teams do not engage in Repointing.

The usual Agile estimation procedure for an existing issue is as follows:
<ol>
 	<li>Optionally create a tentative story estimate during release, multi-sprint, or other long term planning.</li>
 	<li>The sprint before development, prior to sprint planning, obtain a concrete estimate for an issue.
<ol>
 	<li>This is sometimes done as part of a formalized elaboration process. I'm a huge fan of formalized elaboration.</li>
</ol>
</li>
</ol>
Repointing adds a third step: After completion, change the point estimate of the issue to reflect actual effort. This repointing is often defined with an hours-to-points map.

Why might this be a good idea? Because it can reduce or smooth sprint velocity, particularly in the case of work rollover. This prevents expectation spikes derived from sprint velocity spikes.

Velocity means points per time. Without further qualification or context, the period of time is assumed to be a single sprint. Planned velocity, for example, is generally taken to be the number of points planned for development within a given sprint. It's also possible to talk about planned velocity per month, release, or project.

Actual velocity is the retrospective number of points completed as planned. Average velocity is another key metric. That refers to the actual points per time period, within the context of a larger time period. Without further qualification, the smaller time period is taken to be a single sprint and the larger time period is taken to be the entire project development lifetime. If a project exists for 10 sprints, the average velocity is taken to be the points per sprint across all 10 sprints. However, it is still intelligible to speaks specifically about a dip in average velocity in the second half of the project, as distinct in a dip from actual or planned velocity during that same second half.

The proper guide planned velocity is average velocity, but poor managers, by which I mean most managers, repeatedly and predictably fall into the near-term trap. The near-term trap represents a variety of familiar biases, including familiarity bias itself, strategic myopia, and <a href=\"https://en.wikipedia.org/wiki/Distinction_bias\">distinction bias</a> among others. <a href=\"https://impossiblehq.com/shiny-object-syndrome/\">Shiny Object Syndrome</a> is non-academic term which captures a good bit of this, but it also captures some other effects such as short term pressure to perform, or inclination to pursue fleeting trends.

When managers fall into the near-term trap they develop expectations of velocity based on very short time frames. Specifically, many will expect velocity(t) &gt;= velocity(t-1). This is an extremely pernicious expectation if velocity(t-1) had an abnormal spike. When work rolls over from (t-2) to (t-1), the development team has to execute an immense workload in order to prevent additional rollover onto sprint (t). If they successfully execute this difficult task, then actual velocity during (t-1) is a spike. If such a team is faced with a poor manager, they are rewarded for their hard work with an impossible expectation of continuing such output velocity indefinitely.

Repointing corrects for the infeasible, spike-based expectations of bad and all-too-common management. It does so at extreme cost.

What is the cost of repointing? The cost is the ability to predict project timeline. A repointed point is not the same as a prospective point. It is not possible to forecast based on point estimates when points have been repointed. It violates <a href=\"https://en.wikipedia.org/wiki/Uniformitarianism\">uniformitarianism</a>. It's decidedly unscientific.

Let me give you a more concrete illustration of the problem: Say I have some large workload which my team estimates at 13 points. My team expects it will take a complete sprint, but just one sprint, to execute. This task is eventually completed in three sprints rather than the expected single sprint. A number of other 13 point issues are completed at a variety of times. Some are completed in a single sprint, others in less than a sprint. On average we find statistical evidence that our 13 point estimates actually correlate with 1.3 sprints of work. Now when the team estimates some task, a manager is able to tell that it will probably take 1.3 sprints, with some distributional range from .4 - 3 sprints or whatever it may be.

We are able to apply this finding to our project or release estimates to validate our schedule for overall project or release development. Remember, project estimates are very rough estimates given at the time of project or release planning. If there is some tendency for project estimates to grow or shrink at sprint planning time, we can correct for that as well.

We are unable to perform this development timeline validation when we conduct repointing. In the case with the 13 point story rolling over and completing in sprint 3, I would repoint the story to be only 3 or 5 points, some smaller amount, in sprint 3. Within most popular issue tracking tools, under normal workflows and configuration settings, it is not feasible to distinguish stories repointed in this way from stories who have prospectively changed their point estimate. A prospective change occurs before development time.

If I repoint 13 to 3 or 5, then I try to query historic hours per point within my issue tracking software, the result will be an average of issues which take a matter of hours with issues which take a matter of sprints. I will have a completely inaccurate view of hours per point. Not only will it be empirically incorrect, it is also logically incorrect to attempt to validate a prospective timeline on the basis of such retroactively adjusted points. After all, the project or release estimate has no such retroactively adjusted points, and the mathematical conversion of units is therefore not possible.