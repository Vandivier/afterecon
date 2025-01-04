---
title: How to RDP: Linux to Windows 10
date: 2017-02-13 15:00:12
author: John Vandivier
---



This article has end to end instructions for accessing your Windows 10 machine remotely from a Linux machine.
<ol>
 	<li>Install Windows 10 Pro. If you have Home edition then upgrade to Pro edition.
<ol>
 	<li>Home edition doesn't allow the native RDP tool, which we want because it works well.</li>
 	<li>I recommend you do this through the official Microsoft channels using the built-in store. It's quick and easy.</li>
 	<li>Type \"activation\" into Cortana and open the result which is the activation tab of the System Settings window.</li>
 	<li>You will need to create and sign into a Microsoft account, add a payment method, buy the $100 upgrade, and wait ~ 20 minutes to get the activation email.</li>
</ol>
</li>
 	<li>In Windows 10 Pro, type \"remote\" into Cortana search and click to Allow remote access:</li>
 	<li><img class=\"aligncenter wp-image-6072 size-full\" src=\"http://www.afterecon.com/wp-content/uploads/2017/02/remote.png\" width=\"807\" height=\"601\" />On your Windows machine, open the command prompt (you can search in Cortana if you aren't sure where it is) and run \"ipconfig\"</li>
 	<li>Make a note of the IPv4 Address which is displayed as this is the address we will use to remote from the other machine.</li>
 	<li>Go over to your Linux machine and check whether <a href=\"http://www.remmina.org/wp/\">Remmina</a> is already installed. It's installed as part of the base install for Ubuntu and can be downloaded and installed for other Linux distributions.
<ol>
 	<li>Side note: If you want to remote from Windows to Windows, instead of using Remmina just use \"Remote Desktop Connection\" from the other machine as show in the image above.</li>
</ol>
</li>
 	<li>Open Remmina and create a new connection.
<ol>
 	<li>Give it any name so you will remember which machine you are connecting to. Mine just says \"desktop\" because I remote from my laptop to my desktop.</li>
 	<li>Leave Group and Domain empty unless you know what you're doing.</li>
 	<li>Leave protocol on RDP unless...you know...</li>
 	<li>Set server equal to the IPv4 address you noted in step 4.</li>
 	<li>User name and password are the same ones you would always use to login to the machine if you were physically there.</li>
 	<li>You can adjust Resolution and Color Depth to taste. I usually set color to True Color (24 bpp). There may be a connection speed impact to using high res and high color.</li>
 	<li>Leave Share Folder unchecked.</li>
 	<li>Click save and then connect!</li>
</ol>
</li>
</ol>