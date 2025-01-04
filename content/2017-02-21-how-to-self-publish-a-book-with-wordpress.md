---
title: How To Self-Publish a Book With WordPress
date: 2017-02-21 15:00:14
author: John Vandivier
---



This article presents a method of converting your WordPress content to an eBook or a physical book.

Tons of <a href=\"https://wptavern.com/how-to-self-publish-a-book-with-wordpress\">articles like this already exist</a>, but this article presents a fundamentally different approach which I think gives you more detailed control of the produced book. If you are looking for a quick conversion and you are OK with using boilerplate templates, see the link above. If you are willing to spend a bit more time in order to have a higher degree of control, this article is for you.

First, create a new menu from the WordPress back-end:

<a href=\"http://www.afterecon.com/wp-content/uploads/2017/02/new-menu.png\"><img class=\"aligncenter wp-image-6113 size-full\" src=\"http://www.afterecon.com/wp-content/uploads/2017/02/new-menu.png\" width=\"867\" height=\"412\" /></a>

The new menu is simply to help us organize the book sections. We won't actually publish the menu anywhere (unless you want to for other reasons).

Next, create some dividers using the Custom Links item. Enter \"#\" as the url and give the divider a name under Link Text. For example, \"Chapter 1,\" \"Section 1.4,\" or \"The Chapter About School.\" You can rearrange and rename them as needed later.

Now the hard part. Go through your posts and pages and determine which ones you want to add into your book and where you want them. It's not really that hard, but it can be time consuming if you have lots of posts like I do. Now add your pages or posts under the relevant divider section.

The last step is to install the free WordPress plugin <a href=\"https://wordpress.org/plugins/aspose-doc-exporter/\">Aspose DOC Exporter</a> and export each of the posts into a file which can be edited in Microsoft Word or a similar solution. Details on how to export using Aspose <a href=\"https://pagely.com/blog/2015/06/export-wordpress-posts-pages-word-files-pdfs-aspose-doc-exporter/\">can be found here</a>. Word or the similar software (<a href=\"https://www.openoffice.org/\">Open Office</a>, etc) is where the flexibility comes in. You can do anything possible with Word to the document now. For example, you might want to add a table of contents, title page, images, and text formatting.

From Word you will be able to save as a PDF or you can convert the document to a Kindle eBook by <a href=\"http://ebooks.stackexchange.com/questions/8/how-do-i-convert-a-word-document-into-an-ebook\">following these directions</a>.

After converting to PDF, here's <a href=\"http://www.afterecon.com/wp-content/uploads/2017/02/output_1487124994.pdf\">an example output</a>!

If an interested developer ends up reading this - one feature I would request would be that the export could put each post in order under the section title depending on the Link Text used on the menu we created.

<strong>EDIT: If you create a dedicated category for a section of your book then you can bulk export just that section by filtering under All Posts. This may reduce your manual work load organizing each section.</strong>