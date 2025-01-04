---
title: "BibTex Troubleshooting"
date: 2020-02-02 12:31:37
author: John Vandivier
---



<!-- wp:paragraph -->
<p>I recently had trouble compiling citations into my LaTex document from a BibTex source. This article explains how I overcame the issues.</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>I use both TeXworks and VS Code with LaTeX workshop. To prevent possible incompatibility, I <a href=\"https://github.com/James-Yu/LaTeX-Workshop/wiki/Compile#auto-build-latex\">disabled autobuild</a> in LaTeX workshop.</li><li>Reduce my entire .tex file and bibfile to a single paragraph with a single citation.</li><li>Ensure only alphanumeric characters in my bibfile.</li><li>Follow the usual compilation pattern:<ol><li>Build TeXworks pdfLaTeX</li><li>Build TeXworks BibTex</li><li>Build TeXworks pdfLaTex twice more</li><li>There is a build logic to the above four-step series, but that isn't super relevant right now.</li></ol></li><li>If I run into issues, delete all my non-essential build files including .aux, .bbl, .log, .spl, .out, and so on. Start the compilation pattern over.</li><li>When I get a success, gradually introduce new bibfile citations or characters so that I can identify each problem one at a time.</li><li>In many cases I could <a href=\"https://github.com/Vandivier/research-dissertation-case-for-alt-ed/commit/8a2bea9d5e819f8ad65a487f159c5cfc6774f8e9\">escape troublesome characters</a>. In other cases I could get around it in other ways. For example, I the below url in one of my citations was giving me trouble:<ol><li> https://www.forbes.com/sites/ryancraig/2019/12/06/welcome-to-the-third-age-of-online-education/#7db6794b676c </li><li>I was able to overcome the problem by deleting the hashed portion of the url, as below, and the resulting url still correctly pointed to the intended source.</li><li> https://www.forbes.com/sites/ryancraig/2019/12/06/welcome-to-the-third-age-of-online-education/</li></ol></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Hope this helps! StackOverflow, Google, and <a href=\"https://latex.org/forum/viewtopic.php?t=5287\">the LaTeX forum</a> are other good resources for troubleshooting questions.</p>
<!-- /wp:paragraph -->