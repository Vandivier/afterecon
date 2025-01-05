---
title: "Methodology for Bitcoin Valuation as a Fiat Hedge"
date: 2014-11-14 16:10:10
author: John Vandivier
---



This article goes over my methodology for a bitcoin valuation which resulted in my guest article on the Mineforman website <a href=\"http://mineforeman.com/2013/05/14/bitcoin-valuation-as-a-fiat-hedge-with-information-and-substitution-effects/\">here</a>.

The spreadsheet I used, complete with all my little self-notes and summaries, is available in its original Gnumeric format <a href=\"https://mega.co.nz/#!QIwnjKhJ!NJYIuBa-mhh_n80_YfmSzD_LRocOK1C-NT3FSSkSo9A\">here</a>, and in the more common Excel format <a href=\"https://mega.co.nz/#!kVJ2RKiS!PQpv9gox4mejznYewtrbeXDymNBgKaBCxV0Sp_WekjQ\">here</a>. Simple Excel conversion resulted in some errors on that version. I recommend Gnumeric for all spreadsheet and basic statistical work.

Google Trends information was used to determine the rate of information spread by looking at search rates relative to a \"common knowledge\" standard rate. \"Business\" was chosen as the objective standard search term because it was <a href=\"https://freekeywords.wordtracker.com/top-keywords/long-term.html?utf8=%E2%9C%93&amp;include_adult=1&amp;commit=Refresh\">10th most popular keyword over a long time frame</a>. All search data was analyzed from January 2011, when bitcoin searches were notable by google, until May 2013, using data from the first of each month. See the following graphical visualization:

<img class=\"wp-image-2086 aligncenter\" alt=\"Business Bitcoin\" src=\"http://afterecon.com/wp-content/uploads/2013/05/Business-Bitcoin.png\" width=\"614\" height=\"448\" />

The average interest level for \"business\" was 89 on this chart. The peak measured data point for bitcoin was 11 which occurred over the interval including April 1, 2013. When we eliminate \"business\" from the chart we are given richer data on bitcoin searches. See the following:
<p style=\"text-align: center;\"><img class=\"wp-image-2088 aligncenter\" alt=\"Bitcoin\" src=\"http://afterecon.com/wp-content/uploads/2013/05/Bitcoin.png\" width=\"614\" height=\"448\" /></p>
Since this chart provides richer data I actually took monthly data from this chart, using the first of the month. The interest level matching the 11 on the other chart is 53 on this chart and all data is proportional, therefore I knew that I would need an interest level of about 430 (about = 89 on the other chart) to constitute a \"common knowledge\" of \"bitcoin\" as a search term.

Information typically spreads according to a growth curve pattern, also called an S-Curve or a sigmoid. This pattern is well approximated by an exponential or logarithmic curve in the early period of growth, before saturation is approached. Bitcoin valuation was conducted using a logarithmic regression yielding a best fit line of:

Log(Interest level for \"Bitcoin\") = .026*(Number of Months After January 1, 2011)+.237

Plugging in an interest level of 430 we obtain Log(430) = 2.6 and finally we expect Number of Months = 92, or 8 years after rounding to the nearest year. This is how I did the information modelling portion.

For the dilution portion I used market cap. I defined the cryptocurrency market as Litecoin Mkt Cap + Namecoin Mkt Cap + Bitcoin Mkt Cap after observing that these were the most valuable currencies as per Vircurex and BTC-E. Other currencies constituted very small market caps, although that will change in the future. While small, the growth rate of Feathercoin makes it an example of a noteworthy currency to perhaps include in future calculations. It is also fundamentally similar to Litecoin, the most stable of the alt coins.

All coin values were converted into their bitcoin equivalents. Pricing information obtained, as noted in the spreadsheet, from <a href=\"http://www.cryptocoincharts.info/\">here</a>. Prices were multiplied by number of coins on a particular day to obtain market cap over time. Number of coins were obtained on a particular day by raw guess-and-check method research through each appropriate block explorer, where time information is recorded for each block. As noted in the spreadsheet, the Litecoin block explorer is located <a href=\"http://explorer.litecoin.net/\">here</a>, Namecoin <a href=\"http://explorer.dot-bit.org/\">here </a>and Bitcoin <a href=\"http://blockexplorer.com/\">here</a>.

The actual bitcoin market cap was taken as a percent of the entire bitcoin equivalent cryptocurrency cap and modeled linearly dependent on time. This is how we accounted for dilution of bitcoin valuation over time.

Finally we modeled block number by month to find the expected number of bitcoins in december! Alternatively we could have used the <a href=\"https://en.bitcoin.it/wiki/Controlled_supply\">widely accepted theoretical 10 minutes per block</a>, but we chose to use historical data instead. Historical data yielded 9.08 minutes per block. The difference between theoretical and historical data is possibly significant.

Lastly, if you aren't aware of why gold can be used as a hedge against fiat price fluctuations to begin with, watch this great interview with Ron Paul on the topic:
[youtube http://www.youtube.com/watch?v=q3SOlXxUBLk&amp;w=560&amp;h=315]