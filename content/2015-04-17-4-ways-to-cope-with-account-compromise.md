---
title: "4 Ways to Cope With Account Compromise"
date: 2015-04-17 16:23:15
author: John Vandivier
---



This article outlines 4 ways to recover from a web site account compromise.

For example, someone resets your GoDaddy password and enables 2-factor authentication with their phone, making it impossible for you to get in.
<ol>Access the site and back it up via FTP to prep for transfer to a new domain. You should be making regular backups anyway, but the last backup may be a bit old. Creating an additional FTP user beforehand may reduce the odds that FTP is compromised.
	<li>Use Wordpress or a simlar web technology layer (but Wordpress in particular) for your websites. Then, you can still log into your website from the Wordpress side if you are locked out. Among other things, this will enable you to set up domain forwarding through WordPress without the need for domain access.</li>
	<li><a href=\"https://wordpress.org/plugins/wp-database-backup/\">WP Database Backup</a> - This free WordPress plugin will allow you to backup your MySQL database without FTP or any other form of server access, besides WordPress administrative authorization.</li>
	<li><a href=\"https://wordpress.org/plugins/wp-downloader/\">WP Downloader</a> - This free WordPress plugin will allow you to download themes and plugins from inside the WordPress admin area, without the need for FTP or other access.</li>
</ol>