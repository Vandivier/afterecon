---
title: "The Core Problem in Programming"
date: 2015-12-31 22:50:30
author: John Vandivier
---



Developers maximize productivity in the economic sense by finding an optimal balance between the quality of their product and the cost at which they produce it.

Because the primary marginal cost in programming is labor, lower cost of production is very well proxied by ease of coding.

Another major cost in programming is hardware, and more efficient code will run on cheaper hardware. Moreover, clients want more efficient code. It makes for a better user experience when an application loads up quickly and so on.

This creates a classic programming problem. Developers must select between ease of development and performance. More complex and specified code can optimize performance, but it makes it harder on developers.

Development-friendly code is code which is easy to read, write, and understand. It is also modular and transferable. However, this sort of code may decrease performance. It doesn't adapt and specify itself to take advantage of the peculiar nuances of each unique environment.

Development-friendly code often employs a <a href=\"http://stackoverflow.com/questions/2964140/what-is-a-software-framework\">framework</a>. This is an ambiguous term which generally means something ranging from a plan to a set of libraries, where the intent is to form a partially ready-made solution to minimize developer work.

Frameworks are <a href=\"http://stackoverflow.com/questions/802050/what-is-opinionated-software\">opinionated</a>. Opinionated code is essentially optimized under a certain set of assumptions. Frameworks are generally modular, so they can be used in a variety of projects.

Do you think the same assumptions hold in all of these projects? No, they don't. As a result, this approach can generate sub-optimal performance. This isn't obviously a bad thing. If you can get silver to market today or gold to market next year, silver may be better.

What is the perfect balance? I would suggest that the optimal solution is probably not a corner solution. We probably don't want either a perfectly development-friendly app nor a perfectly functionally optimized app, because I think each factor has diminishing returns.

So what is the perfect balance? I don't know, but I think it's somewhere in the middle and it ranges by situation.

This problem is certainly worth further investigation and I think that it justifies the common full time employment of well-paid software architects. The problem is important enough that I pretty much see it as the core problem in programming.