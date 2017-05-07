---
layout: 'content'
title: "Blogging with Hugo and Azure"
description: "A tutorial for deploying Hugo sites on Azure Web Apps"
while: "buzzing with energy. Don't drink two large yerba mate teas in a day, kids."
date: 2017-05-06T23:41
tagged: ["web"]
keyimg: "https://hxlntblob.blob.core.windows.net/nbm/demosite.png"
feature: true
---

I'm a huge fan of static-site generators. Static-site generators, or SSGs, are tools that help you rapidly and easily create websites such as blogs and portfolios. [Jekyll](https://jekyllrb.com/), [Hugo](http://gohugo.io), [Hexo](http://hexo.io), and [Docpad](http://docpad.org) are a few of the more popular SSGs out there.

I've tried, ahem, *a lot* of SSGs, and [Hugo](http://gohugo.io) is definitely my favorite. It feels like the right balance of not-too-opinionated/not-too-freewheeling, it gets frequent updates and bug fixes, it has an active community, and the documentation is excellent. Another benefit of Hugo is that it's written in Golang, meaning sites build rapidly.

I'm working on a big blog post and technical talk about SSGs: what they are, how they work, and how they make building personal websites actually, y'know, fun. So, if you're new to SSG Land, be on the lookout for that post. In the meantime, I've written up a tutorial for deploying [Hugo](http://gohugo.io) sites to [Azure Web Apps](http://azure.microsoft.com).

I like pairing SSGs like Hugo with Azure Web Apps because you can write custom deployment scripts for Azure that fire every time you update your site's source content on GitHub. So, updating your blog with a new post is as simple as editing a Markdown file and pushing the changes to GitHub. (In fact, that's what I'm doing right now as I author this blog post. Blogception.)

![Blogception](https://hxlntblob.blob.core.windows.net/nbm/blogging.png)

So, let's see how to deploy a Hugo site to an Azure Web App. This tutorial assumes basic knowledge of GitHub. If you're experienced in the ways of GitHub AND Azure Web Apps, you can complete this tutorial and go from zero to omg, working blog! in under 5 minutes. Seriously. I tested it. :)


## Create a GitHub repository for your Hugo website source

Don't have a Hugo site? Want a starter project to play with? You've got it! Simply fork [https://github.com/hxlnt/hugo-on-azure](https://github.com/hxlnt/hugo-on-azure). It already has the necessary Azure deployment files in it as well as a simple theme I created. So it's ready to go! 

If you already have a Hugo site built, you don't need to fork the sample project. Simply create a new GitHub repository for your Hugo website source. You should not include build output here (the `public` folder)&mdash;just the source. You will want to be sure to include the theme and config files. Then, add the following two files at the root of the repository:

.deployment:
```
[config]
command = azure-deploy.cmd
```

azure-deploy.cmd:
```
@ECHO ON

REM Install Hugo if it's not installed
pushd D:\home\site\deployments\tools 
if not exist Hugo md Hugo
cd Hugo 
if exist bin goto build
md bin
cd bin
:install
curl -o hugo0207.zip -L https://github.com/spf13/hugo/releases/download/v0.20.7/hugo_0.20.7_Windows-64bit.zip
echo Installing Hugo...
SetLocal DisableDelayedExpansion & d:\7zip\7za x hugo0207.zip

REM Generate Hugo static site from source on GitHub
:build
popd
call D:\home\site\deployments\tools\hugo\bin\hugo -d D:\home\site\wwwroot
echo Hugo build finished successfully.
```


## Create an Azure Web App

Next, you'll want to sign up for or log in to your [Azure account](http://azure.microsoft.com). Go to the [Azure Portal](http://portal.azure.com) and click New (+), then Web + Mobile, then Web App.

![Create Web App](https://hxlntblob.blob.core.windows.net/nbm/webapp.png)

Give your web app a unique URL like `your-cool-name`.azurewebsites.net. Create a new resource group and name it something like `your-cool-name`-RG. Then, under App Service Plan, choose Create New. 

![Create Web App](https://hxlntblob.blob.core.windows.net/nbm/webapp2.png)

Choose a name and location near you. For pricing tier, the free plan should be fine for our purposes. (The more expensive ones give you things like custom domain names, more storage space, etc.) 

Once you've selected everything, click Create. (Note: One thing that can throw folks off about the Azure Portal is that some of the buttons to submit or create resources are at the bottom of the page.) It should take around 2 minutes for the Web App to deploy.

Next, find the Web App you just created by going to the All resources tab (the grid of nine green squares at the far left) and clicking on your Web App. It should have a blue globe next to it. On the Overview tab, you'll see the URL for your website; click on it, and you'll be taken to a generic placeholder landing page for your app.


## Connect the Azure Web App to GitHub

Back in Azure under your Web App, click Deployment options, then Choose Source, then GitHub.

![Connect to GitHub repo](https://hxlntblob.blob.core.windows.net/nbm/webapp5.png)

Fill in all the information about the repo and branch you want to connect. After a minute or two, when you click on Deployment options, you should either see the deployment marked as in progress or completed.

![Deploy](https://hxlntblob.blob.core.windows.net/nbm/deploy.png)

Hopefully, it's successful like this one was. But if you get a failure, you can actually take a look at the deployment logs and see what went awry. Just click on the deployment error, then View Log.

![Deployment troubleshooting](https://hxlntblob.blob.core.windows.net/nbm/logs.png)

Now, your website should be live! If you forked and deployed my demo site, it'll look like this.

![Demo](https://hxlntblob.blob.core.windows.net/nbm/demosite.png)

## So... wait, what exactly did I just do?

First, you added your Hugo website source via GitHub. Since Azure Web Apps is connected to your repository, it builds and deploys the site whenever a change is detected. The custom script files in the first section install Hugo if needed, build the site, and place the generated static site in the proper folder on the Azure server. The cool thing is that once you do this, you just keep adding Markdown files to the site and Azure keeps redeploying. You'll be able to edit your site cross-platform, and you won't have to run the build step yourself.

## Expanding on the demo

The demo site is quite barebones to keep it simple and instructive. But there are a *lot* of features you can add: tags, blog post listings with excerpts, sorting and filtering, and more. When you're ready to graduate from this simple example, check out the [Hugo docs](http://gohugo.io) when you're ready to build the real deal.

For my personal SSG sites, I move all of my images and video to blob storage on Azure. There are a few good reasons to do that, but the best one for me is that it's simply cheaper. 

If you want to see a full website that takes advantage of Hugo, check out the site I built for [FEMICOM Museum](http://www.femicom.org). (You'll notice some similarity between it and the demo site because I definitely repurposed all that sweet, sweet CSS.)

I created these deployment scripts for myself and figured I'd share them, as there's not really anything like this out there for Hugo and Azure. I did, however, grab inspiration from Scott Hanselman's [blog post on deploying Middleman (an SSG built on Ruby) on Azure](https://www.hanselman.com/blog/RunningTheRubyMiddlemanStaticSiteGeneratorOnMicrosoftAzure.aspx). 

Problems, questions, or ideas for improvement for this tutorial or demo site? Find me in the comments below or on [on GitHub](https://github.com/hxlnt/hugo-on-azure)!

