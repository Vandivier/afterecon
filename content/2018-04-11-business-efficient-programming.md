---
title: "Business-Efficient Programming"
date: 2018-04-10 21:04:04
author: John Vandivier
---



Efficient programming without qualification generally refers to programming which is technically efficient. <a href=\"https://wiki.scratch.mit.edu/wiki/Efficient_Programming\">Technically efficient code</a> optimizes performance while minimizing resource usage. That's not what this article is about. Efficient programming has a number of secondary meanings, and I'm talking about a specific secondary meaning which I call business-efficient programming. I'm here to tell you what that means, why you should care about it, and at least two strategies to improve this capability in the applications you develop.

Business-efficient programming is a programming approach which optimizes firm profit for the developing firm. A key strategy is to reduce labor costs while maintaining product quality and customer satisfaction. Another strategy would be to hold labor costs constant or even choose more expensive labor, in exchange for higher production value. Higher production value can mean higher prices which offset the higher costs and may drive higher profit. In theory, profit is optimized when marginal revenue equals marginal cost. The concrete realization of that general rule is highly context-specific and this article does not attempt to cover all possible cases, but the advice here is applicable to most modern programming firms.

Below are five things you can do today to improve the profitability of your firm. I will mainly drill further into the first three:
<ol>
 	<li>Utilize a modern high-level framework</li>
 	<li>Utilize component libraries</li>
 	<li>Utilize other <a href=\"https://en.wikipedia.org/wiki/Low-code_development_platforms\">low-code</a> solutions</li>
 	<li>Analyze everything
<ol>
 	<li>Monitor customer satisfaction</li>
 	<li>Monitor employee satisfaction</li>
 	<li>Monitor developer productivity</li>
 	<li>Test insourcing and outsourcing</li>
</ol>
</li>
 	<li>Utilize a <a href=\"https://clutch.co/cloud\">cloud provider</a>
<ol>
 	<li>Give serverless a try</li>
</ol>
</li>
</ol>
<strong>1. Utilize a modern high-level framework</strong>

Most modern firms are already doing this. Specifically, you should be using one of the Big 3: Angular, React, or Vue. Why use a modern high-level framework? Because modern high-level frameworks support components, which are a key driver of efficiency.

High-level frameworks contain APIs and conventions which allow developers to do most of the things most applications will require in a very short period of time. The Big 3 in particular are also well-known and commonly used in the development community. Because they are commonly used, there is a larger supply of developers who are familiar with these technologies. This drives down labor costs.

It also means more developers are contributing to Open Source initiatives using these projects. As a result, more documentation and example usage is available. A larger number of compatible libraries and components exist. Finally, a large number of developer tools exist to facilitate programming speed and quality. These tools include developer friendly features like:
<ol>
 	<li><a href=\"https://prettier.io/\">Formatting</a></li>
 	<li><a href=\"https://stackoverflow.com/questions/41428954/what-is-the-difference-between-hot-reloading-and-live-reloading-in-react-native\">Hot and/or Live Reloading</a></li>
 	<li><a href=\"https://en.wikipedia.org/wiki/Intelligent_code_completion\">Intelligent code completion</a></li>
 	<li><a href=\"https://eslint.org/\">Linting</a></li>
 	<li><a href=\"https://www.youtube.com/watch?v=xsSnOQynTHs\">Time traveling</a></li>
</ol>
<strong>2. Utilize Component Libraries</strong>

Most of the features needed by most applications have been previously developed. Developers can usually find applications, conventions, functions, and patterns around the web and re-implement them, tweaking them as needed, to develop most of whatever application they are working on. Components and component libraries simplify this process.

There is still some piecing together, but there is less. There is still some tweaking needed, but this is facilitated. You still need to look around, but you need to look in fewer places, and the things you find are integrated in a simpler, normalized way.

Here are some articles which lay out many of the best component libraries out there today:
<ol>
 	<li><a href=\"https://docs.google.com/spreadsheets/d/10n_OHtvs3t4ygc7QM61mP9e8OwK6BHjK7XNY4ff73c0/edit#gid=420664514\">Angular component libraries [Spreadsheet]</a></li>
 	<li><a href=\"https://blog.bitsrc.io/11-angular-component-libraries-you-should-know-in-2018-e9f9c9d544ff\">11 Angular Component Libraries You Should Know In 2018</a></li>
 	<li><a href=\"http://amexio.org/showcaseapp/v3/index.html#/menubar\">Amexio Angular Extensions</a></li>
 	<li><a href=\"https://blog.bitsrc.io/best-react-ui-component-libraries-for-2018-part-2-d231dcb04c0a\">Best React UI Component Libraries And Frameworks · Pt. 2</a></li>
 	<li><a href=\"https://github.com/brillout/awesome-react-components\">React Components &amp; Libraries</a></li>
 	<li><a href=\"https://blog.bitsrc.io/best-vue-js-ui-frameworks-and-component-libraries-part-2-4196628d58ae\">Best Vue.js UI Component Frameworks And Libraries part 2</a></li>
