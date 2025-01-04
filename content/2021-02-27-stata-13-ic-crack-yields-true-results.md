---
title: STATA 13-IC Crack Yields True Results
date: 2021-02-26 20:46:03
author: John Vandivier
---



<!-- wp:paragraph -->
<p>I previously conducted a bunch of analyses using a pirated (or cracked, or hacked, etc.) version of STATA. There is a rumor flying around that STATA has internal code which causes it to intentionally miscompute findings when a pirated version is used. With several caveats, I provide evidence that this rumor is false and the cracked version produces reliable results.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I. Background</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>I previously conducted much analysis in a cracked STATA 13 with a clear conscience.<ol><li>I have long had institutional affiliation which allows me free access to legitimate STATA. I found this legitimate access inconvenient because it required me to have an active internet connection to my institutional library through a VPN in a sandboxed virtual environment. It was slow, I couldn't work offline, I had trouble getting my results to my personal machine, I would sometimes forget passwords, and so on.</li><li>Because it was so inconvenient, I purchased STATA multiple times even though I technically had free access.</li><li>At some point, I was short on cash or otherwise felt it unnecessary to keep paying, so I got a cracked version through The Pirate Bay, which I won't link but you can easily google and find.</li></ol></li><li>I found online rumors that a cracked STATA intentionally seeds bad results.<ol><li>Example online rumors <a href=\"https://www.econjobrumors.com/topic/there-are-no-stata-14-and-stata-15-torrents\">here</a>, <a href=\"https://www.econjobrumors.com/topic/anyone-here-actually-paid-for-their-own-copy-of-stata/page/3\">here</a>, and <a href=\"https://www.econjobrumors.com/topic/does-hacked-stata-11-drop-variablesobservations-or-yields-wrong-results\">here</a>.</li><li>Caveats include:<ol><li>It may be that only certain versions are affected. Specifically, hacked STATA 10 and later seem to be suspect, and STATA 10 has particular complaints.</li><li>Alternatively, STATA 10 might have had issues with or without hacking, at least during a certain unpatched revision.</li><li>It may be that only certain OS distributions are affected. Specifically, Mac hacking seems safer.</li><li>It may be that only certain language distributions are affected. Specifically, online chatter indicates Russian and Chinese versions are fine.</li></ol></li></ol></li><li>It will save me substantial rework time if I can leverage my prior analysis done in hacked STATA 13, rather than alternatively porting it to Python or discovering in a paid STATA that the original analysis was incorrect. The analysis I did extends beyond data analysis into early revision paper drafts, so I'd love to not redo all of that if possible.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>II. Methodology</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>I compare a particular STATA crack, a new legitimate STATA install, and a Python reanalysis.<ol><li>The crack is again from The Pirate Bay. It's the top-seeded crack and it's version STATA 13-IC, Windows, English, licensed to UCLA. I won't give the serial number or anything else in this article but see the video below where you can find the serial if you need further verification of the specific crack. This is the same one, iirc, that I originally used for analysis as well. I think it's 64 bit but I'm not sure.</li><li>The new STATA is STATA 16-IC, Windows, English, 64-bit install, licensed to me.</li><li>Details of the Python reanalysis can be found in <a href=\"https://github.com/Vandivier/research-dissertation-case-for-alt-ed/commit/a368a334662a7fc8739900f16f1d94fe3fb1d26d\">my open-source code here</a>, where I commit the proof of comparison to GitHub. Basically, I used Pandas and Statsmodel OLS.</li></ol></li><li>The data used is actually immaterial to the proof. You can even create some fake data and use my open-source code above. Just make sure the column names match the ones used in the code. The point is to show the three tests have consistent outcomes, not to prove any particular outcome.</li><li>See a video of much of the work below. I was stream killed by an unwelcome Windows force update, but the STATA 13 v 16 validation is fully recorded. Comparing to Python was done offline but the code is open-source and highly verifiable.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>[VIDEO FORTHCOMING]</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>III. Results</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As hinted at previously, there is a total match across both versions of STATA and the Python implementation. I was honestly surprised by this as I figured the Python libraries could very well have some subtly differing statistical algorithms in-place or that I would at least come across some rounding errors. No dice, the results were astoundingly consistent across all three trials. Specifically, model metrics including R-squared and adjusted R-squared, F statistic, sample size, and more were the same. Factor statistics including p-values and coefficients were also identical.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As a reminder: This is not a general test of any or even most versions of STATA. I would recommend you stay away from STATA 10, hacked or not. STATA 13 seems safe, and the UCLA crack in particular as that was directly tested. For many people, though, if you can get a legit version at a discounted student or institutional rate, it's still a great idea to pay for a real license.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>OTOH, Python is pretty cool too and once you pass the 2-4 week-ish learning curve you will likely find it is more widely useful as it can do all sorts of automation tasks, machine learning, and other complex analysis easily enough, in addition to the STATA comparables.</p>
<!-- /wp:paragraph -->