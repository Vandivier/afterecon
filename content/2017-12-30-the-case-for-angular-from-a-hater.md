---
title: The Case for Angular, from a Hater
date: 2017-12-29 19:57:55
author: John Vandivier
---



<p class=\"graf graf--p\">I am an Angular hater, although less and less so each day. This article discusses why someone like me would recommend a commercial application be written in Angular.</p>
<p class=\"graf graf--p\"><strong class=\"markup--strong markup--p-strong\">1. What Was the Problem?</strong></p>
<p class=\"graf graf--p\">Why don’t I like Angular? I looked into it when version 2.x first came out and compared it to alternatives. I consider the alternatives to Angular to be React, Vue, and AngularJS / 1.x. I preferred React because:</p>

<ol class=\"postList\">
 	<li class=\"graf graf--li\">It was more performant</li>
 	<li class=\"graf graf--li\">The view and logical layers were highly decoupled, and Redux is optional</li>
 	<li class=\"graf graf--li\">Typing is optional and decoupled, but when <a class=\"markup--anchor markup--li-anchor\" href=\"https://news.ycombinator.com/item?id=11844574\" target=\"_blank\" rel=\"noopener\" data-href=\"https://news.ycombinator.com/item?id=11844574\">Flow is added it actually catches things TypeScript misses</a></li>
</ol>
<p class=\"graf graf--p\">I preferred AngularJS because it was established and ez mode. I preferred Vue because it is an easy transition from AngularJS.</p>
<p class=\"graf graf--p\">I didn’t like Angular because it required learning TypeScript. Yes, it did. No, you cannot make it through normal app development using ES2015+. The tutorial allows it, but the larger community does not. I didn’t like that Angular requires a full-stack build process with transpilation. I didn’t like the overly verbose and non-intuitive syntax. To be honest, I really didn’t like that Microsoft’s name was within earshot (I had been developing some Visual Basic around that time…yuck…)</p>
<p class=\"graf graf--p\"><strong class=\"markup--strong markup--p-strong\">2. Why the Change?</strong></p>
<p class=\"graf graf--p\">First, I haven’t fully changed my mind. I still do not see Angular as better than Vue or React. I see them all as more or less equal. I do think React has an edge in architectural decoupling and performance, and I do think Vue has an advantage in simplicity.</p>
<p class=\"graf graf--p\">Angular has an edge when you know you are building an application for scale, and you are willing to put up with a heavy, opinionated framework in order to get all the bells and whistles in a standard way.</p>
<p class=\"graf graf--p\">For commercial applications, though, I am now using Angular. Things have changed in the library itself and in the community. It’s faster at run time, build time, and development time. The community is larger and documentation is better. More integrations and plugins exist.</p>
<p class=\"graf graf--p\">Another major factor in commercial application: Clients, managers, and other near-IT-but-still-not-technical folks love it. The fact that Angular 5, or for that matter Angular 2, is completely different from AngularJS / 1.x is lost on many of them, but this works to the developer’s advantage.</p>
<p class=\"graf graf--p\">While clients and PMs are afraid to try the “new and unstable” (so they think) React and Vue, they are happy to trust Angular. They’ve been using it for years! Sure, they used 1.x, but we’re just talking about a new version, right? No big deal.</p>
<p class=\"graf graf--p\">Here is my specific recommended toolchain, summarized. Specific reasons are after the summarized list.</p>
<p class=\"graf graf--p\"><strong class=\"markup--strong markup--p-strong\">Summary Toolchain</strong></p>

<ol class=\"postList\">
 	<li class=\"graf graf--li\">Angular Universal</li>
 	<li class=\"graf graf--li\">Bootstrap</li>
 	<li class=\"graf graf--li\">Express</li>
 	<li class=\"graf graf--li\">Webpack</li>
 	<li class=\"graf graf--li\">TypeORM</li>
</ol>
<p class=\"graf graf--p\"><strong class=\"markup--strong markup--p-strong\">Angular Universal</strong></p>

