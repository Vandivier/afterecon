---
title: Deno, Grammarly, and Windows
date: 2020-04-05 00:51:28
author: John Vandivier
---



<!-- wp:paragraph -->
<p>This article documents a use case I have for Deno on Windows. It describes what Deno is, why I wanted to use it, some issues I ran into, and how I solved those issues.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>What is Deno and why use it?</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href=\"https://deno.land/\">Deno</a> is a secure runtime for JavaScript and TypeScript. While it is still experimental, it is set to eventually replace and improve on <a href=\"https://nodejs.org/en/about/\">Node</a> for many use cases. Version 1 is <a href=\"https://github.com/denoland/deno/issues/2473\">scheduled to release May 2020</a>. Compared to Node, Deno is relatively secure, web-friendly, and provides native TypeScript support.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I'm currently a Principal Software Engineer at Capital One and I use Node daily. In case my credentials don't convince you of my claims on Deno's superiority, perhaps you will be convinced by <a href=\"https://www.youtube.com/watch?v=1gIiZfSbEAE\">this talk from Ryan Dahl</a>, the creator of Node. By the way, he's also the creator of Deno. <a href=\"https://www.youtube.com/watch?v=lcoU9jtsK24\">Here's another</a> recommended talk on Deno. The second talk is a more recent talk by Bert Belder, another great engineer and former Node core contributor.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Node is a server-side JavaScript run time. <a href=\"https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/\">JavaScript</a> is the most common programming language on the planet. JavaScript is implemented as a web client in all major web browsers. TypeScript compiles to JavaScript, and modern web applications are increasingly written in TypeScript. All of this information highlights the value of Deno, in addition to the obvious value from security.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A result of the above facts is that Node is currently a go-to tool for scripting filesystem operations for many people including myself, and Deno is on track to replace Node, although it will be a matter of years before that happens. A further result is that I've been looking for simple use cases where trying out Deno would be an opportunity so that I can get ahead of the curve with this skill. I recently found an appropriate case.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>What use case?</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I'm writing an academic paper on the effects of Section 127 employer educational assistance. I would like to run this paper through spelling and grammar check, but I'm using LaTeX compiled to PDF. Microsoft Word and Grammarly are two well-known tools for spelling and grammar check, but neither of them runs directly on LaTeX or PDF. Both of them would support a plain text version of my paper, so my use case is a need to translate either PDF or LaTeX into plain text.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Installing Deno on Windows 10 with WSL2 and Git Bash</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I'm using Windows 10. Installing Deno was immediately a problem. Installation instructions indicate that curl works, but downloading curl installed a Windows-incompatible package. I created <a href=\"https://github.com/denoland/deno_install/issues/102\">this GitHub issue for that issue</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The installation instructions explicitly indicated the use of Chocolatey package manager for Windows. I attempted this approach, but I ran into issues installing Chocolately with Git bash. This doesn't surprise me. I've never had a good experience with Chocolately. I think it pails in comparison to other package managers including Homebrew, Yum, or even the questionable NPM.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One might ask why I insist on using git bash. Windows-native PowerShell does not provide this, so git bash has historically been a widely used approach to achieving bash support on Windows. Bash support is important because it is the standard console <a href=\"https://en.wikipedia.org/wiki/Application_programming_interface\">API</a> for web applications today. The most common, performant, secure, and preferred servers use a Linux operating system, and macOS also natively supports bash. Bash is implemented in various ways for Windows users as well, while PowerShell is not widely used on macOS or Linux. So bash is also the most universal and portable kind of console.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Over the past year, however, Microsoft has produced Windows Subsystem for Linux, version 2, also called WSL or WSL2, but be careful when you hear WSL alone. The version here is important. The first version was a Linux emulator, but the second version uses a real Linux kernel. <a href=\"https://devblogs.microsoft.com/commandline/wsl2-will-be-generally-available-in-windows-10-version-2004/\">Here's a great explainer article</a> regarding other WSL2 features. At this point I was faced with two options:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Try to install Deno using PowerShell, but use Deno via Git bash after installation, or</li><li>Install and use Deno via WSL2. Stop using Git bash.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>If WSL2 behaves properly, option 2 seems to be a new best practice. However, many people will face switching costs and it doesn't hurt to briefly investigate option 1. On investigation, it seems the Deno instructions for installation via PowerShell also fail at the time of writing. I filed a separate GitHub issue <a href=\"https://github.com/denoland/deno_install/issues/103\">here</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I proceeded to install WSL2 as described <a href=\"https://docs.microsoft.com/en-us/windows/wsl/install-win10\">here on Microsoft's site</a>. After enabling WSL, I notice that <code>wsl help</code> works within Git bash. After enabling WSL2, I installed the Ubuntu image into my workspace using curl from Git bash with the command <code> curl.exe -L -o ubuntu-1604.appx https://aka.ms/wsl-ubuntu-1604</code>. My workspace is a folder called <code>workspace</code> which is at the top level of a storage drive. The result is a Ubuntu <code>.appx</code> file at <code>/d/workspace/ubuntu-1604.apptx</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I then added this image into WSL2 via PowerShell by running <code>Add-AppxPackage .\\app_name.appx</code> within my workspace folder. About this time I noticed that VS Code had intelligently detected my WSL install and recommended a VS Code extension for easier WSL use. I did so.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>.appx</code> files are Windows application packages, so by running the command above which added the package, I now literally open the Ubuntu app by using \"Windows key + s\" to search for the app and click it. I could have also used the app store or perhaps found the app in the start menu. This kicks off a new terminal which is a real Ubuntu shell. Ubuntu installs and asks me for a username and password, then logs me in.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I now find myself in a strange and beautiful Ubuntu Linux view of my filesystem. It is <a href=\"https://superuser.com/questions/1185033/what-is-the-home-directory-on-windows-subsystem-for-linux\">the same Windows filesystem</a>, not a virtual machine with a distinct file system. I navigate to my workspace within the Ubuntu shell by using <code>cd /mnt/d/workspace</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I now, for the second time, attempt to install Deno using <code>curl</code>. To reiterate, there are now two key differences compared to the first time I tried curl-based installation:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>I am now in a real bash shell with a real Linux kernel in a Ubuntu operating system context, and the OS context is inside WSL2.</li><li>I am not using git bash.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>I copy the curl command from Deno's website and attempt to paste it into the Ubuntu shell. It doesn't work. <a href=\"https://superuser.com/a/1439881/859670\">I found this Stack Exchange answer</a> which shows how to easily enable the shared clipboard. I try to curl again. The curl works, but <code>unzip</code> command is not found. This is great news! Real Ubuntu doesn't come with a built-in <code>unzip</code> command. I use <code>sudo apt-get install&nbsp;unzip</code> and it works exactly as expected. I run curl again and Deno is successfully installed! I also notice the Ubuntu application terminal has working tab completion, just like real bash. Evidence continues to mount that I am using real bash and Linux, not another Microsoft mutation of bash or Linux.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One negative is that I notice WSL currently forces subsystem package installations to be stored on my main drive. So far this would include <code>deno</code> and <code>unzip</code>. This puts my main drive near capacity quickly. I created <a href=\"https://github.com/microsoft/WSL/issues/5044\">this GitHub issue on WSL</a> to enable storing subsystem-installed packages on a remote storage drive.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Another compliment to WSL ergonomics is that the filesystem seems perfectly in sync. With a Ubuntu session open, I edited a folder name in Windows file explorer. When I run <code>ls</code> in the Ubuntu session, the new folder immediately reflects the correct name.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Everything works as expected! A total win for both WSL2 and Deno.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Results of Initial Usage of Deno</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The <a href=\"https://deno.land/typedoc/index.html\">Deno docs are solid</a>. The API is familiar to anyone who has used Node. Scripting with top-level await works and makes complex tasks a breeze. If you are interested in using the latex-to-text.ts Deno script, <a href=\"https://github.com/Vandivier/research-dissertation-case-for-alt-ed/blob/master/papers/section-127-effects/deno/tex-to-text.ts\">check it out here</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I like that Deno enables TypeScript by default, but it doesn't require everything to be typed. Effectively, you can script in plain JavaScript and add types as you see fit. There is also <a href=\"https://github.com/denoland/deno/issues/1397\">a ton of portability</a> between Node packages and Deno. Overall, consider me impressed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are some additional issues around integrating VS Code with Deno, but all of the issues I found can be resolved in three short steps. First, install the <code>justjavac.vscode-deno</code> extension to solve several problems, then install the <code>deno-vscode</code> plugin which easily generates a deno project using  solves all of them. I also <code>vscode-deno-extensionpack</code> which includes the above extension plus other tools like Prettier.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The second thing to do is to can be resolved by installing deno-vscode, but that doesn't work in a Ubuntu WLS setup, where VS Code in the Windows layer cannot access Deno within the WLS subsystem. To obtain the same benefits manually, follow the instructions in <a href=\"https://medium.com/@kitsonk/develop-with-deno-and-visual-studio-code-225ce7c5b1ba\">this article</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The third step is to get VS Code to stop complaining about top-level await. This may be a TypeScript core issue. I created <a href=\"https://github.com/microsoft/TypeScript/issues/37794\">this GitHub issue</a> to investigate that. Here's the workaround I can provide for my use case, but it may have side effects in larger projects with complex imports. My use case, as you recall, is a single <code>.ts</code> file, so I don't have a problem doing this. I add <code>\"isolatedModules\":&nbsp;true,</code> to my tsconfig.json file. This allows VS Code to stop complaining. Alternatively, I could just endure a false flag error from VS Code. Deno runs the code just fine invariant to the complaint from VS Code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I've also been extremely impressed with Grammarly. I use both the paid online app and also the Chrome extension. I recommend it over Microsoft Word for spelling and grammar checking at this point.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Edit: 4/5, Hours After Original Publication</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Deno team has been incredibly responsive to multiple GitHub issues I created and they have already merged a pull request which fixed PowerShell installation. You can refer to the issue links above. After PowerShell installation, closing VS Code, closing open terminals, and reopening everything, git bash does have access to Deno.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>While my exploration with WSL has been a ton of fun, it seems unnecessary for the purpose of deno usage, given the recent fixes. Moreover, WSL and Windows do not share a deno reference, so if you install in WSL and run VS Code in windows, you can't <code>deno init</code> and some other important things. So WSL currently does not seem to be a best practice.</p>
<!-- /wp:paragraph -->