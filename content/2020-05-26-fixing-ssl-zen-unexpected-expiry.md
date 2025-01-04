---
title: Fixing SSL Zen Unexpected Expiry
date: 2020-05-26 00:24:36
author: John Vandivier
---



<!-- wp:paragraph -->
<p>I use <a href=\"https://letsencrypt.org/\">Let's Encrypt</a> to get free SSL certificates for WordPress via a plugin called <a href=\"https://wordpress.org/plugins/ssl-zen/\">SSL Zen</a>. I recently had an unexpected SSL expiration and users were seeing \"This site may not be secure\" warnings. This article documents how I fixed the issue.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Basically, I wrote the solution <a href=\"https://wordpress.org/support/topic/how-do-i-turn-this-thing-off/#post-12890039\">here</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Why did the issue occur in the first place? I think it is because I incorrectly updated my SSL using SSL Zen, but when I went to test SSL was working via SSL Zen it looked at the prior install which had not yet expired.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I used <a href=\"https://www.sslshopper.com/ssl-checker.html\">this independent SSL checker</a> to verify SSL was working after the fix.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On a second site I administrate in part, the issue was a bit worse:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>A newer version of SSL Zen which doesn't obviously allow force-renewing the SSL certificate.</li><li>Deleting the SSL from cPanel caused an https lockout</li><li>cPanel and GoDaddy domain settings were unaware of SSL config and https redirect being enabled, since this was done inside a subsite WordPress install.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>To solve this latter case:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Using cPanel, <a href=\"https://www.name.com/support/articles/115005296088-Redirect-HTTP-to-HTTPS-automatically\">force disable http redirect</a>, even though the cPanel doesn't know it's on to begin with.</li><li>Now go into the database, and <a href=\"https://help.one.com/hc/en-us/articles/115005593985-Disable-WordPress-plugins-in-phpMyAdmin\">disable site plugins</a>.</li><li>Now, you should be able to access your WordPress admin area via http:// (don't use https://) URL login.</li><li>You may need to remove SSL Zen and <a href=\"https://managewp.com/blog/downgrading-wordpress-plugins\">upload an older version of the plugin</a>. v2.0.3 worked for me on another site, but not this one.</li><li>I also tried deleting the FTP plugin folder and re-installing. Once installed, the http issue regenerated.</li><li>I finally solved this issue by switching to another plugin. <a href=\"https://wordpress.org/plugins/wp-letsencrypt-ssl/\">WP Encryption</a> is another Let's Encrypt SSL facilitation plugin you might try if you can't get SSL Zen to work.<ol><li>This plugin makes the force all traffic to https step optional and separate. I haven't had a problem (so far) with it caching that setting and locking me out. This plugin also has a disclaimer with info on rolling back forced https if needed, which I am pasting below for my own reference if I do get locked out:</li></ol></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>\"WARNING: Use this feature with CAUTION. Enabling this will immediately force https and might cause issues accessing the site IF you have NOT installed the SSL certificate properly. If you face difficulty accessing site - You will need to manually revert back to http:// as explained here - https://wordpress.org/support/topic/locked-out-unable-to-access-site-after-forcing-https-2/\"</p>
<!-- /wp:paragraph -->