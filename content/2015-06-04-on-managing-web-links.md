---
title: "On Managing Web Links"
date: 2015-06-04 01:58:57
author: John Vandivier
---



I am currently in the process of making some drastic changes to the website. None are visible yet, but I wanted to go ahead and write a How To regarding one thing I recently did - rapidly restructure thousands of web links.

My website uses topic pages to reference collections of articles on specific topics. These are currently structured as unordered lists. I used a web scraper to turn these collections into a data list. This list can be rapidly restructured by using a simple WordPress plugin or web script to present them in nice tables.

I can even add advanced functionality like allowing site visitors to rate articles and the plugins or scripts I use will be sortable by these elements. I similarly found a browser extension that turned my web bookmarks into a csv. I don't know about you, but I had thousands of disorganized bookmarks. I was able to rapidly eliminate duplicates and sort the bookmarks. I will soon use my website to host my bookmarks as an added link page and an effort to live openly and on the web.

Here's how I did it - first, the site links:
<ol>
	<li>I used <a href=\"http://www.iwebtool.com/link_extractor\">IWebTool Link Extractor</a> to scrape the links into a list. This free, in-browser tool produces a table output on the web page which I copied and pasted into a CSV. There are <a href=\"http://www.searchenginejournal.com/6-ways-to-extract-all-links-from-the-current-page/18032/\">other tools listed here</a> as well.</li>
	<li>The output into CSV put data into two rows. I used Excel as a CSV editor to fix this. Specifically, the data I selected was link number, text, and URL, and the data output pasted into CSV looked as follows:
<img class=\"aligncenter size-medium wp-image-5088\" src=\"http://www.afterecon.com/wp-content/uploads/2015/06/the_output-300x262.png\" alt=\"the_output\" width=\"300\" height=\"262\" /></li>
	<li>I wrote a couple excel formulas in the next columns to copy selected data as needed. For Column C, cell 1, I used: =IF(ISNUMBER(A1),A1,\"\")</li>
	<li>I then extended the formula all the way down the column. This copies the data if it is a number and otherwise leaves a blank cell. For column D I just copied column B. For Column E I used:
=IF(ISTEXT(A2),A2,\"\")</li>
	<li>I then extended the formula down the column. Note that I started with A2 in this case. This brought the cells into alignment because if I had started with A1 there would be a single vertical empty cell offset. At this step it looked as follows:
<img class=\"aligncenter size-medium wp-image-5089\" src=\"http://www.afterecon.com/wp-content/uploads/2015/06/the_output_v2-300x196.png\" alt=\"the_output_v2\" width=\"300\" height=\"196\" /></li>
	<li>Copy and paste special from C, D, and, E, pasting only values to F, G, and H. Then delete A through E and remove the empty cells by sorting!</li>
	<li>Finally, I saved the file as a true CSV!</li>
	<li>To display this on the website I will use a custom script and I recommend you do the same if possible. If you are not a coder, no problem! Simply paste the data in a Google Doc and embed that using a plugins like <a href=\"https://wordpress.org/plugins/google-document-embedder/\">Google Doc Embedder</a>. You can also read directly from CSV to table using <a href=\"https://wordpress.org/plugins/google-drive-embedder/\">Easy Table</a>, but it will not allow URLs to be clickable without simple modification. I might publish a small script which makes them clickable.</li>
</ol>
To order my bookmarks:
<ol>
	<li>I used a Firefox plugin called <a href=\"https://addons.mozilla.org/en-us/firefox/addon/places-to-csv/\">Places to CSV</a>.</li>
	<li>It actually exports a Tab Seperated Variable file with a .csv extension which is annoying. It won't open correctly by default in some editors, but if you rename the extension to .txt you can then open the file and clean it up inside of Excel or other editor.</li>
	<li>I removed many of the columns leaving only 'title' and 'url,' then I added a new category column. I went through the articles and quickly gave them a general category, knowing that I would drill down and further specify later on.</li>
	<li>I saved as a true CSV file for later merging with the site links. I may later import this into a database and reference the data there or I can reference this CSV file directly from the script or plugin I chose to use.</li>
</ol>