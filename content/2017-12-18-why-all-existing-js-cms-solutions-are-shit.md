---
title: "Why All Existing JS CMS Solutions are Shit"
date: 2017-12-18 15:00:34
author: John Vandivier
---



This article explains, in moderate detail, why I am starting to build an open source <a href=\"https://github.com/Vandivier/ng-express-cms\">Node + Express + Angular CMS, called NG Express CMS</a>.

The answer is that all existing alternatives are shit, so I need to make one from scratch.

<strong>1. Contents</strong>
<ol>
 	<li>Contents</li>
 	<li>Existing Angular Solutions
<ol>
 	<li>Why Angular CMS is shit</li>
 	<li>Why Butter CMS and Cosmic CMS are shit</li>
 	<li>Why Respond 6 is shit</li>
</ol>
</li>
 	<li>Existing Express Solutions
<ol>
 	<li>Why Ghost is shit</li>
 	<li>Why KeystoneJS is shit</li>
 	<li>Why Enduro is shit</li>
 	<li>Why ApostropheCMS is shit</li>
</ol>
</li>
 	<li>Why Express and not something else?</li>
 	<li>Why Angular and not React or Vue?</li>
 	<li>What exactly makes a non-shitty CMS anyway?</li>
</ol>
&nbsp;

<strong>2. Existing Angular Solutions</strong>

2.1 Why Angular CMS is shit

Because <a href=\"https://github.com/jonniespratley/angular-cms\">the fucking repo itself</a> says it's broken. It also requires Mongo. It uses grunt. I truly saved the best for last: It's not even Angular, it's AngularJS / 1.x. The <a href=\"https://www.npmjs.com/package/grunt-angular-templates\">grunt templating library</a> it uses is out of date.

2.2 Why Butter CMS and Cosmic CMS are shit

Tbh they are kind of cool, but they are expensive af. They are not open source and require monthly payments. Because of the whole money situation I haven't really used them, but since the back end is closed source I doubt they are extendable on the back end, and I'm not sure they have server side rendering.

2.3 Why <a href=\"https://respondcms.com/\">Respond 6</a> is shit

It's cool that it's open source, but the back end is PHP. Who even uses PHP? (Says dude on WP blog.)

Honestly, if you are going for Respond, why not go for WordPress? WordPress is cool, but again, it's PHP. I want a full-stack JS CMS.

&nbsp;

<strong>3. Existing Express Solutions</strong>

3.1 Why Ghost is shit

If you have a small, specific use case, Ghost is awesome, but this is exactly why it's shit. It uses markdown, not arbitrary HTML, for the UI. It uses Grunt, not Webpack. It Handlebars for templating, which means the front end templating engine is not integrated to state, giving you more syntax to deal with. It also means the back end and front end are not tightly integrated nor as modern as the most modern frameworks (Vue, React, and Angular).

To it's credit, it has <a href=\"https://themes.ghost.org/docs#section-behind-the-scenes\">partial server side rendering</a> and some other cool stuff.

3.2 Why KeystoneJS is shit

It doesn't work with SQL and it doesn't integrate with the latest frameworks. I dropped KeystoneJS when the CLI tool asked me this:

<img class=\"aligncenter\" src=\"https://dl-mail.ymail.com/ws/download/mailboxes/@.id==VjJ-zhOVwfpOTh9HolVHBf1U756ApxXl9SD46cYVM3C3TKStcMCIWR9rKbfKBys0PzRBGl2LEeEb8L4Fd0GBJs5fOA/messages/@.id==AFvT2goAADorWgO84Q7sUEcPegk/content/parts/@.id==2/raw?appid=YMailNorrin&amp;ymreqid=c3138fe7-1bd4-00cb-1c58-47202e01f100&amp;token=zitEzqOML3j84e6ealFTT5U7-km5qEQF52lp7AcCuBb2S81Fo1vJKrXsVbRfOK76GOYkH5hXUl8aEesoLyGhOdjzjO5rs5ukaGsdwtLw_7vhBLnz2bZQufgc5_eQwIX-\" alt=\"Inline image\" />

KeystoneJS Beta is super cool for one reason...They have re-written the admin UI to use React. This Beta is still not the official latest release, but like, why. It's a billion times better than v3.x.

Honestly, keep an eye out for this. Once Keystone is fully reactive, not just UI, it will be a contender. I still want it to be SQL-compatible, but I would rather hack an all-React Keystone to use SQL instead of building a competitor from the ground up.

