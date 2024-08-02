---
started: "2022-05-19T19:00:00"
modified: "2022-05-24T17:00:00"
published: "2022-05-24T17:00:00"
date: "2022-05-24T17:00:00"
tags: ["Basus.me v3"]
title: Version 3
---

I decided to finally get my act together and update my website. Of course, me
being me, I couldn't just update the events page and call it a day. No, I had to
do a complete rebuild. It's not a _redesign_, because it's not just visible
style tweaks, but a complete overhaul of how the site is built and deployed, as
well as reconsidering and greatly expanding the purpose(s) it serves.

I miss writing online, I miss the feeling of processing my thoughts as I get
them out of my head. And while I have been doing a pretty good job of writing in
my pen-and-paper journal over the last few years, it's not the same as writing
for a (potential) audience. Additionally, there is a difference between writing
slowly by hand and quickly smashing out some words on a keyboard. I was also a
little concerned that instead of writing longer, considered posts and essays, I
was just occasionally writing brief tweets. Twitter still has some value (as
long as I avoid falling into the doomscrolling trap), it's certainly not the
only place I want my writing to be appearing.

It's taken me a while to actually get back to it. In the past, I've had a
[WordPress](https://wordpress.com) blog that I've used on and off for over a
decade (yes, it feels weird to be counting time in decades now). But over time,
WordPress changed, and the impedance mismatch between the way WordPress worked
and the way I wanted to write continued to grow. WordPress is (perhaps
understandably) a _content management system_, a way for groups to manage
websites with lots of content and integrations. It's no longer really a tool for
one person who just wants a quiet environment to write and think in. I might
still recommend it to beginners who want to set up a good looking website or
blog for little effort, but it's not for me anymore.

I briefly tried out [Micro.blog](https://micro.blog) and
[Write.as](https://write.as). They both have their positive points, but while
WordPress was too much, both of them were ultimately too little. I needed a
publishing platform that worked the way I thought, and that I could improve and
alter when I came up against its limitations. In 2020, partially spurred by
pandemic ennui, I started working on [my own site
builder](https://colophon.basus.me). While I hope that one day I will bring it
to fruition, right now I want to get back to actually writing, rather than
working on my writing tools. At the same time, if I was going to move away from
hosted services, I wanted to move ahead in a way that established a firm
foundation for whatever direction I wanted to go in the future.

As I was thinking about all of this, I had the good fortune of coming across a
number of websites and blogs by people who seemed like kindred souls. Their
experiences, outlooks, and decisions informed by own, and helped me decide on a
path forward. First off, there was Simon Collison reminiscing about how [our
websites used to be our
playgrounds](https://colly.com/articles/this-used-to-be-our-playground), and the
benefits of [maintaining a lightweight
"stream"](https://colly.com/articles/stream-on) in adddition to a more weighty
blog. He also pointed to [Rob Weychert](https://v6.robweychert.com), whose
thoughts on [using his site as an
archive](https://v6.robweychert.com/blog/2017/09/v6-the-archive/) of his online
activities definitely mirrored what I have long wanted from my own site (in
addition to providing some concrete technical details and [ideas about
color](https://v6.robweychert.com/blog/2018/02/v6-color/)). And last, but
certainly not least, [James Larisch](https://jameslarisch.com) and Andre Garzia
encouraged me to [embrace
chaos](https://andregarzia.com/2022/05/How-this-blog-works-or-embracing-chaos.html),
and get started with writing and publishing, even if there were some rough
edges.

So here I am, at version 3 of my website, embracing the chaos and
incompleteness, working with something that's part playground and part archive.
All of which leads to the question:

## Why Version 3?

I'm counting version 1 as the hand-rolled HTML version of the site that started
around 2014. Version 2 is what's lived here for the past few years, mostly
static HTML pages, generated using the [Pollen static site
generator](https://docs.racket-lang.org/pollen/).

Writing HTML by hand is fun and all, but right now, I'd rather focus on actually
writing. And while Pollen is a very powerful way of writing web-based documents,
it is currently more suited for what are essentially books-as-websites:
artifacts like [Practical Typography](https://practicaltypography.com) and
[Beautiful Racket](https://beautifulracket.com). One day I would love to help it
reach it's potential as a tool for building regularly changing personal sites
(blogs, wiki, personal knowledge gardens and the like), but today is not that
day.

I wanted something that was essentially static, generating mostly HTML pages
with some CSS, which could be served by something like Nginx and easily backed
up. I wanted to be able to edit posts locally, on my machine, even when offline.
Ideally, I would be able to use my customized [Spacemacs
setup](https://www.spacemacs.org) to edit quickly and efficiently. But I also
wanted to be able easily preview pages and posts before I made them public. I
wanted to back up said posts with a version control tool like Git. I initially
tried to use [Blot.im](https://blot.im), which has a dead simple deployment
model (based on Dropbox, or Git, or Google Drive). However, Blot is really
optimized for blogs, and I wanted something where I could have separate sections
that were not blog-like (see the [Notes section](/notes/), including my
[evaluation of
Blot](/notes/writing-and-publishing-environments/evaluating-blot/)).

Ultimately, I settled on using [Hugo](https://gohugo.io), a fast static site
generator that does about 90% of what I want it to do. The site is mostly
written in Markdown, but with custom templates and CSS to get things looking the
way I want. I can have a number of different sections that work differently.
Currently I have a [journal](/journal) that is essentially a blog (I just don't
like the term "blog") and a [notes](/notes) section for standalone pages that
works similar to a wiki, or personal digital garden would. I can write new
entries in either section in Markdown, and Hugo will translate them to HTMl and
update the indexes automatically. Hugo also has a nice live preview feature
which lets me see the generated HTML every time I save changes. Everything stays
local to my machine until I decide to push things to my server (for which I'm
using good old `rsync`). Hugo's default folder structure also lets me mostly
separate out the content, styling and generated site, and back them up as
separate Git repos.

Like I said, Hugo supports about 90% of what I want it to do. The missing 10%
includes things may grate on me over time, but that I can live with for now.
Markdown has its limitations (which will make for its own post). The templating
system is quite powerful, but takes some getting used to, and there are some
limitations that feel arbitrary and awkward. While I can keep a (mostly)
separate notebook and journal, things like tags and categories are shared across
the site. This means that journal entries will currently show up in the notes
index as it just shows everything by tag. In Hugo's defense, I haven't actually
sat down to try to fix this issue. I've been keeping more [detailed design
notes](/notes/basus.me-v3/), if you're interested.

I suspect I will continue tinkering with Hugo and the site as I continue to use
it, but for now it seems to serve its purpose of mostly getting out of my way
so that I can get back into a rhythm of writing.

## What's next?

I've long wanted my website to be a way of reducing my dependence on third-party
services, all of which will almost certainly become unavailable at some point.
While I want to continue still using them (mostly for network effects), I want
this site to at least be a mirror and archive for what I post elsewhere.

To that end, I've taken a couple of pages out of [Rob Weychert's
book](https://v6.robweychert.com/blog/2017/09/v6-the-archive/). The site is
somewhat future-proofed by redirecting visitors to a particular version of the
site, i.e., going to `https://basus.me/some/page/` takes you to
`https://v3.basus.me/some/page`. Since the generated HTML is saved and archived
independently of the source, there's a greater chance that I can keep versions
around, links intact, or restore them easily if they get lost.

I want to gradually move things I've posted to other services here. Things I've
put on Micro.blog and Write.as will probably come first. They are the most
recent things I've written and there are few of them. The ByteBaker will move
over gradually, but there are over 500 posts, so it's going to take a while. I
have a decrepit old Tumblr, most of which is now dead links, but some of which
is worth saving. Eventually, I would also like to archive and mirror some parts
of my Twitter and Instagram feeds. But I'm debating as to whether those kinds of
very short posts should live in the journal, or a in a separate stream section.
There are also a few larger essays here and there that should be brushed off and
put in their own section.

At some point, I will sit down and figure out the RSS situation. I'm still a big
believer in being able to subscribe directly to a site, rather than getting
updates via Twitter or a mailing list. There will probably be a couple of
different feeds, one for each section, and a unified feed if you really want
everything. It may be nice to share private drafts in some way, I haven't
thought about that yet. I'm not super interested in analytics at the moment, but
it might be useful to have some idea of how many people are visiting my site,
and why, in a privacy-preserving way. I suspect that design tweaks will continue
indefinitely.

## Ok, now what?

For the near future, I would like to to a routine of posting 2-3 times a week.
Over the past few weeks, as I've been working on the site, I've done a pretty
good job of keeping and updating notes, and I hope to continue that. I suspect
that some notes will eventually feed into blog posts (for example, I have more
detailed notes on [the v3 rebuild](/notes/basus.me-v3/)). Hopefully, every now
and then I will have the time and space to write a longer essay. Ultimately, I
would like this site to support not just my writing online, but a lifestyle of
thinking and working in semi-public (in a "public intellectual" way and not a
dystopian surveillance way). The site is one part of that, the easiest one to
get up and running, but no spoilers!
