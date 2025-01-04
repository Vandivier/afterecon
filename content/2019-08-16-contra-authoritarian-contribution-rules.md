---
title: "Contra Authoritarian Contribution Rules"
date: 2019-08-16 12:59:00
author: John Vandivier
---



<!-- wp:paragraph -->
<p>This article contains technical meta-guidance based on my personal experience. I haven't seen scholarly research for or against this guidance, but I would expect it to move in the same direction. This guidance is meant to be leveraged in general as a default best practice, but there may be times where exceptions are justified.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The guidance is that contribution rules should be moderately permissive in order to support high productivity and high code quality at the same time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To be moderately permissive means:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Not to allow anything demonstrably broken, demonstrably bad for user experience, misaligned to product intent, or demonstrably insecure to be merged.</li><li>Not to withhold anything which fulfills required intent while meeting the above rules.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>It's obvious that overly permissive rules allow harm. The non-obvious fact is that overly authoritarian rules also cause harm. If no pull requests are merged then no features will ship. Reducing the feature stream to customers harms both the customer and the business. This is why the perfectionist developer is a terrible developer, and the perfectionist team will not be long employed. Productivity and pragmatism rule in the real world. Perhaps your entire company doesn't see this. Perhaps your entire company is due for a rude awakening.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Examples of under-permissive rules:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Comment regulation</li><li>Naming regulation for variables, functions, and other entities.</li><li>Syntax preference between isomorphic expression implementations</li><li>Complexity regulation</li><li>Whitespace regulation</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Under-permissive rules are not bad rules. It is good to prefer well-formatted, readable code with consistent naming and so on. However, these are all fixes which can be made after merging. Code which is admissible under moderate permissibility guidelines, but not admissible under strict or under-permissive rules may be regarded as a good work in progress, or a good WIP.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Many WIPs are bad, but some WIPs are good. Let's not throw the baby out with the bathwater. The policy of never merging a WIP at some level is a policy of never merging, because all tip-of-tree code can be considered a WIP towards a longer vision. Sure, technically broken or dangerous WIP code should not be merged, but good WIPs should be merged. This isn't even a new policy. Every pull request which has ever been merged, outside of end-of-life changes for deprecated and dead projects, has been a good WIP.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Not all under-permissive or strict rules are authoritarian. Authoritarian rules are a special subset of under-permissive rules. An authoritarian rule means only one implementation will be allowed. If even two different implementations are acceptable, the rule set is permissive rather than authoritarian, even if the level of permissiveness is quite low.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Examples of authoritarian rules include:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Hungarian notation is banned or required.</li><li>Comments are banned, or all comments must be formatted according to <a href=\"https://github.com/jsdoc/jsdoc\">jsdoc</a>.</li><li>Modules may only export classes.</li><li>Functions must be written in arrow syntax.</li><li>Class members must always use the public or private keyword.</li><li>Class members must use the private keyword when required, but public members must use the implicit form.</li><li>Functions which are class members may not be arrow functions, but functions which are not class members must be arrow functions. Arrow functions must not use the keyword <code>this</code> and non-arrow functions must specify a value for <code>this.parent</code>.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Notice that the above authoritarian rules are not even all bad. Good authoritarian rules have a productivity cost and a consistency benefit. Not all authoritarian rules are good. Rule 7 is an example of a bad authoritarian rule. It specifies the implementation, but in doing so it systematically generates inconsistency and complexity. Consider the preferred rule below:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>All functions must be arrow functions.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>That rule is more consistent, simpler, easier to remember, and easier to support with a programmatic remediation program.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In conclusion, an idealized process is moderately permissive. Beneficial rules are sometimes strict, or even authoritarian, but such rules should generate follow-on requests to a PR which complies with moderately permissive rules. Strict or authoritarian rules should not generate productivity-blocking PR closure, delay, or extraneous complexity. Tool support is often a way to achieve the benefits of strict rules without the productivity costs, and because style rules are often new and emergent, implementing tool support for rules after merging a good WIP will lead to less blockage compared to requiring tool support or remediation prior to merging.</p>
<!-- /wp:paragraph -->