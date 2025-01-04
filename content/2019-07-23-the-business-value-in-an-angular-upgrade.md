---
title: The Business Value in an Angular Upgrade
date: 2019-07-23 16:02:27
author: John Vandivier
---



<!-- wp:paragraph -->
<p>This article focuses on communicating the business value obtained through a migration from AngularJS to Angular is on expressing the business value of this change.&nbsp;A socratic approach is taken by imagining a business analyst asking the following five questions:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>What is Angular and why do we need it?</li><li>Weren't we already using AngularJS? Isn't that the same as Angular?</li><li>If Angular is so much better than AngularJS, why didn't we use the former to start with?</li><li>Are there alternatives to Angular? What are the comparative pros and cons?</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>I then have a few articles giving business or financial value measurements to latency, or site speed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>1 - What is Angular and why do we need it?</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Angular is a JavaScript framework. A framework is a set of libraries, plus conventions about how to use those libraries together, which serve to solve a wide set of related technical issues.</li><li>Web applications leverage three programming languages in order to present an experience to an end user in the browser. Browsers obtain CSS, HTML, and JavaScript files which ultimately work together to present the whole experience. You might say, \"Doesn't my website use image files like JPEG, media files like MP3s, and so on?\" The answer is sure, but those resources are enabled by one or more of the three web languages: HTML, CSS, and JavaScript.</li><li>CSS and HTML are specialized and simple. They mainly handle the way the page appears. JavaScript is general purpose and complex. It's primary purpose is to handle logical operations and dynamic handling in the browser, but it so general purpose that you can technically handle almost all of the appearance, or presentation, in JavaScript as well if you chose to.</li><li>The combination of freedom and complexity in JavaScript is both powerful and dangerous. It can create knowledge and norming issues where different developers are doing things in very different ways, so it becomes hard for them to understand one another and work together to solve bugs or implement new features. Ultimately you get a lower velocity and a higher risk of defects. This is the problem that frameworks solve.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>2 - Weren't we already using AngularJS? Isn't that the same as Angular?</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Better support for technical issues.<ol><li>AngularJS is reaching end of life, so formal support will end.</li><li>The library is dated, so much of the online documentation is also outdated.</li><li>This includes easier upgrading, in part due to better AST support.</li><li>TypeScript prevents the majority of run time issues encountered during development.</li></ol></li><li>Better recruiting story. Developers want to work in the latest tech.</li><li>Better implementation velocity.<ol><li>Tools create components for you with free minimal unit testing.</li><li>Webpack 4 facilitates the use of a ton of build plugins.</li><li>Easy third party component integration</li><li>Abstract Syntax Tree (AST) Transformations are first-class citizens called schematics, and third party schematics are also easy to use. This is basically a pattern to programmatically rewrite the application, so it helps automate even major code changes.</li><li>Some things which aren't part of Angular per se, but a migration efforts allows us: Refactoring to a better architecture, state management, and so on.</li></ol></li><li>Progressive web app support (requires next steps). <ol><li>Responsive applications allow you to change the application to accommodate different screen sizes.</li><li>In a similar way, PWAs allow you to change the application to support differently performing client devices and network conditions, up to an including fully offline support.</li></ol></li><li>Performance improvements (requires next steps)<ol><li>The compiler is better, meaning the minified code rules are advanced to deliver even smaller payloads, supporting even more modern and complex features, built in less time.</li><li>Lazy loading is a first class citizen in Angular.</li><li>Complex build and loading operations like chunking and tree shaking allow clients to load the minimum resources needed for a given view, with minimal implementation complexity.</li><li>Server-side rendering and static building / prerendering are implementable with official support. AngularJS required unofficial hacks.</li><li>The Angular framework itself executes <a href=\"https://www.stackchief.com/blog/angular%20vs%20angularjs%20%7C%20key%20differences,%20performance,%20and%20popularity\">up to 5x faster than AngularJS</a>. Note that this is not what we expect to see as it is attenuated by API, non-API HTTP, and third party logic. CloudFront will also do much more for a web app than this upgrade will.</li></ol></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>3 - If Angular is so much better than AngularJS, why didn't we use the former to start with?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Angular (version 2) was released in September 2016, and it was not widely considered a good upgrade candidate until Google had conducted several non-breaking version increments by mid to late 2017.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>4 - Are there alternatives to Angular? What are the comparative pros and cons?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Yes. There are <a href=\"https://en.wikipedia.org/w/index.php?title=Comparison_of_JavaScript_frameworks&amp;oldid=905254587\">tons of JavaScript frameworks</a>, but the top 3 are typically identified as Angular, React, and Vue. Usage declines significantly even among just these top 3, and usage is a major factor of selection because it impacts the key advantages of any framework:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Documentation</li><li>Open source code</li><li>Hiring effects</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>A recent Indeed job search for Vue turned up about 3500 positions, while Angular turned up about 15000. Effectively Angular and React are the go-to choices, and upgrading from AngularJS to Angular is generally much easier than upgrading from AngularJS to React, simply due to framework similarity.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Another concern about React is that it doesn't achieve the same level of standardized application solving compared to Angular. <a href=\"https://reactjs.org/\">The React home page</a> identifies React as a library for building user interfaces, rather than a framework. This leaves many segments of a typical commercial application unaddressed. Examples include state management and http request solutions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The React ecosystem has diverse practices around these, while the Angular ecosystem has relatively strictly defined best practices on the same concerns. There are advantages to either ecosystem, but the word on the street is that Angular is a win overall for scaled commercial applications and large teams.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That's it for the four questions! Here are some articles showing the financial benefit for improved site speed metrics:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li><a href=\"https://www.gigaspaces.com/blog/amazon-found-every-100ms-of-latency-cost-them-1-in-sales/\">Amazon Found Every 100ms of Latency Cost them 1% in Sales</a></li><li><a href=\"https://www.machmetrics.com/speed-blog/how-does-page-load-time-affect-your-site-revenue/\">How Does Page Load Time Affect Your Site Revenue?</a></li></ol>
<!-- /wp:list -->