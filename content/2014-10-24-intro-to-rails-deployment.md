---
title: "Intro to Rails Deployment"
date: 2014-10-24 00:39:38
author: John Vandivier
---



This article is targeted towards non-programmers and very junior programmers. It will quickly walk through some of the reasons you might want to deploy a rails-based website or web application and how to take some of those steps, along with various resources for learning ruby, rails, and other information which will help you deploy a rails application, with some information applying to deployment or web deployment writ large.
<p style=\"text-align: center;\"><strong>Why would I learn Rails?</strong></p>
<p style=\"text-align: left;\"><a href=\"http://en.wikipedia.org/w/index.php?title=Ruby_on_Rails&amp;oldid=628274045\">Rails is short for Ruby on Rails</a>. Ruby is a programming language, while Rails is a framework. What's the difference? Frameworks build on top of programming languages to do certain things more quickly or easily. In some cases frameworks can also introduce functionality which is not contained in the original language, but that is not the case for Rails. Ruby can do everything Rails can do and more, but it is extremely quick and easy to use Rails instead of Ruby when possible.</p>
<p style=\"text-align: left;\">So, you would want to learn Rails to do Ruby things more easily and quickly, which begs the question: Why would you want to learn Ruby? There are 3 answers imho:</p>

<ol>
	<li style=\"text-align: left;\">Ruby is a server-side scripting language, unlike Javascript, so there are many things Ruby can do which JS and other client-side scripting languages cannot do. Perhaps most important among these functions is the ability to interact with a database on the server to perform CRUD operations: Create, read, update, and destroy. <a href=\"http://stackoverflow.com/questions/5610333/how-to-query-database-using-javascript\">Read more here</a>.</li>
	<li style=\"text-align: left;\">Among server-side languages, Rails is particularly quick and easy to write. A competitor would include PHP, which is another server-side scripting language. PHP can do pretty much everything that Ruby or even Rails can do, and programs written in PHP generally perform slightly more quickly, but it is harder and takes longer to develop programs in PHP.</li>
	<li style=\"text-align: left;\">Other people use Ruby or Rails. Learning Ruby and/or Rails can get you a job, <a href=\"http://www.payscale.com/research/US/Skill=Ruby_on_Rails/Salary\">a very high paying job these days in fact</a>, it can allow you to understand how someone's code works, and it can allow you to modify programs written in those ways.</li>
</ol>
Personally, I learned Rails because of reason #3. There is a large program that I needed to slightly tweek. It would take me a long time to write the program in PHP, but only a short time to tweek it if I understood Rails. The tradeoff difference was so large that I actually had time to learn Rails, tweek the program, and learn a bunch of other things I'm about to talk about, and still save time compared to if I just re-wrote the thing.
<p style=\"text-align: center;\"><strong>How do I Learn Rails?</strong></p>
I recommend Codecademy, Code School, maybe a little Treehouse, Google, and Youtube, as well as the official documentation and StackExchange for help.
<p style=\"text-align: center;\"><strong>Learning Rails vs Deploying a Rails App</strong></p>
<p style=\"text-align: left;\">This part is really the main point this article. Learning Rails is different from learning how to deploy a Rails app. This was new to me. Previous languages I have learned include HTML, CSS, PHP, and Javascript. All of these can be used out of the box on a local machine with the use of notepad, or easily uploaded to any hosting company and then they basically became instantly available across the web. Not the case with Ruby. Let's discuss some important concepts:</p>

<ol>
	<li>Learning a language means that you can properly tell a computer what to do, but just like non-programming languages such as English, the thing you are talking to has to understand the language as well. Computers don't speak Ruby or Rails by default. You have to install Ruby and Rails, separately, like you might install a new desktop application.</li>
	<li>Deployment means making something available to an end user. When a website is deployed it means that someone can go to a URL and the website appears in their browser. When an app is deployed it means that people are able to use it.</li>
	<li>Installing Rails on a machine is an important step towards deployment, but deployment involves more than just installing Rails. As far as I know, for any language you need to install on a machine, there are more steps in deployment than only installing the language.</li>
	<li>Specific things you will need to learn about in addition to Rails in order to deploy a website or app:
<ol>
	<li>Hosting.
<ol>
	<li>Finding affordable hosting that performs the way you want.</li>
	<li>Installing Rails on a host server. High-end hosting plans including specialty app deployment hosting will have facilitated installs. Mediocre hosts will make you install through remote Command Prompt and/or SSL actions. Lower-end plans, such as as shared server hosting through GoDaddy, simply won't allow Rails installs or Command Line actions.
<ol>
	<li><a href=\"https://www.heroku.com/pricing\">Heroku</a> is an example of an app deployment specialty hosting service. <a href=\"http://stackoverflow.com/questions/4536326/heroku-free-account-limited\">They even have a free account for minimal performance</a>, but it won't allow you to do much before you hit a performance wall. For high-end plans you should be ready to pay through the nose.</li>
	<li>If you need help deploying via Command Prompt and/or SSL, these resources are a good starting point:
<ol>
	<li><a href=\"http://blowmage.com/2005/05/28/installing-ruby\">Installing Ruby on Shared Hosting</a></li>
	<li><a href=\"http://robmclarty.com/blog/how-to-setup-a-production-server-for-rails-4\">How to Setup a Production Server for Rails 4</a></li>
	<li><a href=\"https://www.youtube.com/watch?v=Td5bDIdorMU\">How to Access SSH Command Line in Windows </a></li>
</ol>
</li>
</ol>
</li>
	<li>Getting the files you need on the server onto the server. Start with a CMS like Wordpress then learn FTP with Filezilla or similar.</li>
	<li>Navigating a host back-end with CPanel or similar.</li>
	<li>Bonus: Buy a dedicated hosting server and learn how to run it yourself, without the need for a hosting company.</li>
</ol>
</li>
	<li>HTML, CSS, and Javascript.
<ol>
	<li>Bonus: Learn PHP, MySQL, and JQuery too.Domain names and zone files.</li>
</ol>
</li>
</ol>
</li>
</ol>
Learning all of the stuff I mentioned, without the bonuses, will probably take you about a year. I would recommend learning in this progression:
<ol>
	<li>Month 0: Learn basic wordpress on a Wordpress.com site.</li>
	<li>Month 3: Get a low-tier hosting account at GoDaddy. Learn about hosting, domain names, and the Wordpress CMS. The Wordpress CMS is more advanced when you have it on a hosting account compared to a Wordpress.com site, but they have many similarities as well so you will feel comfortable.</li>
	<li>Month 4: As you continue to learn Wordpress, begin learning about HTML, CSS, and Javascript from Codecademy. Try using Filezilla this month a couple times as well.</li>
	<li>Month 6: You should have a basic understanding of HTML, CSS, Javascript, and Wordpress. At this point you can jump into learning Ruby then Rails, or you can learn PHP, MySQL, or JQuery at this time. Learning the latter skills is a great idea, but assume it will take a couple extra months to do so.</li>
	<li>Month 8-10: Now you understand all of the basic languages you need to know, but you may not understand deployment very well or at all. Learn about deployment options and their costs. If you have the money, go for a facilitated deployment. If you don't, get ready to spend some time learning to deploy the hard way. During this time you should also make one or two small programs or scripts on your local machine to make sure you have a real understanding of building a unified program and you aren't just a Wordpress hacker.</li>
	<li>Month 12-14: You should be able to deploy a working app. It may be a stupid, useless app, but it should be deployed and accessable.</li>
	<li>Month 14+: Start building stuff that's more serious. Continue to educate yourself. Engage the community and get involved in open source projects. Build a portfolio. Maybe get a job or something.</li>
</ol>