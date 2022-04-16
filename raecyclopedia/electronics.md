---
tags: raecyclopedia
layout: raecyclopedia.njk
title: Lab → Raecyclopedia
intro: A catalog of everything I've looked up about electronics this year.
pagename: Electronics
entries:
  - date: 2021-01-16
    question: What does <i>ASIC</i> stand for?
    answer: Application-specific integrated circuit
    sources:
      - https://en.wikipedia.org/wiki/Application-specific_integrated_circuit
  - date: 2021-01-25
    question: How much is the cheapest Saleae logic analyzer?
    answer: $400
    sources:
      - https://www.saleae.com/
  - date: 2021-07-08
    question: Can a TXB0108 bidirectional logic level converter be used on I2C components?
    answer: "No, the direction sensors on the level converter don't work well with large resistors on I2C components."
    sources:
      - https://www.adafruit.com/product/395
  - date: 2021-07-09
    question: Will MIDI operate on 3.3V levels?
    answer: Yes, the MIDI spec was updated in 2014 to include support for 3.3V logic. A 33Ω resistor is recommended between MIDI pin 4 and VCC, and a 10Ω resistor is recommended between pin 5 and the signal line.
    sources:
      - https://www.midi.org/specifications-old/item/midi-din-electrical-specification

---
