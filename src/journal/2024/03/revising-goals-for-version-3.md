---
date: 2024-03-04
published: 2024-03-04
title: Revising Goals for Version 3
description: Scaling back and clarifying what I want the site to be
tags: ["Basus.me v3"]
---

Almost two years ago now I launched what I called [version
3](/journal/2022/05/version-3/) of this website. I moved from a home-grown,
custom, static site generator to Hugo. I moved my existing home page and [about
page](/about/), added the beginnings of a blog, and some notes. After letting
the site lie mostly unchanged since, I made some [major aesthetic
changes](/journal/2024/02/size-and-color-changes/), and have been trying to
write more regularly over the last few weeks. In the progress, I have been
experimenting with Hugo, and refining what I wanted from this version of the
site.

When I made the move to Hugo, I had a number of vaguely defined goals. More or
less, I wanted the site to do the following:

  - Serve as both my personal and professional website. This meant having a
    general about page, but also holding my professional information like my
    publications and research projects.
  - Collect my public writing that's been on various websites and blogs over the
    last ~15 years.
  - Host a blog or journal, that I could update frequently, and write using
    Emacs, instead of some web interface. I wanted this blog to be flexible
    enough that I was encouraged to post not just medium-length text posts, but
    also things like individual links and quotations (like an old-school Tumblr,
    or [tumblelog](https://www.urbandictionary.com/define.php?term=tumblelog)).
  - Host a personal wiki, or [digital
    garden](https://maggieappleton.com/garden-history), essentially a set of
    richly linked and tagged notes, which could contain my work-in-progress
    thinking on various topics.


The site at the moment doesn't achieve any of these goals. I haven't ported my
professional information from version 2 of the site, and I haven't collected any
of my older writing here either. The journal has been resurrected, and I am
building a more regular posting rhythm, but I'm not sure if I will use it as a
tumblelog for casual posting. I have been working on the notes section and added
some pages on various things, but it's nowhere near a digital garden.

Part of this is entirely my fault: there's nothing really stopping me from
making it a better professional website, or moving over older essays and pages
and such. I just haven't sat down and actually made it happen. I'm hoping to
rectify this oversight in the next few weeks. But for the other parts, I blame
Hugo.

I initially moved to Hugo because I wanted to separate out having a stable
website from tinkering on my custom static site generators and note-taking
software. And for generating static websites, Hugo is pretty decent. It's fine
for writing basic HTML pages, or Markdown that gets converted to HTML with a
template, or even slightly more complicated things like blogs. However, it's
been easy for me to start running into Hugo's limitations and fighting with its
defaults and assumptions when they don't align with what I want. For my use
cases, there are a couple of main issues I've run into:

  - Writing medium to long textual posts as static Markdown files is growing on
    me. I still don't think I want to be writing mainly Markdown long term, but
    it's ok for now. However, the tumblelog use case is more annoying. For
    example, instead of being able to just paste a URI and maybe some commentary
    into a text box and calling it a day, I have to create a new file, choose a
    location and filename, and mainly enter metadata like dates, titles and
    tags. Hugo's lack of an editing interface is proving to be a double-edged
    sword. It lets me write text posts in Emacs, which I love, but everything
    else is more trouble.
  - I find myself running into the limitations of Hugo's templating system and
    built-in organization methods pretty easily. As far as I can tell, it's not
    possible to just write some dynamic templating code into a random HTML or
    Markdown file. The programmable templates are strictly separated from
    content pages. For a standard blog that's not a problem, but doing
    non-standard things becomes much harder.
  - It's awkward to have a site with multiple disjoint sections, especially
    since things like tags or categories are shared across all pages. That means
    I have to jump through some extra hoops if I want the journal to be
    completely separate from the notes.
  - Finally, Hugo is not suitable for building digital gardens. I will write
    more about this later, but I now believe that suitable software for digital
    gardens need to provide at least two things: first-class support for
    backlinks, and some good automation facilities, especially for handling note
    metadata. Hugo lacks both of these things, and though it would be possible
    to build them myself, either in Hugo or templates, or as additional software
    on top of Hugo, that's not a problem I want to take on right now. Like I
    said above, the entire point of moving to Hugo was so that I didn't have to
    tinker much with the site generator itself.


With all that in mind, I want to revise my goals for version 3:

  - Continue importing and building out purely static sections of the site. This
    includes professional pages, and importing longform content like essays from
    previous iterations of the site.
  - Focus on posting regular journal entries. 2-3 medium-length entries a week
    would be a good cadence.
  - Continue experimenting within the limitations of a journal/blog. I would
    like to see if there is a not-too-difficult way to make a low friction
    tumblelog happen. I also want to think carefully about organizational
    questions like tags vs categories, and how to separate out posts about
    different projects and series.

I'm still very interested in digital gardens, but I think it's best to have
those experiments be a completely separate project, rather than trying to
contort a Hugo site. Those experiments might lead to a useful version 4 of the
site, but going forward, version 3 will focus on the static pages and the
journal.
