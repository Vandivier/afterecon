---
title: How to Name a CSS Class
date: 2016-01-01 00:18:37
author: John Vandivier
---



This article recommends an approach to naming CSS classes.

tldr:
<ul>
	<li>Do this: .font-color-red {}</li>
	<li>Not this: .header {}</li>
	<li>Why? It's semantic and performant.</li>
</ul>
What do we mean by semantic code? Developers began talking about <a href=\"https://en.wikipedia.org/wiki/Semantic_HTML\">semantic HTML</a> a while ago, but now it’s a full-blown language-agnostic paradigm. Semantic code is code which describes its own content and function in everyday English, not technical terms.

It would be semantically incorrect to have the bottom of a web page marked by a &lt;header&gt; tag, but it would be nice to have it as a &lt;footer&gt; tag. This way the developer can easily find the markup he needs to change when he sees a portion of the rendered document which he needs to change.

Semantic code has the benefit of being developer-friendly because it is intuitive and easy to read, write, and understand. It helps solve the <a href=\"http://www.afterecon.com/economics-and-finance/the-core-problem-in-programming/\">core problem in programming</a> by making development easier.

It is widely noted that <a href=\"https://en.wikipedia.org/wiki/Semantic_HTML#Considerations\">class values allow for more precise semantic code</a> compared to the use of HTML tags. This is because you are free to use any language you want in a class, where HTML tags are restrained to the HTML spec.

There is a critical difference between objects and styles. HTML elements are objects and they are semantic nouns, because that's how English works. CSS is for style, but in English we use adjectives for style, not nouns.

You might have a tall building or a red flower. The building would be semantically coded as &lt;building class=\"tall\"&gt;&lt;/building&gt;.

&lt;red&gt; is not semantic HTML. Why? Because blue is an adjective, not a noun. What is blue? We don’t know.

But .building { } is terrible CSS. Why? Because buildings don't all look the same. It's a noun, not an appearance or adjective. It's also bad for efficiency and <a href=\"https://en.wikipedia.org/wiki/Separation_of_concerns\">separation of concerns</a>.

I won't get into separation of concerns here but it's another thing that is usually a good idea with some exceptions. It helps keep programs flexible and adaptable. It also allows development teams to leverage gains from specialization.

What about efficiency? Consider that we take the approach of styling nouns rather than objects. All buildings do look the same, damnit! Kind of anyway! Well we will just make .building-exception-1 { } and so forth.

Consider the following:
<ul>
	<li>A building has 5 attributes: A color, height, width, length, and smell. Let there be 3 possible values for each attribute.</li>
	<li>Every possible set of building styles could be described with (3 * 5) = 15 adjective-like rules, such as .red, .blue, and so on.</li>
	<li>To describe every permutation of building using noun-like rules would require 3^5 classes. Clearly, this will require more load and processing time. It's also not intuitive or developer-friendly.</li>
</ul>
A rule like .width-500, or maybe .w-500 since we value concision, is ideal. This class will intuitively set the width of any object to 500px.

You might be all like, “Wait, this is pretty much just naming the class according to the style rule.”

Exactly! Isn’t that intuitive?

Now, we do value concision, so maybe .border-left-1-px-solid-black is a bit much, but .border-left seems nice.

In conclusion, rules like .height-500 or .h-500 are ideal for at least three reasons:
<ol>
	<li>These class names are semantic. They are named according to their English meaning and therefore intuitively understood. This makes development easier.</li>
	<li>Adjective-like names are modular, performant, and <a href=\"https://en.wikipedia.org/wiki/Don't_repeat_yourself\">DRY</a>.</li>
	<li>They separate concerns. If something is named as an adjective it is not an element. If something is named as a noun it is not a style.*</li>
</ol>
*I don't have a problem with default styling on the tag. I just don't like noun-like CSS class names.