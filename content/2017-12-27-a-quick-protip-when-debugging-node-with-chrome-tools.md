---
title: "A Quick Protip When Debugging Node with Chrome Tools"
date: 2017-12-27
author: John Vandivier
status: publish
---

Did you know you can <a href=\"https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27\">use Chrome tools to debug Node</a>? You can and it's awesome.\r\n\r\nBut, when you are using the Dev Tools Workspace feature, also normally awesome, an annoying thing can happen: You get duplicated results because it is being read out of the file system and also out of the Workspace sources. Worse yet: If you put your debugger on one of them it doesn't work at all!\r\n\r\nThe solution is simple: Always refer to the version on the file system, eg the one circled below. The debugger works on that file (click to zoom):\r\n\r\n<a href=\"http://www.afterecon.com/wp-content/uploads/2017/12/node-debugger-dev-tools.png\"><img class=\"aligncenter wp-image-6489 size-large\" src=\"http://www.afterecon.com/wp-content/uploads/2017/12/node-debugger-dev-tools-1024x622.png\" alt=\"\" width=\"605\" height=\"367\" /></a>\r\n\r\nIf you have a very small and/or fast Node program you might run into an issue where debuggers can't catch. The fix is to <a href=\"https://github.com/nodejs/node/issues/17890#issuecomment-354218252\">use a wait function or the --inspect-brk option</a>.\r\n\r\nAs a final note, Paul Irish rocks.