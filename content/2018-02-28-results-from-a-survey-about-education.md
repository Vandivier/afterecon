---
title: "Results from a Survey About Education"
date: 2018-02-28 02:34:59
author: John Vandivier
---



Early results based on a recent <a href=\"https://www.surveymonkey.com/results/SM-FBQL8F5H8/\">Alternative Creds Baseline Attitudinal</a> survey. Sampled 2/26.

Outline:
<ol>
 	<li>Survey Objective and Content</li>
 	<li>Findings</li>
 	<li>Some Related Theory</li>
 	<li>Related External Articles</li>
</ol>
<strong>I. Survey Objective and Content</strong>

<strong>1.1 Objective</strong>

Contribute to <a href=\"http://www.afterecon.com/economics-and-finance/collecting-thoughts-on-education-research/\">research on alternative credentials</a> mainly by understanding factors affecting employer willingness to accept alternative credentials.

<strong>1.2 Content - Not in Order</strong>
<ol>
 	<li>[Statement, not a question]: Alternative credentials include certificates, documents, and other proof of receiving education, other than traditional credentials. Traditional credentials include a high school diploma or an undergraduate degree from an accredited university. An example of an alternative credential is a <a href=\"https://www.udacity.com/nanodegree\">Nanodegree</a> from Udacity.</li>
 	<li>Have you heard of any of the following <a href=\"https://www.g2crowd.com/categories/online-course-providers\">online course providers</a>? (Checkbox MultiSelect)
<ol>
 	<li>Udacity</li>
 	<li>Udemy</li>
 	<li>Coursera</li>
 	<li>Pluralsight</li>
 	<li>Lynda.com</li>
</ol>
</li>
 	<li>For many professions, alternative credentials can qualify a person for an entry-level position.</li>
 	<li>It will soon become fairly conventional for high school graduates to obtain alternative credentials instead of going to college.</li>
 	<li>When you add up the pros and cons for cryptocurrency, it's probably a good thing for society overall.*</li>
 	<li>When you add up the pros and cons for online education, it's probably a good thing for society overall.*</li>
 	<li>When evaluating an applicant's education, it is important is important to check whether the degree was awarded from a US institution.**</li>
 	<li>Do you contribute to hiring and firing decisions at your company? (yes/no/unemployed)</li>
 	<li>Do you work in a STEM profession? (yes/no/unsure)</li>
 	<li>Which of these industries most closely matches your profession?
<ol>
 	<li>Agriculture</li>
 	<li>Education</li>
 	<li>Energy</li>
 	<li>Finance, Investment, or Accounting</li>
 	<li>Health</li>
 	<li>Information Technology</li>
 	<li>Law</li>
 	<li>Manufacturing</li>
 	<li>Military</li>
 	<li>Other</li>
 	<li>Retail</li>
 	<li>Transportation</li>
</ol>
</li>
</ol>
Additional controls for age, gender, income, ethnicity, and region are provided by Survey Monkey.

*Intended to detect anti-innovation bias.

**Intended to detect anti-foreign bias.

<strong>II. Findings</strong>

<a href=\"https://www.surveymonkey.com/results/SM-FBQL8F5H8/\">Here</a> are the results from SurveyMonkey. You can watch a video of me doing a <a href=\"https://www.youtube.com/watch?v=9XPvmyFSAao\">live exploratory data analysis here</a>. Exported data files and analysis code is available <a href=\"https://github.com/Vandivier/data-science-practice/tree/master/stata/udacity-exploratory-analysis\">here on GitHub</a>.

Q2 is the main variable of interest. It asks whether alternative credentials qualify a job candidate for an entry level position.
<ol>
 	<li>Overall, people tend to think alternative credentials may qualify candidates for an entry level position, and they will soon be fairly conventional.</li>
 	<li>Overall, people are more favorable of alternative education than cryptocurrency.</li>
 	<li>Individuals making hiring and firing decisions are weakly more favorable to alternative entry.</li>
 	<li>Industry effects matter. Transportation was unexpectedly very bad for alts. Health, accounting, and law were bad as expected. IT was better as expected.</li>
 	<li>By region, the west coast was most friendly to alternative entry. The <a href=\"https://en.wikipedia.org/wiki/East_North_Central_states\">East North Central States</a> were most significantly and strongly opposed.</li>
 	<li>Age was significant, with a negative linear effect and a positive marginal effect.</li>
 	<li>Gender was not significant.</li>
 	<li>Anti-innovation bias was significant, but not anti-foreign bias.</li>
 	<li>Information Technology professionals are uniquely unsure about whether they work in STEM.</li>
