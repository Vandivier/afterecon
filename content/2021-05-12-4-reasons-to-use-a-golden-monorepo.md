---
title: 4 Reasons to Use a Golden Monorepo
date: 2021-05-11 23:53:01
author: John Vandivier
---



<!-- wp:paragraph -->
<p>This article describes a programming pattern I call a Golden Monorepo and gives four reasons for thinking it is a useful pattern for software companies.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>I. What it Means to be a Software Company</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I mean a company that produces new software applications at a significant and regular cadence, and expects to continue doing so for at least the next year and ideally into the foreseeable future. The Golden Monorepo is an enhanced component library design, so it involves significant upfront work. I advise you to run some numbers up front to ensure that you are the type of company or team that is organized in such a way as to realize meaningful return on this investment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I<strong>I. What it Means to be Golden</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Golden software is model software. Software companies maintain various applications and application components with varying levels of quality. Golden software can be declared at various levels of abstraction, and perhaps the highest level of useful abstraction is the application level. The application at your company with the highest level of code quality is your company's golden application.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You could lower the level of abstraction and distinguish between golden servers, golden database architectures, golden client architectures, golden dockerfiles, and so on. Golden AMIs, for example, are defined by AWS as \"an AMI that contains the latest security patches, software, configuration, and software agents that you need to install for logging, security maintenance, and performance monitoring.\" It is a best practice for secure cloud software companies to organize an architecture group that maintains Golden AMIs for others in the company to use.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You could distinguish all of those things, but I think you shouldn't. I think you should strive to have a single application that is a gold application, rather than several applications that have golden pieces. Why? Because the full-stack architecture itself varies in quality and your organization should have some go-to full-stack architecture. To identify all of the golden pieces without identifying a golden full-stack architecture is to obtain less than maximal gold, and we don't want that do we?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>III. What it Means to be a Golden Monorepo</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A golden monorepo is golden, as defined above, and it is also a monorepo. A monorepo is a single code repository that houses all of the code needed to deploy an application. Specifically, it should include client code, server code, database seed and migration code, and code for testing all of those things. I would also include project-specific developer tools when feasible. It's nice for a developer to be able to clone a single repo and start working.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I also think your repository should be a git repository, and you should choose a git repo platform that enables pull request, merge, and other lifecycle triggers for automated review and quality control. By implementing all of these fancy tools on a single Golden Repository, greenfield applications can rapidly copy the implementation and get major value for little cost.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When I refer to the Golden Monorepo pattern, here's the secret sauce: The golden application becomes a component library. UI Component libraries are the most recognizable sort, but back-end component libraries are things too. You can think of a plugin library as a back-end component library.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>My suggestion is: If you are a software company, you should have component libraries, and where better to derive reusable components than from your golden application? By construction, there is no better component source.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Some developers will suggest that a component library should exist external from any particular software application, but I disagree. Here are the four reasons that you should use the Golden Monorepo pattern:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Your core library team and your top UI dev team never argue about code, patterns, ownership, and so on, because they are the same team.</li><li>The core library is well-maintained because the golden repository is high velocity and receives peer review by the top developers in the firm.</li><li>Greenfield projects don't have to decide between using the official component library and using proven patterns from a working application, because the golden application already uses the official component library.<ol><li>It's a one-stop-shop because the golden pieces aren't scattered across other repositories.</li></ol></li><li>The component library is probably rigorously tested in a complex real-world context.<ol><li>The library should be tested using automated functional testing in the golden application's end-to-end tests.</li><li>I would also suggest that you use <a href=\"https://storybook.js.org/\">Storybook</a> for UI libraries and <a href=\"https://www.cypress.io/\">Cypress</a> for automated functional testing of your components in the real application context.</li><li>It's not certainly the case, but it is probably the case that the golden application is complex because high-value applications typically get high business priority, high business priority typically means the best engineering talent, and high-value applications are typically complex. So to be clear, a toy app with very clean code doesn't qualify as a golden app.</li><li>In-context testing is important because components can conflict with one another in a variety of ways that are hard to observe with isolated testing. Differences arise from varying CSS positioning rules, display rules, margins, scrolling, logic-based style, and possibly for other reasons.</li></ol></li></ol>
<!-- /wp:list -->