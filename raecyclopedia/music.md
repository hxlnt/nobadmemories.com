---
tags: raecyclopedia
layout: raecyclopedia.njk
title: Lab → Raecyclopedia
intro: A catalog of everything I've looked up about music this year.
pagename: Music
entries:
  - date: 2021-01-16
    question: How can new samples be added to the Korg Volca Sample?
    answer: Use the desktop application vosyr to select desired .WAV files and initiate transfer to the Volca Sample. A 3.5mm audio cable is needed to connect the computer's headphone jack to the Volca Sample's sync in.
  - date: 2021-01-20
    question: How do you record a stereo instrument with the Audient iD4?
    answer: Technically, the Audient iD4 only has a single (mono) instrument input. However, you can use the microphone input as a second line in to record live stereo audio with two 1/4" TS cables. Because the gain ranges differ on each input, the gain for the microphone input needs to be increased relative to the gain for the instrument input. For the best adjustment, check the L and R levels on a signal known to have equal levels in each channel to confirm that the levels are equal after gain adjustment.
    sources:
      - https://support.audient.com/hc/en-us/articles/210725106-iD4-Detailed-Specs
  - date: 2021-02-21
    question: Where was Jimi Hendrix born?
    answer: Seattle, WA
    sources:
      - https://en.wikipedia.org/wiki/Jimi_Hendrix
  - date: 2021-04-02
    question: What does MPC stand for?
    answer: MIDI Production Center
    sources:
      - https://en.wikipedia.org/wiki/Akai_MPC
  - date: 2021-04-09
    question: Who performed the German version of the song "Der Kommissar?"
    answer: Falco, who is also known for the song "Rock Me Amadeus."
    sources:
      - https://en.m.wikipedia.org/wiki/Falco_(musician)
      - https://youtu.be/cVikZ8Oe_XA
      - https://youtu.be/8-bgiiTxhzM
  - date: 2021-05-30
    question: What MIDI commands enable the percussion kit?
    answer: By convention, Channel 10 is usef for percussion. Control codes and data are sent in the same way as they are for instruments. But instead of pitches, the data byte specifies the part of the kit to play.
    sources:
      - https://musescore.org/sites/musescore.org/files/General%20MIDI%20Standard%20Percussion%20Set%20Key%20Map.pdf
    