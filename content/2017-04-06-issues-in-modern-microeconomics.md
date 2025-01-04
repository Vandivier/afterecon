---
title: Issues in Modern Microeconomics
date: 2017-04-06 15:00:37
author: John Vandivier
---



This is the longer form of a term paper turned in as part of Wagner's Theory of the Market Process II, Spring 2017. The more concise version, which was actually turned in, is <a href=\"http://www.afterecon.com/wp-content/uploads/2017/04/881-problems-in-micro-turned-in.docx\">available for download here</a>.

<hr />

<ol>
 	<li><strong> Introduction</strong></li>
</ol>
This paper argues that modern microeconomics would benefit from the incorporation of ethnography into the skillset of both the academic and the business economist. In particular, I argue that agent-based modelling (“ABM”) and multi-agent systems modelling (“MAS”) are groundbreaking technologies which solve many issues with more traditional equilibrium modelling, and I further argue that ABM and MAS have several advantages over the contemporary style of statistical or stochastic analysis. Despite the many benefits of this new style of analysis, agent based modelling as currently practiced suffers in a number of ways. In this paper I focus on the manner in which ethnography can complement ABM and MAS

For the rest of this paper I will continue to refer to ABM without the additional reference to MAS, but with the understanding that points made are generally applicable to the both approaches. Section I lays out the topic and organization of this paper. Section II defines ABM and explores its contemporary use. Specifically, I contrast this approach against equilibrium, partial-equilibrium, and statistical analysis including stochastic analysis. Section III briefly lists several outstanding issues with ABM, but special focus is given to a particular issue referred to as the local knowledge problem. Section IV defines ethnography and explores how it might integrate with ABM to attenuate the local knowledge problem. I also note certain issues which are expected to persist even with proper integration of ABM and ethnography.

&nbsp;
<ol>
 	<li><strong> On Agent Based Modelling</strong></li>
</ol>
In the most cited paper on the topic, Bonabeau (2002) describes an agent based model this way:
<blockquote>In agent-based modelling (ABM), a system is modeled as a collection of autonomous decision-making entities called agents. Each agent individually assesses its situation and makes decisions on the basis of a set of rules… [ABM] relies on the power of computers to explore dynamics out of the reach of pure mathematical methods. At the simplest level, an agent-based model consists of a system of agents and the relationships between them. Even a simple agent-based model can exhibit complex behavior patterns and provide valuable information about the dynamics of the real-world system that it emulates. In addition, agents may be capable of evolving, allowing unanticipated behaviors to emerge.</blockquote>
Duffy (2006) reiterates that ABM are not expressed in closed-form fashion and emphasizes the distinction between mainstream neoclassical economics:
<blockquote>Agent-based modeling using computational laboratories grew out of frustration with the highly centralized, top-down, deductive approach that continues to characterize much of mainstream, neoclassical economic-theorizing. This standard approach favors models where agents do not vary much in their type, beliefs or endowments, and where great effort is devoted to deriving closed-form, analytic solutions and associated comparative static exercises.  By contrast, agent-based computational economic (ACE) researchers consider decentralized, dynamic environments with populations of evolving, heterogeneous, boundedly rational agents who interact with one another, typically locally. These models do not usually give rise to closed-form solutions and so results are obtained using simulations.</blockquote>
In addition to the ability of computer programs, of which ABM is a particular variety, to explore dynamics out of the reach of closed-form models, programs can also be organized in a way which is much more human readable when programming best-practices are followed. These models may be organized into modules or libraries of code which may be trivially reproduced, modified, or included into future work. In programming, the coupling of a library or set of libraries with implementation norms is referred to as a framework. Programming frameworks often come with a community of individuals who craft and maintain the implementation norms, and they often provide support for developers new to the framework. When a framework exists in a programming language it can greatly facilitate creation of a program. Such communities and frameworks are already becoming common with respect to ABM. A recent review is given by Kravari and Bassiliades (2015). While the skill set involved may represent a learning curve for the traditional economist, many programmers would find the approach practically trivial, and this may benefit the next generation of economists as modern education has growing emphasis on programming knowledge.

Agent-based modelling captures complexity and dynamic information which is not obtained in equilibrium or partial equilibrium analysis. Modern statistical or stochastic analysis, however, can generate significant complex and dynamic information. Key benefits of ABM compared to statistical analysis include clarity in the areas of causality, aggregation, and edge case handling, in addition to previously mentioned benefits of programming over equation-based modelling in general. Agent-based models make explicit assumptions about process and behavior which directly represent or lead to definite causal mechanisms, in contrast to statistical analysis which is generally constrained to much weaker claims of causality, with the notable exception of experimental statistics. Aggregation processes are observed under ABM. With ABM, multiple levels of analysis are compatible with a single emergent model. Statistical analysis obfuscates the aggregation and, properly, limits itself to one level of study in any particular model.

Finally, statistics is susceptible to omitted variable bias. Given a regression of A on B, the coefficient on A may not be reliable if some other factor C is not corrected for. In statistical analysis it is almost always possible to argue that some C was not accounted for in any proposed model. In agent-based modelling the process is clearly defined such that the relevant factors are specifically and exhaustively identified. It may be the case that an agent-based model contains overall incorrect assumptions, that is not the point made here. The point is that, given some ABM process, it is not possible to argue that some unobserved C exists.

