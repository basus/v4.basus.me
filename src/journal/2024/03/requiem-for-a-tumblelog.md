---
date: "2024-03-15T09:00:00"
started: 2024-03-14
published: "2024-03-15T09:00:00"
title: Requiem for a Tumblelog
description: I don't want a microblog, I want a good ole' tumblelog
tags: ["Basus.me v3","Hugo", "Micro.blog", "Fediverse"]
---

In the process of my continued tinkering with this site, I have been thinking a
lot more about personal websites, blogs, social media, and writing on the web in
general. After getting the [journal](/journal) into working shape, I wanted to
figure out a replacement for short, roughly tweet-sized posts. I can usually
come up with something blog-post-sized to write about 2-3 times a week, but a
couple times a day I want to share something smaller: a random thought, a link to
something I’ve found interesting, a fun trailer for a movie or show, the
occasional picture or image. In the past, Twitter has been my main outlet for
this sort of thing, and I’ve been a fairly active user, on and off, for a long
time now.

But Twitter is increasingly not a platform I want to stay on. In addition to all
the issues surrounding Elonification, a decent chunk of the people I followed
have moved to other platforms. That would be all good and well, except it seems
like there is not going to be any one successor for Twitter. The people I
followed seem to have moved to Mastodon or Threads, a couple to Bluesky, many
are still on Twitter, some have gone quiet altogether, especially if they were
not very active in the first place. The continuing fracturing of social media
drives home the necessity of publishing to my own site first, and then possibly
[syndicating it to other
platforms](https://www.theverge.com/2023/10/23/23928550/posse-posting-activitypub-standard-twitter-tumblr-mastodon).

With all that in mind, I put together a new section of the site for all kinds of
short-form stuff: the [stream](/stream). I've shamelessly stolen the name from
[Simon Collison](https://colly.com/stream). Unlike the rest of the site, the
stream isn’t made of statically generated files. Since I was mostly going to
post short, tweet-length bits of text, I didn’t want to go through the rigmarole
of creating a new file, deciding where to put it and what to name it, and
putting in metadata before I actually wrote anything. I wanted to be able to
open up a short text box like you’d find on a social media site, type in some
text, press a button and just have it appear on the website. I would have loved
to be able to run something locally, but there doesn’t seem to be a way to do
that without running a fully-featured CMS, or a Mastodon instance, both of which
seemed far too heavy for what I wanted.

So for this first iteration of the stream, I decided to offload everything to
[Micro.blog](https://micro.blog). As the name suggests, micro.blog is a service
for having your own micro blog: a mix between Twitter and a regular blog like on
WordPress. It gives me what I wanted: a text box to type into and a button to
press, and it generates a webpage for it. Behind the scenes, Micro.blog is
running on top of Hugo, which for now also generates the rest of the site. That
meant that with some template hackery and Nginx server configuration (which took
way longer than it should have), I was able to make the stream look and feel
like a seamless part of the rest of the site. Micro.blog will also cross-post to
Mastodon and Bluesky, which means that I can be on those platforms, without
having to actually _be_ on them. Win, win.

Going through this whole process has made a couple of things clear to me. In no
particular order:

**Micro.blog is a stop-gap.** It was a good way to get what I wanted up and
running, but I can't stick with it longterm. I want more control of the URL
structure, and Micro.blog does not allow that. The posting interface is also a
bit too barebones for me. I want to be able to post links, quotes, the
occasional picture. With just a plain textbox, it’s hard for me to see what a
post will look before I publish it. Finally, one of the reasons for going down
this particular rabbit hole is that I want to eventually migrate over posts from
an ancient and long-defunct Tumblr blog that I had. Micro.blog gives me no
control over the date or timestamp, so I can’t add posts with dates in the past.

**Federation will fail.** For the time being, I want to keep a toehold on all
the various new social media platforms. I use Micro.blog to cross-post to
Bluesky and Mastodon, and then copy and paste into Twitter, Threads and
Facebook. Doing the manual posting is annoying, but even the cross-posting can
be problematic. Even though Bluesky federates with Mastodon, even simple things
like embedded links are handled differently in them. This deserves an entire
post all its own, but if federated services can’t even seamlessly handle
something as fundamental as links properly, I don’t have much confidence for
longterm success.

**I really just want a Tumblelog.** In the process of all this, I realized that
the perfect system for my stream would be a locally-hosted Tumblr. Old school
Tumblr used to be a great platform for short posting. You got a decent WYSIWYG
editor where you could post a bunch of different types of things: text, links,
quotes, audio, video, images. You could easily upload images, and also “reblog”
posts from other people, creating an automatic chain-of-provenance for
interesting things. That’s what I want to have again. People are starting to
realize the limitations of the current platforms, and want a better,
[first-class Fediverse
platform](https://werd.io/2024/seeking-a-first-class-fediverse-platform). I
don’t care much for the fediverse part, but everything else seems to describe
Tumblr in its heyday.

Unfortunately, such a thing doesn’t seem to exist. But I really want it to
exist. So I might have to just build one for myself.
