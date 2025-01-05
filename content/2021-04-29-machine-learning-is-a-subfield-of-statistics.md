---
title: "Machine Learning is a Subfield of Statistics"
date: 2021-04-29 09:58:27
author: John Vandivier
---



<!-- wp:paragraph -->
<p>I have a background in statistics, with an applied emphasis in political science and econometrics. I am also a programmer, but I am just beginning to get serious about machine learning. Before and after looking more deeply, it seems to me that machine learning (ML) is simply a special subfield of statistics.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When looking into \"statistics vs machine learning,\" here are some fails that I found:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li><a href=\"https://towardsdatascience.com/the-actual-difference-between-statistics-and-machine-learning-64b49f07ea3\">The Actual Difference Between Statistics and Machine Learning</a><ol><li>\"Machine learning models are designed to make the most accurate predictions possible. Statistical models are designed for inference about the relationships between variables.\"<ol><li>The statement on ML seems fair enough, but statistical models are used for more than inference.</li><li>Moreover, how do we decide whether an ML model is accurate? We have to use statistics like fitness.</li></ol></li><li>\"...we do not know how well the model will perform until we ‘test’ this data on additional data that was not present during training, called the test set\"<ol><li>This is a general problem in applied statistics. There is nothing strictly special about out-of-sample validation in ML. Sure, it can be granted that emphasis, jargon, and norms of practice are different but nbd.</li></ol></li><li>\"Likewise, machine learning models provide various degrees of interpretability, from the highly interpretable lasso regression to impenetrable neural networks...\"<ol><li>My dude, Lasso Regression is applied stats. It's not original with ML.</li><li>This actually highlights the intersectional point: Many statistical models are re-implemented in ML. This alone shows there is at least some intersection, but I will argue that moreover, it's a total subfield.</li></ol></li></ol></li><li><a href=\"https://www.youtube.com/watch?v=jaI5aheBOi0\">Machine Learning vs Statistical Modeling</a><ol><li>\"Machine learning is an algorithm\"<ol><li>Sure, but basically all our statistical models are algorithms too.</li><li>Still, somewhat interesting: There are some statistics that are not algorithms, eg the average, but this is no such thing as a non-algorithmic ML model.</li><li>Which algorithms are used in ML, specifically? Refer back to 1.3 above and see that somewhere between very many and all ML algorithms are statistical algorithms.</li></ol></li><li>\"Machine Learning uses less assumptions\"<ol><li>#fail - your ML algo doesn't use fewer assumptions than I use when I compute an average.</li></ol></li></ol></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Now, let's come to an explainer that I actually found useful, from a PhD ML researcher:</p>
<!-- /wp:paragraph -->

<!-- wp:embed {\"url\":\"https://www.youtube.com/watch?v=oUMFObEcQrQ\",\"type\":\"video\",\"providerNameSlug\":\"youtube\",\"responsive\":true,\"className\":\"wp-embed-aspect-16-9 wp-has-aspect-ratio\"} -->
<figure class=\"wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">
https://www.youtube.com/watch?v=oUMFObEcQrQ
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>He emphasizes that prediction and application is the main emphasis of ML, and he goes through some interesting facts that I didn't know. For example, he says \"neural networks...are essentially just extensions of logistic regressions on top of each other.\"</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What became obvious to me during his presentation is that:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Statistics is about things called statistics.<ol><li>Examples include the mean, median, mode, standard deviation, coefficients, and so on.</li><li>Parameters are statistics too.</li></ol></li><li>Machine Learning is a case of applied statistics.<ol><li>ML executes statistical optimization and as such it utilizes statistics including goodness of fit, bias, variance, error, and so on.</li><li>ML includes supervised and unsupervised learning. In the case of supervised learning, a practitioner is specifying features in the same way a statistician would. In fact, to even make sensible specifications, I believe a practitioner needs to have some statistical understanding of the underlying data.</li></ol></li><li>In any real application of ML, stats will be needed too.<ol><li>Communicating the findings of ML requires statistics. Eg \"75 percent of input images were identified as cats.\"</li><li>The video above brilliantly quotes the statistician Ronald Fisher: \"The quantity of data which usually by its mere bulk is uncapable of entering the mind is to be replaced by relatively few quantities which shall adequately represent the whole of the original data\"</li><li>The above quote defines what a statistic is, and it also shows why big data and ML can't be communicated to an end-user without consolidation into statistics.</li></ol></li><li>ML happened later in history and has historically grown out of statistics. Yes, it is also a subfield of computer science. There is no competition or exclusivity here. Essentially all meaningful statistics today are implemented as programs too.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>As a concluding note, my findings today reassure me that:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>A background in statistics and econometrics is a great entry into machine learning.</li><li>There is no major conflict between usual statistical and ML approaches.<ol><li>ML is in many ways just the automation of complex statistics, including some statistical practices that were previously manual and laborious.</li></ol></li><li>A good ML practitioner needs statistical, and I would suggest econometric, skills as well.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Related:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li><a href=\"https://paperswithcode.com/\">https://paperswithcode.com/</a></li><li><a href=\"https://www.connectedpapers.com/\">https://www.connectedpapers.com/</a></li></ol>
<!-- /wp:list -->