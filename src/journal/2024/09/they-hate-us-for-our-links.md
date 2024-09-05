---
date: 2024-09-05T14:15:00+05:30
title: They Hate Us for Our Links
description: Social Media Platforms are Bad Web Citizens 
tags: ["Websites", "IndieWeb"]
---
 
While working on <span class="codename">Project Bracer Phoenix</span> I have
been digging into how various social media platforms handle rich text posts,
specifically how they handle embedded links (i.e., links where there is some
text to click on, instead of the raw URL). Perhaps unsurprisingly, none of the
current crop of social media platforms (Twitter, Threads, Mastodon, Bluesky)
handle rich text or links in a truly satisfactory manner. Of these, Twitter and
Threads have absolutely no support, instead providing a single link preview.
Bluesky does support embedded links, but they use [their own
format](https://docs.bsky.app/docs/advanced-guides/post-richtext) rather than
plain ol' HTML and Mastodon will accept [a subset of
HTML](https://docs.joinmastodon.org/spec/activitypub/#sanitization) from *other
ActivityPub servers*, but not through its own API and its own clients (even
though the API examples [show HTML
posts](https://docs.joinmastodon.org/methods/statuses/#200-ok)). Links with text
anchors are a fundamental building block of the web, and social media platforms
(even the relatively good ones) are actively hostile to them. These platforms
are bad citizens of the web, and they hate us for our links.

None of this is new. Back in 2019, [Anil Dash](https://www.anildash.com)
observed that the popular "link in bio" idiom for Instagram was a [slow
knife](https://www.anildash.com/2019/12/10/link-in-bio-is-how-they-tried-to-kill-the-web/),
simultaneously constraining our ability to link and lowering our expectations of
web-based platforms. Robb Knight [reminded
me](https://rknight.me/blog/the-web-is-fantastic/) that services like Linktree
only because platforms are link-averse. Commercial social media platforms have a
vested interest in *not* supporting links, especially links to places outside
the platform. As Adam Mosseri, head of Instagram puts it, the value of these
platforms is ["reach and engagement"](
https://www.threads.net/@mosseri/post/C-lQQAFv8-5) (not connection, or
information, or education), and you can't get your users to "engage" if they are
following links to elsewhere. But it is especially annoying that platforms that
want to be different and better are also falling into this same trap (looking at
you, Mastodon). I personally consider Mastodon's lack of proper HTML support to
be one of its original sins, and Bluesky seemingly wants to be different just
for the sake of being different.

All of this has been swirling in my head for a while now, espcially after Jim
Nielsen [reminded me](https://blog.jim-nielsen.com/2024/the-humble-link/) that
[links are powerful](https://blog.jim-nielsen.com/2021/the-power-of-the-link/).
But what prompted me to actually sit down and write this was discovering Eric
Bailey's post ["Websites are like
bridges"](https://ericwbailey.website/published/websites-are-like-bridges/).
This seems particularly apropos because the primary function of a bridge is *to
take you somewhere else*, and a good website more often than not, takes you
somewhere else (via, you guessed it, a *link*). Remember when we used to talk
about "browsing" or "surfing" the web, verbs that imply swiftly and easily
moving from one place to the next?

So, gripes and rage baiting aside, where does one go from here? Well, one of the
benefits of coming back to my own website is that I can freely have as many
links, with whatever text, wherever I like. One of my drivers for building a
working writing and publishing system (for both [short](/stream) and
[medium](/journal) form) was to be able to write with rich styling and lots of
links. <span class="codename">Project Bracer Phoenix</span> is an effort to
smooth over the deficiencies of the various platforms, and will hopefully be one
of a number of tools I build to make writing and disseminating text-centric
material easier (i.e., [textcasting](https://textcasting.org)).

A glimmer of hope in this whole sordid situation is that [everyone's free to
write websites](https://sarajoy.dev/blog/write-websites/), and it's never been
easier. The beauty of being on the web itself (as opposed to a siloed platform)
is that one size doesn't have to fit all. You can be at whatever level of
technical detail you choose, with options ranging from rolling your own HTML and
running your own server, to using a [static site generator](https://lume.land),
all the way to content-management systems like
[WordPress](https://wordpress.com) and Medium, and including quirkier options in
the middle like [omg.lol](https://omg.lol), [Pika](https://pika.page), or
[Blot](https://blot.im). If you do decide to go down one of these routes, come
join us at [32-bit Café](https://discourse.32bit.cafe/), a new community for
fellow web-heads.

Happy hacking and good blogging!
