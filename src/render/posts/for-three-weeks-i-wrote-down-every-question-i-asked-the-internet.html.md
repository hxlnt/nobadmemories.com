---
layout: 'content'
title: 'For three weeks, I wrote down every question I asked the internet (and every answer I found)'
description: "For three weeks, I wrote down every question I asked the internet (and every answer I found)."
while: 'snuggling Bubblegum.'
tagged: ['misc']
date: 2017-04-09T19:30
keyimg: '/img/plant.jpeg'
---

Have you ever opened up your internet browsing history and been... eheh, *shocked* by the sheer number of things you look up in a given day? One innocent click a few hours ago somehow turned into a weird Wikipedia rabbit hole. Twenty, thirty links later, you're looking up brownie recipes, electronic schematic diagrams for obsolete fax machines, and the history of silent films. 

As a person with eclectic and sometimes niche interests, I was curious to learn about my browsing habits in a personal, homegrown way. What do I wonder about in the course of a day or week? What do I actually learn? Do my questions thrown into the internet void ever get an answer?

So I did an unusual experiment: Every time I Googled something, I rewrote my search terms in the form of a question. Once I found the answer, I summarized it in my notes. I did this every day for three weeks. At the end, I had an FAQ of sorts. (Or RAQ for "recently asked questions"...?)

