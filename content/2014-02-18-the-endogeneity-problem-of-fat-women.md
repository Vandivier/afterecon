---
title: "The Endogeneity Problem of Fat Women"
date: 2014-02-18 15:58:47
author: John Vandivier
---



This article explains what an endogeneity problem is and an easy way to remember what it means.

Variables in a mathematical model are either endogenous or exogenous. Exogenous, with the prefix exo- for outside or outer, are variables which come from outside of the model. In other words, they are given or assumed. Endogenous, with endo- for inside or inner, variables are variables which are solved by the model. If my model says Y = MX, where M and X are given (exogenous), then I can solve for Y, rendering Y an endogenous variable.

An <a href=\"http://en.wikipedia.org/w/index.php?title=Endogeneity_%28applied_statistics%29&amp;oldid=583301998\">endogeneity</a> problem arises when a model cannot be solved for any of several reasons. Often it is because of a causal loop. For example, Y = MX, but X is in turn also a function of Y. Let's try to solve this:

Y = MX| X=NY =&gt; Y = M(N(M(N(M(N(M(N..............)...

See the problem? An easy way to remember the endogeneity problem of a causal loop is to think about a somewhat offensive, but imho rather funny, idea a friend of mine mention upon hearing this issue:
<blockquote>Fat women do not make good models [in the mathematical sense, but pun-ily often in a literal sense as well] <strong>because they eat so much because they are unhappy but they are unhappy because they eat so much</strong>.</blockquote>