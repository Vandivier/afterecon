---
title: "Web Development Update"
date: 2015-06-23 01:12:19
author: John Vandivier
---



This article gives an update on some web projects I've been working on recently, as well as laying out plans for a couple future projects. Technology is important to economics right?

I have two currently published plugins and another being developed right now. The two which are already published will be greatly improved over time. I also have an online portfolio and a new website being added to it shortly.

My Github is here. My online portfolio is here.

There are two plugins published on my Github. One allows the user to enter a zip code and find their local legislator. The other is simply an empty template plugin.

The find my legislator thing should grow in two ways. First, it ought to grow to incorporate all elected offices for all US zip codes. Or maybe just state level and higher offices.

The legislator thing also ought to expand so it is not just for legislators. I want to enable people to define their own fields, add records to the database through forms, and query those fields in an easy way, perhaps even allowing for data visualization. Lots of plugins do similar things but it's through the 'in an easy way' component that I hope to achieve a unique offering, as well as just having technically better, lighter, faster, more secure code.

The empty template plugin will also expand in two ways. The first is I will develop a plugin called Add to Plugin. This plugin will be a bit like a specialized FTP application that will upload files into the WordPress plugin directory of a specific plugin being edited. This will make it easy to, for example, quickly add custom fonts into a site specific plugin, and much more.

Font files and many other file types cannot be uploaded to WordPress's media gallery. Perhaps more importantly, having the assorted files in the plugin directory makes the plugin portable and modular. You can then just download the plugin altogether.

I would recommend my plugin be used in conjunction with <a href=\"https://wordpress.org/plugins/wp-downloader/\">WordPress Downloader</a> to download the plugin directly quickly and easily, as well as <a href=\"https://wordpress.org/plugins/wp-database-backup/\">WP Database Backup</a> to easily download anything in the database your plugin might need. I might even contact those plugin makers and try to merge plugins down-road.

You could do all of the file manipulation with Filezilla or through cPanel but I think that's less convenient and quick, and also everyone might not have access or experience with those things.

The Add to Plugin plugin will also install an 'add new' button to the plugin editor, allowing you to quickly create a new scratch plugin without needing to upload anything at all. The plugin will create a new plugin using the empty plugin template. I might also have a 'fat plugin' option which implements <a href=\"http://wppb.me/\">WPPB structure</a>. Maybe.

The final plugin is not published and it's in testing right now here on this site. It's called WP Shellshock and it allows users to quickly inject anything into the WP head or footer. It also allows you to quickly check whether certain technologies are present in your site (jQuery, Angular, more), and it has buttons to easily insert those technologies via CDN if needed.