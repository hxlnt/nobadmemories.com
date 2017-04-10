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

So I did an unusual experiment: Every time I Googled something, I rewrote my search terms in the form of a question. Once I found the answer, I summarized it in my notes. I did this every day for three weeks. At the end, I had an FAQ of sorts. (Or RAQ for "recently asked questions...?)

It was interesting to see what kinds of things I looked up. Technical documentation was the most frequently looked-up thing for me. During this three-week stretch, I was learning [Vue.js](http://vuejs.org) and [Hugo](http://gohugo.io), so a lot of my queries were, like, "How do I do this in Vue.js," "How would I do that in Hugo," etc. Other popular topics were houseplant care and gameplay questions about *Animal Crossing: City Folk,* which I had just started playing.

I learned during this exercise that I look up things for other people more than I would have guessed. For example, I'll see a conversation happening on twitter and think, "Oh, I should send this person such-and-such resource," which I then have to look up.

Rewriting search terms in the form of a question was an interesting exercise, as was actually summarizing the answer and making sure you learned a concrete thing.

After a while, I began consulting my notes to re-find an answer I'd learned, or to grab a documentation URL I'd already jotted down.

Reproduced below are all the questions I Googled over the course of three weeks, along with my answers. While the initial recordkeeping was done by date, I've reorganized the Q&A by topic *then* date.

This won't be embarassing, right?

## *Animal Crossing: City Folk*

**Q: What does the empty lamp do in *Animal Crossing: City Folk?***
A: It is used to summon Wisp, who will grant you one of a set lists of wishes such as removing weeds from your town.


**Q: How can I improve the environment in *Animal Crossing: City Folk?***
A: Make sure trees and flowers appear throughout the town and that there are no weeds or trash on the ground.


**Q: What is the grass pattern in *Animal Crossing: City Folk?***

![Grass](/img/grass.jpeg)


**Q: How many flowers and trees do you need per acre in *Animal Crossing: City Folk?***
A: 12 to 16 trees and 6 to 10 healthy flowers per acre (16x16 area).


**Q: How can you tell if a painting is authentic in *Animal Crossing: City Folk?***
A: You can't; painting authenticity is determined randomly.


## Art

**Q: Is it just me, or does anyone else think Takashi Murakami legitimately sucks?**
A: Apparently, it's just me. I couldn't find any (English-language) criticisms from respected online publications. I found numerous comparisons of Murakami to Jeff Koons, who gets his fair share of barbs from art critics. But no real complaints regarding Murakami himself.

**Q: What are the different methods of shibori?**

A: Kanoko (tie-dye), miura (looped), kumo (pleated), nui (stitched), arashi (pole-wrapped), and itajime (shape-relief).

**Q: What is the name of the gallery in Seattle featuring the Design of Dissent exhibition?**

A: Non-Breaking Space.

**Q: What are Non-Breaking Space's hours today and tomorrow?**

A: 11 AM to 6 PM.


## Coding and technology

**Q: What is the URL for the TextMate theme Baby the Code Shines Bright?**
A: [https://github.com/spacekat/Baby-The-Code-Shines-Bright](https://github.com/spacekat/Baby-The-Code-Shines-Bright)

**Q: How did kebab-case get its name?**
A: Kebab-case transforms words by replacing the spaces between them with hyphens. This makes them look like foods-on-a-skewer.

**Q: What is the recommended way to interface with REST APIs in Vue?**
A: The Vue-specific AJAX handling plugin, vue-resource, is no longer recommended by the Vue team. The current best practice is to use a Vue-agnostic solution like `$.ajax` (JQuery) or Axios. The cleanest approach seems to be to create a Vue method that calls the API with `$.ajax` as noted here: [http://stackoverflow.com/questions/41489314](http://stackoverflow.com/questions/41489314).

**Q: What, generally, is the use case for Redis?**
A: Redis is useful for caching and retrieving simple DB query results that would be expensive/slow via a typical DB (e.g., SQL) query.

**Q: What's the URL for Sublime Text's documentation for installing .tmTheme files?**
A: [http://docs.sublimetext.info/en/latest/reference/color_schemes.html](http://docs.sublimetext.info/en/latest/reference/color_schemes.html)

**Q: What's a good polyfill library for CSS Grid?**
A: CSS-Grid-Polyfill is one, though I'm not sure if it's 100% ready for primetime. There's also GSS (grid style sheets), which can be used instead of Grid and works by constraint calculation: [http://gridstylesheets.org](http://gridstylesheets.org).

**Q: Is there a .tmLanguage file for GSS?**
A: Maybe, but I couldn't find one right away.

**Q: What is the HTML entity for a right-pointing arrow?**
A: `&rarr;`

**Q: How do I do a factory reset on a UE Boom 2 speaker?**
A: Hold down the - and Power buttons for 10 seconds.

**Q: What is the URL for VS Code's Task Runner documentation?**
A: [https://code.visualstudio.com/docs/editor/tasks](https://code.visualstudio.com/docs/editor/tasks).

**Q: Where can I find documentation for the vue-router library?**
A: [http://router.vuejs.org/en](http://router.vuejs.org/en).

**Q: In Javascript, how do you find the index of an array of objects corresponding to a specific key-value pair within an object?**
A: `myArray.findIndex(item =A: item.mykey === "myvalue")`.

**Q: Should I implement vuex for accessing DocumentDB data within a Vue.js app?**
A: If I'm only accessing the data, it's probably not necessary. (See [https://vuejs.org/v2/guide/state-management.html](https://vuejs.org/v2/guide/state-management.html).) Later, if I decide to allow editing DocumentDB data from the web app, I probably should implement vuex.

**Q: Why do people love the Go programming language?**
A: Many developers find it fun, elegant, and fast.

**Q: What was the most loved programming language in this year's Stack Overflow developer survey?**
A: Rust.

**Q: Where can I find documentation for the DocumentDB REST API?**
A: [https://docs.microsoft.com/en-us/rest/api/documentdb](https://docs.microsoft.com/en-us/rest/api/documentdb).

**Q: Does Hugo support making REST API calls that require authentication or an API key?**
A: No, you can't do this in Hugo directly. You'd have to make the call in a separate .JS file.

**Q: How can you get the best performance out of DocumentDB when using the REST API?**
A: Running the DB and code in the same Azure region will help with latency.

**Q: Where can I find documentation for Jekyll?**
A: [https://jekyllrb.com/docs/home/](https://jekyllrb.com/docs/home/).

**Q: In VS Code, why are tabs in my YAML files two spaces wide when I have tab size set to 4 spaces?**
A: In the February update, language-specific editor settings were added for Go, YAML, and Markdown. You can change YAML-specific tab size by adding the following code to User Settings: `"[yaml]": { "editor.tabsize": 4 }`.

**Q: In Hugo, how do you convert a multi-word taxonomy from its urlized version to title case (without hyphens)?**
A: `{{ $name | humanize | title }}`

**Q: What is the part on a PS2 that needs adjusting to correct disc read errors?**
A: There is a small motor gear that moves the eye up and down.

**Q: Is there a reliable way to get parallax scrolling working on iOS?**
A: This article from the author of Stellar.js looks promising: [http://markdalgleish.com/2012/10/mobile-parallax-with-stellar-js/](http://markdalgleish.com/2012/10/mobile-parallax-with-stellar-js/).

**Q: How much is a working and good-condition blue Commodore PET 2001 worth?**
A: Approx. $1,500, though there is little consensus. That could be wildly inaccurate.

**Q: Does `<input type="email">` automatically validate?**
A: Yes, when submitted. However, it is not supported in Safari.

**Q: What are the additional optional arguments you can pass into `v-for="item in items"` in Vue apps?**
A: Where `items` is an array, you can pass in a second argument for the index (`v-for="(item, myindex) in items"`). Where `items` is an object, you can pass in three arguments: value, key, and index (`v-for="(myval, mykey, myindex) in items"`). The name of the arguments doesn't matter, just the order.

**Q: How do you incorporate Sass into a Vue.js dev workflow?**
A: Set it up with vue-loader as described here: [https://github.com/vuejs-templates/webpack-simple/blob/master/template/webpack.config.js](https://github.com/vuejs-templates/webpack-simple/blob/master/template/webpack.config.js).

**Q: What do people see as some of the drawbacks of static site generators?**
A: Some can be slow (though Hugo is quite fast), they aren't meant for handling dynamic or user-submitted content, and the workflow (Markdown authoring &rarr; build process &rarr; deployment) isn't for everyone.

**Q: Why is the default alias for a remote git repo called "origin?"**
A: It makes more sense if you think of multiple collaborators pulling down code from a single origin (the remote repo).

**Q: Are there any good libraries for doing CSS text animations?**
A: Animate.css is a popular choice.

**Q: How can I get started building a UWP with a custom USB device?**
A: Take a look at https://developer.microsoft.com/en-us/windows/hardware/windows-driver-kit.

**Q: Can you natively put a CSS blur filter on part of an image without duplicating it and blurring the dupe?**
A: No. That said, here's a pretty simple way of duplicating the image and cropping and blurring the dupe: [http://jsfiddle.net/nbLcs241/](http://jsfiddle.net/nbLcs241/). Here's another similar sample that uses image masking, which could be helpful for gradients and more complex shapes: [https://designshack.net/articles/css/csstiltshift/](https://designshack.net/articles/css/csstiltshift/).

**Q: How can you run a Python script on a Raspbian at boot?**
A: `sudo crontab -e`
>
A: `@reboot python /home/user/myfile.py &`
>
A: `sudo reboot`

**Q: In Hugo, how do you change the URL associated with a taxonomy page?**
A: In `config.yaml`, set taxonomy values as URL path (Ex: `genre: collection/genre`). Then, include the path in the page's .md frontmatter (e.g., `collection/genre: action`).


## Food and drink

**Q: What kind of cocktail can I make with Crème Yvette aside from more popular ones like Blue Moon and Aviation?**
A: Yvette Collins:
>
A: 1 fl. oz. gin
>
A: 1 fl. oz. lemon juice
>
A: 0.5 fl. oz. Crème Yvette
>
A: 0.5 fl. oz. lavender simple syrup (4:4:1 ratio of sugar:water:dried lavender buds)
>
A: 2 fl. oz. sparkling water or sparkling lemonade

**Q: Where can you go to eat in Pioneer Square after 10 PM?**
A: Damn the Weather is open until midnight.

**Q: What are the main ingredients in the vegetarian burger patty at Johnny's on First?**
A: Red quinoa and Catalina beans.


## Music

**Q: When is SXSW over?**
A: Saturday, March 18.

**Q: Who wrote Dolly Parton's song "Jolene?"**
A: Dolly Parton.

**Q: Who sang "Poupée de cire, poupée de son?"**
A: France Gall.

**Q: Has anyone done a critical analysis of Sparks's discography via the lens of feminism, critical race theory, colonialism, class, etc.?**
A: Hmm, I couldn't find anything.


## Personal care

**Q: What is cold cream?**
A: An emulsion of oil and beeswax used as a face wash and moisturizer.

**Q: Do people prefer Pond's Cold Cream or Weleda Cold Cream?**
A: Weleda Cold Cream has higher review scores on MakeupAlley and Amazon (approx. 4.5 out of 5 stars) as compared to Pond's Cold Cream (approx. 4 out of 5 stars).

**Q: What is neroli oil?**
A: Neroli oil is an oil extracted from bitter orange blossoms via steam distillation.

**Q: What is the difference between eau de parfum and eau de toilette?**
A: Eau de parfum has a perfume oil concentration of 10% to 20%, whereas eau de toilette has a pefume oil concentration of 4% to 10%.

**Q: What are the Austin locations for Milk + Honey Spa?**
A: Downtown and Bee Cave.

**Q: What is the phone number for booking an appointment at Milk + Honey Spa?**
A: 512-236-1115.

**Q: Are all-silicone electric toothbrushes well-liked?**
A: No. According to Amazon reviews, they seem to be flimsy and may leave your teeth feeling less than fully clean. Sonicare toothbrushes are a more popular choice.

**Q: What are some natural or common household ingredients that can be used for facial exfoliation?**
A: Physical exfoliants include coffee grounds, cornmeal, rice powder, and poppy seeds. Citrus juices such as lemon juice act as a light chemical exfoliant, as does the salicylic acid in aspirin (which, when crushed, also works as a physical exfoliant).


## Plants

**Q: How tall do elephant trees grow?**
A: 10 ft.

**Q: What does a fully-grown elephant tree look like?**

![Elephant tree](/img/elephanttree.jpeg)

**Q: What does a king protea look like?**

![King protea](/img/king.jpeg)

**Q: What does *Myrtillocactus geometrizans forma cristata* look like?**

![Plant](/img/plant.jpeg)

**Q: What time does East Austin Succulents close on weekends?**
A: East Austin Succulents closes at 5PM every day.

**Q: What are the care instructions for *Gerrardanthus macrorhizus?***
A: This plant is heat tolerant but likes partial shade and requires well-draining soil (perlite mix), as it is susceptible to root rot.

**Q: What are the care instructions for *Sarcocaulon herrei?***
A: This plant likes heat, full sun, and sandy/rocky soil, as it is susceptible to root rot. Water about once per week during growth (spring/summer) but infrequently during dormancy.

**Q: How do you care for lavender plants in Texas?**
A: Give them lots of sun, well-draining, alkaline soil, and little water. Plant in a raised bed to prevent water pooling at the base of the plant. Prune by half in the spring to promote growth.


## Science

**Q: What is the chemical composition of TV rock?**
A: Ulexite, or TV rock, is NaCaB<sub>5</sub>O<sub>6</sub>(OH)<sub>6</sub>•5H<sub>2</sub>O (hydrated sodium calcium borate hydroxide).

**Q: What is the naming convention for exoplanets?**
A: Exoplanets are generally named by taking the name of the star they orbit and adding a letter (a, b, c...) in order of discovery. Per a recent change of heart by the IAU, some exoplanets have proper names.


## TV and film

**Q: Who played young Picard in the episode of *Star Trek: The Next Generation?* where some of the crew inexplicably turn into children?**
A: Young Picard was played by David Tristan Birkin, nephew of Jane Birkin.

**Q: Who is Meiko Kaji?**
A: Meiko Kaji is a Japanese actress famous for playing outlaw characters in 1970s films such as *Lady Snowblood.* She also sang the theme songs to some of her films, two of which were featured in the *Kill Bill* series and led to a renewed international interest in her work.

**Q: Did Noel Fielding ever appear in *Garth Marenghi's Darkplace?***
A: Yes, he played the man in the ape suit in the chase scenes.

**Q: What is the plot of *In like Flint?***
A: *In like Flint* is a 1960s parody spy movie in which Derek Flint aims to foil an evil feminist plot to smash the patriarchy.


## Misc.

**Q: What is Donald Trump's current approval rating?**
A: 37%.

** Q: How late is Kinokuniya in Seattle open today?**
A: Until 9 PM.

**Q: What does the name "Unabomber" mean?**
A: It comes from an FBI alias for Ted Kaczynski referring to him as UNABOM, or UNiversity and Airline BOMber.