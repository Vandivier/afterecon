---
title: "Grokking Open Source Contributions"
date: 2021-06-02 21:48:10
author: John Vandivier
---



<!-- wp:paragraph -->
<p>In the past two weeks, I've gotten two PRs merged to major open source projects, and a third issue that I raised was solved by another person's PR. This article documents what those contributions are, but more importantly, it also gives tips about how you can get started contributing to open source.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>I. What Were the Contributions?</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li><a href=\"https://supabase.io/\">Supabase</a> PR, <a href=\"https://github.com/supabase/gotrue-js/pull/94#issuecomment-850920946\">feat: allow twitter profile #94</a>, which allows developers to build successfully when using the Twitter social sign-on button from Supabase.</li><li><a href=\"https://nextjs.org/commerce\">Next.js</a> PR, <a href=\"https://github.com/vercel/commerce/pull/348\">feat: concise card code #348</a>, which removed extraneous code in some implementations of the ProductCard component.</li><li>Next.js Issue, <a href=\"https://github.com/vercel/next.js/issues/25590\">DRY isAllowedMethod util #25590</a>, which noted that there was some duplicate code that could be extracted to a common utility.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>II. Tips for Getting Merged and Making Other Good Contributions</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Approach open-source as a user first<ol><li>Developers can nitpick open-source code, but these improvements are often low-value. High-value improvements solve problems for users.</li><li>Instead of searching for where you can contribute, start building something and use open-source products as a dependency. Then, if that dependency has an issue, fix it. If your PR wasn't accepted you still improved your own stuff, and if it is accepted then you helped a bunch of people!</li><li>As an aside, I ran into all of the issues this article describes while building a gamified store called Futurecaster, and the development is recorded on video in a series of so-called The Moonlogs:<ol><li><a href=\"https://futurecaster.vercel.app/\">https://futurecaster.vercel.app/</a></li><li><a href=\"https://github.com/Vandivier/futurecaster\">https://github.com/Vandivier/futurecaster</a></li><li><a href=\"https://www.youtube.com/watch?v=F6ChRAL-i5Y&amp;list=PL4hsXTgWARMy7gB1pwxjFFM31xCwKfosF\">The Moonlogs YouTube Playlist</a></li></ol></li></ol></li><li>Start with Issues, not PRs<ol><li>You will get your PR prioritized if it closes an issue, so even if you have the code ready you should still make an issue.</li><li>Issues by themselves without code can still be valuable. The community can discuss and vote to see if many people want the solution or if it can be tweaked in a way that makes many people happy or nah. You may find that your issue is already being tracked and/or is related to things people are already working on. Contribute with votes and comments too!</li><li>In open-source and also in normal programming, you will often win social consensus and save technical effort by talking about your approach before coding it. This almost bleeds into a social norm, where GitHub maintainers</li></ol></li><li>Minimally scope PRs - start with a single component<ol><li>I saw multiple cases of duplicate code, but note that I did not put all the changes in one PR. That might have gotten my Next.js PR rejected if I did that.</li><li>As you gain familiarity and reputation for contributing to a repo this can totally change, but it's definitely a good way to start, and tbh even after you're the cooliest it still doesn't hurt.</li></ol></li><li>Know the Lingo<ol><li>This is arguably optional but I think it will signal to other people that you know what you're doing and therefore make them more inclined to agree with you in discussion and merge your stuff or take your suggestions seriously.</li><li>For example, 'grok' in this article title is dev lingo. 'PR' is dev lingo, and I use dev lingo in my PR titles when I use the 'feat' prefix.<ol><li>By the way, if something can be called a feature or a fix then go ahead and call it a feature. This is an example of using communication in a way that ingratiates your work with software devs. If you PR with something you call a fix and it doesn't actually fix a critical bug, people might get annoyed and think you are calling their software buggy when it isn't, or that you otherwise don't know what you're doing.</li><li>For example, some people might consider my code for 'feat: allow twitter profile #94' to be a bugfix, because it does fix a type error and it resolved broken builds and so on, however I know that those issues only came up because it was a new feature that was not yet completely implemented. So it could equally be considered completion of a feature-in-progress, and this is a nicer way to communicate the work.</li></ol></li><li>Finally, this will just flat out help you technically. If people really do want to debate the implementation then you need to be able to understand what they are saying and respond in a \"normal\" (from a dev perspective, which is to say including tech vocabulary) way.</li></ol></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->