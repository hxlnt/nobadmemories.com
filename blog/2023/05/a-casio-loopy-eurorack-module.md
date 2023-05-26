---
tags: blog
layout: blog-index.njk
title: Lab → Blog 
date: 2023-05-26
posttitle: "A Casio Loopy Eurorack module"
intro: "<p><strong>A Casio Loopy Eurorack module</strong><br><em>Posted Thursday, May 26, 2023</em></p>"
---

What do you get when your <a href="http://www.femicom.org" target="_blank">video game collecting habit</a> collides with your audio electronics habit? Why, custom Eurorack module firmware based on the sounds of the <a href="http://femicom.org/loopy" target="_blank">Casio Loopy video game console</a>, of course! When reflashed, this module employs a drum kit made of sounds nestled within the Loopy console's BIOS. *And it sounds beautiful!*

<iframe width="560" height="315" src="https://www.youtube.com/embed/0D3couFDPUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Read on to learn how I wrote custom firmware for this and other video-game inspired samplers. (And if you have a BAD IDEA #1800-CALL-YER-MUM module at home, you can <a href="https://github.com/hxlnt/1800" target="_blank">grab these firmwares on GitHub</a> for your own use.)

</div>
    <div class="col-md-4">
        </div>
    </div>
                  </div>
              </div>
    <div class="row">
    <div class="col-md-3">
        <div class="row">
            <div class="col-md-2 subheaderblock" style="background-color:var(--color4-light);">
            </div>
            <div class="col-md-10">
            <h2>Why?</h2>
            </div>
        </div>
    </div>
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-8">

My pandemic hobby was building my first modular synth. It's a diminutive (by Eurorack standards) 92HP/3U rack. I designed the synth to aid my work in preserving the history of girls' electronic toys and video games, so I chose modules that would help me bring musicality and rhythmic variety to all manner of relevant external audio sources: anything from Hello Kitty video games to circuit-bent Barbie laptops.

</div>
                          <div class="col-md-4">
                          </div>
                      </div>
                  </div>
              </div>
    <div class="row">
    <div class="col-md-3">
        <div class="row">
            <div class="col-md-2 subheaderblock" style="background-color:var(--color4-light);">
            </div>
            <div class="col-md-10">
            <h2>The sampler: #1800-CALL-YER-MUM</h2>
            </div>
        </div>
    </div>
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-8">

I've been making a conscious effort to talk about music-making in ways that don't center *gear* or what to buy. However, I'm breaking that rule to speak to a particular module in my setup: an audio sampler. It's a critical part of my synth, as it allows me to reuse and rearrange slivers of sounds I've captured from games and toys. The sampler I use is the <a href="https://www.moffenzeefmodular.com/store/bad-idea-1800-call-yer-mum" target="_blank">BAD IDEA #1800-CALL-YER-MUM</a> by <a href="https://www.moffenzeefmodular.com/" target="_blank">Moffenzeef Modular</a>.

The #1800 has been out of production for some time, so I consider myself lucky to have found one when I started building out my synth. The module is powered by a Teensy microcontroller with firmware containing 12 audio samples. The module's interface is wonderfully clever: the panel offers 12 input jacks for patching in triggers, one for each of the 12 sounds. Instead of having a corresponding set of 12 outputs, the module outputs a single, mixed-down audio signal.

The #1800 ships with firmware that mimics touchtone dialing, which feels right at home with the telephone-style layout of the panel. But the module can be reflashed with one of <a href="https://www.youtube.com/watch?v=IweyWsovUS8" target="_blank">many alternate firmwares</a> Moffenzeef provides on their GitHub repo. These alternate firmwares are based on a variety of classic and modern drum machines, which some might find more useful than touchtone sounds.

On its own, a reflashable 12-piece drum kit in a 10 HP package is a terribly useful module. However, given my interest in using the sounds of girls' games and toys, I was keen to get my own samples loaded on the module. 

</div>
                          <div class="col-md-4">
                          </div>
                      </div>
                  </div>
              </div>
    <div class="row">
    <div class="col-md-3">
        <div class="row">
            <div class="col-md-2 subheaderblock" style="background-color:var(--color4-light);">
            </div>
            <div class="col-md-10">
            <h2>Build a Casio Loopy drum kit</h2>
            </div>
        </div>
    </div>
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-8">

