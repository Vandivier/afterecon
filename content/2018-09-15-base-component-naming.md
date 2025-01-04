---
title: "Base Component Naming"
date: 2018-09-15 08:54:34
author: John Vandivier
---



<!-- wp:paragraph -->
<p>Say I have a project called <a href=\"https://github.com/Vandivier/react-report-maker\">React Report Maker</a> and it has a report component. Components should be super generic right? So I should probably just call the containing file report.js right? Wrong.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Generic components are great but if they are truly generic we should expect they will be reused in multiple applications. If you are an awesome developer you will have multiple workspaces open simultaneously in your VS Code, Eclipse, or other IDE. If your awesome, reusable report.js is included in multiple workspaces, this is when you stub your toe.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Instead, adopt a project short name convention. React Report Maker could be abbreviated RRM. You might have a JIRA project which you can name RRM and this can be associated with Bitbucket Repos using RRM and you can create branches like rrm-* which Atlassian will be smart enough to realize is a reference to JIRA project when it's referenced in Bitbucket commit messages, branch names, or Slack messages, etc.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Since you are going to be using this project short name when talking to people, and in every other app, it becomes a perfect prefix to your reusable component. That's right, your reusable component should be named in a non-reusable way. It's bad to call things report.js. It's good to call things like rrm-report.js This way when I search across my workspace for a file, I can easily and correctly find the correct report.js I care about instead of bringing up like 10 and guessing or having to dig deeper to be sure which one it is. Protip: <code>ctrl + p</code> in VS Code does this, and it's great.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now, you bring up a good point. What about the one, true, best-practice-example of report.js? Within RRM, report.js might have to be tweaked for use. Within ABC, DEF, or GHI, those report.js might be slightly different. So you want to implement base-report.js which is your cleanest go-to version of the report component for your next project. Oh wait! We already answered the question! For the use case of reference code I prefer the convention of calling something <code>base</code>. <code>base-report.js</code> is the generic form of report. When I implement base-report within some application I rename the component folder, html, js, and other stuff if needed, by replacing <code>base</code>with the project abbrevation, such as <code>rrm</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I also do this within the component itself. So <code>BaseController</code> is a generic reference class, and <code>RmmController</code> is the BaseController implementation within RMM. You could be extra cool and upload BaseController to NPM then install it and extend it as an abstract class into <code>RmmController</code>, but sometimes that's a little complicated, indirect, time-consuming, or simply not allowed at your company. So copying, pasting, and modifying the reference code is sometimes better, simpler, quicker, etc, and that's what I usually end up doing.</p>
<!-- /wp:paragraph -->