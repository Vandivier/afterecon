---
title: Uncertainty as Missing Business Logic
date: 2017-09-22 19:42:42
author: John Vandivier
---



This article takes a new perspective in identifying uncertainty, but arrives at the same ol' conclusion: It does not preclude modelling and simply entails a reduction in confidence of model outcomes.

Suppose we have an aggregate model with panel data. Some change over time will already be incorporated, and the substance of such change is generic: Change over time in general as opposed to any particular change. It's actually easy to argue that this model is robust: Innovation is included. Saying that the future is not like the past does not discredit such a model. Instead, one must argue that the future is exceptionally different compared to the past. The aggregate panel model catches change from period to period: We must argue that the change from current period to next is extraordinary compared to the continuation of inter-temporal change trends. This is quite hard to do, but it is possible in principle [1].

It becomes much more clear and credible to discuss uncertainty in the case of something like an agent-based model. As a dis-aggregated individual-level model, we can speak in terms of concrete process and clearly identify a missing process in the model. This is hard to do with an aggregate model because particular agents and actions are nowhere defined. You cannot claim that any concrete individual capability is excluded from the usual sort of aggregate model which I am criticizing. In the case of an agent based model, identifying uncertainty is straightforward: There is a missing business rule, where the term business rule is meant in the sense of programmatic <a href=\"https://en.wikipedia.org/wiki/Business_logic\">business logic</a>, not in an economic sense.

Consider the following:
<ol>
 	<li>In my agent based model people can walk, ride a bike, or drive a car. From such a model emerges various transportation arrangements and economic predictions about transportation and supply chain costs.</li>
 	<li>In the real world people can also transport using airplanes. This exclusion from the model is concretely identifiable. The forward application of the model therefore plausibly results in systematic errors.</li>
 	<li>Now, suppose the agent based model correctly defined every known transportation method. Suppose it basically accounted for all known technologies and processes. Granted, this is presently infeasible, but suppose it occurs.</li>
 	<li>3 is clearly a better model than 1, but 3 is still likely to result in error during forward application because the real world may experience innovation.</li>
</ol>
So we have three examples of uncertainty:
<ol>
 	<li>In model 3, real-time innovation is excluded from the model. Real-time innovation is reflective of the discovery process that takes place under uncertainty.</li>
 	<li>In model 1, airplanes are excluded. Uncertainty can be proxied by contrasting models with and without airplanes.</li>
 	<li>Alternatively, model 1 could implement an endogenous discovery process which leads to the development of airplanes.</li>
</ol>
This points to some solutions for dealing with uncertainty:
<ol>
 	<li>Ignore uncertainty and simply reduce confidence in model outcomes. Uncertainty may be ignored precisely because the concrete effect of an uncertain event is unknown. Thus, it is not expected to modify expectations in any particular direction.</li>
 	<li>Robustness testing reduces uncertainty. If you have 10 models with and without airplanes and other factors and they produce similar results then you have a reason to believe that if there is an 11th possible situation which you forgot to model you will still obtain a similar result. Similarly, if 10 models produce divergent results then you can be confident that your models are non-robust, but confidence in the lack of clear answer is still an example of reduced uncertainty.</li>
 	<li>Instead of comparing n sibling models you can create n models of increasing levels of complexity and identify the marginal benefit of complexity. Uncertainty results in part from simplification. In a simple model there exists uncertainty about certain events which become deterministic in a more complex model. We can look at the marginal effect of complexity and determine whether or not results are moving systematically in any direction or to an important degree. Chaotic systems are highly variant in this way while stable systems aren't, and this informs our concerns about uncertainty when the model is forward utilized.</li>
 	<li>Random action can be explicitly modeled. Random numbers are reflective of uncertainty precisely because from the agent's point of view in the model the outcome is unknown. Indeed, random shocks can be implemented such that the model designer knows that airplanes may be invented at some time t, but no agent in the model realizes this and so the agents experience surprise. Similarly, the modeler can explicitly limit agent knowledge in a variety of ways.</li>
 	<li>Yet, real uncertainty moves along two dimensions: The kind identified in 3 is the set of known unknowns, where the modeler knows to specify a random process. The other sort is unknown unknowns. This is hard but possible to model. The model must be able to endogenously define new agents and processes in a random way.</li>
 	<li>Another advanced solution would be to program agents which can learn and invent. Machine learning and AI are non-trivial but well-studied topics in computer science. If we can define invention as a process then we can have machines do that. If invention is not definable as a postitively identifiable process then we may be able to leverage random action generators plus some sort of selection process.</li>
</ol>
&nbsp;

Notes:
<ol>
 	<li>We can identify an up-and-coming trend and argue it is exceptional compared to average changes. For example, the internet resulted in a discontinuous productivity jump. Someone technically expert in computing may have seen this coming. AI is the buzzword of today and may have a similar result, but the expert would need to separate actual productivity potential from hype: Indeed, the actual productivity would need to be significantly different from the expected productivity to generate an uncertainty shock.</li>
</ol>