---
date: 2024-08-26T23:15:00+5:30
published: 2024-08-26T23:15:00+5:30
title: Fighting with Emacs web-mode
description: I spent a couple of hours fighting with Emacs' web-mode so that you don't have to
tags: ["Emacs"]
---

I was porting an HTML file from [Version 3](/journal/2022/05/version-3/) to the
current version when I ran into an odd issue. Emacs is my text editor of choice
and it comes with a very useful mode for editing web-related files (HTML, CSS,
JavaScript and others) called [`web-mode`](https://web-mode.org). It's normally
a joy to use, but today I spent a couple of hours fighting with it.

The old version of the file I was porting was indented by 4 spaces, but in the
current incarnation of the site, I'm formatting all HTML files with 2-space
indents. `web-mode`'s default indentation is 2 spaces, so I figured I could just
use its indentation function to change the file's indentation to 2 spaces. But
whenever I tried to indent any part of the file, it kept using 4 spaces.

Every time I closed and re-opened the file, I saw a message in my `*Messages*`
buffer saying that a bunch of indentation options had been automatically set to
4 spaces. Even if I explicitly set the set the indentation (using `(setq
web-mode-markup-indent-offset 2)`), `web-mode` would keep using 4 spaces for
_that particular file_. In other HTML files, it kept the 2-space indent as
expected.

I looked everywhere I could think of for a solution: Stack Overflow, the [Doom
Emacs documentation](https://github.com/doomemacs/doomemacs/blob/master/docs/index.org), the `web-mode` [website](https://web-mode.org), even
digging into the `web-mode` [source code](https://github.com/fxbois/web-mode/) on GitHub. I couldn't for the life of me
figure out why `web-mode` was automatically switching to 4 space indentation for
that file.

Just as I was about to give up and life with 4-space indentation, I had a
thought: what if the issue was that the file was already indented with 4 spaces?
Was `web-mode` trying to infer the indentation and ignoring everything else? So
I did a quick replace of all consecutive 4 spaces with 2 spaces, and lo and
behold, `web-mode` decided that 2-space indentation was just fine!

I am moderately annoyed at `web-mode`. There's nothing obvious in the
documentation to suggest that it will try to automatically infer the proper
indentation. A quick skim of the source code didn't suggest anything of the sort
either. To be fair, I'm not entirely certain that this is `web-mode`'s fault,
it's entirely possible something else was forcing the indentation to change. In
any case, now I know what to do if this pops up again in the future, and you do
too!
