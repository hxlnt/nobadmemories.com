---
layout: 'content'
title: "Deep dive: Publishing an npm package"
description: "What I learned from publishing my first npm package"
while: "drinking iced coffee."
date: 2017-07-10T16:05
keyimg: "https://hxlntblob.blob.core.windows.net/nbm/commodore2.png"
feature: true
---

Last night, I published [my first npm package](https://www.npmjs.com/package/video-indexer): a wrapper for an API that does [machine-learning analytics on video](http://videoindexer.ai)! 

It was a great learning experience, so I thought I'd share some of my reflections on the endeavor.

## But first: What is an npm package, anyway?

To be as succinct as possible:

1. *Node.js* (alternatively styled as *Node* or *NodeJS*) is server-side Javascript.
2. *Node modules* are reusable, shareable bits of Node.js code. (I really wish they were called "Nodules," but alas...)
3. The sharing of Node modules is facilitated by [npm](http://npmjs.org), a package management service for Node.js.

So, publishing an npm package involves writing **server-side Javascript** in such a way that it is modular and **shareable**, then making that code available to others through **npm**.

Sharing open-source code... isn't that what GitHub's for? Sure! In fact, the module I wrote is hosted in [a repo on GitHub](https://github.com/hxlnt/video-indexer), not on the npm website itself. npm simply provides a way to search for Node modules via their website and to easily download and update packages via the npm command-line tool. Using npm is a better practice than, for example, searching for a random code sample on the web, editing it to try to get it working with your project (if you're lucky!), periodically checking the website to see if there were improvements or bug fixes that you missed, RE-editing the code to work with your project, and so on and so forth. Once you get the hang of npm, I think you'll find it to be an improvement over the copy-and-paste methods of the 90s. :)

## How I chose my first project to publish as a Node module

> "If you find yourself having to write the same code for yourself over and over, it might be time to make it a module!" &mdash;Someone, probably

The above advice that I might have received once upon a time seems fair. If you're having to write the same boilerplate Node.js again and again, maybe others are, too.

However, I rarely find myself in this predicament. Most of the Node.js boilerplate I poach from my own projects consists of the few lines of code that bring in an already-existing module. Everything else is problem solving, math, clever trickery with bitwise math, unclever trickery just to get something to work...

I decided that for my first Node module, I wanted create a wrapper around the [Video Indexer REST API](http://videoindexer.ai), which ingests video and provides AI-powered analysis such as transcript generation, speaker recognition, and sentiment analysis. 

![Video Indexer API](https://hxlntblob.blob.core.windows.net/nbm/commodore.png)

While interacting with REST APIs isn't *too* hard, whether with vanilla Javascript, JQuery, or Node modules like `request`, I found a few good reasons to create this module. For one, the project would be small, well-scoped, and with clear objectives: implement the functionality of the REST API. Second, I was motivated to build the module because I had a personal project could benefit from automated video subtitle generation, and a Video Indexer Node module didn't exist yet. The third reason was a bit of an epiphany for me, one that emerged as I was in the process of coding.

**A Node wrapper for REST API provides deep discovery on what the API can do, functioning as an alternative, practical form of documentation.**

In retrospect, I thought about how REST API Node modules like [azure-storage](https://github.com/Azure/azure-sdk-for-node), [project-oxford](https://github.com/felixrieseberg/project-oxford), and [twilio](https://github.com/twilio/twilio-node) have helped me better understand the capabilities and every corner of the APIs underneath them. *Writing* such a Node module creates an even deeper understanding. The abstraction provided by a Node module allows the developer to focus on the cool stuff the API can do&mdash;the verbs and nouns&mdash;instead of the not-so-interesting details of managing promises or callbacks or header content types.

I'm happy with the project I chose. I was able to complete it over a weekend, I learned a ton, and now I'll have a starting point for working on that video subtitling project!

## Working toward npm publish

While I've written [plenty](https://github.com/hxlnt/feather-nodebot) [of](https://github.com/hxlnt/strikethispose) [Node.js](http://nobadmemories.com/connectednes) [apps](http://nobadmemories.com/dealwithit) before, this was my first time to publish a utility to npm. I imagined that I wouldn't publish the module until the code was sparkling clean, complete, and perfect. (You know, normal code, right? Eheh...) But being able to run `npm install video-indexer`, as it turns out, is crucial to enable myself and others to use and test the module IRL. If we all believed that open-source code isn't useful until it's perfect, well... we probably wouldn't have much open source at all.

A few things that you *should* get in order before publishing:

- [Sign up for an npm account](http://www.npmjs.org) (required for publishing).
- Review npm's guides for [publishing modules](https://docs.npmjs.com/getting-started/publishing-npm-packages) and [versioning](https://docs.npmjs.com/getting-started/semantic-versioning).
- Optimize your `README.md` and `package.json`.

If you're already developing Node.js apps, you likely know some of the things a `package.json` does for you, like listing dependencies and custom testing scripts. But perhaps there are some prompts in `npm init` that you might gloss over quickly, like license, version, description, and keywords. However, these fields are used to automatically populate content on the npm website, so be sure that they're in good working order!

The description and keyword fields in your `package.json` will improve developers' ability to search for your module on the npm website. As you can see below, the description appears directly below your module name in search results. 

![npm Search](https://hxlntblob.blob.core.windows.net/nbm/npmsearch-anno.png)

Once users click on the package to go to its npm website entry, they can see additional information that is automatically pulled from the project's `package.json` and `README.md`.

![npm Search](https://hxlntblob.blob.core.windows.net/nbm/npmland-anno.png)

Note: I initially thought that the README.md would automatically update when I pushed a new commit to GitHub. They do not. They only updated once I ran `npm publish`.

## What didn't work

A few other assorted thoughts on what *wasn't* successful for me.

1. **Starting with someone else's Node module as a go-by.** I thought I could learn good patterns and practices by patterning my module after a more mature one to which I had previously contributed on GitHub. But the time it took to understand every line and decision made it impractical. I was better off to have a quick look through the code and then put it aside to start from scratch on my own work.

2. **Test-driven development.** This is a strategy I've really wanted to try out. As a former scientist, this habit of mind is already how I approach coding. However, this wasn't the right project for picking up this practice. With such a small, well-scoped, and straightforward project, implementing mocha and chai took up a disproportionate part of my development time, making me question the benefits of the approach altogether. (It reminds me of my failed attempt to learn how to read the sheet music for "Mary Had a Little Lamb" on piano&mdash;it's much faster to feel it out on the keys, but that strategy has its limits for more complex music.)

## What's next?

Continuing to work on `video-indexer`, of course! It's cool to have chosen a module associated with a relatively new API (it was just announced a few months ago). I get to be a bit of a leading-edge expert on the API, and I'm excited to watch what new directions it takes.

![npm Search](https://hxlntblob.blob.core.windows.net/nbm/commodore2.png)

So, if you're a new or wannabe Node.js developer, I hope this look at publishing npm packages was helpful to you. And, of course, I'd love to see you over at the `video-indexer` [repository](https://github.com/hxlnt/video-indexer) if you'd like to test out the module or contribute code!