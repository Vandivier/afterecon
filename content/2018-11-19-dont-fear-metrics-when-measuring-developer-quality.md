---
title: "Don\'t Fear Metrics When Measuring Developer Quality"
date: 2018-11-19 17:46:41
author: John Vandivier
---



<!-- wp:paragraph -->
<p>I want to laugh when people say common metrics shouldn't be used for establishing developer productivity. It seems like a prototypical pseudo-intellectual move to point out that such metrics can be misleading when used improperly, but the speaker of such obvious statements seems to think that this somehow removes the usefulness of such metrics when used correctly, or that the business is just as well by falling back on the other, inferior metrics they generally default to, such as an annual managerial survey on a 5 or 10 point scale.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Common metrics on GitHub include number of repositories, number of commits over the previous month and year, stars per repository, and number of followers. Further generalized SCM metrics include commit frequency, lines of code committed, percent of authorship, time on project, points per sprint, or issues resolved per month. It isn't always the case that more is better for these, but when assessed properly these metrics provide a strong, multi-faceted view of developer productivity. Top-notch developers should be asking for these developers because they know such data will uncover weak spots the develop him or herself may be blind to.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let's look at percent of authorship as one particular example. Percent of authorship is different than the amount of code written by a person. It's the percent of lines of code in the current app which were written by a person. If I write 1000 lines of crappy code and Joe condenses that into 10 lines of good code, percent of authorship is 100% Joe.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Stats should generally be taken from a master branch, as are the above. Master branches generally shouldn't include code which hasn't been approved via peer review and so on.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When doing data analysis it's generally advisable to use several metrics to get a robust picture of what's actually going on. This means we need to use data correctly, not that we need to stop using data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The funny thing is that there are countless plausible objections to the data, and yet in the real world when you look at the top performers according to the data, they are almost always actual top performers not cheating masterminds. (In fact, I haven't seen a single anecdotal case to the contrary, although I believe they exist.)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the real world, for example, if someone had 70%+ percent of authorship and their code never passed testing, that would indicate, roughly, 70%+ of the app doesn't work. What sort of development process allows that to happen? It's a typical criticism which can be raised in theory to discredit the use of statistics, but in the real world this almost never happens. If even 20% of the app breaks due to a single developer's actions that developer is dealt with swiftly - usually by minimizing their tasking. Their code is likely to be reverted unless it is able to quickly be fixed. Their future code will undergo extreme scrutiny until they prove they know what they are doing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Part of the reason high volume coding and high quality coding seem to correlate in the real world might be that if you do turn out tons of code it ends up becoming high quality simply through practice. Another reason would be that cheating the system is so hard and risky that a cheater might as well just actually learn how to code. I also think people who genuinely enjoy coding are likely to have both high quality and volume.</p>
<!-- /wp:paragraph -->