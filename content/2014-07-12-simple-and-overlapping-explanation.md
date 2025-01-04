---
title: "Simple and Overlapping Explanation"
date: 2014-07-11 22:55:12
author: John Vandivier
---



This article argues that simple regression is often useful and complex regression is often misinterpreted due to overlapping explanation of the independent variables.

Simple regression refers to the regression of a single dependent variable and a single independent variable. Complex regression refers to the regression of multiple dependent variables and a single independent variable.

<a href=\"http://plato.stanford.edu/entries/scientific-explanation/#2.4\">Statistical Explanation</a>, under the Hempellian or DNIS model of explanation which is the common one, is a philosophical argument of the form if A then B. Specifically, A is the set of independent variables, X, combined with the many other logical premises involved in statistical calculation, and B is the response including the dependent variable, Y, and whatever is being explained about Y. For example \"the probability of finding a 1 pound potato is 50%\" and \"the probability of finding potatoes which weigh between 1 and 2 pounds is 65%\" are two different B, or things being explained, with a common Y.

In practice, statisticians are not always great logicians. I have taken several varieties of statistics classes and my youngest professor once approved a model for a project wherein calories consumed was the response variable and income was the independent variable of interest. Propensity to purchase soda was used as a corrective independent variable.

Now what do you think happened after soda was corrected for? It appeared that income had a weaker impact on calories consumed. But in reality how were these sodas obtained? Through the use of income. Perhaps a more senior professor would have recognized the problem. Soda consumption is importantly related to income.There was a problem of overlapping explanation. In other words, <strong>just because soda explains calories doesn't mean that income doesn't also explain some or all of the very same calories soda is explaining.</strong> Consider that there is some function to predict propensity to consume soda. Income could very well be a factor.

The explanatory power of income falsely seemed to be reduced, and it was interpreted that way. The value of the coefficient for income was ruined as well because of this over-correction. A simpler model, using income without correcting for soda, would have produced more accurate coefficients and explanatory power of the variable, although perhaps the whole model r-square would have declined.

Even consider where there is a proper complex model. It would be proper to complicate a model if there is no obvious overlapping. Calories consumed could be based on soda consumed and steaks consumed without discussing income. These could overlap as well, but it's not obvious. It would still be improper to discuss the explanatory power of steak on calories consumed, because the value here would be different than the coefficient and explanatory power in the context of a model which was only steak on calories, with no discussion of soda.In short, the only way we can make sense of the explanatory power of some variable is:
<ol>
	<li>In the context of a purely simple model: Steak and only steak on calories can reveal the explanatory of steak on calories.</li>
	<li>In the context of some specified model, but you are not measuring any kind of a real value. You are measuring a relative value within a model. Steak and soda on calories cannot reveal the explanatory power of steak on calories. It can only reveal the explanatory power of steak <em>within the context of that particular model</em>.</li>
</ol>
Why does this matter? Because of unobserved overlapping. This could result in some really great models being interpreted really poorly. I wonder how we could account for this overlapping to permit the use of complex models and also have the benefits of simple models. Maybe we just do a simple model for every variable individually, in addition to the complex model.