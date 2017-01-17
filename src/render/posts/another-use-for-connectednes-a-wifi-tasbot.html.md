---
layout: 'content'
title: "Another use for ConnectedNES: a WiFi TASBot"
description: "With a little help from a Python script I wrote, you can now pipe recorded gameplay presses via FCUEX over WiFi and to real hardware."
while: "listening to the rain."
date: 2017-01-17T13:08
keyimg: "tasplayer.png"
---

I've been wanting to use [ConnectedNES](http://www.nobadmemories.com/connectednes) for something other than monitoring my twitter feeds, so I built this prototype last night for autoplaying NES games on real hardware, a la [TASBot](http://tasvideos.org/TASBot.html).

With a little help from a Python script I wrote, you can now pipe recorded gameplay presses via FCUEX over WiFi and to real hardware.

<p><video width="100%" height="auto" controls>
  <source src="http://www.nobadmemories.com/img/tasplayer.mp4" type="video/mp4">
Your browser does not support the video tag.
</video></p>

To reduce impact on the microcontroller, I implemented a compression algorithm on keypress recordings that outputs two arrays. One array contains the series of keypresses, each one stored as a single byte (*e.g.,* 0b10001000). The other array contains a series of time values (in frames) for which the corresponding keypress is valid (*e.g.,* 0b11110001). Keypresses that go for longer than 255 frames are sent in a second byte-byte pair, so the arrays are perfectly matched.

![ConnectedNES TASBot](/img/tasplayer.png)

It was incredibly accurate for my own playthrough *Super Mario Bros.*, though at this time not accurate enough to play back glitch-happy, precision runs like [this one](http://tasvideos.org/1715M.html).

Read more about ConnectedNES [here](http://www.nobadmemories.com/connectednes).