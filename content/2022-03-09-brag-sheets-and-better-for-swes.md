---
title: "Brag Sheets and Better for SWEs"
date: 2022-03-09 15:32:27
author: John Vandivier
---



<!-- wp:paragraph -->
<p>This article will describe an artifact called a brag sheet, ways that a software engineer can use a brag sheet to enhance their career development, and then I will describe a purpose-built tool called <a href=\"https://github.com/Vandivier/starboi\">starboi</a> that I prefer to the classic brag sheet for essentially the same use cases.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What is a Brag Sheet?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A brag sheet or brag document is simply a compendium of useful talking points, anecdotes, and achievements. Various people issue a variety of guidelines on the specific way to create this document, but I will point you to the below two resources as a benchmark:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li><a href=\"https://cultivatedculture.com/brag-sheet/\">\"How to Create a Brag Sheet that Will Get You Recommendations,\"</a> Austin Belcak, Cultivated Culture</li><li><a href=\"https://www.reddit.com/r/ExperiencedDevs/comments/h972k3/keep_a_brag_document/\">\"Keep a Brag Document,\"</a> u/ibsurvivors, 2020<ol><li>Note: This post in turn refers to the useful \"Get your work recognized: write a brag document\" by Julia Evans</li></ol></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>5 quick guidelines for creating a brag sheet that broadly complies with the specification under the above articles:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Update every 1-2 weeks.</li><li>Share your updated brag sheet with your manager on a quarterly basis to assist them in performance review activities.</li><li>A year's worth of wins should easily fill a single page, and it may grow up to ten pages (I personally consider that far too lengthy, but this is the advice given above).<ol><li>A single entry should only span one or two paragraphs, or 3-5 bullets if formatted using a bulleted list.</li><li>Once you exceed two pages, begin prioritizing high impact or high quality achievements in lieu of a large volume.</li></ol></li><li>Entries should include ways that you have helped other people, contributions to features, contributions to documentation, positive remarks from coworkers about your contributions, and important skills that you have gained or things that you have learned.</li><li>Entries may include things that you have done outside of work. Blogging, open source work, attending and learning or talking at conferences, and other activities that may represent value to your employer are all welcome.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>5 Ways to Leverage a Brag Sheet for Career Acceleration</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>At your current company, anecdotes will internally help you at performance review time.</li><li>At your current company, anecdotes can be used externally to facilitate recruitment (basically when you're trying to get people to join your team, you can impress them by sharing anecdotes)<ol><li>In turn, recruiting for your company is a way for you to establish prestige and influence and bodes well for performance review and advancement.</li></ol></li><li>Outside of your current company, anecdotes can be used at interview time, and for behavioral interview rounds in particular this is a powerful tool.</li><li>Outside of your current company, anecdotes can be used for personal brand building, public speaking, giving conference talks, thought leadership writing, and social media content creation.</li><li>Possibly for other stuff too :) explaining what you do in an elevator, to your parents and friends, at a party or other event, etc?</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>On Starboi</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href=\"https://github.com/Vandivier/starboi\">Starboi</a> is an anecdote organizer that follows both the <a href=\"https://www.amazon.jobs/en/landing_pages/in-person-interview\">STAR</a> method and the SOAR method. These methods are optimal response patterns for Big Tech behavioral interview questions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Starboi is a component of the <a href=\"https://github.com/Vandivier/ladderly-slides#interview-prep-stack\">Ladderly Interview Prep Stack</a>. Here is a comparison of advantages between Starboi and the Classic Brag Sheet:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>As alread stated, Starboi organizes anecdotes according to the STAR and SOAR methods, which are optimal response patterns for behavioral interview questions.</li><li>Rules for constructing and organizing the Classic Brag Sheet are ambiguous, while rules within Starboi are not only clear but also programmatically guaranteed and often automated.</li><li>Starboi allows easy import and export of anecdotes including bulk import and export.</li><li>Starboi allows easy re-sorting, prioritizing, and filtering of anecdotes.<ol><li>As an example of why this is valuable, imagine that you are interviewing at a fintech, so you would like to quickly pull up anecdotes tagged with \"#fintech\"</li></ol></li><li>Starboi anecdotes follow a structured data format which allows for easier technical processing and utilization of anecdote data.</li><li>Starboi is open source software, which has it's own pros and cons:<ol><li>Pro: If interest grows, many advanced features can be built-in<ol><li>An example of future features that would be possible given sufficient community support: The ability to share anecdotes with the community, receive edits, comments, feedbacks, and ratings.</li><li>As a software engineer, feel free to contribute! This is a substantial project and contributing would be viewed very positively by a prospective employer.</li></ol></li><li>Con: If you would like to customize your brag sheet in some way, it may be more difficult to do with Starboi compared to your own text document</li></ol></li></ol>
<!-- /wp:list -->