I knew the first firmware I wanted to create was for a drum kit based on the <a href="http://femicom.org/loopy" target="_blank">Casio Loopy</a>. This Japan-only, 32-bit video game console was marketed to girls and featured a built-in color sticker printer that allowed players to make customized stickers to trade with friends. Coincidentally, another pandemic hobby of mine had been exploring Casio Loopy emulation with engineer pal Phil Bennett. In 2021, <a href="http://femicom.org/research/emulating-the-casio-loopy-with-phil-bennett/" target="_blank">he successfully dumped the device's BIOS</a> and retrieved the audio samples used by game cartridges to create music and sound effects. I used his work to separate out the components of the drum kit, which could then be used in a sampler.

</div>
    <div class="col-md-4">
        <figure style="margin-left:24px; margin-right:-24px; padding-bottom:36px; padding-top:-36px;"><img src="/img/reflash.png">
<figcaption>Building custom firmware for the #1800</a></figcaption>
</figure>
                          </div>
                      </div>
                  </div>
              </div>
<div class="row">
    <div class="col-md-3">
        <div class="row">
            <div class="col-md-2 subheaderblock" style="background-color:var(--color4-light);">
            </div>
            <div class="col-md-10">
            <h2>Voiding my warranty</h2>
            </div>
        </div>
    </div>
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-8">

Moffenzeef provides no mechanism for users to load in their own samples to the #1800. Nevertheless, I decided that creating some warranty-voiding custom firmware was in order.

The <a href="https://github.com/moffenzeefmodular/1800#how-to-flash-firmware" target="_blank">instructions for reflashing the #1800</a> describe how to use the Teensy Loader Application to load the provided firmware (compiled `.hex` files). The #1800 repo also includes <a href="https://github.com/moffenzeefmodular/1800/tree/master/Arduino" target="_blank">source files</a> for each of these firmwares. Each folder of source files contains contains one `.ino` file as well as a `.cpp` and `.h` file corresponding to each sample. So, I figured I could make my *own* firmware by:

1. Determining how to convert my 12 audio samples from `.wav` to the matching `.cpp`/`.h` format,
2. Editing an `.ino` file to use these custom samples, and
3. Compiling the `.ino` to a `.hex` file so that the firmware can be easily reflashed by drag-and-drop with the Teensy Loader Application.

Fortunately, the provided `.cpp` source code gave me an idea of how to achieve the first step:

```c
// Audio data converted from WAV file by wav2sketch

#include "AudioSampleClave.h"

// Converted from CLAVE.WAV, using 44100 Hz, u-law encoding
const unsigned int AudioSampleClave[1057] = {
0x01001014,0x04020100,0x0B030804,0xF0E9DAB6,0xB5DFEAF0,0x6D6B6555,0xC053646B,0xFBF6F0E2,
0xFCFFFFFE,0xD3E7F2F8,0x6C675E3F,0x5A656B6D,0xE9E1CF38,0xEEF1F1EF,0x52B9DCE7,0x76736F64,
...
}
```

The comments note that the audio sample was converted with something called *wav2sketch* using 44100 Hz <a href="https://en.wikipedia.org/wiki/%CE%9C-law_algorithm" target="_blank">u-law encoding</a>. I was able to track down the <a href="https://github.com/PaulStoffregen/Audio/tree/master/extras/wav2sketch" target="_blank">wav2sketch tool</a> tucked away in Paul Stoffregen's <a href="https://github.com/PaulStoffregen/Audio" target="_blank">Teensy Audio library</a>. The C or Javascript version can be used for the conversion, though I prefer the Javascript port. (I did have to comment out the line that reads `out += 'PROGMEM\n';` because such syntax is not supported in my older version of the Arduino IDE.) Converting my Casio Loopy `.wav` files with wav2sketch spit out `.cpp` and `.h` files in just the format I was expecting.

From there, the remaining steps were pretty easy: get the proper libraries installed, replicate an `.ino` that points to my custom samples, and have the Arduino IDE output a `.hex` binary. My Loopy drum kit worked on the first try. Hooray!

