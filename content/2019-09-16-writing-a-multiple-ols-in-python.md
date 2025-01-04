---
title: Writing a Multiple OLS in Python
date: 2019-09-16 12:03:05
author: John Vandivier
---



<!-- wp:paragraph -->
<p>For quick instruction, I recommend the following tutorial: <a href=\"https://datatofish.com/multiple-linear-regression-python/\">https://datatofish.com/multiple-linear-regression-python/</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>However, I had some additional questions which needed solving to get the above working. This article has the questions and answers required to eventually get my simple OLS working. I also include the simple script for reference. Here's the code:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code># ref: https://datatofish.com/multiple-linear-regression-python/<br><br>import pandas as pdimport statsmodels.api as sm<br><br># could have made a normal dataframe in csv and do pd.readcsv<br>oStudentData = {<br>    'TotalScore': [1623, 1471, 1597, 1657, 1521],<br>    'Rank': [5, 1, 2, 4, 3],<br>}<br><br>arrsStudentDataColumns = [*oStudentData.keys()]<br>arrsIndependentVariableNames = [*filter(lambda sKey: sKey != 'TotalScore', arrsStudentDataColumns)]<br><br>dataFrame = pd.DataFrame(oStudentData, columns=arrsStudentDataColumns)dictIndependent = dataFrame[arrsIndependentVariableNames]dictDependent = dataFrame['TotalScore']<br><br>dictIndependentWithConstants = sm.add_constant(dictIndependent)<br>model = sm.OLS(dictDependent, dictIndependentWithConstants).fit()<br>print_model = model.summary()<br>print(print_model)</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Q&amp;A:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Recommended pylint and python repo setup?<ol><li>For this simple use case, a script is suitable and a whole repo setup with linting and a requirements file isn't needed.</li></ol></li><li>I got <code>ImportError: No module named pandas</code> and I see <a href=\"https://stackoverflow.com/questions/33481974/importerror-no-module-named-pandas\">a couple ways to fix this</a>. Any recommendations?<ol><li>Install python3 and anaconda, then run the script like <code>python3 myscript.py</code>.</li></ol></li><li><a href=\"https://stackoverflow.com/questions/33751214/single-command-in-python-to-install-relevant-modules-from-a-package-json-like-fi\">Some dude</a> said i should use pipenv instead of pip. thoughts?<ol><li>That's not needed in this case, and I'm not aware of any case where it's needed. If you install python3 you will have pip3 and you should <code>pip3 install</code> to prevent packages mixing across python version.</li></ol></li><li>I installed a wrong version of python. How can I fix this?<ol><li>Through Python 3.7, and perhaps higher although I can't guarantee it, you can uninstall following <a rel=\"noreferrer noopener\" aria-label=\"this article (opens in a new tab)\" href=\"https://superuser.com/a/276843/859670\" target=\"_blank\">this article</a>.</li><li>When uninstalling, <code>which python3</code> may give you more confidence that you are deleting the correct things.</li><li><a href=\"https://stackoverflow.com/questions/3819449/how-to-uninstall-python-2-7-on-a-mac-os-x-10-6-4/3819829#3819829\">Using brew</a> will likely make install and uninstall much easier.</li></ol></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>For more in-depth learning, multiple python developers and data analysts recommended <a href=\"https://www.codecademy.com/learn/machine-learning/modules/multiple-linear-regression\">this Codecademy course</a>.</p>
<!-- /wp:paragraph -->