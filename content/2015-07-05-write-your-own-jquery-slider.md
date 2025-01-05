---
title: "Write Your Own jQuery Slider"
date: 2015-07-04 20:55:20
author: John Vandivier
---



This article will show you the code needed to write your own jQuery slider.

Writing your own jQuery slider is a very flexible solution that can:
<ol>
	<li>Accommodate all sorts of media from text to video that other sliders may not.</li>
	<li>Incorporate strange animations you may want to write that typical sliders don't have.</li>
	<li>Provide a very efficient solution: Why sacrifice load speed for a big plugin when you only need a small bit of function?</li>
	<li>Provide a great exercise to learn about coding simple timing functions, sync vs async, jQuery UI animations, and more!</li>
</ol>
You will need:
<ol>
	<li>HTML</li>
	<li>CSS</li>
	<li>JS, jQuery, and jQuery UI. You can install these on your site or just link to a CDN for a simpler solution.</li>
</ol>
<p style=\"text-align: center;\">The HTML</p>
<p style=\"text-align: left;\">The key here is just to create a seperate div for each slide inside a single wrapper div. Whatever you want can go inside the div. The divs will need to be accessible through a unique ID, and we will use an additional class to identify the current slide. This example is a simple case with two slides, but you can add more:</p>
<p style=\"text-align: left;\">&lt;div id='sliderWrapper1'&gt;
&lt;div id='slide1' class='sliderSlide currentSlide'&gt;
&lt;div class='subhead'&gt;This could be a heading, for example.&lt;/div&gt;
&lt;img src='example.com' /&gt;
&lt;/div&gt;

&lt;div id='slide2' class='sliderSlide nextIn'&gt;
&lt;div class='subhead'&gt;I am the second slide!&lt;/div&gt;
&lt;ul&gt;
&lt;li&gt;Point 1. This slide is text in this example.&lt;/li&gt;
&lt;li&gt;Point 2. This slide is text in a list example.&lt;/li&gt;
&lt;li&gt;Point 3. This slide is text in a list example.&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;</p>
<p style=\"text-align: center;\">The CSS</p>
<p style=\"text-align: left;\">The key in the CSS is to make sure the interior slides are absolutely positioned inside of the wrapper. This prevents the next slide which is coming in from creating problems with the leaving slide during the transition. Also, hide all of the slides except the slide to be initially displayed. I'm not sure the inline-block thing matters but I used it:

#wrapper .slides {
display: inline-block;
display: none;
position: absolute;
top: 0px;
}

#slide1 {
display: inline-block;
}</p>
<p style=\"text-align: center;\">The JS</p>
<p style=\"text-align: left;\">In this example I identify the hidden slide with a separate class because there is just one, but this is not needed. You can access the same information other ways. In the case of a large number of slides it will be easier to access the slides as an array or jQuery collection.</p>
<p style=\"text-align: left;\">The important part of the JS is:</p>

<ol>
	<li style=\"text-align: left;\">Executing the function on an interval.</li>
	<li style=\"text-align: left;\">The function is defined in JS, not jQuery, because we need it to be synchronous. We don't want steps 2 and 3, for example, to occur at the same time or multiple slides will be improperly affected.</li>
	<li style=\"text-align: left;\">For the same reason as in point 2 we have to break the slider function into seperate steps.</li>
	<li style=\"text-align: left;\">Lots of this is customizable! You can change the speed, animation style, and more.</li>
</ol>
function cycleStep1() {
jQuery(\".sliderSlide:not(.nextIn)\").toggle('slide',{direction:'left'},1000).removeClass('currentSlide');
}

function cycleStep2() {
console.log('fxn2 called.');
jQuery(\".sliderSlide.nextIn\").toggle('slide',{direction:'right'},1000).removeClass('nextIn').addClass('currentSlide');
}

function cycleStep3() {
console.log('fxn3 called.');
jQuery(\".sliderSlide:not(.nextIn)\").not('.currentSlide').addClass('nextIn');
}

function cycleSlider() {
cycleStep1();
cycleStep2();
cycleStep3();
}

setInterval(function(){ cycleSlider() }, 3500);