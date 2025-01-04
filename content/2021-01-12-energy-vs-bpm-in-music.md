---
title: "Energy vs BPM in Music"
date: 2021-01-12 09:58:30
author: John Vandivier
---



<!-- wp:paragraph -->
<p><a href=\"http://sortyourmusic.playlistmachinery.com/#\">This tool</a> integrates with Spotify and allows you to sort your playlist. It presents an option called Energy and I have no idea how that is computed. I tweeted to ask the creative engineers <a href=\"https://twitter.com/JohnVandivier/status/1348979690493587457\\\">here</a>. This article speculates on how I would think energy would need to be computed in order to make it preferred to BPM for the purpose of mood fit in an album or playlist of songs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>TLDR: I will stick to BPM for now.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Suppose by energy we could mean the mental energy or attention a song requires, as well as the stimulation of physical movement. At first glance, then, BPM is energy. BPM of various ranges is suited to working out at various paces of physical movement and the same for dancing at various tempo. This fit is perfect because BPM is simply quantified tempo.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In working out and dancing, though, there is more than pace. Intensity is a thing. From a musical point of view, I can have a more intense sound by playing an instrument in a physically more impactful way. For example, I can hit a drum harder. This results mainly in a louder volume, but also in a different sound for many instruments. Once a single instrument's intensity is maxed out, the band or orchestra can still obtain a higher intensity by essentially having all instruments and vocalists simultaneously go to 11 as it were. For me, this becomes noisy and loud to the point that I can't maximize my workout intensity while listening for reason of becoming distracted rather than inspired by the music. Still, this might play into a programmatically computed energy level.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On the other hand, energy might have nothing to do with volume. A song remains equally danceable at low and high volume provided the tempo is constant. Mental attention seems to be an even better grounding for energy, because controlling mental attention is a more useful lever. Background music or music used to lull and soothe a person to sleep should be low energy. Music used to command full attention in a non-noisy and pleasant way should use mechanisms other than pure volume maximization of many instruments to command attention. In fact, noise tends to reduce attention. White noise, for example, is used to facilitate sleep.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What mechanisms can be used to command attention? Here are a few:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>Volume modulation, rather than maximization. A well-done move from silence to a bass drop is intense and attention-commanding without being noisy.</li><li>Tempo changes and key changes command attention. Moving from a single time to double time and similar operations command attention, even while one may argue the tempo has not changed. Of course, one could also argue the tempo did double or was otherwise modified according to the same change.</li><li>The complexity of music can improve attention, but, like noise, after a certain point, it seems to cause me to tune the music out or simplify it in my own mind. Still, a guitar solo with frequent tonal change or a new strumming pattern will attract attention amidst an otherwise simpler chord progression of the same key.</li><li>I find vocals particularly attention-grabbing because I will be trying to process what they are saying in addition to the tone, tempo, and other instrumental qualities of the voice.</li><li>This is likely less applicable to a Spotify algorithm, but my attention is also called when I can engage the other senses beyond listening. A live show engages at least the eyes and perhaps more. A song that makes me dance commands attention at a higher level due to the need to map dance to the song.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Suppose an energy algorithm did compute a number based on the above. It was able to find a count of tempo, key, and significant volume changes. It could identify the number of significantly unique blocks of lead instrument pattern, whether or not a song has vocals, and whether the BPM was at a specially-defined dance BPM. It could turn this all into a number. It seems to me, then, similar numbers would be preferred to BPM alone for the purpose of mood fit. Here, I mean mood fit to be something like the following:</p>
<!-- /wp:paragraph -->

<!-- wp:list {\"ordered\":true} -->
<ol><li>I would like some calm, background music.</li><li>I would like some workout music. I care more about general inspiration than BPM precision.</li><li>I would like songs that feel similar to play next to each other, but I don't need an exact key or BPM match.<ol><li>There are many factors other than energy at play here, but at least energy does a better job than BPM it would seem.</li><li>Genre and vocal language would be two key things for this requirement which are missed in energy alone. I would be interested to see, though, if energy alone gives a decent explanation of some or many genres. We know, for example, that BPM alone can sometimes indicate or at least highly correlate with certain genres.</li></ol></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>---UPDATE</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I tried to test whether Spotify's Energy works despite my lack of understanding its computation. I'm sad to report it doesn't seem to work. Consider the below subsection of my energy-sorted Hard Rock playlist:</p>
<!-- /wp:paragraph -->

<!-- wp:image {\"align\":\"center\",\"id\":7740,\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->
<div class=\"wp-block-image\"><figure class=\"aligncenter size-large\"><img src=\"https://www.afterecon.com/wp-content/uploads/2021/01/image-1.png\" alt=\"\" class=\"wp-image-7740\"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>My Own Prison is a very low energy song, in the normal use of the term, and This Could Be Anywhere in The World is a very high energy song. Alexisonfire has two vocalists, one clean and one is a screamer, who alternate, and the timing changes from single to double time. It is a highly moshable rock anthem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>My Own Prison has a single, low-toned singer conveying a depressing message in a lower-tempo single time. I could be wrong here but it seems like My Own Prison BPM was computed at double time, even while I think the song never actually plays in double time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Perhaps the real issue is that This Could Be Anywhere in The World was simply wrong on the BPM and therefore the energy was miscomputed since it is based on BPM. The real single-time BPM of that song is like 124 or so.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I think the next three songs are fairly ranked in terms of energy. They are all arguably low in the larger playlist, but not the lowest. I think it's wrong to say the Corseting instrumental is higher energy than those songs, though, since it has both a lower BPM and it is an instrumental. I can often use this song as a backgrounded song while I workout or code. It is less attention-grabbing than the other three in part because there are no vocals and also because it has fewer interesting drops or volume modulations.</p>
<!-- /wp:paragraph -->