---
title: "Pioneer Hackathon Retrospective"
date: 2020-04-23 08:35:40
author: John Vandivier
---



<!-- wp:paragraph -->
<p>This article describes what I learned during recent hackathon participation.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Before I dive in, let me give a shoutout to this great team, and a double-shoutout to <a href=\"https://twitter.com/benawad/status/1247884975841480706\">Ben Awad for organizing the team</a>:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Alex Luong (<a href=\"https://twitter.com/alex__luong\">Twitter</a>, <a href=\"https://github.com/alexluong\">GitHub</a>)</li><li>Ben Awad (<a href=\"https://twitter.com/benawad\">Twitter</a>, <a href=\"https://github.com/benawad\">GitHub</a>)</li><li>Radi Huq (<a href=\"https://twitter.com/radiunhuq\">Twitter</a>, <a href=\"https://github.com/radihuq\">GitHub</a>)</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>First I'll describe the hackathon, then I will describe what our team accomplished, then I will cover general learnings.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Hackathon Description</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The hackathon was called the <a href=\"https://pioneer.app/hackathon\">Pioneer Hackathon</a>. <a href=\"https://pioneer.app/\">Pioneer</a> is a fully-remote accelerator, and they organized the hackathon. The hackathon lasted 24 hours from April 11 to April 12. An email announcing the final results counted out the competition as more than 750 registrants, from 60 countries, with 140 completed projects. Hackathon developer teams ranged in size from 1 to 4.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Business Concept and Results</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Our team developed a web application called DevFit. DevFit is a fitness tracker with social and gamification aspects, focused on software engineers as a target user group. <a href=\"https://frontier.pioneer.app/posts/157-devfit-compete-for-best-fit-programmer\">See this link</a> for more details including a video overview, and, if I'm still hosting it, a live link to the application.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Our application received 14 points, placing us in a tie for 24th place. The highest-scored application received 44 points. 10th place received 19 points and 20th place received 15 points. The winner was determined in a 3-phase process:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Initial voting determined the top 50 projects. These projects, including ours, are reviewed by a panel of industry-expert judges.</li><li>The judges select 8 finalists. The panel was extremely transparent about the <a href=\"https://docs.google.com/document/d/1N0UCxWZJjhnj3yUd0ObaF8Sf_xr0-zevUDIgOEOEd5A/edit\">judgement criteria</a>. Criteria included usefulness, originality, polish, and technical complexity, but excluded factors of business viability including the total addressable market.<ol><li>Our team was not selected for finals.</li></ol></li><li>The 8 finalists participate in live demos and a live audience, and \"live audience voting will help us select our winners.\" I'm not certain about whether the final winners are selected purely on live vote results.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Technical Implementation</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href=\"https://github.com/Vandivier/devfit\">DevFit</a> is implemented as a <a href=\"https://nextjs.org/\">Next.js</a> web application. Next.js is a universal, or isomorphic, React pattern. Next can be used for rendering a site statically or on-demand. Next.js also <a href=\"https://nextjs.org/docs/api-routes/introduction\">supports making API calls</a>. It might technically be a wrapper for Express, but if not it is at least <a href=\"https://nextjs.org/docs/api-routes/api-middlewares#connectexpress-middleware-support\">fully compatible with Express middleware</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We used <a href=\"https://www.prisma.io/\">Prisma 2</a>, which is still in Beta, as an ORM. I'm a bit of a Node ORM SME, having written:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>2018, Jan, FreeCodeCamp: <a href=\"https://www.freecodecamp.org/news/a-comparison-of-the-top-orms-for-2018-19c4feeaa5f/\">Which JavaScript ORM should you be using in 2018?</a></li><li>2018, May, HackerNoon: <a href=\"https://hackernoon.com/from-typeorm-to-loopback-a-retrospective-188ea18527a2\">From TypeORM to LoopBack: A Retrospective</a></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Prisma 2 is the best Node ORM development experience I've ever had. It at least equals, and possibly beats, I haven't quite decided, Loopback 4. The disadvantage I see is a lack of API autogeneration with Swagger UI. Prisma comes with a quality, open-source GUI DB IDE called <a href=\"https://github.com/prisma/studio\">Prisma Studio</a>, a command-line tool, and what I find to be a nice syntax.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The app also includes an Express mock server and at one time we had Apollo in the app, but this was removed because it did add complexity without much benefit compared to using Prisma Client and fetch. DevFit uses React hooks, TypeScript, and css-in-js. We did not find a need to use Redux.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Our infrastructure was just as innovative as our code. By starting the project using a <a href=\"https://nextjs.now-examples.now.sh/\">Zeit Next.js template</a>, we were able to deploy a production site before we even starting coding, within two minutes. <a href=\"https://zeit.co/oss\">Zeit</a> integrates seamlessly with GitHub. Zeit is a build and deploy system, and the Now CLI tool can be used to trigger Zeit builds. Zeit's GitHub integration also sets up automatic builds for pull requests and on pushing to master. The Now CLI tool <a href=\"https://zeit.co/docs/v2/build-step#adding-secrets\">has support for secrets</a>, so Zeit can handle setting up remote databases and other complex tasks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As an AWS certified solutions architect, I can tell you that working with Zeit and Now is much simpler and more ergonomic compared to using either the AWS CLI or using <a href=\"https://medium.com/ssense-tech/managing-and-deploying-aws-lambda-functions-with-sls-ab47d366b004\">SLS CLI</a> for serverless web projects.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href=\"https://www.elephantsql.com/\">Elephant</a> was another tool that we used. This tool provides a serverless PostgreSQL database-as-a-service feature. This tool launches a PostgreSQL database within 60 seconds and will begin accepting connections from your local machine or from a hosted application, like the DevFit instance we had on Zeit. Elephant is faster and less complex than making developers install databases locally. Elephant and Zeit both offer forever-free tiers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>What Should We Have Done Differently?</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Every hackathon team faces an optimization problem. The team can play to learn, play to play, or play to win. Our team struck a balance. For me, it leaned towards a learning exercise. We weren't finalists, but we did make it in front of the judges. We learned a ton. We were friendly, not too stressed, and most of us got several hours of sleep. Looking back, I don't think I would have optimized any differently.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>While I don't have regrets, I do have learnings, so what follows are some things I will do differently the next time around. My experience with Prisma Client and Next.js indicates that it's not feasible to split development into UI and back-end teams. Every developer is full-stack when developing with this architecture. That learning would lead me to set up an Elephant DB straightaway at my next hackathon, rather than spending hours working on mocking strategies.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If I wanted to optimize further on winning, I would not have recommended Next.js. I would have gone with a React or Angular UI and a plain Express server. I might have been open to Prisma, or I might have preferred something lighter weight like Sequelize or even <a href=\"https://www.npmjs.com/package/pg\">pg</a>, but it's likely that I wouldn't recommend having a database at all. Static JSON files can be used to build out an experience until it's nearly user-ready, then a real database can be added on later, with less tech debt due to schema change and migration. While Elephant was great, our team had substantial database connectivity issues when real users began to use our app. We hadn't set up a queuing system.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I didn't want to optimize further on winning this time, though. I'm extremely glad I learned about Prisma and some of the other technologies. One change I genuinely would have made would be to wrap up development an hour or two earlier and get into polishing a little sooner. We had build issues up to the last minute, and our finally-deployed version had at least one run time issue which could have been quickly fixed if we had been focusing on that a little sooner. I think 2-2.5 hours, rather than 0.5 hours, is about the amount of time a hackathon team of 4 developers should spend on polishing, including:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Getting PROD stable and deployed</li><li>Thinking through the demo</li><li>Staging data to facilitate the demo</li><li>Pen testing PROD a bit<ol><li>Assuming that the demo involves freely-ranging users. If the users are simply watching the developer give a guided tour, this is less important.</li><li>When we released our app to real users we quickly ran into connection limit issues</li></ol></li><li>Polishing up the look and feel</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>One thing we did very well was deciding the business case and technical architecture. Much of this stuff we began ideating on prior to the hackathon's formal start. This allowed us to focus on code much more than I have been able to in other hackathon experiences. One thing our team did will which allowed us to quickly decide those questions is that no one was particularly pushy with their ideas.</p>
<!-- /wp:paragraph -->