It was interesting to see what kinds of things I looked up. Technical documentation was the most frequently looked-up thing for me. During this three-week stretch, I was learning [Vue.js](http://vuejs.org) and [Hugo](http://gohugo.io), so a lot of my queries were, like, "How do I do this in Vue.js?" or "How would I do that in Hugo?" Other popular topics were houseplant care and gameplay questions about *Animal Crossing: City Folk,* which I had just started playing.

I learned during this exercise that I look up things for other people more than I would have guessed. For example, I'd see a conversation happening on Twitter and think, "Oh, I should send this person such-and-such resource," which I would then have to look up.

Rewriting search terms in the form of a question was an interesting exercise. So was summarizing the answer and making sure I actually learned a concrete thing.

After a while, I began consulting my notes to re-find an answer I'd learned, or to grab a documentation URL I'd already jotted down.

Reproduced below are all the questions I Googled over the course of three weeks, along with my answers. While the initial recordkeeping was done by date, I've reorganized the Q&A by topic *then* date.

This won't be embarassing, right? :)

## *Animal Crossing: City Folk*

**What does the empty lamp do in *Animal Crossing: City Folk?*** It is used to summon Wisp, who will grant you one of a set lists of wishes such as removing weeds from your town.

**How can I improve the environment in *Animal Crossing: City Folk?*** Make sure trees and flowers appear throughout the town and that there are no weeds or trash on the ground.

**What is the grass pattern in *Animal Crossing: City Folk?***

![Grass](/img/grass.jpeg)


**How many flowers and trees do you need per acre in *Animal Crossing: City Folk?*** 12 to 16 trees and 6 to 10 healthy flowers per acre (16x16 area).

**How can you tell if a painting is authentic in *Animal Crossing: City Folk?*** You can't; painting authenticity is determined randomly.


## Art

**Is it just me, or does anyone else think Takashi Murakami legitimately sucks?** Apparently, it's just me. I couldn't find any (English-language) criticisms from respected online publications. I found numerous comparisons of Murakami to Jeff Koons, who gets his fair share of barbs from art critics. But no real complaints regarding Murakami himself.

**What are the different methods of shibori?** Kanoko (tie-dye), miura (looped), kumo (pleated), nui (stitched), arashi (pole-wrapped), and itajime (shape-relief).

**What is the name of the gallery in Seattle featuring the Design of Dissent exhibition?** Non-Breaking Space.

**What are Non-Breaking Space's hours today and tomorrow?** 11 AM to 6 PM.


## Coding and technology

**What is the URL for the TextMate theme Baby the Code Shines Bright?**
[https://github.com/spacekat/Baby-The-Code-Shines-Bright](https://github.com/spacekat/Baby-The-Code-Shines-Bright)

**How did kebab-case get its name?**
Kebab-case transforms words by replacing the spaces between them with hyphens. This makes them look like foods-on-a-skewer.

**What is the recommended way to interface with REST APIs in Vue?**
The Vue-specific AJAX handling plugin, vue-resource, is no longer recommended by the Vue team. The current best practice is to use a Vue-agnostic solution like `$.ajax` (JQuery) or Axios. The cleanest approach seems to be to create a Vue method that calls the API with `$.ajax` as noted here: [http://stackoverflow.com/questions/41489314](http://stackoverflow.com/questions/41489314).

**What, generally, is the use case for Redis?**
Redis is useful for caching and retrieving simple DB query results that would be expensive/slow via a typical DB (e.g., SQL) query.

**What's the URL for Sublime Text's documentation for installing .tmTheme files?**
[http://docs.sublimetext.info/en/latest/reference/color_schemes.html](http://docs.sublimetext.info/en/latest/reference/color_schemes.html)

**What's a good polyfill library for CSS Grid?**
CSS-Grid-Polyfill is one, though I'm not sure if it's 100% ready for primetime. There's also GSS (grid style sheets), which can be used instead of Grid and works by constraint calculation: [http://gridstylesheets.org](http://gridstylesheets.org).

**Is there a .tmLanguage file for GSS?**
Maybe, but I couldn't find one right away.

**What is the HTML entity for a right-pointing arrow?**
`&rarr;`

**How do I do a factory reset on a UE Boom 2 speaker?**
Hold down the - and Power buttons for 10 seconds.

**What is the URL for VS Code's Task Runner documentation?**
[https://code.visualstudio.com/docs/editor/tasks](https://code.visualstudio.com/docs/editor/tasks).

**Where can I find documentation for the vue-router library?**
[http://router.vuejs.org/en](http://router.vuejs.org/en).

**In Javascript, how do you find the index of an array of objects corresponding to a specific key-value pair within an object?**
`myArray.findIndex(item =item.mykey === "myvalue")`.

**Should I implement vuex for accessing DocumentDB data within a Vue.js app?**
If I'm only accessing the data, it's probably not necessary. (See [https://vuejs.org/v2/guide/state-management.html](https://vuejs.org/v2/guide/state-management.html).) Later, if I decide to allow editing DocumentDB data from the web app, I probably should implement vuex.

**Why do people love the Go programming language?**
Many developers find it fun, elegant, and fast.

**What was the most loved programming language in this year's Stack Overflow developer survey?**
Rust.

**Where can I find documentation for the DocumentDB REST API?**
[https://docs.microsoft.com/en-us/rest/api/documentdb](https://docs.microsoft.com/en-us/rest/api/documentdb).

**Does Hugo support making REST API calls that require authentication or an API key?**
No, you can't do this in Hugo directly. You'd have to make the call in a separate .JS file.

**How can you get the best performance out of DocumentDB when using the REST API?**
Running the DB and code in the same Azure region will help with latency.

**Where can I find documentation for Jekyll?**
[https://jekyllrb.com/docs/home/](https://jekyllrb.com/docs/home/).

**In VS Code, why are tabs in my YAML files two spaces wide when I have tab size set to 4 spaces?**
In the February update, language-specific editor settings were added for Go, YAML, and Markdown. You can change YAML-specific tab size by adding the following code to User Settings: `"[yaml]": { "editor.tabsize": 4 }`.

**In Hugo, how do you convert a multi-word taxonomy from its urlized version to title case (without hyphens)?**
`{{ $name | humanize | title }}`

**What is the part on a PS2 that needs adjusting to correct disc read errors?**
There is a small motor gear that moves the eye up and down.

**Is there a reliable way to get parallax scrolling working on iOS?**
This article from the author of Stellar.js looks promising: [http://markdalgleish.com/2012/10/mobile-parallax-with-stellar-js/](http://markdalgleish.com/2012/10/mobile-parallax-with-stellar-js/).

**How much is a working and good-condition blue Commodore PET 2001 worth?**
Approx. $1,500, though there is little consensus. That could be wildly inaccurate.

**Does `<input type="email">` automatically validate?**
Yes, when submitted. However, it is not supported in Safari.

**What are the additional optional arguments you can pass into `v-for="item in items"` in Vue apps?**
Where `items` is an array, you can pass in a second argument for the index (`v-for="(item, myindex) in items"`). Where `items` is an object, you can pass in three arguments: value, key, and index (`v-for="(myval, mykey, myindex) in items"`). The name of the arguments doesn't matter, just the order.

**How do you incorporate Sass into a Vue.js dev workflow?**
Set it up with vue-loader as described here: [https://github.com/vuejs-templates/webpack-simple/blob/master/template/webpack.config.js](https://github.com/vuejs-templates/webpack-simple/blob/master/template/webpack.config.js).

**What do people see as some of the drawbacks of static site generators?**
Some can be slow (though Hugo is quite fast), they aren't meant for handling dynamic or user-submitted content, and the workflow (Markdown authoring &rarr; build process &rarr; deployment) isn't for everyone.

**Why is the default alias for a remote git repo called "origin?"**
It makes more sense if you think of multiple collaborators pulling down code from a single origin (the remote repo).

**Are there any good libraries for doing CSS text animations?**
Animate.css is a popular choice.

**How can I get started building a UWP with a custom USB device?**
Take a look at https://developer.microsoft.com/en-us/windows/hardware/windows-driver-kit.

**Can you natively put a CSS blur filter on part of an image without duplicating it and blurring the dupe?**
No. That said, here's a pretty simple way of duplicating the image and cropping and blurring the dupe: [http://jsfiddle.net/nbLcs241/](http://jsfiddle.net/nbLcs241/). Here's another similar sample that uses image masking, which could be helpful for gradients and more complex shapes: [https://designshack.net/articles/css/csstiltshift/](https://designshack.net/articles/css/csstiltshift/).

**How can you run a Python script on a Raspbian at boot?**

```
sudo crontab -e
@reboot python /home/user/myfile.py &
sudo reboot
```

**In Hugo, how do you change the URL associated with a taxonomy page?**
In `config.yaml`, set taxonomy values as URL path (Ex: `genre: collection/genre`). Then, include the path in the page's .md frontmatter (e.g., `collection/genre: action`).


## Food and drink

**What kind of cocktail can I make with Crème Yvette aside from more popular ones like Blue Moon and Aviation?**<BR>
Yvette Collins:<BR>1 fl. oz. gin<BR>1 fl. oz. lemon juice<BR>0.5 fl. oz. Crème Yvette<BR>0.5 fl. oz. lavender simple syrup (4:4:1 ratio of sugar:water:dried lavender buds)<BR>2 fl. oz. sparkling water or sparkling lemonade

**Where can you go to eat in Pioneer Square after 10 PM?**
Damn the Weather is open until midnight.

**What are the main ingredients in the vegetarian burger patty at Johnny's on First?**
Red quinoa and Catalina beans.


## Music

**When is SXSW over?**
Saturday, March 18.

**Who wrote Dolly Parton's song "Jolene?"**
Dolly Parton.

**Who sang "Poupée de cire, poupée de son?"**
France Gall.

**Has anyone done a critical analysis of Sparks's discography via the lens of feminism, critical race theory, colonialism, class, etc.?**
Hmm, I couldn't find anything.


## Personal care

**What is cold cream?**
An emulsion of oil and beeswax used as a face wash and moisturizer.

**Do people prefer Pond's Cold Cream or Weleda Cold Cream?**
Weleda Cold Cream has higher review scores on MakeupAlley and Amazon (approx. 4.5 out of 5 stars) as compared to Pond's Cold Cream (approx. 4 out of 5 stars).

**What is neroli oil?**
Neroli oil is an oil extracted from bitter orange blossoms via steam distillation.

**What is the difference between eau de parfum and eau de toilette?**
Eau de parfum has a perfume oil concentration of 10% to 20%, whereas eau de toilette has a pefume oil concentration of 4% to 10%.

**What are the Austin locations for Milk + Honey Spa?**
Downtown and Bee Cave.

**What is the phone number for booking an appointment at Milk + Honey Spa?**
512-236-1115.

**Are all-silicone electric toothbrushes well-liked?**
No. According to Amazon reviews, they seem to be flimsy and may leave your teeth feeling less than fully clean. Sonicare toothbrushes are a more popular choice.

**What are some natural or common household ingredients that can be used for facial exfoliation?**
Physical exfoliants include coffee grounds, cornmeal, rice powder, and poppy seeds. Citrus juices such as lemon juice act as a light chemical exfoliant, as does the salicylic acid in aspirin (which, when crushed, also works as a physical exfoliant).


## Plants

**How tall do elephant trees grow?**
10 ft.

**What does a fully-grown elephant tree look like?**

![Elephant tree](/img/elephanttree.jpeg)

**What does a king protea look like?**

![King protea](/img/king.jpeg)

**What does *Myrtillocactus geometrizans forma cristata* look like?**

![Plant](/img/plant.jpeg)

**What time does East Austin Succulents close on weekends?**
East Austin Succulents closes at 5PM every day.

**What are the care instructions for *Gerrardanthus macrorhizus?***
This plant is heat tolerant but likes partial shade and requires well-draining soil (perlite mix), as it is susceptible to root rot.

**What are the care instructions for *Sarcocaulon herrei?***
This plant likes heat, full sun, and sandy/rocky soil, as it is susceptible to root rot. Water about once per week during growth (spring/summer) but infrequently during dormancy.

**How do you care for lavender plants in Texas?**
Give them lots of sun, well-draining, alkaline soil, and little water. Plant in a raised bed to prevent water pooling at the base of the plant. Prune by half in the spring to promote growth.


## Science

**What is the chemical composition of TV rock?**
Ulexite, or TV rock, is NaCaB<sub>5</sub>O<sub>6</sub>(OH)<sub>6</sub>•5H<sub>2</sub>O (hydrated sodium calcium borate hydroxide).

**What is the naming convention for exoplanets?**
Exoplanets are generally named by taking the name of the star they orbit and adding a letter (a, b, c...) in order of discovery. Per a recent change of heart by the IAU, some exoplanets have proper names.


## TV and film

**Who played young Picard in the episode of *Star Trek: The Next Generation* where some of the crew inexplicably turn into children?** Young Picard was played by David Tristan Birkin, nephew of Jane Birkin.

**Who is Meiko Kaji?**
Meiko Kaji is a Japanese actress famous for playing outlaw characters in 1970s films such as *Lady Snowblood.* She also sang the theme songs to some of her films, two of which were featured in the *Kill Bill* series and led to a renewed international interest in her work.

**Did Noel Fielding ever appear in *Garth Marenghi's Darkplace?***
Yes, he played the man in the ape suit in the chase scenes.

**What is the plot of *In like Flint?***
*In like Flint* is a 1960s parody spy movie in which Derek Flint aims to foil an evil feminist plot to smash the patriarchy.


## Misc.

**What is Donald Trump's current approval rating?**
37%.

**What does the name "Unabomber" mean?**
It comes from an FBI alias for Ted Kaczynski referring to him as UNABOM, or UNiversity and Airline BOMber.

** How late is Kinokuniya in Seattle open today?**
Until 9 PM.