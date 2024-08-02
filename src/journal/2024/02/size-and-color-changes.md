---
published: "2024-02-20"
date: "2024-02-20"
title: Size and Color Changes
description: Making the site more uniform and less bland
tags: ["Basus.me v3"]
---

In the spirit of devoting more energy to writing regularly, I wanted to tweak
the design of the site to be somewhat less offensive than what it was. The
previous design was cobbled together from various sources and previous versions
of the site. Things like font sizes, padding and margins were based only on what
looked good and was pretty inconsistent for different parts of the site. The
colors were okay, but fairly random. I decided to start with two things:

  - Regularize the relative sizing of different elements (particularly font
    sizes and spacing).
  - Develop a theme system for colors that would let me easily create and swap
    out color themes in the future.


## Regularizing Font Sizes

The existing CSS for the site depended on the `em` unit of measurement. I
started off doing some reading on what exactly `em` meant and how it worked. In
the process, I ended up learning about `rem` or "root em": a unit of measurement
that is based on the font size of the root element. I followed a [useful
article](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/
"useful article") on the difference between `rem` and `em`. Basically, while
`em` is a unit of measurement that is relative to the font size of the *current*
element, `rem` is relative to the font size of the root, or `html`, element.

I could fix a particular root font size, and then have all other font sizes be
multiples of that root font size. Based on the
[article](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/),
I set the root font size to be 62.5%, an odd number, but one that apparently
made the root font size be 10 pixels, so one `rem` unit would be one-tenth of
the corresponding pixel size. I'm not sure if this is actually useful for my
limited use case, but it seemed like a good way to maintain some order. No, I
haven't bothered to figure out why 62.5% is the correct magic number; my
interest in CSS has its limits.

It turns out that a font size of 10 pixels is quite small, especially on modern,
high-resolution displays. To make text more readable, I set the font size for
paragraphs to be `1.5rem`, or 15 pixels. Based on that I set the font size for
the first level header (`h1`) to `2.5rem`, the second level header (`h2`) to
`2rem` and the third level header (`h3`) to `1.75rem`. I haven't found a need
for more levels of headers so far, and the sizes are based on more on looks than
anything else, though I did try to stick to multiples of `0.25rem`.

With the basic font sizes set, I set the sizes for things like margins and
padding between elements. For these sizes, I used the `em` unit rather than
`rem`. That meant that when defining the style for a particular element, say the
post metadata in the sidebar, I could think in terms of the font size for that
particular element, rather than in terms of the root font size. Again, I'm not
sure if this is particularly useful for a small website, but it seemed like a
good way to keep things localized, and make sure that closely related measurements
stayed coherent.

Fixing the sizing led me to make some more design tweaks. My list of upcoming
and recent events on the [landing page](/ "landing page") looked better with the
time and event side-by-side, rather than the former above the latter like it had
been. I had to move the titles of individual journal posts out of the sidebar
because longer words got cut off. I also made some aesthetic changes, like
moving the post metadata to the sidebar in the [journal page](/journal "journal
page"), which made better use of available space and allowed nicer alignment.
I'm not sure how long I'll keep the design in this particular form (especially
since I'm tiring of the Merriweather font that I'm currently using), but I'm
mostly happy with it for now.


## Developing A Color Theme System

I don't think I've ever been really happy with the colors on this site. One of
these days I will have to sit down and learn some proper color theory, but until
then, I decided to use a theme system [developed by Rob
Weychert](https://v6.robweychert.com/blog/2018/02/v6-color/) for his website. I
encourage you to go read the whole article, it's quite accessible as long as you
have a passing knowledge of CSS.

Weychert's system is based on having a set of 6 colors for different elements of
the site:

  - A color for text, usually the darkest color in the palette.
  - A very light color, usually white, for framing images and the like.
  - A background color, the second lightest in the palette.
  - A slightly darker background color, for borders and other UI elements.
  - A bright accent color, contrasting with both text and background colors,
    mainly used for metadata.
  - A brightest accent color, used mainly for links and other highlights.

I thought this was a very good way to use a small number of colors for fixed
elements, and achieve a harmonious visual style. I've added one more color, a
darker text color used for headings. I also shamelessly copied the current set
of color themes that he's using for his site. I don't like all of them, so I'll
probably only use some of them, and without the random selection that his site
uses. I'm currently using one I'm calling "orangish" thats based on a muted dark
orange color for the highlight.

I'll probably add some more themes of my own in the future, now that I have some
familiarity with how the system works. I've added a monochrome theme based on
[Matthew Butterick's site](https://matthewbutterick.com), but haven't deployed
it for the time being.


## Next Steps

I'm quite happy with the way the site looks at the moments. I feel like the font
sizes make sense and look good, and I like having a rational system for color
themes. I will probably change the actual color themes in use, but I don't feel
the need to do so right now.

With the design in a more-or-less stable state, I would like to concentrate on
updating the actual content of the site in the near future. My [About
page](/about) is hopelessly out of date, and I want to bring in things like my
research and publication pages from previous versions of the site. Eventually I
want to collect all the writing I have on other platforms and add them here so
that I have everything in one stable place. I'm sure I'll be tempted to make
more design changes as I go about all that, as well as adding to the underlying
templates that build this site. But that's a topic for another post.
