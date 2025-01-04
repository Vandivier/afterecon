---
title: "BOA and Budgeting: Multi-Category Transactions"
date: 2017-03-26 13:00:11
author: John Vandivier
---



<a href=\"http://www.afterecon.com/economics-and-finance/bank-americas-new-budget-tool-cool/\">I recently bragged about</a> some major improvements Bank of America (BoA) has rolled out to their online platform which facilitate real budgeting. Even so, I noted some issues. This article provides a partial update, describes two new issues, and a strategy for obtaining bank data to create a superior external application. Such an external application would solve the noted issues.

<strong>1 - The categories issue and an update</strong>

One of my criticisms 0f BoA's app is their implementation of categories. I wasn't sure whether they forward-propagated user-provided matches between vendor and category. Now I'm sure they don't. I manually identified one vendor as a charitable organization when BoA had automatically marked it as uncategorized. That vendor receives a monthly payment which is still marked automatically marked as uncategorized until I manually reconcile it.

Another issue was the ability to make custom categories. The update here is that this:<img class=\"aligncenter wp-image-6238 size-full\" src=\"http://www.afterecon.com/wp-content/uploads/2017/03/categories.png\" alt=\"\" width=\"707\" height=\"314\" />

I think this feature previously existed and I simply didn't notice it. It allows you to create rules for automatically categorizing transactions by transaction description. It also allows the creation of new subcategories. A category might be transportation while a few subcategories might be gas, maintenance, and Uber payments.

<img class=\"aligncenter wp-image-6239 size-full\" src=\"http://www.afterecon.com/wp-content/uploads/2017/03/categories-rules.png\" alt=\"\" width=\"992\" height=\"366\" />This is a bittersweet feature because BoA calculates cool panel data over time for categories, but not for subcategories. At the same time, this essentially allows a user to create any category and match it to any transaction, although you may have to stash your custom category as a subcategory of a category to which it is questionably related.

<strong>2 - Two new issues</strong>

The two new issues are multi-category transactions and joint accounts. These two issues involve three features, including one called a virtual transaction.

An obvious example of a multi-transaction category transaction is this: You go to a gas station and in the same transaction you buy some gas, some snacks, and some cash back for use later at the movie theater. BoA will log this as a gas station transaction and it will show up under transportation, but that accounting is not accurate and will harm your budget.

What we need to do here is take the receipt and manually reconcile it as three virtual transactions. One for gas, one for good, and one for entertainment. Bank of America cannot do this. As covered in section 3, a standalone application could do this. A general principle here is that transaction-level budgeting isn't good enough. Budgets need to be at the level of the virtual transaction.

There is a different case for multi-category transactions. In this case there really is one transaction, but while making a budget you might want to be able to query for different categories and have it show up either way. For example, you could create a Coffee Shop category and independently track how much you spend on coffee shops, but you also want this to show up under \"Going out to eat\" as well. In this case a single transaction should be able to obtain multiple categories. That is a separate feature but it's also related to multi-category transactions.

Another issue is joint accounts. Bank of America and the US financial system elaborately handle formal joint accounts, but there is a use case for informal joint accounts while budgeting. These accounts are not legally binding, but you are able to pool incomes and expenditures from separate accounts for the purposes of a budget. BoA doesn't support this use case whatsoever. Specifically, consider my wife and I. We have 6 accounts: A shared checking account, each an independent checking account, and each a independent credit card account. Finally, a shared investment account which is external to Bank of America. When we budget we want to be able to see everything. This means pooling our independent check accounts for the budgets as well as the Betterment investment account.

As it stands, Bank of America considers transfers to Betterment to be expenses when they are really just transfers. They are income-positive transfers once interest is considered. They are by no means an expense in the ordinary sense, although they are such in the formal accounting sense where it is an expense to one account and a credit to another; yet the latter part of the accounting is absent and throws off the budget. As it stands, Bank of America has no method of creating a budget overview which involves multiple BoA member accounts, and I don't know of a way to pool even a single user's multiple accounts. For example, a budget which sees my credit card, checking, and shared checking. Perhaps that's user error.

<strong>3 - Data Extraction Strategy</strong>

To be brief, <a href=\"http://stackoverflow.com/questions/7269668/is-there-an-api-to-get-bank-transaction-and-bank-balance\">a scraper needs to be created</a>. This could be done with Node and <a href=\"https://github.com/cheeriojs/cheerio\">Cheerio</a>. The data would need to be downloaded to your local machine. If you want to store it you should first encrypt the data unless you don't care about being hacked. (Not a joke; maybe you are a fan of transparent personal financial data. But you would be an exception.) I would personally encrypt my data and back it up using a private BitBucket account. Bank of America I think only stores your past 6 months, but handling the data yourself would allow much longer handling.

Keep an eye out because I may actually develop this tool.

After we scrape Bank of America's transaction history we should do the following:
<ol>
 	<li>Create a GUI tool which allows all the previously discussed features: Virtual transactions, account joining, custom categories, data analytics by category, and so on.
<ol>
 	<li>This could be facilitated by a small phone app or physical notebook which allows an individual to log transactions for later reconciliation by category. For example, when you make the multi-category transaction, jot it down and fix it later.</li>
 	<li>Careful on the analytics: If you went through a mortgage refinance two months ago and your monthly payment was reduced, you should budget on the reduced amount not the statistical average or prediction. This is called fundamental or structural analysis, and it is predictably better than regression in certain cases such as the one I just described. In other cases (eg you don't know the root cause and exact factor magnitudes for variation) then standard statistics is ideal.</li>
</ol>
</li>
 	<li>Create an open vendor database where people can get crowd-sourced, best-practice, default transaction and vendor categories. This would be placed on GitHub in an SQL or JSON format.</li>
</ol>