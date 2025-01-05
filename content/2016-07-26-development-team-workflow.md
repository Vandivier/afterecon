---
title: "Development Team Workflow"
date: 2016-07-26 14:19:56
author: John Vandivier
---



This article is a basic overview of the workflow of a professional application development team.
<ol>
 	<li>Receive requirement
<ol>
 	<li>This would classically come in the form of written Acceptance Criteria and/or test cases</li>
</ol>
</li>
 	<li>Understand requirement
<ol>
 	<li>EOE, delivery schedule, and other planning is involved here</li>
 	<li>Research may be involved if the feature involves a new or unknown implementation pattern.</li>
 	<li>This phase is not done until the intended implementation pattern is known and planned.</li>
</ol>
</li>
 	<li>Develop solution to that understanding
<ol>
 	<li>Development workflow may include separate environments such as local, development, testing, and production environments.</li>
 	<li>A network-oriented or web-based solution is not developed or tested until after is has been verified in a server-deployed environment. A local machine doesn't count.</li>
 	<li>Integration with other developers is key: Use version control and test before pushing to other developers or the server.
<ol>
 	<li>Git is a great tool for this for many reasons, but two key reasons are the ability to do a local backup without broadcasting the change, and easy branching and merging.</li>
</ol>
</li>
</ol>
</li>
 	<li>Peer review
<ol>
 	<li>After completing a solution, or even simultaneously (<a href=\"https://en.wikipedia.org/wiki/Pair_programming\">peer coding</a> ftw), it is a good practice to do a peer review.</li>
 	<li>Peer review catches bugs, allows for optimization, and allows knowledge sharing with others about the new codebase.</li>
 	<li>A proper peer review is not only a code review but also a functional review or demonstration. Developers should be familiar with the technical flow and use flow or scenario.</li>
</ol>
</li>
 	<li>Test the solution
<ol>
 	<li>This includes all kinds of testing: Regression, unit, functional, automated, integration, etc.
<ol>
 	<li>Regression testing: Make sure nothing that was previously functional stopped working.</li>
 	<li>Unit testing: A small, automated test. Usually it is run as part of a build process. Usually a function or module tests itself to ensure internal validity.</li>
 	<li>Functional testing: A person tries using the product and compares observations to expectations to ensure the desired user experience.</li>
 	<li>Automated testing: A good automated testing solution can mock functional testing with a testing algorithm that simulates clicks around the operating system. So it's like a functional test, except no human is involved. <a href=\"https://smartbear.com/product/testcomplete/overview/\">TestComplete</a> is an example if an automated testing solution.</li>
 	<li>Integration testing: When you take code built in one environment and test it in another environment. This is key for web and network solutions, where code is usually built on a single machine but it must be tested on a server or in a network-accessed environment.</li>
</ol>
</li>
</ol>
</li>
 	<li>Send for Acceptance Testing
<ol>
 	<li>This is sort of part of #4 as it is testing, but it is the last stage of testing: All other tests should be verified before this one.</li>
</ol>
</li>
 	<li>Iteratively improve until the feature is complete and stable.
<ol>
 	<li>Yes, iteratively indicates the use of Scrum and Agile. Agile is preferred practice for most IT development teams.</li>
</ol>
</li>
</ol>
&nbsp;