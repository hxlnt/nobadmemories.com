---
layout: 'content'
title: "Rae's Guide to PocketC.H.I.P."
description: "Insofar as one can be an expert after just a week, I decided to start putting together a guide to all things PocketC.H.I.P. to share all I've learned, built, and, ahem, broken from time to time."
while: 'listening to Consideration by Rihanna (ft. SZA).'
date: 2016-08-29T00:36
---

About a week ago, I received a brand-new PocketC.H.I.P., and I haven't been able to put it down since. Insofar as one can be an expert after just a week, I decided to start putting together a guide to all things PocketC.H.I.P. to share all I've learned, built, and, *ahem*, broken from time to time.

1. [What is PocketC.H.I.P.?](#what-is-pocketchip)
3. [Installing new software on your PocketC.H.I.P.](#installing-new-software-on-your-pocketchip)
4. [Blogging from PocketC.H.I.P.](#blogging-from-pocketchip)
5. [Visual Studio Code on PocketC.H.I.P](#visual-studio-code-on-pocketchip)
6. [Oops! I bricked my PocketC.H.I.P.!](#oops-i-bricked-my-pocketchip)
7. [Corrections? Tips? Contributions?](#corrections-tips-contributions) 

## What is PocketC.H.I.P.?

Next Thing Co.'s [https://getchip.com/pages/pocketchip](PocketC.H.I.P.) looks like what you might if you crossed a Raspberry Pi with a Game Boy. 

![PocketC.H.I.P. photo from getchip.com](/img/pocket.jpg)

The PocketC.H.I.P. is a hackable computer with a touchscreen display, QWERTY keyboard, rechargeable battery, GPIO breakouts, headphone jack, WiFi, and bluetooth, all in one adorable handheld device. The brain of the PocketC.H.I.P. is the C.H.I.P., a $9 Linux computer with a 1 GHz ARM7 processor and 512 MB RAM. 

Admittedly, the touchscreen is a little finnicky, the keyboard a little fatiguing for extended use, the 512 MB of RAM a little short, and the plastic casing a little creaky. But overall, it feels like a great deal of care went into the design and the right tradeoffs for value and cost were made. (The PocketC.H.I.P. currently retails for $69 USD.) Little touches like the pencil stand, lanyard hole, faceted case, and beautiful graphic design have tremendous impact.

To learn more about the PocketC.H.I.P. and C.H.I.P., check out Next Thing Co.'s [documentation](http://docs.getchip.com/).

## Installing new software on your PocketC.H.I.P.

To look for applications that you may be able to install on the PocketC.H.I.P., you can browse the [Debian Jessie Package listing](https://packages.debian.org/jessie/) and look for stable-release packages that list supported architecture as "all" or "armhf." If you find an application you want to try, you can install it by opening the Terminal and entering `sudo apt-get install name-of-package` where *name-of-package* is the name of the package you want to install as listed on the Debian package website. Note that before you install your first application, you should run `sudo apt-get update` to update APT ("Advanced Package Tool"). To remove a package, enter `sudo apt-get remove name-of-package`.

By the way, this might be a good time to mention web browsers. Many folks don't realize that the PocketC.H.I.P. comes with a browser; just go to terminal and type `surf nobadmemories.com`. If you find this browser lacking, you can install a different one.

## Blogging from PocketC.H.I.P.

My website workflow allows me to do all sorts of funny stuff like writing blog posts from my PocketC.H.I.P. How fun is that? I'll write this up soon, but in the meantime, [here's the first PocketC.H.I.P.-authored blog post I uploaded](http://nobadmemories.com/blog/2016/08/whaaa-blogging-from-my-pocketchip).

## Visual Studio Code on PocketC.H.I.P.

I can't tell you whether it's practical to have Visual Studio Code on your PocketC.H.I.P., but I can absolutely confirm that it's both *possible* and *fun!*

![Custom build of VS Code on PocketC.H.I.P.](/img/vscode2.jpg)

OK, wait... what?

[VS Code](http://code.visualstudio.com) is Microsoft's cross-platform, open-source IDE. Though the "VS" technically stands for Visual Studio, VS Code has more in common with lightweight IDEs like Atom and Sublime. I like VS Code a LOT: it's very customizable, has really nice built-in node.js debugging tools, and has easy git workflow integration. BUT, I digress...

While I was impatiently waiting for my PocketC.H.I.P. to arrive last week, I decided that I really needed to install VS Code on it because, um, I don't know. Bragging rights, maybe? I'd never actually used Linux before, but I knew there were binaries on the VS Code website, soooo... how hard could it be, right? (I hear all y'all Linux users laughing at last week's me. It's fine.)

Soon after my PocketC.H.I.P. arrived, and propelled by sheer enthusiasm alone, I got to work. 

As it turned out, there actually wasn't a binary that could run on the PocketC.H.I.P.'s ARM7 architecture, so I built VS Code from source, which had its own challenges. Due to the PocketC.H.I.P.'s limited specs, the `npm install` that brings in all the necessary modules for building from source will result in an out-of-memory error. So, to build VS Code on a PocketC.H.I.P., I discovered that I needed to first create a 1 GB swapfile on a USB stick. Directions for how to do this (see "Arch Linux Swap") are available [here](http://raspberrypimaker.com/adding-swap-to-the-raspberrypi/). (Thanks to [John Gerryts](https://twitter.com/phonikg) for the hot tip via twitter!) 

After a few late nights and with a little luck, my build worked. I was SO EXCITED when VS Code successfully compiled and popped up. It looked just like the PC and Mac versions! 

![Javascript syntax highlighting in VS Code](/img/pocketjavascript.jpg)

That said, I'll admit that VS Code on PocketC.H.I.P. isn't a slam-dunk recommendation yet. I'm not sure whether it can be attributed to user error, the PocketC.H.I.P.'s modest specs, or the fact that VS Code is somehow running on a niche device with a custom Debian OS that's only been out for a few weeks on architecture that's not officially supported. The experience is, admittedly, not yet quite as good as you'd expect it to be on a Real Computer.

I mostly took on this endeavor for the challenge, to be the first one to get this lovable IDE working on this lovable device. I learned a LOT about Linux and building from source. (Did I mention that I'd never used Linux before last week?) In the course of this adventure, I also had a pull request accepted for VS Code's compile documentation, which was really exciting, and now I'm motivated to continue contributing to VS Code and improving the VS Code ARM7 user experience! So. Worth. It.

Additional resources: [Microsoft's build-from-source guide](https://github.com/Microsoft/vscode/wiki/How-to-Contribute#build-and-run-from-source), [ARM7 pull request](https://github.com/Microsoft/vscode/pull/10923)

## Oops! I bricked my PocketC.H.I.P.

I won't ask you how it happened. But if you've bricked or somehow Really Screwed Up your PocketC.H.I.P., you can make it all right again by reflashing it. Please note that reflashing restores your PocketC.H.I.P. to like-new condition (*i.e.,* your files and other downloads will be erased forever).

The PocketC.H.I.P. can very handily be reflashed using Next Thing Co.'s [web-based C.H.I.P. Flasher](http://flash.getchip.com/), which works on Mac and Windows. Choose PocketC.H.I.P. in the web app, then follow the instructions. You can bridge the FEL and ground pins without removing the C.H.I.P. from its casing; just use the breakout area at the top.

One thing that's really important to note is that reflashing seems to not work with USB 3.0 ports and is quite picky about the type of USB cable used. If you're on a computer that only has USB 3.0 ports, you can place an older USB hub between the PocketC.H.I.P. and the USB 3.0 port to "downgrade" it to USB 2.0. If you're having issues reflashing, you might want to try swapping out the micro-USB cable for one of higher quality.

## Corrections? Tips? Contributions?

Because this website is entirely available [on GitHub](https://github.com/hxlnt/nobadmemories.com/tree/master/src/render/posts), you can actually submit pull requests on individual blog posts like this one. (The horror!) If all of that sounded like a foreign language to you, no worries. You can also let me know on twitter ([@partytimeHXLNT](http://www.twitter.com/partytimehxlnt)) or via email ([rachelsimoneweil /at/ gmail /dot/ com](mailto:rachelsimoneweil@gmail.com)).

*Note: Given the content of this article, I'd like to mention that I am happily employed by Microsoft. That said, I publish my own honest opinions and experiences. Also, I do not represent any particular product development team. Yeah, really, OK, and thank you~!*