<ol class=\"postList\">
 	<li class=\"graf graf--li\"> Is a logical framework. A logical framework is required because the client requirement involves state management.</li>
 	<li class=\"graf graf--li\">Is an opinionated single-language framework to address front end and back end concerns. Therefore, it facilitates developer productivity and reduces developer lock-in.</li>
 	<li class=\"graf graf--li\">Is maintained by Google and widely used. Therefore, it is relatively future-proof and well documented.</li>
 	<li class=\"graf graf--li\">Leverages server-side rendering. Therefore, it is more performant and optimized for search engine (SEO) or other programmatic observation.</li>
 	<li class=\"graf graf--li\">Leverages TypeScript. TypeScript is a superset of JavaScript which enables static typing and additional features. These features can drive down the frequency of unexpected errors.</li>
</ol>
<p class=\"graf graf--p\"><strong class=\"markup--strong markup--p-strong\">Bootstrap</strong></p>

<ol class=\"postList\">
 	<li class=\"graf graf--li\">Is a UX framework. A UX framework is required because the client requirement involves responsive design.</li>
 	<li class=\"graf graf--li\">Is the most widely used UX framework. Therefore, it is well maintained and documented. In addition, the UX and development teams have a single point of reference because they are both familiar.</li>
</ol>
<p class=\"graf graf--p\"><strong class=\"markup--strong markup--p-strong\">Express</strong></p>

<ol class=\"postList\">
 	<li class=\"graf graf--li\">Is a JavaScript server. A JavaScript server is required because the proposed architecture includes a Node-based middleware layer.</li>
 	<li class=\"graf graf--li\">Is the most widely use Node server framework. Therefore, it is well maintained and documented.</li>
 	<li class=\"graf graf--li\">Exposes an extension system which is widely used. This allows fast developer implementation of many requirements in a standard way.</li>
</ol>
<p class=\"graf graf--p\"><strong class=\"markup--strong markup--p-strong\">Webpack</strong></p>

<ol class=\"postList\">
 	<li class=\"graf graf--li\">Is a JavaScript bundler and task runner, and it is also considered a build system or build tool. A build system is required to compile TypeScript, apply linters, automate testing, and otherwise ensure high-quality code and facilitate developer productivity.</li>
 	<li class=\"graf graf--li\">Is the third most widely used build tool, but the highest rated JavaScript bundler <a class=\"markup--anchor markup--li-anchor\" href=\"https://www.slant.co/topics/3900/~frontend-javascript-module-bundlers\" target=\"_blank\" rel=\"noopener\" data-href=\"https://www.slant.co/topics/3900/~frontend-javascript-module-bundlers\">according to Slant</a>. It also has more GitHub stars than Gulp or Grunt</li>
 	<li class=\"graf graf--li\">Is recommended for use with Angular Universal by the Angular team. The Angular CLI tool provides a basic application architecture with Webpack implemented.</li>
</ol>
<p class=\"graf graf--p\"><strong class=\"markup--strong markup--p-strong\">TypeORM</strong></p>

<ol class=\"postList\">
 	<li class=\"graf graf--li\">Is an object-relational mapping (ORM) library written in TypeScript. An ORM exposes a high-level API for database CRUD operations. A TypeScript ORM is required to improve maintainability and facilitate developer productivity.</li>
 	<li class=\"graf graf--li\">Is written in TypeScript. This allows easy integration with the Angular Universal build and run time processes.</li>
 	<li class=\"graf graf--li\">Allows <a class=\"markup--anchor markup--li-anchor\" href=\"https://confluence.atlassian.com/bamboo/what-is-configuration-as-code-894743909.html\" target=\"_blank\" rel=\"noopener\" data-href=\"https://confluence.atlassian.com/bamboo/what-is-configuration-as-code-894743909.html\">configuration as code</a>. This facilitates integration, maintainability, and documentation.</li>
 	<li class=\"graf graf--li\">Maintainability is improved because changes are simpler to make, written in one language, and configured in one location.</li>
 	<li class=\"graf graf--li\">Documentation is improved because documentation, ERDs, and more, can be automatically generated at build time using an integrated system.</li>
</ol>