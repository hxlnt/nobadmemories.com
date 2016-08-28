---
layout: "projectdetails"
name: "the dealwithit bot"
date: 2016-05-03T07:45-05:00
github: 
  name: "aifunclub"
  link: "http://www.github.com/hxlnt/aifunclub/"
quote:
  text: "Deal with It Bot lets you put a pair of virtual shades on anyone."
  source: "Kill Screen"
  link: "https://killscreen.com/articles/deal-with-it-bot-lets-you-put-a-pair-of-virtual-shades-on-anyone/"
img: "dealwithit.gif"
isProject: true
---

The dealwithit bot is a web app that detects all faces in a photo and slides on a pair of pixel shades. Truly a worthwhile use of the bountiful technological feast made possible by machine learning and artificial intelligence. Deal with it. Test it out at [aifunclub.azurewebsites.net](http://aifunclub.azurewebsites.net).

![Data deals with it](/img/dealwithit.gif)

## What's under the hood

1. A [Project Oxford node module](https://github.com/felixrieseberg/project-oxford) calls the [Microsoft Face API](http://microsoft.com/cognitive) to return angle, pitch, and coordinates of eyes and eyebrows for each face detected (max. 64).
2. [socket.io](https://github.com/socketio/socket.io) handles communication between the node server and client HTML.
3. [JQuery](https://jquery.com/) takes care of a few things like the generation and animation of glasses.

If you want to play with this code on your own, you'll need to add your own API key for the Face API.