---
title: "The 15 Most Important Degrees for Entrepeneurship"
date: 2016-04-10 12:26:33
author: John Vandivier
---



While conducting <a href=\"https://github.com/Vandivier/data-science-practice/tree/master/stata-practice\">an EDA of the ACS PUMS</a> data set, one interesting thing I encountered was the relationship between the undergraduate degree a person received and their rate of self-employment. This article discusses that finding.

Two variables regressed include FOD1P and FOD2P which are variables for the \"Field of Degree.\" I believe the degree referred to is the Bachelor's Degree as per the <a href=\"http://www2.census.gov/programs-surveys/acs/methodology/questionnaires/2014/quest14.pdf\">ACS questionnaire</a> which allows an individual to name multiple field in question 12. Statistically, after correcting for a number of variables the FOD2P variable was insignificant.

Most individuals only have one undergraduate degree and/or one major field for their undergraduate degree. However, a significant number of individuals do not follow that pattern. When an individual lists multiple fields for their Bachelor's Degrees, there is no mechanism in the survey to detect:
<ol>
	<li>Whether multiple fields belong to separate degrees, or whether a single degree has multiple major fields</li>
	<li>Which order the degrees were obtained in</li>
</ol>
So we can establish that the first degree listed is of statistical significance and that the second one listed is not, but it does not follow that this is the individual's chronologically first earned degree. It is simply the first one they chose to list, which could be determined by any number of criteria. It might be the one they earned first or the one they earned most recently. It might be the degree or field that the surveyed individual considers most important because it is the credential they generally advertise, or it may be due to some other criteria or chance. More transparency into this variable is one way the ACS could be improved.

Each of these degrees had a coefficient which was statistically significant at the 2% level and the B value, which is the coefficient, identifies the strength of the relationship between the independent variable and the rate of self-employment. If B is negative then an individual having that degree is associated with a reduced probability that they will be self-employed. I also added an asterisk in front of the degree name to help these stick out. If B is positive then having that degree is associated with an increased chance to be self-employed.

Here are the 15 most important degrees:
<ol>
	<li>General Agriculture
<ol>
	<li>_fod1p1, field code 1100, B = .091</li>
</ol>
</li>
	<li>Agricultural Production and Management
<ol>
	<li>_fod1p2, field code 1101, B = .110</li>
</ol>
</li>
	<li>Agricultural Economics
<ol>
	<li>_fod1p3, field code 1102, B = .126</li>
</ol>
</li>
	<li>Animal Science
<ol>
	<li>_fod1p4, field code 1103, B = .093</li>
</ol>
</li>
	<li>Plant Science and Agronomy
<ol>
	<li>_fod1p6, field code 1105, B = .086</li>
</ol>
</li>
	<li>Architecture
<ol>
	<li>_fod1p12, field code 1401, B = .104</li>
</ol>
</li>
	<li>*Educational Administration and Supervision
<ol>
	<li>_fod1p27, field code 2301, B = -.077</li>
</ol>
</li>
	<li>Zoology
<ol>
	<li>_fod1p88, field code 3609, B = .071</li>
</ol>
</li>
	<li>Fine Arts
<ol>
	<li>_fod1p139, field code 6000, B = .075</li>
</ol>
</li>
	<li>Music
<ol>
	<li>_fod1p141, field code 6002, B = .085</li>
</ol>
</li>
	<li>Visual and Performing Arts
<ol>
	<li>_fod1p142, field code 6003, B = .079</li>
</ol>
</li>
	<li>Commercial Art and Graphic Design
<ol>
	<li>_fod1p143, field code 6004, B = .091</li>
</ol>
</li>
	<li>Film Video and Photographic Arts
<ol>
	<li>_fod1p144, field code 6005, B = .131</li>
</ol>
</li>
	<li>Studio Arts
<ol>
	<li>_fod1p146, field code 6007, B = .076</li>
</ol>
</li>
	<li>Health and Medical Preparatory Programs
<ol>
	<li>_fod1p153, field code 6106, B = .103</li>
</ol>
</li>
</ol>
Also notice which degrees are conspicuously absent: Computer Science has no statistical significance, which works against the theory that programmers will tend to be entrepreneurs due to the low barriers to entry in the IT industry.

It's also important to note that these results were obtained without correcting for income or wealth. Keep an eye out for a later article where I will revisit after including those variables in the regression.

If you are following along with the analysis.do file, notice that each variable in the variable series _fod1p* receives a label inside of STATA which identifies the recoded field of degree as per <a href=\"http://www2.census.gov/programs-surveys/acs/tech_docs/pums/data_dict/PUMSDataDict14.pdf\">the code book beginning on P57</a>.