As I said on this GitHub issue:
<blockquote>...Here's a big deal for ya, Keystone: Some contracts (eg multimillion dollar DOD contracts) are locked into web development without allowing DB change. Guess what? Legacy DBs are SQL.

Also, SQL definitely has its use cases. Any time data loss is unacceptable, full ACID is required (including complex, mult-doc transactions), or a well-defined schema will be utilized for heavy computation including aggregate statistical reports. Or, when you have a team of developers that no SQL and don't know NoSQL (say that 10x fast)

<a href=\"https://www.reddit.com/r/mongodb/comments/43m2om/how_exactly_does_mongodb_lose_data_and_is_it/\">https://www.reddit.com/r/mongodb/comments/43m2om/how_exactly_does_mongodb_lose_data_and_is_it/</a>

<a href=\"https://stackoverflow.com/questions/7149890/what-does-mongodb-not-being-acid-compliant-really-mean\">https://stackoverflow.com/questions/7149890/what-does-mongodb-not-being-acid-compliant-really-mean</a>

As a principle developer on such a DOD contract, the main reason I am not suggesting Keystone is SQL incompatibility. (also I'd like to see React in the public ui, not just admin ui, but that is minor and we would be able to mod that)</blockquote>
&nbsp;

3.3 Why Enduro is shit

It uses Handlebars for templating and AngularJS / 1.x. This is basically obsolete compared to using modern Angular (v4+), or Vue. (Or React + some state manager like Redux, Angular and Vue are much more similar to AngularJS / 1.x.)

It does have Gulp and Sass, which is pretty dope. I'd still rather see Webpack and Sass. It also has server-side rendering, but by not using the latest frameworks the server-side integration cannot very effectively share code, state, or build configuration with the UI.

&nbsp;

3.4 Why ApostropheCMS is shit

Nunjucks and Less? Wut? It's also NoSQL / Mongo. It also doesn't have full-stack React/Angular/Vue.

&nbsp;

<strong>4. Why Express and not something else?</strong>

I want to be able to develop the server and client using JavaScript and probably even sharing code or state. I need full stack JavaScript to get the most out of the JavaScript ecosystem. This includes build tools, server side rendering, and more. Having a full-stack JS CMS allows a developer to master the full stack by learning a single language, and it provides for easier configuration and maintenance. PHP will never be a client language, so full stack means it needs to be JS. As if that weren't already a nail in the coffin (it was), <a href=\"http://www.hostingadvice.com/blog/comparing-node-js-vs-php-performance/\">Node is also way faster than PHP</a>.

There are other Node server solutions, but <a href=\"https://www.slant.co/topics/389/~best-node-js-web-frameworks\">Express is the go-to in the community</a>. The other solutions do have some advantages, it's not like they're all shit. Koa, for example, is cool, but no one uses it. Why does it matter that no one uses it? Because there are no ready-made plugins, extensions, and integrations for other JS libraries. Express has a massive network effect, and in particular it has a ton of plugins for Angular and Webpack which I am using, and a ton of documentation on basically every use case. Lastly, I've used Express alot in the past and I love it.

&nbsp;

<strong>5. Why Angular and not React or Vue?</strong>

Finally, a good question. Actually I like all three options, and I like Angular the least among the three. So why Angular?

Because my company wants to use Angular, so I imagine I will be most skilled with it here shortly. I'm just picking the one I have the most skill in.

At the same time, I do have another project where I'm kind of doing <a href=\"https://github.com/Vandivier/rescopl\">a similar thing (rescopl) in Vue</a>, and once asynchronous components in React come out I will probably at least try that out.

&nbsp;

<strong>6. What exactly makes a non-shitty CMS anyway?</strong>

This is less a description of the perfect CMS and more a description of what I am building. What I am building is not shitty, but you can build other stuff without being shitty. What I am building:
<ol>
 	<li>Renders stupid fast because of Server-Side Rendering</li>
 	<li>Search Engine Optimized, also because of Server-Side Rendering</li>
 	<li>Built on the latest version of Express, the back end pillar of our JS ecosystem</li>
 	<li>Built on the latest version of Angular, one of the front end pillars of our JS ecosystem</li>
 	<li>Works with SQL and NoSQL</li>
 	<li>Free and Open Source</li>
 	<li>Does the CMS things: authentication, write, tag, save, schedule, publish, and modify with plugins.</li>
</ol>