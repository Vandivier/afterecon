---
title: Hal Varian Makes Sense of NoSQL
date: 2016-11-27 21:26:36
author: John Vandivier
---



The sexy new thing in IT is apparently NoSQL, but I can't stand the stuff. I tried Couch and Mongo but I didn't like it for reasons I'll discuss in this article. More important than my opinion, though, is Hal Varian's opinion. I was glad to see him reinforce my priors.

In <a href=\"http://people.ischool.berkeley.edu/~hal/Papers/2013/ml.pdf\"><em>Big Data: New Tricks for Econometrics</em></a>, Varian [2014] gives some discussion on SQL and NoSQL. I think it is well summed up in the following quote from the article:
<blockquote>NoSQL databases are more primitive than SQL databases in terms of data manipulation capabilities but can handle larger amounts of data.</blockquote>
I would try to convince you that I didn't cherry pick Varian's opinion but I'm not sure how I would be able to. I can just tell you that I was referred to his paper by <a href=\"https://www.gmu.edu/centers/publicchoice/faculty%20pages/stratmann/\">Dr. Thomas Stratmann</a>, whom I respect very much, and I already had a very high opinion of Varian for his success at Google. So I claim to have approached the paper with an open mind and assuming he knew better than I do.

My reading of Varian is that SQL is far superior for econometrics and that NoSQL should only be brought into play due to issues of scale with very large data sets.

This is somewhat consistent with what NoSQL folks themselves say, but Varian is much more transparent. Here's why: <a href=\"https://www.mongodb.com/compare/mongodb-mysql\">Mongo</a> claims they can help applications scale, but they don't specify any threshold. In IT, going from 10 to 1000 users is an important kind of scaling. Going from 100 to 1M data observations is a big change in scale. Basically, any architect starting a new small project wants to ensure the ability of that application to scale to a reasonable size from the beginning, rather than refactoring later.

But it turns out this is misleading and overkill for most projects. The threshold for benefiting from NoSQL is so large that most projects will never gain advantages, but they will <a href=\"http://cryto.net/~joepie91/blog/2015/07/19/why-you-should-never-ever-ever-use-mongodb/\">suffer the penalties of a NoSQL architecture</a>. Overall, NoSQL is a bad idea for all but specialized projects. You would never know that from the loose way the term 'scale' is employed by proponents, in contrast to the precise way Varian uses the term.

NoSQL folks make it worse by trying to say their approach is developer friendly and useful for quick prototyping. This goes hand-in-hand from a task-oriented viewpoint with the idea that it's highly scalable. Basically, if something is good for prototyping and also for scaling, it's good for everything and you should definitely use it. But not only does this abuse the term 'scale' as previously discussed, it's also just not true imho.

NoSQL is not developer friendly because it's implemented in a way different from SQL and most developers know SQL if they know anything database-related. It's not quick for prototyping because no one knows how to use it. Sure, if you can find a NoSQL specialist they might be able to prototype a data design rapidly, but isn't that also the case for an SQL expert? Maybe this is too anecdotal, but I'm a javascript developer and Mongo is not easy to pick up for me. So the idea that it's implemented in a JS-like way and therefore will be easy for devs to pick up seems off.