</ol>
You can also take pieces of your current projects and turn them into shareable components as discussed <a href=\"https://blog.bitsrc.io/how-to-easily-share-react-components-between-projects-3dd42149c09\">here</a>.

One important note: It's not enough to expose your developers to these component libraries. You will realize the most efficiency gains in your <a href=\"https://en.wikipedia.org/wiki/Systems_development_life_cycle\">software development life cycle</a> when your designers are referring to the same component libraries. It might even help for your testers to be familiar, as they could write test cases by component which apply to multiple applications or projects.

<strong>3. Utilize Other Low-Code Solutions</strong>

Why utilize an existing component when you could use an existing application? WordPress is an open source <a href=\"https://en.wikipedia.org/wiki/Content_management_system\">content management system</a> with tons of free or paid <a href=\"http://wordpress.org/plugins\">plugins</a> and themes. It can be used to form the basis of any website. Websites built with WordPress are often cheap and rapidly deployed.

Such websites often lack a custom look and feel. This can be modified by making minimal code changes to a WordPress application. The idea of taking a ready-made or almost-ready-made product and polishing it up with minimal code changes is called <a href=\"https://www.outsystems.com/blog/what-is-low-code.html\">low-code development</a>. These days there are also low-code development platforms which include GUI editors and other nice-to-haves, but those features are extraneous to the core business case for low-code development, and subscription to these platforms may result in a net cost.

Outsourcing can be seen as another implementation of low-code development. Outsourcing can refer to complicated third party contracting, or it can refer to something simple like paying someone on <a href=\"https://www.fiverr.com/\">Fiverr</a> to design wireframes. There is an obvious quality concern here, but I think many people will be surprised at the level of quality some freelancers can accomplish at low prices. This becomes a particularly attractive option if you don't have in-house designers, because freelancers are sometimes easier to work with than large third party corporations.

While I'm a huge fan of WordPress, the rhetorical question on why anyone would ever use a completely custom solution instead of a low-code solution does have some good answers:
<ol>
 	<li>Low-code solutions may be hard to extend or modify in certain ways.</li>
 	<li>Low-code solutions may be technically inefficient.</li>
 	<li>Low-code solutions may have a generic look and feel.</li>
</ol>
This means that low-code solutions are not always a good idea. The decision depends at least on your customer expectations, timeline, and in-house capabilities.

<strong>4. Analyze Everything</strong>

It surprises me that firms often employ developers who can automate, measure, and generate reports for just about anything, but the firm will only leverage those talents for clients and may tend not use such capabilities to optimize internal processes. Analyzing everything is obviously too much ground to cover in this article, but here are three specific steps to get you started:
<ol>
 	<li>Open a Survey Monkey account and regularly survey employees, customers, and site visitors about satisfaction and anything you think might influence satisfaction.
<ol>
 	<li>Employee dissatisfaction leads to expensive turnover and lower productivity.</li>
 	<li>Customer satisfaction means more sales.</li>
 	<li>Site visitor satisfaction means more sales.</li>
</ol>
</li>
 	<li>Use a project management solution to track productivity data.
<ol>
 	<li>I highly recommend the <a href=\"https://www.atlassian.com/enterprise/stack\">Atlassian stack</a>.</li>
 	<li>Developer might hate it, but businesses need to track developer productivity over time, and compare this with salary. Meritocracy is the way to business efficiency, but be sure that you aren't creating excess turnover costs for yourself.</li>
</ol>
</li>
 	<li>We talked about outsourcing earlier, but think about insourcing too.
<ol>
 	<li>As your firm grows, it may be cheaper to develop an in-house design capability instead of working with a third party.</li>
</ol>
</li>
</ol>
Take the data you gather and analyze it using regression analysis or other means. If you have a Python developer or, for whatever reason, an R developer in-house they may be able to do this for you. Otherwise look into getting <a href=\"https://www.theanalysisfactor.com/choosing-statistical-software/\">statistical software</a> such as STATA or SPSS.

<strong>5. Utilize a Cloud Provider</strong>

I run <a href=\"http://www.afterecon.com/\">a WordPress blog on GoDaddy shared hosting</a>. It's sad and I live a lie. Don't do what I'm doing.

It was a good idea back in 2010 when I started and I'm too lazy to switch right now. I will hopefully be switching over to AWS soon, and I recommend you do the same. Cloud providers in general and Amazon Web Services in particular offer amazing functionality at low prices. Like, <a href=\"https://aws.amazon.com/free/\">starting at free</a>.

One really cheap option is to implement a serverless architecture. Beware that serveless requires some technical know-how. <a href=\"https://medium.freecodecamp.org/serverless-is-cheaper-not-simpler-a10c4fc30e49\">Serverless architecture is cheap, not simple</a>. Fortunately, all Big 3 modern high-level frameworks mentioned above support server-side rendering. A slick way to run a serverless website is to execute a server-side build and upload the output dist folder to S3 using the simple <a href=\"http://s3browser.com/\">S3 Browser tool</a>.

If you want to try this in a quick way, clone the <a href=\"https://github.com/Vandivier/ella-framework\">Ella Framework</a> repository and execute <code>ng build</code>. This will execute a server-side build for a basic Angular application which you can then upload to S3.