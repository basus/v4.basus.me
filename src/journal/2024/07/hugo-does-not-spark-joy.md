---
date: "2024-07-13"
started: "2024-07-12"
published: "2024-07-13"
title: Hugo does not Spark Joy
description: Time to experiment with yet another static site generator
tags: ["Basus.me v3", "Hugo", "Lume"]
---

I haven't been writing much in the last couple of months. A large part of that
is due to life circumstances, but a not-insignificant part of that comes from the
site as it is not sparking joy. When I started with Version 3 a couple of years
ago, the idea was to have a static, locally-generated site completely under my
control, that I could use to experiment with ideas about what I wanted the site
to be. I wanted to collect my writings on other platforms, but also experiment
with what a static site could be. In addition to writing standard blog posts,
could I also have a Twitter-like stream of short posts? Could I use it to
collect interesting snippets like I would with a tumblelog? How about a linkblog
like [Daring Fireball](https://daringfireball.net).

Unfortunately, Hugo, the static site generator at the heart of the site, doesn't
seem conducive to the kind of experimentation I want to do. While it's great for
a purely static site, or even a typical blog, once I started to push beyond that
I started to run into limitations. The biggest issue is that Hugo's templates
are just too limiting. Firstly, the way Hugo
[resolves](https://gohugo.io/templates/lookup-order/) *which* template to use in
any situation is rather complicated, requiring me to put templates with
non-obvious names in non-obvious places. Second, the templating language itself
is an issue. Hugo is written in Go, but the templates themselves are not Go.
Instead, Hugo exposes [a set of functions](https://gohugo.io/functions/) that
are useful in writing templates. There are a lot of them, but if you want some
kind of template transformation that isn't supported, you're out of luck (unless
you want to write a Hugo plug-in, which I haven't looked into). I'm sure that
with time and effort I could have overcome both these issues, but there is
something about using Hugo that just *feels* rigid, it does not spark joy.

So where do I go from here? I still want to experiment with the site in the ways
that I mentioned, but I want to do it with a platform that is more flexible and
amenable to such experimentation. One day I will get around to writing my own
(some kind of Racket [derivative](https://pollenpub.com)). But for now I still
want to work on the site itself, rather than the system building it. Thankfully
for me, there seems to be a system out there that splits the difference:
[Lume](https://lume.land).

Lume is also a static site generator, but running on Deno (a JavaScript engine).
I think I first found out about it from [Xe
Iaso](https://xeiaso.net/blog/xesite-v4/), but it's been around for a couple of
years. It seems to have a bunch of advantages over Hugo.
[Layouts](https://lume.land/docs/creating-pages/layouts/) are much simpler to
resolve. Pages can be written in a [variety of
formats](https://lume.land/docs/getting-started/page-formats/), including
JavaScript, meaning that if Lume doesn't support the kind of functionality I
want, I can just write it in a page. Lume also lets you [keep raw
data](https://lume.land/docs/creating-pages/shared-data/) in a variety of
formats and then render them into a page. This seems like something that would
come in handy if I want to add things like movie ratings that don't need a whole
page to themselves. I think that their handling of
[tags](https://lume.land/docs/creating-pages/tags/) is simpler and more
intuitive than Hugo's, but it might be a bit too simple. We'll find out.
Finally, it seems straightforward to write
[plugins](https://lume.land/docs/advanced/plugins/) which might be something I
end up doing.

I've started recreating the site in Lume, using their default
[Vento](https://vento.js.org) templates. I'm taking this opportunity to also
cleanup the templates and their associated CSS. In particular, I want to make
sure that I'm properly using [CSS
Grids](https://www.w3schools.com/css/css_grid.asp) rather the pile of hacks I
used previously to get things to look the way I wanted to. I'm hoping that most
of the posts themselves will go through without issue, since they were all
Markdown to begin with. I'm not sure if I want to keep the Lume version as
version 3 or as version 4. I'm tempted to make a fresh start as it's a big
change, but also feeling like I didn't actually use version 3 for anything.
We'll see how I feel once the porting is done.

