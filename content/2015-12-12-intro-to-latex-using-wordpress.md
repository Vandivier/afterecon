---
title: "Intro to LaTeX using WordPress"
date: 2015-12-12 02:38:02
author: John Vandivier
---



This article demonstrates one way to write complex equations using <a href=\"https://latex-project.org/intro.html\">LaTeX</a> on your WordPress blog.

Why blog with LaTeX? At least two reasons:
<ol>
	<li>WordPress and other text editors don't support complex mathematical notation out-of-the-box.</li>
	<li>Writing in LaTeX is a standard skill in research. So you can blog and be pro at the same time.</li>
</ol>
The instructions here allow the use of a subset of LaTeX. Specifically, everything gets dumped into a LaTeX \\math environment. Basically, this approach will suit your needs for writing equations, but not for creating whole papers or documents.

Steps:
<ul>
	<li>Install the Jetpack plugin for WordPress.</li>
	<li>Activate the <a href=\"https://jetpack.me/support/beautiful-math-with-latex/\">Beautiful Math with LaTeX</a> module in Jetpack.</li>
	<li>Review the documentation, linked above, and start writing your equations in LaTeX!
<ul>
	<li>You may also want to play around some with an online LaTeX editor. <a href=\"http://www.hostmath.com/\">Like this one</a>.</li>
	<li>You can <a href=\"http://www.afterecon.com/wp-content/uploads/2015/12/noob-tex-exam-solution.txt\">click here</a> to download a text document containing an example of how to use Beautiful Math. The example contains the same text used to render the text below this bulleted list.</li>
	<li>That text is also the solution to a question found on the <a href=\"http://www.afterecon.com/exams/advanced-macro-i-ramirez-final-edition/\">Advanced Macro I – Ramirez Final Edition</a> exam!</li>
	<li>Thanks to Brian, Ennio, and Josh for showing me how to solve the related problem.</li>
</ul>
</li>
</ul>
Given:

$latex
Y = C(Y-T) + I(i-\\pi^e, Y_{-1}) + \\bar{G} + X(\ho, Y, Y*)
\\\\\\\\
\\frac{M}{P} = L(i, Y-T)
\\\\\\\\
BOP = X(\ho, Y, Y*) + \\sigma(i - i*) + K
$

We must write the total derivative in matrix form. The result will have a column of endogenous variables $latex dY, di,$ and $latex d\ho$.

Solving for $latex dY$:

$latex
Y = C(Y-T) + I(i-\\pi^e, Y_{-1}) + \\bar{G} + X(\ho, Y, Y*)
\\\\\\\\
dY = \\frac{dC}{dY}(dY - dT) + \\frac{dI}{dr}(di - d\\pi^e)
+ \\frac{dI}{dY}dY_{-1} + d\\bar{G} + \\frac{dX}{d\ho}d\ho + \\frac{dX}{dY}dY + \\frac{dX}{dY^*}dY^*
\\\\\\\\
dY - dY\\frac{dC}{dY} - dY\\frac{dX}{dY} - di\\frac{dI}{dr} - d\ho\\frac{dX}{d\ho}
= -\\frac{dC}{dY}dT - \\frac{dI}{dr}d\\pi^e + \\frac{dI}{dY}dY + d\\bar{G} + \\frac{dX}{dY*}dY*
\\\\\\\\
dY(1 - \\frac{dC}{dY} - \\frac{dX}{dY}) - di\\frac{dI}{dr} - d\ho\\frac{dX}{d\ho}
= -\\frac{dC}{dY}dT - \\frac{dI}{dr}d\\pi^e + \\frac{dI}{dY}dY + d\\bar{G} + \\frac{dX}{dY*}dY*
\\\\\\\\
$

Solving for $latex dL$:

$latex
\\frac{M}{P} = L(i, Y-T)
\\\\\\\\
d\\frac{M}{P} = \\frac{dL}{di}di + \\frac{dL}{dY}(dY - dT)
\\\\\\\\
d\\frac{M}{P} = \\frac{dL}{di}di + \\frac{dL}{dY}dY - \\frac{dL}{dY}dT
\\\\\\\\
\\frac{dL}{dY}dY + \\frac{dL}{di}di = d\\frac{M}{P} - \\frac{dL}{dY}dT
\\\\\\\\
$

Solving for $latex d\ho$ from the BOP function:

$latex
BOP = 0 = X(\ho, Y, Y*) + \\sigma(i - i*) + K
\\\\\\\\
0 = \\frac{dX}{d\ho}d\ho + \\frac{dX}{dY}dY + \\frac{dX}{dY^*}dY^* + \\frac{d\\sigma}{dr}i - \\frac{d\\sigma}{dr}i^* + dK
\\\\\\\\
\\frac{dX}{dY}dY + \\frac{d\\sigma}{dr}i + \\frac{dX}{d\ho}d\ho
= \\frac{d\\sigma}{dr}i^* + \\frac{dX}{dY^*}dY^* + dK
\\\\\\\\
$

Expressing the system of equations for $latex dY, di,$ and $latex d\ho$ in matrix form:

$latex
dY(1 - \\frac{dC}{dY} - \\frac{dX}{dY}) - di\\frac{dI}{dr} - d\ho\\frac{dX}{d\ho}
= -\\frac{dC}{dY}dT - \\frac{dI}{dr}d\\pi^e + \\frac{dI}{dY}dY + d\\bar{G} + \\frac{dX}{dY*}dY*
\\\\\\\\
\\frac{dL}{dY}dY + \\frac{dL}{di}di = d\\frac{M}{P} - \\frac{dL}{dY}dT
\\\\\\\\
\\frac{dX}{dY}dY + \\frac{d\\sigma}{dr}i + \\frac{dX}{d\ho}d\ho
= \\frac{d\\sigma}{dr}i^* + \\frac{dX}{dY^*}dY^* + dK
\\\\\\\\
\\\\\\\\
\\implies
\\begin{bmatrix}
F_1 &amp; \\frac{dI}{dr} &amp; -X_\ho\\\\
L_Y &amp; \\frac{dX}{d\ho} &amp; 0\\\\
X_Y &amp; \\sigma_r &amp; X_\ho
\\end{bmatrix}
\\begin{bmatrix}
dY\\\\
di\\\\
d\ho
\\end{bmatrix}
=
\\begin{bmatrix}
F_2\\\\
d\\frac{M}{P} - \\frac{dL}{dY}dT\\\\
F_3
\\end{bmatrix}
\\\\\\\\
\\\\\\\\
F_1 = 1 - \\frac{dC}{dY} - \\frac{dX}{dY}
\\\\\\\\
F_2 = -\\frac{dC}{dY}dT - \\frac{dI}{dr}d\\pi^e + \\frac{dI}{dY}dY + d\\bar{G} + \\frac{dX}{dY*}dY*
\\\\\\\\
F_3 = \\frac{d\\sigma}{dr}i^* + \\frac{dX}{dY^*}dY^* + dK
$

&nbsp;