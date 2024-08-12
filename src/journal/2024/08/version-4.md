---
date: 2024-08-12T17:00:00+5:30
published: 2024-08-12T17:00:00+5:30
title: Version 4
description: The next version of this site, with major changes, inside and out
tags: ["Basus.me v4", "Websites"]
---

Version 4 of [Basus.me](https://v4.basus.me) has been live since the beginning
of the August. I had wanted to post this write-up alongside turning it on, but
once I did make it live, I realized there was still a lot left that I still
wanted to do before I made any kind of announcement. With the sheer amount of
things I wanted to get, plus some family things thrown in, it's been over 10
days, but things are finally at the point where I can spend more time writing
material for the site, rather than working on the site internals and design.
So without further ado, here's a (mostly) complete list of everything that's
gone into this version of the site, differences from the previous version
(almost everything) and some things to work on in the near (and not-so-near)
future.

## Motivation

Technically, I launched [Version 3](https://v3.basus.me) over two years ago.
However, in those two years I added very little to the site. Part of it was
various life things which made me not want to write very much, but a lot of it
was due to the [friction involved](/journal/2024/07/hugo-does-not-spark-joy/) in
adding new material. Version 3 ran on Hugo, and after the initial setup, it felt
like Hugo got in the way more than helped. Also, while being a static site meant
that I could write posts in my beloved Emacs, it also meant there was a lot of
manual activity that I would rather not have done.

At the same time, I was growing increasingly disillusioned with social media and
starting to miss the feeling of having a proper home on the web. My online
presence and identity felt increasingly fragmented and I wanted to have a single
place that I could point to as being canonically _me_.

With all in this mind, and some free time on my hands, I decided to sit down and
create a writing platform that would actually let me do what I had wanted to [do
with Version 3](/journal/2024/03/revising-goals-for-version-3/).

## Goals

The goals for this version are similar to what they were for Version 3. I want a
system that will let me:

  - **Focus on posting regular journal entries**, about 2-3 medium-length
    entries a week.
  - **Import my material from previous blogs and sites,** including both
    professional materials like my research page and CV, but also posts from
    older blogs (including Tumblr and WordPress) so that I can have a single
    "ground truth" going forward.
  - **Experiment with new formats and sections**, such as a short-form
    [stream](/stream) (in lieu of a separate microblog), various [slash
    pages](https://slashpages.net) and maybe even interactive portions later on.
  - **Experiment with new technologies**, to become a functioning part of the
    [fediverse](https://werd.io/2024/seeking-a-first-class-fediverse-platform).
  - **Join a burgeoning social community** certained around blogs and personal
    websites, i.e., the
    [IndieWeb](https://flamedfury.com/posts/rebuilding-the-web/).
    
## Design and Implementation

Like Version 3, this version is also a fully static site. And that's about where
the similarities end. This version is built using [Lume](https://lume.land), a
static site generator written in TypeScript and running on
[Deno](https://deno.land). Lume is similar in spirit to Hugo, but feels much
more flexible. For example, the templating system offers easy escape hatches
into TypeScript meaning that I can do things that aren't built-in to Lume. Lume
also allows users to create pages from ["data
files"](https://lume.land/docs/creating-pages/shared-data/) in YAML and JSON, so
I can keep something like a list of events, or books I've read, and only show
the most recent few. There is also [a plugin system](https://lume.land/plugins/)
with a number of interesting plugins and it's easy to write your own.

The site itself is mostly built from markdown files (for journal entries),
shorter snippets of mosty YAML (for stream posts), a number of templates for
different types of pages, and a little bit of TypeScript to do things like
generating paginated indexes for the different sections. There's also some CSS
to make things look nice and a couple of fonts (more on that later).

Design-wise I decided to sit down and properly figure out [CSS
grids](https://css-tricks.com/snippets/css/complete-guide-grid) and
[flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Instead of
using tables or floats, each page is divided into a 12-column grid, and each
section on a page takes up some subset of that. Things like the navigation bar
are flexboxes so their elements can reflow freely on smaller screens and such.
It did take a bit of trial of error to figure out what the all the options are,
but after a few days, I was pleasantly surprised at how straightforward it was
to make new layouts once you have familiarity. The colors are based on the
[Catppuccin theme](https://github.com/catppuccin/catppuccin) and for the first
time there are both dark and light color themes which change automatically based
on your browser. I also changed up the fonts, going for the well-matched [Source
Serif](https://adobe-fonts.github.io/source-serif/) for body text and [Source
Sans](https://adobe-fonts.github.io/source-sans) for headings. The icons you see
here and there are [Feather icons](https://feathericons.com/).

All the writing happens in Emacs. Journal entries are Markdown files, while for
the stream posts I have some automation: Lume has "archetypes" that are
basically templates for new posts. I have one for each post type that generates
a new file in the right place with the date auto-populated, and a little shell
trickery makes it open in Emacs so that I can write into it. I usually have a
Lume server running in the background so that I can immediately preview what I
wrote. Once I see everything to my liking, I run Lume to build the site into a
separate directory, make sure everything is properly formatted with
[`dprint`](https://dprint.dev) and finally send everything to the server with
`rsync`. All of this run via a
[Makefile](https://github.com/basus/v4.basus.me/blob/master/Makefile) that has
targets and shortcuts set up for each action. And yes, the source is committed
to a git repo that you can look at. It's a little more manual than I would like
(for example, I'd like dates to be automatically updated everywhere), but it's
smooth enough that the friction doesn't prevent me from writing new posts and
entries.

## Sections

Something I want to experiment with is having a number of different sections.
Right there only two: the journal (where you're reading this) and the
[stream](/stream) for shorter form posts. The journal is basically a standard
blog, the stream is more interesting. I wanted to make something like an [old
Tumblelog](/journal/2024/03/requiem-for-a-tumblelog/), a place where I could
post all kinds of shorter things I thought about or found online. It's for the
sort of thing that I would have used Twitter or Facebook for. The stream has a
number of different post types: quotes, videos and images (fairly
self-explanatory), interesting links with some commentary, and "fleets", the
term I'm using for tweet-like short text posts. Each post type can also be
browsed separately and has its own [RSS feed](/feeds/). Yes, I'm very proud of it.

In the future, I'm planning on porting over my old research pages, adding
sections both about me, and about the site. There are a variety of [standalone
pages](https://slashpages.net) I'd be interested in having, but I'm not sure
where to put them. Finally, in the farther future, I'd like to log my reading,
watching and listening, which would make up yet another section.


## Inspiration

There were a whole bunch of personal websites I looked at to get design and
structure ideas, and I'll put up a separate page of inspirations in the near
future. In the meanwhile, the people with most direct influences are:

  - [Simon Collison](https://colly.com) for separating out a stream of shorter
    posts.
  - [Rob Weychert](http://v6.robweychert.com) for the use of
    [colors](http://v6.robweychert.com/blog/2018/02/v6-color/) and
    [the archive](http://v6.robweychert.com/blog/2017/09/v6-the-archive/).
  - [Steve Ledlow](https://tangiblelife.net/) for the term
    ["fleets"](https://tangiblelife.net/my-own-micro).
  - [Flamed Fury](https://flamedfury.com/posts/rebuilding-the-web/) for
    separating out the different post types in the stream.


## Looking forward

I'm quite happy with the way things are right now. Like I said earlier, both the
design and implementation are at a point where I don't feel the need to work on
them full time. In addition to continuing to add more posts and entries on a
regular basis, here's what I'm looking forward to in the future:

  - **Add more pages and sections.** As noted above there's a whole bunch of
    different pages and sections I want to add. Some of these have existed in
    previous versions of the site, but some will be brand new. I'm looking
    forward to figuring out where to put everything how to surface it to
    readers.
  - **Move over material from previous blogs and sites**. I've already started
    porting over my old Tumblr to the stream, and Version 3 entries are in the
    journal, but there's still a lot more where all the came from. Ideally, I
    also want to include things like Mastodon posts (at least the most recent
    ones), but that depends on how much patience I have.
  - **Add logs for reading, watching and listening.** I would love to have a
    record of everything I've read, seen or listened to be available here, maybe
    with reviews. I've seen some examples on other sites I'd like to emulate,
    but I haven't seriously thought about it yet.
  - **Experiment with ActivityPub.** I have RSS feeds for everything on the
    site, but I really want to be able to push posts and entries to the
    fediverse directly. Right now, I do manually posts links to Mastodon, but
    it's [less than ideal](/stream/2024/08/007/). It would be great to have rich
    summariees automatically sent out to the fediverse. Luckily, there seems to
    be [a good ActivityPub framework](https://fedify.dev "Fedify") for
    TypeScript, so I see more TypeScript hacking in my future.
  - **Built more automation and interfaces.** If I'm going to be using more
    TypeScript tools to run the site, a logical extension is to go all the way
    and build a mini-CMS to automate everything that I can. This might also let
    me post when I'm away from my computer. It might end up being too much work,
    but it's something I've often thought about doing, and there seem to be
    growing ecosystem of libraries and frameworks that might let me actually do
    it.
    
---

Whew! That was a lot! To be honest, I'm writing this as much for myself as I am
for anyone else. But if you read all the way, and are interested in or have
questions about anything, please [get in touch](/index.html#get-in-touch)! I'm
feeling pretty good about the future of this site (and the IndieWeb in general),
and I hope I'll have some readers along for the ride.
