---
title: Measuring Importance with Stack Exchange
date: 2018-01-21 14:32:40
author: John Vandivier
---



This article discusses a way to leverage <a href=\"https://stackexchange.com/\">Stack Exchange</a> to generate importance data.

There are two sorts of articles and it's important to correctly identify which is which: Articles written because an author wants to write it and articles written because a reader wants to read it. Ideally there's a good bit of overlap but in many cases there is a identification, particularly in academic: An author thinks he's making a contribution to some body of work but in reality no one cares. That's fine if the author is writing for his own entertainment, but it's wasteful if the author was intending to engage a conversation.

A general strategy for importance is to identify something already accepted as important and modify that result in some way. For example:
<ol>
 	<li>A is important, and B extends A</li>
 	<li>A is important, and B caveats A</li>
 	<li>A is important, and B logically undermines A</li>
 	<li>A is important, and B empirically undermines A</li>
 	<li>A is important, and B's importance is therefore necessary, likely, or implied</li>
</ol>
How do we identify A as important to begin with? By measuring the conversation. A non-exhaustive list of methods:
<ol>
 	<li>Media channel read and subscription rates</li>
 	<li>Social media likes, shares, comments, and other social media metrics</li>
 	<li>Academic citations</li>
 	<li>The frequency of certain associated keywords in the media broadly, and their associated sentiments</li>
 	<li>Willingness to pay directly or indirectly for certain information</li>
 	<li>Survey</li>
</ol>
One metric we can use is Stack Exchange article data. Stack Exchange is a unique Q&amp;A website where questions, answers, askers, and answerers are all rated. Using this data we can observe that some questions are more highly valued than others in the sense that they are more highly rated. This allows an analyst to argue question A is more valuable than question B, or that question A is generally important in the sense that is is more important than average. We can separately argue that user A is more important than user B in the same way. If an important person is asking an important question, we have two independent (logically, not statistically) factors of validation.

Such is the case for one article titled \"<a href=\"https://academia.stackexchange.com/questions/102376/my-students-family-wont-let-her-study-what-she-wants\">My student's family won't let her study what she wants</a>.\" The asker has 631 reputation which is far more than the average user reputation. Average user reputation was calculated as <a href=\"https://meta.stackexchange.com/a/8341\">194 in 2009 by user Shog9</a>. Using <a href=\"https://data.stackexchange.com/stackoverflow/query/788472/average-user-rep\">the same procedure</a> and the <a href=\"https://data.stackexchange.com/stackoverflow/query/new\">Stack Exchange Data Explorer</a>, I calculated average rep as 112 today. The data is not across all Stack Exchange, instead it varies by community or subsite. For <a href=\"https://data.stackexchange.com/academia/query/788493\">Academia the average user rep is 117</a>. The average <a href=\"http://data.stackexchange.com/academia/query/788485\">Academia article score is 8</a>.

So the article and asker are both above average, but we can make an even stronger statement. Let's remove all users and articles with non-positive value, and take the average of whatever is left. Then we will have the \"average importance of important articles.\" An article may be said to be very important, in a mathematical sense, if it is quantitatively more important than the average important article.

For Stack Exchange Academia, <a href=\"http://data.stackexchange.com/academia/revision/788503/975404/very-important-posts\">the average score of articles with a positive score is 10,</a> and the average reputation of <a href=\"http://data.stackexchange.com/academia/query/788514\">a user with a reputation greater than the default</a> value (of 1) is 230.

A final consideration when using SE to identify importance is to note that a question with a satisfactory answer is much less important for research compared to a highly valuable question without an answer, or with only a poorly approved answer. As a baseline, I suggest measuring importance as (question value / top answer value), and only those with an importance of more than 1 are important research questions. In fact, I think we can't identify a question as \"very important\" unless the importance is at least 1.5 and preferably 2. If someone tries to argue that a question with an importance of 1.2 is in fact important, an antagonist may argue \"the question has mostly been answered,\" and this is true because 1.2 implies a top answer with a score more than 50% of the value of the question. To be clear, \"the question has mostly been answered\" is hardly a defeater, but it is a common mantra in academia to resist, deflate, or discourage some line of inquiry.

A key exception is the case where a highly valued answer specifically states or implies that there is important missing information. It's also important to note that importance measures themselves are not all equally important. If someone identifies a SE importance measure of 1.2 on a research question, or even .5, but another analyst identifies a willingness to pay of $200,000 for the answer, net of opportunity cost and so on, then the money certainly wins out.