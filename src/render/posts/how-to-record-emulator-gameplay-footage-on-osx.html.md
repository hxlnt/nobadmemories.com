---
layout: 'content'
title: "How to record emulator gameplay footage on OSX"
description: "OpenEmu gameplay recording"
while: "goofing off."
date: 2017-12-21T21:16
keyimg: "https://hxlntblob.blob.core.windows.net/nbm/quicktime.png"
feature: true
---

I recently found a great trick for recording gameplay footage with audio in [OpenEmu](http://openemu.org/) for Mac OSX.

<p><video width="100%" height="auto" controls loop>
  <source src="https://hxlntblob.blob.core.windows.net/nbm/citytrouble.mp4" type="video/mp4">
Your browser does not support the video tag.
</video></p>

Looks good, right? (And, why yes, I *did* lend my voice to that title screen audio for *City Trouble!* "Let's get it on!")

There's an open-source OSX extension that allows the audio output of one application to serve as the audio *input* for another. And it's pretty easy to get up and running.

1. Head over to [mattingalls/Soundflower](https://github.com/mattingalls/Soundflower) on GitHub and download and install [the most recent installer release](https://github.com/mattingalls/Soundflower/releases). As of December 2017, the most recent build was published back in 2014, but it worked fine on my Mac running Sierra.
2. Open up a ROM in OpenEmu. Expand the window to the size you want the video to be. You might also want to change the filter to Nearest Neighbor if you want a crisp, pixelated look. To do this, click the gear on the player control, then select Select Filter > Nearest Neighbor.
3. Launch Audio MIDI Setup by going to the Launchpad and clicking into Other OR by browsing to Applications/Utilities/.
4. Click the + in the bottom left of the window to create a new Multi-Output Device. Then, make sure both Built-in Output and Soundflower (2ch) are checked. Click the gear icon at the bottom left and select "Use this device for sound output."
5. Open QuickTime Player and go to File > New Screen Recording. Click the arrow next to the record button and select Soundflower (2ch). 

![Screenshot of QuickTime](https://hxlntblob.blob.core.windows.net/nbm/quicktime.png)

6. Click the record button, draw a box around the visible playfield, and click Start Recording.
7. Click on the OpenEmu window to reactivate it, and start capturing your footage! You might want to select Controls > Restart Emulation in OpenEmu to get the gameplay footage right from the beginning. 
8. To stop recording, right click on QuickTime in the dock and select Stop Screen Recording. The movie will open, and at this point you can either save it (File > Save...) or trim it (Edit > Trim...) before saving.

Now you have a high-quality recording of your gameplay, complete with audio! (Hint: QuickTime saves files with a .mov, which doesn't always play nice with Twitter and other browser uploads. However, you can rename the file with a .m4v extension to get around these issues.)

When you're done, reenable your default output device. The Soundflower multi-output device you created will be saved for the next time you want to reenable it. Hint: You can also change default output devices by clicking the volume icon on the taskbar.

I hope this has been helpful to anyone wanting a quick and easy way to record high-quality gameplay footage from OpenEmu. Enjoy!