&nbsp;

<strong>III. Outstanding Issues in ABM</strong>

As previously noted, frameworks for agent-based modelling have already sprung up. Two issues around these frameworks exist. First, the frameworks are not technically optimal for programming reasons. Second, these models fall outside the skillset of the typical economist. A third issue with agent-based modelling is a practical issue called the local knowledge issue. The issue is simply that an ABM developer may not possess sufficient or correct process knowledge to design an accurate process representation. The consequence is severe because ABM by nature has potentially chaotic error generated at the aggregate level which result from minor errors at the agent level.

Technically, most agent-based modelling is done in Java. For any particular language there would exist the problem that a technology is confined to one language, representing a technical barrier to entry. Java in particular is a well-regarded language, but it is not without problems. Java is known as a verbose language. As a server-side language it cannot be developed and tested without significant desktop tooling. For example, it cannot be rapidly developed and tested with a browser alone, a feature which would be accomplished by using JavaScript. Java is also a narrower skillset compared to other languages and to JavaScript in particular. Stack Overflow is a leading website for developer knowledge sharing. It also acts as a job board. Stack Overflow produced a recent survey (2016), n = 49,525, showing that more than 85% of developers surveyed are skilled in JavaScript, while less than 31% are skilled in Java.

There isn’t much to say about the fact that the traditional economist is not a trained programmer, except perhaps to say that this is slowly changing over time. STATA was released in 1985 and the first volume of <em>Computational Economics</em> was released in 1988 and by 1990 they had published information on a simulation language for economic models (1990). Training with statistical programming applications such as STATA or SPSS is now standard coursework, but the degree to which this sort of specialized knowledge can transfer to more traditional programming tasks is not clear at this time.

&nbsp;

<strong>III. Ethnography as a Process Enhancement</strong>

Ethnography is a long-standing practice with varied definitions largely disclosed in a book literature. One description is given by Singer (2009):
<blockquote>[Ethnography] entails studying people within their own cultural environment through intensive fieldwork: The researcher goes to the data, rather than sitting in an office and collecting it. It typically involves in-depth investigation of a small number of cases, sometimes just a single case…ethnography uses multiple techniques, most commonly observation and interviews, but sometimes adding visual recording, document analysis, diaries, and more. Some ethnographies also incorporate quantitative techniques such as questionnaires or, in the field of mass communication, content analyses of products created by the people being studied.</blockquote>
Integration of ethnography and agent-based modelling would entail that an ABM developer obtain first-hand experience in the real-world process which the developer intends to model. In the business world, one technique would be to co-locate the modeler and the process of study, where the process includes both physical and social considerations. In the academic world this would require the academic to physically inspect and participate in the process of study, acting in the role of one of the agents for which simulation is sought. I claim such activity will improve not only understanding of documented processes, but it will also grant access to some degree of tacit or undocumented knowledge, which is expected to critically improve any produced model.

Certain issues are expected to be robust to the integration of ABM and ethnography. Two issues in particular are feasibility issues and process extrapolation. Feasibility of academic ethnography may be inhibited by the demand for private firms to engage in proprietary activities. Such barriers may be systematic: An academic may find a willing partner in one industry, but these transparent firms may vary systematically from firms emphasizing restricted access to proprietary information. As a workaround, the academic may prefer to study the processes of the university itself, or other systems which are readily accessed, but these may lead to a second problem.

Process extrapolation is a problem which inevitably results from the scarcity of academic resources. Every agent exists in a context which is infinitely complex, and the analyst faces finite ability to describe this complexity. The result is that an analyst may exhaustively describe an agent and his firm, but such an analyst cannot feasibly and exhaustively describe the context of the wider economy. At some point the analyst rationally makes certain assumption about the processes of the wider economy, but if the analyst is familiar with only one sort of firm’s process, he or she may suppose the processes of the familiar firms and agents constitute norms which are applicable to other kinds of firms and agents. This is like a qualitative sort of extrapolation, and it can lead to massive systematic error in an agent-based model, as these models are sensitive to the validity of input assumptions. Process extrapolation may be combatted in the same way ordinary quantitative or statistical extrapolation is generally avoided, by limiting the research question to one which does not critically depend on unfamiliar processes.

&nbsp;

<strong>Citations</strong>

Bonabeau, Eric. \"Agent-based modeling: Methods and techniques for simulating human systems.\" Proceedings of the National Academy of Sciences 99.suppl 3 (2002): 7280-7287.

Duffy, John. \"Agent-based models and human subject experiments.\" Handbook of computational economics 2 (2006): 949-1011.

Kravari, Kalliopi, and Nick Bassiliades. \"A survey of agent platforms.\" Journal of Artificial Societies and Social Simulation 18.1 (2015): 11.

Ohlendorf, G., and P. Stahlecker. \"ESL—A new simulation language for economic models.\" Computer Science in Economics and Management 3.2 (1990): 187-197.

Singer ETHNOGRAPHY. Journalism &amp; mass communication quarterly. (2009): 86 (1), p. 191 - 198.

\"Stack Overflow Developer Survey 2016 Results.\" Stack Overflow. N.p., 17 Mar. 2016. Web. 28 Feb. 2017.