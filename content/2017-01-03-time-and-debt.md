---
title: Time and Debt
date: 2017-01-03 15:00:16
author: John Vandivier
---



A savings and investment plan is an important component of a comprehensive budget. It's not that hard to do, but there are some common mistakes some folks make. This article addresses how to form your savings and investment plan in a way that allows you optimize in an apples-to-apples way by focusing on time and debt.

I pushed an update to my alpha-quality budgeting tool <a href=\"https://github.com/Vandivier/budget-tool\">here</a>. It's a useful template for a personal budget which has some excel formulas for various things. The new update includes a couple new metrics we will discuss in this article. These two metrics are the \"Weighted Time to Parity\" and the \"Janky Debt\" on the Savings Tab.

For starters, paying off debt should be considered a type of investment. Whether we are buying stock or paying off our credit card, we are engaging in a transaction where we lose cash on hand and we gain a return over time. Two forms of return we obtain include cash flow and interest payments. When thinking about financial investment the idea of cash flow doesn't have the same meaning: Am I receiving dividends or paying into a mutual fund? Instead, cross-class comparisons should simply use the interest rate. The cash flow consideration is important for paying off debts both due to liquidity demand and also due to a financial snowball effect.

By improving cash flow we are able to pay off debts faster, but by incurring a larger interest rate we force ourselves to pay longer. A larger total debt also causes us to pay longer. A balanced approach will consider all three factors and minimize the time needed to pay off the total debt. We can extend this concept of wealth as time to think of our entire balance sheet in terms of time-wealth, where debt is time required to pay off debt and surplus is the length of time in the past where we would have had neither debts nor surplus if the interest rate and other factors were constant. Or, equally, the amount of time required to double our wealth if such factors are constant. We can call this wealth metric the total time to parity.

When thinking of particular savings opportunities there is a similar concept which is the time to parity. This is the amount of time needed either to pay off a debt or to double the value of an asset account. This value is obtained by dividing the absolute value of an account (whether asset or liability) and dividing it by the monthly expenditure on that account. Notice here that in the case of preferred stock, for example, the monthly expenditure is the amount paid into the account rather than any dividends paid out of the account. Perhaps a more complete analysis would distinguish these kinds of flows, but here we simply ignore the dividend income (it's not that much for most people anyway).

By choosing to pay off the debt with the lowest time to parity we leverage a financial <a href=\"https://en.wikipedia.org/wiki/Snowball_effect\">snowball effect</a> where additional cash flow allows us to pay off other debts more quickly. This approach allows us to eliminate the whole debt as quickly as possible. Notice that this is a debt-only effect: We should not necessarily choose the lowest time to parity for financial investments. While liquidity is important for those decisions as well, that is not accounted for here. Instead, a simple comparison of interest rates is the criteria recommended for those decisions using the budget tool linked above.

Time to Parity is the reciprocal of the common lender's metric called the <a href=\"http://www.investopedia.com/terms/c/cash-flowtodebt-ratio.asp\">cash flow-to-debt ratio</a>. It is not comparable to the <a href=\"https://en.wikipedia.org/wiki/Rule_of_72\">rule of 72</a> because Time to Parity includes additional payments on a stock while the rule of 72 and similar approaches hold principle constant. By selecting the debt with minimal time to parity we are basically saying, \"assuming all my debts have equal interest, pay off whichever can be paid off most quickly.\" However, it's incorrect to assume equal interest rates. So let's correct for that.

We want to pay off debts with high interest more strongly than we want to pay off debts with low interest, holding everything else constant. We know that a lower Time to Parity is better, but paying off a higher interest rate is better. We can't just multiply these values or the effect will be confounded. Instead, let's take the reciprocal interest rate. When we use the reciprocal interest rate it is still the case that lower is better. Now let's multiply this value by the Time to Parity to obtain the Weighted Time to Parity. We optimize by selecting the opportunity with minimal weighted time to parity.

It's possible to receive undefined values when the cash flow of a debt is 0 or where the interest rate on the debt is 0. We can use the Janky Debt metric to correct for this problem through the introduction of arbitrary constants. The Janky Debt metric distorts relative values and introduces a bit of error (decreasing with the size of any stock) but it preserves the order of the choices.

This is an elementary approach which incorrectly estimates the True Time to Parity because it ignores the fact that interest will cause the total debt to increase in a nonlinear way. It is still useful thought because in many (most?) applications the optimal choice is invariant to whether we use the Weighted Time to Parity or the True Time to Parity. If you really want to obtain the True Time to Parity, adjust the debt level to the Total Accrued Amount of a loan using <a href=\"http://www.calculatorsoup.com/calculators/financial/simple-interest-plus-principal-calculator.php\">an interest calculator like this</a>.

In most applications the person using this approach should probably distinguish between financial investments and debts at the end of the process due to #7 below. Minimizing key metrics (weighted time to parity and janky debt) is a great approach for selecting the ideal debt payment opportunity and the ideal financial investment choice, but it is not straightforward to

This sort of approach ignores a few things:
<ol>
 	<li>Tax considerations. Contrast paying mortgage interest with obtaining a return on a stock. The former is deductible and the latter is taxed.</li>
 	<li>Risk preference (or, assumes risk neutrality)</li>
 	<li>Time preference (or, assumes time neutrality)</li>
 	<li>Real or preference-based threshold and <a href=\"http://chicagounbound.uchicago.edu/cgi/viewcontent.cgi?article=1311&amp;context=law_and_economics\">lumpy finance</a> effects</li>
 	<li>Separation of the principle and interest components of each monthly payment. Or, the assumption of roughly equal P/I across investment opportunities.</li>
 	<li>Unidentified opportunities. You will only be able to select among the listed or identified opportunities. This highlights another avenue for return: Doing research to find more opportunities. Interestingly, research takes time and produces an average (though highly varied) yield. So you could measure it and include it as another line item on the same sheet.</li>
 	<li>Assumes that doubling the value of an asset stock is equally preferred to the elimination of a debt stock.</li>
 	<li>Improving cash flow is just as desirable as obtaining a high return (Whether due to liquidity preference or as a means toward the snowball effect)</li>
</ol>
Regarding the ignorance of 1 and 2: It is normal for people to be non-neutral, impatient, and risk-averse. However, the efficient market allocation would result from neutrality. This is also the individual-level optimum in real, material, and productivity terms, eg, ignoring utility differences. So give yourself a competitive advantage and train yourself on patience and rational risk tolerance (not risk loving, which is super dangerous; just tolerance or neutrality).