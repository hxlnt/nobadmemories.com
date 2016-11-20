---
layout: 'content'
title: "Fun and games with node.js"
description: "If you're interested in trying your hand at making a node.js game, here are a few open-source games and amusements to get you started."
while: "hanging out in Nashville for the Nodevember conference."
date: 2016-11-20T00:06
keyimg: "/img/chess.png"
---

I'm [giving a talk today](http://nobadmemories.com/events/nodevember-2016/) at [Nodevember](http://nodevember.org), a Javascript and node conference taking place in Nashville. My talk, titled "Fun and games with [node.js](http://nodejs.org)," makes two key points:

1. If you want to learn or refresh your skills in Javascript, you should make a game using node.js. 
2. If you're a Javascript developer, you should teach others how to make a game in node.js.

One of the difficulties with learning node.js in general is that there's a *lot* of assumed prerequisite knowledge. Many tutorials and books you'll find expect either familiarity with Javascript or at minimum a good working knowledge of the paradigms of good programming and an understanding of how web traffic and servers work. They toss around jargon like "asynchronous" and "client-side," which seem like simple enough phrases to those of us in the web-developer world, but their meanings are not self-evident to beginners! What's more, we tend to use overly-ornate verbs to describe simple tasks, which can lead to more confusion and intimidation. "Invoke," "execute," "hoist," "instantiate," and the like are twenty-dollar words, to paraphrase E. B. White, that require definition or at least comparison to their everyday counterparts like "make" and "do."

How do beginners overcome this challenge? Perhaps by making a game. Games are familiar, fun, and engaging. They get our creativity and problem-solving skills going, and they are a great opportunity to create and learn on your own in your free time. If you make a game and it sucks, congratulations: you have completed the most important rite of passage, and you are now officially a game developer. Learning while making a game, even a bad game, is much preferable to leaning while making a business-critical app for a client because if *that* sucks, well... fun times all around!

That said, I also encourage more seasoned node.js developers to make a game and share the code with others who are just starting out. Your fun project might be just the push someone needs to slog through the self-paced learning process.

If you're interested in trying your hand at making a node.js game, here are a few open-source games and amusements to get you started. Most of these are accompanied by step-by-step tutorials. 
 - [Anagrammatix](https://modernweb.com/2013/09/30/building-multiplayer-games-with-node-js-and-socket-io/): A multiplayer word game by Eric Terpstra.
 - [Real-time Chess](http://dwcares.com/2015/10/21/realchess/): An online chess game by David Washington.
 - [FrozenBot](http://frozenbot.azurewebsites.net/): A voice-activated singing doll by Gabrielle Crevecoeur.
 - [netpong](https://github.com/OpherV/netpong): An online Pong clone by Opher Vishnia.
 - [Node.js Drawing App](http://tutorialzine.com/2012/08/nodejs-drawing-game/): A collaborative canvas by Martin Angelov.

![Real-time chess by David Washington](/img/chess.png)

Many of these examples also involve [socket.io](http://socket.io), an easy-to-use Javascript framework for sending data between a node server and clients in real time. The socket.io website has [a tutorial that walks through building a browser-based, real-time chat client](http://socket.io/get-started/) that can be helpful to go through if you're just getting started with websockets and real-time communication. (At the time of writing, the demos on their website weren't working, but perhaps they're all patched up by now.)

Finally, here are links to two fun node.js projects I built this year. The source code is available for these projects as well.
 - [ConnectedNES](http://www.nobadmemories.com/connectednes): a WiFi modem peripheral and twitter stream for the original NES game console .
 - [the dealwithit bot](http://www.nobadmemories.com/dealwithit): A web app that uses computer vision to drop pixelated shades on everyone in a photo.

Working on a game with node.js? Reach out on [twitter](http://www.twitter.com/partytimehxlnt) if you do that sort of thing. I'd love to see what you're working on!