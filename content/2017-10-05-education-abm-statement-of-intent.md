---
title: Education ABM Statement of Intent
date: 2017-10-05 14:25:24
author: John Vandivier
---



CSS 739 Research Outline

John Vandivier
<ol>
 	<li><strong>Structure and Objectives</strong></li>
</ol>
Section I reviews the structure of this outline and notes personal research objectives based on the class objective document submitted prior in the semester. Section II is a working outline for research. Section III identifies progress and issues to date.

Research is designed to obtain three key objectives, with special consideration given to several secondary objectives:
<ul>
 	<li>Key Objectives
<ul>
 	<li>Build an agent model and write a paper relevant to the economics of education</li>
 	<li>Formally estimate an agent model and get data from it</li>
 	<li>Study the research frontier on some advanced ABM topic</li>
</ul>
</li>
 	<li>Secondary Objectives
<ul>
 	<li>Design an experiment in connection with an agent model</li>
 	<li>Get up to speed on, or extend the cutting edge of, parallel agentization in JavaScript or Node C++ Add-Ons</li>
 	<li>Rewrite a modified Sugarscape model in a parallel way</li>
 	<li>Develop competency with the AgentScript modelling framework and another commonly used framework such as NetLogo</li>
</ul>
</li>
</ul>
&nbsp;
<ol start=\"2\">
 	<li><strong>Research Outline</strong></li>
</ol>
2.1          Build an agent model and write a paper relevant to the economics of education

A modified Sugarscape model is implemented in JavaScript to support analysis of education. The model processing architecture optionally leverages the following technologies:
<ol>
 	<li>WebGL GUI via three.js</li>
 	<li>GPU accelerated processing via gpu.js</li>
 	<li>Parallelization via promises</li>
 	<li>Parallelization via web workers</li>
 	<li>Parallelization via NodeJS cluster.workers</li>
 	<li>Parallelization via NodeJS Child Process</li>
 	<li>Parallelization or enhanced performance via NodeJS C++ Add-ons</li>
 	<li>Standard expression using AgentScript-next (ASX)</li>
</ol>
The model is implemented as a cellular automaton with a netlogo-like architecture. The NetLogo architecture includes an environment called a world and agents called turtles. The world is a finite grid of square regions called patches. Agents are called turtles. Agents traverse the world in finite time described by a tick function which executes at every tick. Patches and turtles may be subclassed as breeds.

A netlogo-like model may vary from a pure NetLogo architecture in a number of ways. For example, agents may act in continuous time using an agent-scoped setTimeout function instead of a global tick function.

I plan to implement four patch breeds and one agent breed. Patches include jobs, schools, homes, and uninterestings. Agents are simply turtles, representing people. A person has various preferences, work preference, leisure preference, age, level of education, and other properties. Every person has a home patch and they obtain leisure by remaining there. They must consume, however, and this motivates work. In order to work the person must travel back and forth from a job patch. Jobs pay some rate depending on level of education and some variance. Agents may decide to go to school if this results in a pay increase sufficient based on their personal preferences. This is quite a deviation from a traditional Sugarscape because there are no hills of sugar and for other reasons. Instead, there are job patches.

Since all personal preferences are defined in quantitative, dollar-equivalent terms, one side effect is the possibility of the grave sin of interpersonal comparisons of utility under this implementation.

2.2          Formally estimate an agent model and get data from it

Data is trivially extracted from the model described in section 2.1. Data is used to estimate the effect of education on income. The secondary goal discussed in 1.2.1 can be implemented by varying world setup rules including the proportions of patch breeds or agent preferences. In addition, the effect of functionally represented voucher policies can be identified by further breeding patches.

2.3          Study the research frontier on some advanced ABM topic

JavaScript implementations of agent models are taken as a frontier topic, as is the ASX framework in particular. Parallelization of JavaScript is interesting within the programming community at large, let alone within ABM, as are increasingly native JavaScript integrations including C++ Add-Ons and hardware accelerated processing.

&nbsp;
<ol start=\"3\">
 	<li><strong>Progress and Issues to Date</strong></li>
</ol>
An existing vanilla JavaScript implementation of Sugarscape was extended to include a generations modeling feature by adding an age property to agents and establishing birth and death rules. A second model was developed as a modified diffuse model and written in ASX.

The ASX model is preferred because ASX is netlogo-like by design at the framework level, ASX is a more standard implementation, and several features like a 3D GUI are offered with minimal configuration required.

As a complex and young framework, however, ASX has presented issues. The framework did not originally build on Windows and was not offered as an importable package, module, or library. Tasks to date include coordination with the principle framework author to overcome these issues. The current model is now able to leverage a modern JavaScript developer setup including a Express and Webpack.

There are several known framework-level issues including a technical issue around the isntatntiion of agent breeds, but no known issues are critical to the particular model in progress. If such issues arise, falling back to AgentScript v1.x or vanilla JavaScript is possible.