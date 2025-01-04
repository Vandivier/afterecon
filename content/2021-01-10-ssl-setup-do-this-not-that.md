---
title: "SSL Setup: Do This, Not That"
date: 2021-01-10 11:16:15
author: John Vandivier
---



<!-- wp:paragraph -->
<p>I recently added SSL to this website. I've also set up SSL on commercial sites several times. This article gives my recommendations on small/hobby project SSL, like this website, and on commercial stuff.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>tldr; commercially, your cloud vendor should be able to provision an SSL cert quickly, easily, and relatively cheaply. <a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/associate-acm-certificate-alb-nlb/\">Use an AWS ALB</a>, for example.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For a small project you can get forever free SSL using CloudFlare. I fought the idea of using them, but after some trial and error I now support it. Two worse ideas are described below, and ultimately I compare and contrast the pros and cons of each in a table.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here's how to implement <a href=\"https://www.youtube.com/watch?v=cK5Z_r5-4CQ\">free forever CloudFlare SSL</a>. For $5 USD per month you can <a href=\"https://blog.cloudflare.com/automatic-platform-optimizations-starting-with-wordpress/\">upgrade WordPress speed substantially</a> in addition. Note: I had to use the \"Full (Strict)\" SSL mode to implement CloudFlare and I had to wait a few hours for GoDaddy to update the DNS.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What else did I try?</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>SSL purchase through GoDaddy.<ol><li>GoDaddy is my host so I thought it would be nice to purchase SSL through them.</li><li>The pitfall is their SSL identity verification process. First, they asked me for a government ID and a utility bill of some sort. While this is comparatively onerous already, I did it. This was also inconvenient because most of my home bills are in my wife's name.</li><li>After I did provide GoDaddy with an energy bill they called me on my phone and asked for a phone bill because they need to confirm my phone. This was concerning for multiple reasons:<ol><li>They called me on my phone. Clearly, they verified my phone.</li><li>The phone is already associated with my GoDaddy account.</li><li>My phone bill is in my wife's name and that wasn't good enough for them.</li></ol></li><li>This approach is also far from free.</li></ol></li><li>WordPress plugin experiments like SSL Zen.<ol><li>This actually worked! There's also a free version.</li><li>However, you have to either frequently rotate the Let's Encrypt! certs which is a bunch of work or you have to pay for a paid version. It's not much but it's not free.</li><li>Maintaining, installing and uninstalling is a pain.</li><li>None of the added security, caching, and speed options from the CloudFlare approach.</li><li>Substantially less responsive customer service compared to working with CloudFlare.</li></ol></li></ol>
<!-- /wp:list -->