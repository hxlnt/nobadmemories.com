---
layout: 'content'
title: "My first week with PocketCHIP"
description: "Insofar as one can be an expert after just a week, I decided to start putting together a guide to all things PocketCHIP to share all I've learned, built, and, ahem, broken from time to time."
while: 'listening to Consideration by Rihanna (ft. SZA).'
date: 2016-08-29T01:51
---

About a week ago, I received a brand-new PocketCHIP, and I haven't been able to put it down since. Insofar as one can be an expert after just a week, I decided to put together all that I've learned, built, and, *ahem*, broken so far.

1. [What is PocketCHIP?](#what-is-pocketchip)
2. [Installing new software on PocketCHIP](#installing-new-software-on-your-pocketchip)
3. [Visual Studio Code IDE on PocketCHIP](#visual-studio-code-ide-on-pocketchip)
4. [Blogging from PocketCHIP](#blogging-from-pocketchip)
5. [Oops! I bricked my PocketCHIP!](#oops-i-bricked-my-pocketchip)
6. [Corrections? Tips? Contributions?](#corrections-tips-contributions) 

## What is PocketCHIP?

Next Thing Co.'s [PocketCHIP](https://getchip.com/pages/pocketchip]) looks like what you might if you crossed a Raspberry Pi with a Game Boy. 

![PocketCHIP photo from getchip.com](/img/pocket.jpg)

The PocketCHIP is a hackable computer with a touchscreen display, QWERTY keyboard, rechargeable battery, GPIO breakouts, headphone jack, WiFi, and bluetooth, all in one adorable handheld device. The brain of the PocketCHIP is the CHIP, a $9 Linux computer with a 1 GHz ARM7 processor and 512 MB RAM. 

Admittedly, the touchscreen is a little finicky, the keyboard a little fatiguing for extended use, the 512 MB of RAM a little short, and the plastic casing a little creaky. But overall, it feels like a great deal of care went into the design and that the right tradeoffs for value and cost were made. (The PocketCHIP currently retails for $69 USD.) Little touches like the pencil stand, lanyard hole, faceted case, and beautiful graphic design have tremendous impact.

To learn more about the PocketCHIP and CHIP, check out Next Thing Co.'s [documentation](http://docs.getchip.com/).

## Installing new software on your PocketCHIP

PocketCHIP comes with a few applications preloaded; among them, the [Pico-8 game console-plus-IDE](http://www.lexaloffle.com/pico-8.php) steals the show. But what if you want to venture into new territory with your device?

To find applications that you may be able to install on the PocketCHIP, you can take a look the [Debian Jessie Package listing](https://packages.debian.org/jessie/) and browse stable-release packages that list supported architecture as "all" or "armhf." If you find an application you want to try, first ensure that you've connected to WiFi from the Home Screen settings menu. Then, you can install software by opening the Terminal and entering `sudo apt-get install name-of-package` where *name-of-package* is the name of the package you want to install per the Debian package website. 

Speaking of `sudo`, the default PocketCHIP password for commands prefixed with `sudo` is *chip.* You should probably change that at some point. It's easy: just enter the command `passwd` into Terminal and follow the directions provided.

Note that before you install your first application, you should run `sudo apt-get update` to update APT (the "Advanced Package Tool"). To remove a package that you no longer want, enter `sudo apt-get remove name-of-package`.

Applications you install won't be automatically added to the Home Screen, though some folks have posted tutorials for customizing Home Screens on [the Next Thing Co. forums](https://bbs.nextthing.co/). Applications you install can be opened from Terminal. 

Did you know that PocketCHIP already comes with some applications that aren't on the Home Screen? For example, a web browser can be accessed from Terminal by typing `surf nobadmemories.com`.

## Visual Studio Code IDE on PocketCHIP

I can't tell you whether it's practical to have Visual Studio Code on your PocketCHIP, but I can confirm that it's both *possible* and *fun!*

![Custom build of VS Code on PocketCHIP](/img/vscode2.jpg)

OK, wait... what? Yes.

While I was impatiently waiting for my PocketCHIP to arrive last week, I decided that I really needed to install [VS Code]((http://code.visualstudio.com) on it because, um, I don't know. Bragging rights, maybe? I'd never actually used Linux before, but I knew there were binaries on the VS Code website, soooo... how hard could it be, right? (I hear all y'all Linux users laughing at last week's me. It's fine.)

Soon after my PocketCHIP arrived, and propelled by sheer enthusiasm alone, I got to work. 

As it turned out, there actually wasn't a binary that could run on the PocketCHIP's ARM7 architecture, so I built VS Code from source, which had its own challenges. Due to the PocketCHIP's limited specs, the `npm install` that brings in all the necessary modules for building from source will result in an out-of-memory error. So, to build VS Code on a PocketCHIP, I discovered that I needed to first create a 1 GB swapfile on a USB stick. Directions for how to do this are available [here](http://raspberrypimaker.com/adding-swap-to-the-raspberrypi/). (See "Arch Linux Swap," and thanks to [John Gerryts](https://twitter.com/phonikg) for the hot tip via twitter!) 

After a few late nights and with a little luck, my build worked. I was SO EXCITED when VS Code successfully compiled and popped up. It looked just like the PC and Mac versions! 

![Javascript syntax highlighting in VS Code](/img/pocketjavascript.jpg)

That said, I'll admit that VS Code on PocketCHIP isn't a slam-dunk recommendation yet. It's a little buggy, and I'm not sure whether to attribute that to user error, the PocketCHIP's modest specs, or the fact that VS Code is somehow running on a niche device with a custom Debian OS that's only been out for a few weeks on architecture that's not officially supported.

I mostly took on this endeavor for the challenge, to be the first one to get this lovable IDE working on this lovable device. I learned a LOT about Linux and building from source. (Did I mention that I'd never used Linux before last week?) In the course of this adventure, I also had a pull request accepted for VS Code's compile documentation, which was really exciting, and now I'm motivated to continue contributing to VS Code and improving the VS Code ARM7 user experience! So. Worth. It.

Additional resources: [Microsoft's build-from-source guide](https://github.com/Microsoft/vscode/wiki/How-to-Contribute#build-and-run-from-source), [ARM7 pull request](https://github.com/Microsoft/vscode/pull/10923)

## Blogging from PocketCHIP

I recently built a website workflow ([DocPad](http://www.docpad.org) + [GitHub](http://www.github.com) + [Azure](http://azure.microsoft.com)) that allows me to author and post blog posts in plain old Markdown from just about anywhere. As I confirmed yesterday, that means I can even blog from my PocketCHIP! I essentially just grab [my website's repository on GitHub](https://github.com/hxlnt/nobadmemories.com) from my PocketCHIP Terminal, author a new blog post in Markdown, and push changes back to the repository. Because I have Azure set to watch and recompile when the GitHub repository changes, the DocPad deployment script will be rerun and the website will be automatically served up with updates. No FTP, no local node process. Love it.

I'll write this up in a more detailed post soon, but in the meantime, [here's the first PocketCHIP-authored blog post I uploaded](http://nobadmemories.com/blog/2016/08/whaaa-blogging-from-my-pocketchip).

## Oops! I bricked my PocketCHIP!

I won't ask you how it happened. But if you've bricked or somehow Really Screwed Up your PocketCHIP like I did once, you can make it all right again by reflashing it. Please note that reflashing restores your PocketCHIP to like-new condition (*i.e.,* your files and other downloads will be erased forever).

The PocketCHIP can very handily be reflashed using Next Thing Co.'s [web-based CHIP Flasher](http://flash.getchip.com/), which works on Mac and Windows. Choose PocketCHIP in the web app, then follow the instructions. You can bridge the FEL and ground pins without removing the CHIP from its casing; just use the breakout area at the top.

One thing that's really important to note is that reflashing seems to not work with USB 3.0 ports and is quite picky about the type of USB cable used. If you're on a computer that only has USB 3.0 ports, you can place an older USB hub between the PocketCHIP and the USB 3.0 port to "downgrade" it to USB 2.0. If you're having issues reflashing, you might want to try swapping out the micro-USB cable for one of higher quality.

## Corrections? Tips? Contributions?

What are you doing with your PocketCHIP? Got any suggestions or things I should try out? Throw all your best PocketCHIP finds in the comments section below. Or hey, seeing as this website is entirely available [on GitHub](https://github.com/hxlnt/nobadmemories.com/tree/master/src/render/posts), you could just submit a pull request! (The horror!)

*Note: Given the content of this article, I'd like to mention that I am happily employed by Microsoft. That said, I publish my own honest opinions and experiences. Also, I do not represent any particular product development team. Yeah, really, OK, and thank you~!*