</ol>
<strong>III. Some Related Theory</strong>

<strong>3.1 Reality of a Foreign Degree</strong>

Anti-foreign bias wasn't significantly noted, but even if it was prima facie noted there would be further analysis required. If people think an American degree is somehow better than a foreign degree, before we go slapping labels of bias on them it would be beneficial to check and see if they are right. Do any of the following apply:
<ol>
 	<li>Foreign degrees are not recognized here</li>
 	<li>Foreign degrees are bad for some non-obvious reason, but as a result they serve as a signal of bad decision making
<ol>
 	<li>Getting one in and of itself is a weirdmaking signal. The degree may lose it's signal of <a href=\"http://econlog.econlib.org/archives/2015/04/educational_sig_1.html\">conformity to social norms</a>.</li>
 	<li>If it turns out that the foreign degree is higher net cost and lower net quality then it can be seen as an overall bad consumption decision.</li>
</ol>
</li>
 	<li>People with foreign degrees typically have lower productivity, IQ, or observable skills</li>
</ol>
<strong>3.2 Pros and Cons of Altpathability</strong>

A requirement is altpathable if it is feasible to achieve by means of an alternative path. For example, let's say that a recognized degree is a requirement for a job. If a foreign degree is considered recognized, then this requirement is altpathable through the specific alternative path of getting a foreign degree. If foreign degrees are not recognized, it is not altpathable using that specific alternative path, but it may still be altpathable through some other alternative path. For example, obtaining an online degree. Most job requirements, whether specified on a job description or not, are optional or altpathable.

Doesn't any alternative path by definition lower the quality of a credentials signal of conformity to social norms? Yes, but that doesn't make it a bad investment decision, and neither does it mean that the credential will be insufficient to garner a career-starting job. Once you have a few years of career experience the degree no longer matters.

Altpathability can be viewed on a continuous scale, such that two paths are both positively altpathable to different degrees. For example, <a href=\"http://tryengineering.org/ask-expert/can-degrees-be-transferred-across-countries\">engineering degrees are largely transferable</a> across countries, but backgrounds in <a href=\"http://network.nshp.org/profiles/blogs/how-to-revalidate-your\">education, law, medicine, and accounting</a> require rework to maintain equivalent professional status after crossing countries. Rework is less than 100% of the initial work required to obtain the degree, and may be relatively trivial, or it may be severe. The cost of work + rework is the total cost of the altpath, and the altpath is not preferred if the benefits are equal but the costs are higher.

In general, however, altpaths do not have equal benefits. They are generally seen as producing lower benefits. For this reason, altpaths are only preferred when they have substantially lower costs. It is one thing to say an alternative path technically exists, but it is quite a different thing to suggest it is preferred. The idea of comparative preference is not embedded in my usage of the term alternative path.
<ol>
 	<li>Pros
<ol>
 	<li>Alternative paths are heterogenous and multi-specific. As a result, it may be easier to find an existing alternative path which fits an individual well, as opposed to the traditional situation where an individual must self-adjust to match the traditional education system.</li>
 	<li>More effective learning at a lower cost, sometimes.</li>
</ol>
</li>
 	<li>Cons
<ol>
 	<li>May signal nonconformity.</li>
 	<li>May reduce adaptability and subservience (See 1.1).</li>
 	<li>May not be recognized by a particular employer.</li>
 	<li>Less effective learning at higher cost, sometimes.</li>
</ol>
</li>
</ol>
&nbsp;

<strong>IV. Related External Articles</strong>
<ol>
 	<li><a href=\"https://www.pearsoned.com/alternative-credentials-paths-employment/\">Alternative Credentials Create Alternative Paths to Employment</a></li>
 	<li><a href=\"https://www.forbes.com/sites/michaelhorn/2017/01/20/will-alternative-credentials-replace-college-degrees/#40926e4c1b0e\">Will Alternative Credentials Replace College Degrees?</a></li>
 	<li><a href=\"https://evolllution.com/programming/credentials/moving-from-alternative-credentials-to-an-integrated-credential-ecosystem/\">Moving from “Alternative Credentials” to an Integrated Credential Ecosystem</a></li>
 	<li><a href=\"http://www.afterecon.com/education/alternative-paths-traditional-education/\">Alternative Paths to Traditional Education</a></li>
</ol>