---
title: Agile and Betting Markets
date: 2019-06-20 02:31:40
author: John Vandivier
---



<!-- wp:paragraph -->
<p>Many companies are extremely sensitive to the power of the market, but few implement markets internally within their organization. Many companies have begun catching on to the power of agile both for software development and non-SDLC functions. This article discusses one way to implement markets within an organization and at the same time implement agile!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Agile involves a bunch of stuff that we won't be discussing. The piece we care about right now is the fact that it involves defining and executing tasks. This is ultimately common to any business, and it's ultimately why so many businesses can use some version of agile. Tasks, however, are numerous and difficult to track, compare, and reason about. Agile leverages a construct called user stories to aggregate tasks in a way that lends itself to effective business planning. For an even broader view, agile has a construct called an epic, which is a collection of stories.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Epics are the broadest unit of analysis in agile, and they are planned for delivery over some regular period. Sprints are regular delivery periods, but epics are generally too large for delivery in a sprint. In fact, some people use this as a rule of thumb to distinguish stories from epics. Multi-sprint planning is therefore conducted for delivery of epics. Multi-sprint intervals should be regular, just like sprints are regular, to facilitate accurate measurement, and measurement really drives much of agile's utility. Multi-sprint planning is also sometimes called <a href=\"https://www.scaledagileframework.com/program-increment/\">program increment</a> planning, release planning, or project planning. Be careful because the last two terms often are used with other meanings as well.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This framework allows for delivery of arbitrary and abstract features. It's hard to understate how cool this is. This is a technical delivery pipeline where abstract ideas can be inputs and concrete tools can be outputs. Agile is literally a process for transforming dreams into concrete outputs. One issue with the state of the art in agile, however, is that the timeline for this transformation is indeterminate. The standard approach to work estimates in agile uses points, but points are simply ordinal buckets which compare complexity. To say that one task has more points than another is to say that it will probably be more difficult to implement, but not to give any concrete measure of the timeline involved, let alone the confidence interval on the timeline and so on.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One solution to this which I previously discussed is called <a href=\"http://www.afterecon.com/programming/scientific-agile/\">Scientific Agile</a>. By using a number of metrics including hourly estimates, points, and t-shirt sizing, as well as tagging and tasks under user stories, an analyst is able to gather meaningful time-based completion metrics with reasonable statistical confidence over several sprints of work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Today I want to propose two process changes which can enhance either traditional or scientific agile for the purposes of both driving productivity or velocity as well as improving estimate accuracy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The first process change is simply to pay bonuses. Bonuses are already often paid to implementation teams, but they are usually paid on an annual or semi-annual basis which is largely tied to soft measures. I'm recommending spot bonuses at the story level. When a story is completed, a small bonus is paid to everyone who logged a task in accordance with the number of points for that story.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Paying story-level bonuses is only slightly revolutionary, but it becomes extremely revolutionary when combined with open source software. Now, employees are no longer needed. Stories could be implemented entirely by freelancers, and freelancers could be paid based on story points alone. This could introduce a new employment pipeline, as having actual freelancers who have contributed to your code is a quality signal of future work performance. This could also substitute for overtime for existing employees or salaried employees who typically can't earn such things. They could work their normal share then elect to work the weekend or something and earn a bonus.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The second process change is to allow the project team to wager on various metrics. I'm primarily thinking about wagering would-be bonus money, but I suppose you could allow employees to gamble their non-bonus income or personal cash as well. An obvious thing to gamble on would be delivery timeline. An example wager prompt would be \"When will feature X be delivered?\" responses could include now until a week from now, one to three, three to five, or more than five weeks. Now, instead of a planner hearing \"It turns out that feature X is an 8 point story,\" they hear something like:</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class=\"wp-block-quote\"><p>It turns out that 67% of those who made a wager believe that feature X will be delivered in three to five weeks. Their demand has caused the price for this bet to go to $.80 per share, <a href=\"https://www.nber.org/papers/w12200.pdf\">which indicates an 80% confidence</a> that feature X will be delivered in that period, and an even higher confidence that it will be delivered prior to five weeks once we include the bets on earlier delivery!</p></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p><a href=\"https://en.wikipedia.org/w/index.php?title=Prediction_market&amp;oldid=902232310#Milestones_in_development_of_modern_electronic_prediction_markets\">Augur</a> is a cool ethereum-based blockchain-and-app which provides prediction market infrastructure.</p>
<!-- /wp:paragraph -->