---
layout: "projectdetails"
name: "Alter Dark"
quote: 
  text: "If the NES had a screensaver, it might look like this."
  source: "Kotaku"
  link: "https://kotaku.com/if-your-old-nes-had-a-screensaver-it-might-look-like-th-1820524436"
date: 2017-11-15T14:46-06:00
github: 
  name: "alterdark"
  link: "http://www.github.com/alterdark/"
img: "https://hxlntblob.blob.core.windows.net/nbm/sunk.jpg"
isProject: true
---

Alter Dark is a web application that allows you to patch and download NES ROMs in the browser via a REST API. I've demonstrated one use of this API: [making customized NES greeting cards or "screensavers" in the browser](http://www.nobadmemories.com/alterdark). The API could eventually be extended to allow users to add their own graphics and sound. Or, an interface could be created for patching NES ROMs in other ways. 

![Screenshot of Alter Dark website](https://hxlntblob.blob.core.windows.net/nbm/adss.png)

## How does Alter Dark work?

The Alter Dark API is a Node.js/Express REST API hosted in Azure API Apps. The API accepts parameters that correspond to specific data values and memory addresses in a pre-compiled NES ROM. When these parameters are sent to the endpoint, the pre-compiled ROM overwrites the data at the specified memory address with the new data values. This works much like an NES translation patch, except that it's done via a REST API. Finally, the API returns the new ROM, which can then be downloaded in the browser by the user. See the video below for a quick tour and explanation of the project.

<p><video width="100%" height="auto" controls loop>
  <source src="https://hxlntblob.blob.core.windows.net/nbm/alterdark2.mp4" type="video/mp4">
Your browser does not support the video tag.
</video></p>

You can read about the project [on Kotaku](https://kotaku.com/if-your-old-nes-had-a-screensaver-it-might-look-like-th-1820524436) or, for more detail, you can also view my 30-minute talk from NodeConf EU [on YouTube](https://www.youtube.com/watch?v=f61di5B8cWQ).

Have more questions or want to feature Alter Dark in your blog, magazine, conference, or fancy tea party? Get in touch with me via [twitter](http://www.twitter.com/partytimeHXLNT).