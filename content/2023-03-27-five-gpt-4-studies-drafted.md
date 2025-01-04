---
title: Five GPT-4 Studies Drafted
date: 2023-03-27 00:58:09
author: John Vandivier
---



<!-- wp:paragraph -->
<p>This article provides abstracts, expected results, target journals, target grants, and preliminary designs for five studies. The goal of this article is to apply the <a href=\"https://buildinpublic.xyz/about\">build in public mindset</a> to research. These studies are still in a grant-seeking and preliminary design phase.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Outline of Studies:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>GPT-4 Self-Assessed Research Quality</li><li>Cross-Validated GPT-4 Literature Review Accuracy</li><li>GPT-4 Turing-Assessed Research Quality in Economics</li><li>GPT-4 Turing-Assessed Research Quality in Computer Science</li><li>A Case Study in Productivity Gains from GPT-4 Utilization</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Target Grants</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I haven't spent a bunch of time on this, but I imagine all of these studies could qualify for something in the following list, or perhaps nothing at all for some of the lower cost and effort studies:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>grants.gov</li><li>NBER</li><li>NSF</li><li>The Mercatus Center Emergent Ventures grant</li><li>IHS Research Grants</li><li>OpenAI research grants</li><li>Maybe a <a href=\"https://hai.stanford.edu/research/grant-programs\">HAI Seed Grant</a> but probably not</li><li>General small business grants. I see firms and tools like <a href=\"https://grantify.io/us/grants-for-us-businesses\">Grantify</a> that are supposed to support grant-winning. I have no idea how effective these things are.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>I. GPT-4 Self-Assessed Research Quality</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Abstract: GPT-4 is a cutting-edge multimodal model that can be used as a research and writing assistant, but such models have a number of known problems. This study assesses GPT-4 by self-assessment. Supervision of the model is minimally applied through research question selection and providing the model information about itself from OpenAI, its creator. The model is asked to describe best practices for use of GPT-4 as a research and writing assistant, the benefits and problems of such use, expected productivity gains, and the quantitive correctness of literature reviews executed automatically by GPT-4.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Expected Results: Results will indicate that automated literature review is or is not appropriate according to criteria identified by GPT-4. Results will estimate the gains to productivity for researchers using GPT-4.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Background</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><a href=\"https://www.scientificamerican.com/article/we-asked-gpt-3-to-write-an-academic-paper-about-itself-mdash-then-we-tried-to-get-it-published/\">https://www.scientificamerican.com/article/we-asked-gpt-3-to-write-an-academic-paper-about-itself-mdash-then-we-tried-to-get-it-published/</a></li><li><a href=\"https://openai.com/research/gpt-4\">https://openai.com/research/gpt-4</a></li><li><a href=\"https://elicit.org/faq\">https://elicit.org/faq</a></li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Design</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>GPT-4 is limited in its training data to the year 2021. As a result, it lacks basic self-knowledge and naively believes itself to be GPT-3. To resolve this issue, I prime GPT-4 within information including a research report from OpenAI that contrasts GPT-3.5 and GPT-4.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The current study is inspired in part by \"We Asked GPT-3 to Write an Academic Paper about Itself—Then We Tried to Get It Published,\" published in Scientific American in 2022 and consequently exterior to the training set of GPT-4. I provide the content of this article to GPT-4. Finally, this study asks GPT-4 to self-assess its ability to automate research workflows. I consider it important for GPT-4 to know that such a GPT-based automation system has been launched outside of the GPT-4 training set. To this end, I presented the Frequently Asked Questions article for the Elicit product to GPT-4. I also provided GPT-4 with the base LaTeX file for journal submission. I then prompted GPT-4 to answer the main query of interest. I inserted the current section on manual changes to the output, I reviewed the output to ensure that all cited studies actually exist, and I added the prompt conversation leading up to the final response to the appendix. No other changes to the body of the paper were made. Different subversions of GPT-4 can contextualize up to 32,768 tokens, or about fifty pages of words, in memory. I used GPT-4 through the ChatGPT+ interface, which contextualizes a maximum of 8,192 tokens. Of that maximum capacity, the priming information presented to GPT-4 plus the main query of interest amount to 5 tokens.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The working query of interest: Given the prior context, write a formatted 1600-word academic paper including academic citations to answer the following three questions. First, is an automated literature review using GPT-4 an acceptable alternative to a traditional, manual literature review? Second, what are the best practices, benefits, and problems involved in using GPT-4 to perform a literature review? Third, we know that using GPT-4 may occasionally yield inaccurate results. What signs or checks can a researcher perform to detect whether a particular literature generated by GPT-4 is a problematic case that should be thrown out or a satisfactory case that can be used with little to no manual revision?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Target Journals: A letter or research notes publication in economics, artificial intelligence, machine learning, or computer science. Here are <a href=\"http://ls-publishing-short-economics-paper\">ten for economics</a>, <a href=\"https://staging.onlinelibrary.wiley.com/page/journal/26895595/homepage/author-guidelines\">one for AI</a>, a <a href=\"https://www.elsevier.com/journals/artificial-intelligence/0004-3702/guide-for-authors\">second for AI</a>, and below are three letters journals for CS:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Information Processing Letters</li><li>Computer Science Letters</li><li>Frontiers of Computer Science</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>II. Cross-Validated GPT-4 Literature Review Accuracy</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Abstract: GPT-4 is a cutting-edge multimodal model that can be used as a research and writing assistant, but such models have a number of known problems. This study assesses GPT-4 by cross-validation with Consensus, a search engine that uses a distinct mode of artificial intelligence to analyze scholarly literature for consensus. Forty research questions with a variety of interesting features from the fields of economics and computer science are comparatively assessed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Expected Results: Identification of cases where one, the other, both, or neither solution is able to solve and related factor analysis. The degree of concordance in cases where both solutions apply. Discussion of practical guidelines for researchers to maximize productivity and quality in light of results.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Background</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><a href=\"https://consensus.app/search/\">https://consensus.app/search/</a></li><li><a href=\"https://twitter.com/kareem_carr/status/1640003536925917185\">https://twitter.com/kareem_carr/status/1640003536925917185</a></li><li><a href=\"https://elicit.org/faq#what-is-elicit\">https://elicit.org/faq#what-is-elicit</a></li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Design</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Select forty research questions from computer science and economics. Select questions from across the spectrum on controversy and freshness. Fresh questions are sufficiently new that they have not been addressed within the GPT-4 training set. Select some novel questions. Select some mainstream questions and some niche questions. Once the question set has been created, ask both models about the consensus in the literature for each question. Measure the degree of utility and concordance from each approach. Make a special note about the out-of-time accuracy of GPT-4 claims beyond its own training set. Compare steering GPT-4 to allow declaring ignorance in some cases and force it to make a best-effort estimate in other cases.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Target Journals: A letter journal might work here also. For a regular paper, an NLP journal or a general AI/ML journal would be appropriate. Because the topic is on the automation of literature review, <em><a href=\"https://www.mdpi.com/journal/publications\">Publications</a></em> or the <em><a href=\"https://www.resurchify.com/impact/details/21100217021\">Journal of Writing Research</a></em> and similar journals might be appropriate. Here are two more papers on a similar topic, so their containing journals might make sense:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li><a href=\"https://www.sciencedirect.com/science/article/pii/S2405844021011178\">Application of Artificial Intelligence powered digital writing assistant in higher education: randomized controlled trial</a></li><li><a href=\"https://www.sciencedirect.com/science/article/pii/S2666920X22000108\">Exploring an AI-based writing Assistant's impact on English language learners</a></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>III. GPT-4 Turing-Assessed Research Quality in Economics</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Abstract: GPT-4 is a cutting-edge multimodal model that can be used as a writing assistant, but such models have a number of known problems. This study takes a turing-like practical comparative approach to identify the overall quality of summary literature reviews produced by GPT-4. Participants create summary literature reviews by hand, score their own, then blindly cross-score those written by other researchers and those created by GPT-4. I hypothesize that GPT-4 will perform meaningfully worse than a field-relevant doctoral participant, and therefore GPT-4 is an improper substitute to a by-hand literature review. Additional discussion focuses on the potential value and practice of AI-augmented writing in contrast to AI-driven writing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Expected Results: Reject or fail to reject the null hypothesis that GPT-4 performs meaningfully worse than a field-relevant doctoral participant.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Background</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Review known cases of training set bias like the “White Obama” image debacle. Review other known benefits and problems of large language models and multimodal models. Time constraint is a key constraint and failure to execute basic math is another glaring concern. There is evidence that specialty AI can do the job for medical research reviews. Field-specific testing is important because GPT can handle many general cases, but fidelity is lost in relatively niche areas. Through training set bias, mainstream and common views are expected to be well-represented while niche and minority views would be relatively expected to be ignored, misunderstood, or misrepresented. A key part of this paper is assessing GPT-4 for such minority view bias.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On net, there doesn’t seem to be good existing evidence that AI can substitute or drive a literature review, but the hypothesis has yet to be directly tested in the field of economics. It may be the case that the magnitude of concerns is practically dominated by the benefits. In another sense, the use of AI is so low-cost that it should be expected, and researchers will benefit from knowing the expected quality of their activities. In this sense, whether AI should be used is a bit of a foolish question, because it will be used. The interesting question is on how economists and researchers can make the best use of AI and what the expected quality of output will be. That is the point of the current study.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Design</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Four research questions are communicated to four participants. All participants hold an economics degree. One is held at the bachelor’s level, one at the master’s level, and two at the doctoral level. Each participant is asked to draft a summary literature review related to the research question. Summary literature reviews are constrained to a single page in length, comparable to the background section of an ordinary scholarly paper, rather than a full-length review paper or survey. Participants were asked to complete their summary reviews within a month, or about one week for each summary review.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The principal investigator additionally prompted GPT-4 using the ChatGPT web interface to produce three additional literature reviews for each research question, resulting in a total of twenty-eight summary literature reviews. The prompts used are conveyed in the appendix along with the dates of prompting and their associated ChatGPT subversions. GPT-4 was prompted after all other drafts were completed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>At this stage, a random selection program was applied to select one review authored by GPT-4 for each research question. This paper was then edited by the principal investigator. This AI-driven editing workflow is interesting for analysis in the case where naive AI authorship is of a low quality. If naive AI authorship is not suitable for literature review, the possibility of AI augmentation remains open, and augmentation can take at least two forms. By assessing AI-driven authorship, a best practice can be identified.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The investigator-driven approach does not need to be distinctly assessed because an investigator can and will simply select whichever revision they prefer after having done the literature review by hand. An investigator-driven literature review which is reviewed by AI and then reselected on by the researcher is simply a traditional literature review with more steps, a new search tool, and not a form of work which is expected to substantially reduce quality or save time compared to the traditional approach.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Participants were informed prior that some papers would be generated by GPT-4, although they were blind to particular origins other than their own products, with the exception of the principal investigator.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Finally, participants scored their own papers and blindly scored papers from other sources using two variables on a scale from one to ten. First, they scored perceived quality. Second, they scored perceived likelihood that the paper was generated by GPT-4. These two measures were kept distinct with the intention to mitigate implicit bias in quality from perceived origin.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Results are produced by statistical comparisons of these variables. Analysis is robustly conducted to account for bias in the ratings of the principal investigator as well as bias in ratings of individuals on their own work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Target Journals</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I think this approach should be written as a full-length paper. Because it focuses on an analysis of use with the economics literature in particular, general economics journals should be receptive. AI/ML/CS journals should also be receptive.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>IV. GPT-4 Turing-Assessed Research Quality in Computer Science</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Similar to study III, except focusing on the CS literature.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>V. A Case Study in Productivity Gains from GPT-4 Utilization</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I expect my company to adopt GPT-4 or related tools in the near future. I hope we will at least internally measure the impact and ROI of such a change. There is a small possibility we might publish that information and I could assist with that if allowable.</p>
<!-- /wp:paragraph -->