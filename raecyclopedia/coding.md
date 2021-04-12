---
tags: raecyclopedia
layout: raecyclopedia.njk
title: Lab → Raecyclopedia
pagename: Coding
intro: A catalog of everything I've looked up about coding this year.
entries:
  - date: 2021-01-10
    question: Is there an iOS app for working with source code repositories?
    answer: "Yes: It's called Working Copy."
  - date: 2021-01-17
    question: What is the CSS selector for the first line of text?
    answer: "<code>::first-line</code>"
    sources:
      - https://www.geeksforgeeks.org/css-first-line-selector/#:~:text=The%20::first-line%20selector%20in%20CSS%20is%20used%20to,of%20the%20document,%20font-size%20of%20the%20text,%20etc
    tag: coding
  - date: 2021-01-17
    question: How do you force-justify the last line of text in CSS?
    answer: "Use <code>text-align-last: justify;</code>."
    sources:
      - https://www.w3docs.com/learn-css/text-align-last.html
  - date: 2021-01-17
    question: How do you change the color and thickness of a header rule in CSS?
    answer: Adjust the color, line style, and thickness of the <code>border</code> property on the <code>hr</code>.
    sources:
      - https://www.w3schools.com/howto/howto_css_style_hr.asp
  - date: 2021-01-20
    question: How do you prevent word wrapping on a given class in CSS?
    answer: "Set <code>white-space: nowrap</code> on the class."
    sources:
      - https://www.digitalocean.com/community/tutorials/css-prevent-line-break
  - date: 2021-01-20
    question: How do you prevent 11ty from rendering certain files?
    answer: Add them to a <code>.eleventyignore</code> file.
    sources:
      - https://www.11ty.dev/docs/ignores/
  - date: 2021-01-20
    question: What is the syntax for <code>clamp()</code> in CSS?
    answer: <code>clamp(MIN, VAL, MAX)</code>
    sources:
      - https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()
  - date: 2021-03-07
    question: Can you do nearest-neighbor image upscaling in CSS?
    answer: "Yes, <code>image-rendering: pixelated</code> is supported in most modern browsers."
    sources:
      - https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering
  - date: 2021-03-24
    question: Do JDKs include a Java runtime?
    answer: Yes
    sources: 
      - https://stackoverflow.com/questions/2541319/jre-included-with-jdk-vs-standalone-jre