</div>
                          <div class="col-md-4">
                          </div>
                      </div>
                  </div>
              </div>
    <div class="row">
    <div class="col-md-3">
        <div class="row">
            <div class="col-md-2 subheaderblock" style="background-color:var(--color4-light);">
            </div>
            <div class="col-md-10">
            <h2>Gyroid sounds and other drum kits</h2>
            </div>
        </div>
    </div>
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-8">

Once I had this process nailed down, it was hard for me to stop dreaming up new firmware! One features nothing but vocal samples from girly cartoons like *Moondreamers* and *Jem and the Holograms.* Another is a drum kit made entirely of Gyroid sounds from *Animal Crossing: New Horizons*.

To capture the Gyroid sounds, I placed all the percussive Gyroids in an otherwise quiet room of my in-game house and turned each one on, one at a time, while recording my gameplay footage.

<figure style="margin-left:24px; margin-right:-24px; padding-bottom:36px; padding-top:-36px;"><img src="/img/gyroid.gif">
<figcaption>All the percussive Gyroids were collected and placed in a quiet room before recording.</figcaption>
</figure>

I even pulled sounds from my own NES homebrew catalog to make BADIDEA-PARTYTIME-NES, a #1800 firmware made of 8-bit sounds sampled from the noise and DPCM channels of <em><a href="https://partytimehexcellent.itch.io/track-feel-ii" target="_blank">TRACK+FEEL II</a> (2012),</em> <em><a href="https://partytimehexcellent.itch.io/electronic-sweet-n-fun-fortune-teller" target="_blank">Electronic Sweet-N-Fun Fortune Teller</a> (2013),</em> and <em><a href="https://partytimehexcellent.itch.io/computers-are-easy-love-is-kind" target="_blank">Computers Are Easy, Love Is Kind</a> (2015).</em>

</div>
                          <div class="col-md-4">
                          <figure style="margin-left:24px; margin-right:-24px; padding-bottom:36px; padding-top:-36px;"><img src="https://img.itch.zone/aW1hZ2UvMjEyNTcvODQzMTUuZ2lm/original/r5amOr.gif">
<figcaption>Title screen from <a href="https://partytimehexcellent.itch.io/track-feel-ii" target="_blank"><em>TRACK+FEEL II</em></a></figcaption>
</figure>
                          </div>
                      </div>
                  </div>
              </div>
<div class="row">
    <div class="col-md-3">
        <div class="row">
            <div class="col-md-2 subheaderblock" style="background-color:var(--color4-light);">
            </div>
            <div class="col-md-10">
            <h2>Custom overlays</h2>
            </div>
        </div>
    </div>
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-8">

For fun, I also created a few custom panel overlays for the Loopy, Gyroid, and NES firmwares.

At first, I considered making proper replacement panels for each firmware. However, changing out the panel on the #1800 is a bit of work given the 13 panel-mount jacks. So, I took a page from the Vectrex playbook and created thin overlays that could be easily swapped in and out. Each overlay is held in by the four corner screws, so disassembling the panel can be skipped entirely.

Moffenzeef provides vector files for the #1800's panel, which I was able to modify for use with my Cricut plotter and cutting machine to accurately draw on and cut cardstock. Then, I handpainted the cardstock with India ink. While not at all necessary, the overlays are a fun way to convey which firmware is loaded on the #1800.


</div>
                          <div class="col-md-4">
                          <figure style="margin-left:24px; margin-right:-24px; padding-bottom:36px; padding-top:-36px;"><img src="loopymodule.jpg">
<figcaption>Loopy module with overlay</em></a></figcaption>
</figure>
                          </div>
                      </div>
                  </div>
              </div>
    <div class="col-md-3">
        <div class="row">
            <div class="col-md-2 subheaderblock" style="background-color:var(--color4-light);">
            </div>
            <div class="col-md-10">
            <h2>Do it yourself</h2>
            </div>
        </div>
    </div>
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-8">

The Loopy, Gyroid, and NES firmware binaries for the #1800 are <a href="https://github.com/hxlnt/1800" target="_blank">available on GitHub</a>. However, I realize that they're very reliant on a particular piece of hardware. In the future, I'd like to provide these kits in other, more flexible formats as well. In the meantime, I hope you're inspired to consider how to preserve endangered sounds through reverse engineering and tool making. 