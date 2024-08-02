---
date: "2024-07-18"
started: "2024-07-17"
published: "2024-07-18"
title: Moving from Spacemacs to Doom Emacs
description: Troubles with TypeScript led me to a leaner Emacs config
tags: ["Programming","Emacs"]
---

As I've [mentioned previously](/journal/2024/07/hugo-does-not-spark-joy "Hugo
does not Spark Joy"), I've been experimenting with [Lume](https://lume.land
"Lume") to replace [Hugo](https://gohugo.io "Hugo") as the static site generator
for this site. I quickly ran into an issue because Lume is written in
[TypeScript](https://www.typescriptlang.org "TypeScript"), and I simply could not get my editor to work with TypeScript.

TypeScript is JavaScript with types. Like JavaScript, it can be used for both
web programming and server-side (or just regular) programming. For the latter,
there are a number of current runtimes that are in use, with
[Node.js](https://nodejs.org "Node.js") probably the most popular. I decided to
use Deno because it supports TypeScript directly (without a separate compilation
step to JavaScript) and has a [number of other
features](https://matklad.github.io/2023/02/12/a-love-letter-to-deno.html "<3
Deno") that make for saner software development. My editor of
choice for a while now has been [Spacemacs](https://www.spacemacs.org
"Spacemacs"), an Emacs "distribution" that adds a bunch of packages on top of
standard Emacs. Though Spacemacs provides a layer for Typescript, that
ostensibly supports integration with Deno's [language server
protocol](https://en.wikipedia.org/wiki/Language_Server_Protocol "LSP")
implementation, I could not for the life of me get it to actually work.

Truth be told, even though I've been mostly happy with Spacemacs, I was starting
to get a little tired of it. It is fairly heavyweight, and opinionated (which
isn't always a bad thing). It is also a rolling distribution, meaning that
whenever I update it, I get the latest version of all packages. That in turn
leads to a bunch of instability. There's been more than one occasion when I sat
down to write some code in some language I hadn't touched in my while, and
instead I had to spend a couple of hours repairing my setup for said language.
Much like Hugo, Spacemacs was starting to not spark joy anymore.

I looked at a couple of options, using my current need for TypeScriipt
integration as a litmus test. I wanted to stay within Emacs, but didn't want to
revert to setting everything up from scratch again. The first option I
considered was [Emacs Bedrock](https://sr.ht/~ashton314/emacs-bedrock/ "Emacs
Bedrock") a very minimal starter kit for Emacs. It was easy to set up, and I got
it working with TypeScript pretty easily, but it was a little too barebones for
my taste. Then I tried out [Doom Emacs](https://github.com/doomemacs/doomemacs
"Doom Emacs"). If Spacemacs is too much and Bedrock is too little, Doom Emacs
sits in the Goldilocks zone of just right.

Like Spacemacs, Doom supports Vim-emulation (via
[Evil](https://github.com/emacs-evil/evil "Evil")) out-of-the-box. It has a
system (called modules) for organizing extensions and customizations around
particular functionality (like programming language support). It even adopts
some of Spacemacs keybinding conventions which make for a very fast editing
experience once you get used to it. However it uses a leaner package
management system and seems optimized for fast startups. Unlike Spacemacs,
there's less abstraction over the underlying Emacs functionality, except in a
few areas (like package management and keybindings). Overall, it just feels like
a much leaner experience, while replicating a lot of the same functionality that
I've become used to. Here are some salient features and choices that I made
while moving from Spacemacs to Doom:

## Sane Defaults

To my pleasant surprise, I realized I could leave out most of my existing custom
configuration because Doom comes with sane default for a bunch of things. For
example, it uses
[`ibuffer-projectile`](https://github.com/purcell/ibuffer-projectile "iBuffer
Projectile") to organize buffers by project, and loads your `PATH` correctly so
that any programs launched from Emacs are found correctly. It also comes with my
favored [Zenburn](https://github.com/jnurmine/Zenburn "Zenburn") color theme.
Things like customizations for particular languages I'll port over as and when I
need them.

## Font Support
Doom has suprisingly easy font setup. There are couple fonts you can specify for
different purposes (like symbols, serifs, and the default). Fira Code has been
font of choice for a while now, and all I had to do was set it as my
`doom-font`. Once I enabled the `ligatures` module, I also got Fira Code's
ligatures working, which previously I've always had to set up separately. The
only minor stumbling block was getting symbols working, for which I had to
install Nerd Fonts by doing `M-x nerd-icons-install-font` .

## Programming Language Support

Like most modern editors, Doom supports a wide range of programming languages,
many of which via the language server protocol. For TypeScript, that meant
adding `(javascript +lsp)` to my module list to enable LSP and then `(lsp
+eglot)` to use [Eglot](https://joaotavora.github.io/eglot/ "Eglot") instead of
`lsp-mode`. Then I could use [Deno's LSP
instructions](https://docs.deno.com/runtime/manual/getting_started/setup_your_environment/
"Set Up Deno Environment") so that Eglot automatically launches Deno as the
language server for Typescript files. For languages where the Doom module
doesn't include LSP support, you can easily roll your own by telling Doom to
start using an LSP mode. For example, I wanted to use
[Marksman](https://github.com/artempyanykh/marksman "Marksman") to provide a
language for Markdown and all I had to do was add `(add-hook
'markdown-mode-local-vars-hook #'lsp!)` since Eglot already knows to use
Marksman for Markdown files.

## Hitting Escape Easily

Once small change I made from my Spacemacs setup was how I moved from Evil's
`insert` to `normal` mode. Usually this is done by hitting the `Esc` key, but
I've always found that annoying that key is so far away from where my fingers
usually are. A lot of people map `Esc` to the `Caps Lock`, but personally I've
always mapped `Ctrl` to `Caps Lock` instead. While using Spacemacs, I used the
included [`evil-escape`](https://github.com/syl20bnr/evil-escape "Evil Escape")
functionality that let me  hit `fd` in rapid sequence to go into `normal` mode. Doom
doesn't enable this by default, and though I could enable it, I decided to do
something different. I used an app called [HyperKey](https://hyperkey.app
"HyperKey") that lets me map both `Ctrl` and `Esc` to the `Caps Lock` key. If I
just tap the key, it sends an `Esc`, but if I hold it down, it sends a `Ctrl`.

---

There a couple more tweaks I want to do. For example, I think I like
[powerline](https://github.com/milkypostman/powerline "Emacs Powerline") over
Doom's mode line. I'm also adding custom keybindings as I go, mainly for
functionality I've gotten used to in Spacemacs. By and large, I'm very happy
with the way my Doom configuration has turned out. As for negatives, the biggest
issue is that documentation for the project is quite incomplete. Doom provides a
number of custom macros to augment package management and configuring
keybindings, but it took me quite a bit of searching around and poking and
prodding to figure out how they work in even the most basic case. I'm hoping
this is something that improves over time.

My configuration is [on Github](https://github.com/basus/doom-config "Personal
Doom Emacs Config"), for all the five people in the world who are interested.

Now I can get back to what I wanted to do and write some TypeScript.
