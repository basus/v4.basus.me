---
date: 2024-08-30T20:15:00+5:30
published: 2024-08-30T23:15:00+5:30
title: Modernizing my Command-line Environment
description: Dragging my command-line tools into the 21st century
tags: ["Programming"]
---

When I'm actually working at my computer, I spend a lot of time in either
[Emacs](/journal/tags/emacs) writing code, or in a terminal running things. I'm
not a command-line zealot (you can pry Things, Fantastical and Gmail from my
cold, RSI-stricken hands), but since I do spend a lot of time at a command line,
I'd like it to be a nice place to work from. For a long time now, my
command-line environment has been about the same: [iTerm 2](http://iterm2.com/)
as my terminal emulator, [Tmux](https://tmux.sh) as my terminal multiplexer
[Zsh](https://www.zsh.org) as my shell, and the GNU variants of the standard
UNIX utilities to do all the things.

In the course of working on this site over the last month, I've thought about
seeing if newer alternatives to the tools I've been using were worth switching
to. I've been thinking about this on and off since I saw Julia Evans' [list of
new(ish) command line
tools](https://jvns.ca/blog/2022/04/12/a-list-of-new-ish--command-line-tools/).
Reading Alex Plescan's [article on
Wezterm](https://alexplescan.com/posts/2024/08/10/wezterm/) gave me the push to
finally go ahead and do it. This is a quick summary of the things I switched to.

## Terminal emulator: Wezterm

[Wezterm](https://wezfurlong.org/wezterm/) is a modern terminal emulator,
written in Rust and with a number of interesting features like Lua
configuration, built-in multiplexing and a flexible keybinding system. Rust is
definitely (one of) the systems programming language of the future. Built-in
multiplexing means I don't have to use `tmux` anymore. Since it uses Lua for
configuration, I can keep my customizations in version control like the rest of
my configs. Lua configuration also enables very flexible keybindings, which
means my terminal and Emacs now have the same keybindings for similar actions
(mostly moving around and splitting windows). To be honest, I didn't actually
have any problems with iTerm 2 and `tmux`, but it's nice to use one less
program, and I feel a little more future-proofed. Plus, if I ever go back to
using a non-Mac computer, I can still use Wezterm.

## Directory movement: Zoxide

This is probably the new tool that I use the most. [
Zoxide](https://github.com/ajeetdsouza/zoxide) is essentially a smarter `cd`
command. As I use the `z` command to move around directories, it records what I
use and intelligently chooses which directory to move in to. For example, the
source for this site lives in `~/src/basus-v4`. After doing `z ~/src/basus-v4`
once to move there, in the future I can just do `z v4` and it will take me to
right place. The [selection
algorithm](https://github.com/ajeetdsouza/zoxide/wiki/Algorithm) is
deterministic and well-documented, so you won't be surprised by its behavior.
There is also an interactive version (using the next tool on the list) that's
helpful when there are a number of different directories with the same name. For
example, I have a lot of directories named `src` in various places in various
places, so `zi src` pops up an interactive menu to choose the right one. And
that brings me to:

## Better finding: fzf and ripgrep

Zoxide's interactive mode uses [`fzf`](https://junegunn.github.io/fzf/) a
general purpose fuzzy-finder. It gives you an interactive filter for any kind of
list (a list of directories in Zoxide's case) and let's you choose which option
you want. I use it a lot for fuzzy searching over my command history. `fzf`
[integrates with the command
line](https://github.com/junegunn/fzf#key-bindings-for-command-line) in general
and [with your
shell](https://github.com/junegunn/fzf#fuzzy-completion-for-bash-and-zsh).
Personally, I find it particularly powerful in
[conjuction](https://github.com/junegunn/fzf/blob/master/ADVANCED.md#ripgrep-integration)
with [`ripgrep`](https://github.com/BurntSushi/ripgrep): a search tool similar
to the UNIX standard `grep`. Together I can quickly search over the contents of
any directory, even if I'm not sure exactly what I'm looking for. This is
particularly useful when working on the site because I can easily search my
backlog of entries and posts to find something I wrote about, even if I'm not
sure when or where. Truth be told, I never really learned the intricacies of
UNIX `find` or `grep` and now I don't have to.

## Better file printing: bat

I don't use this as much as the others, because I usually just open files in
Emacs. But sometimes I'm wandering around the filesystem and I just want a quick
peek at a file and that's where [`bat`](https://github.com/sharkdp/bat) comes
in. It prints files on the screen, like UNIX `cat`, but with a number of
improvements. Aesthetically, it supports syntax highlighting for a lot of file
types, and customizable color themes. It also has git integration to show file
modifications, and automatic paging for large files (with the correct arguments
to preserve colors etc.). It also [integrates
with](https://github.com/sharkdp/bat#integration-with-other-tools) a bunch of
other tools including `fzf`. It may not be a big leap in functionality like the
others, but it does make the command-line experience much more pleasing to the
eye.

## Better change tracking: git delta

`bat` will [integrate with](https://github.com/sharkdp/bat#git-diff) `git` to
provide syntax highlighting for diffs, but `delta` adds a bunch more
functionality and customizations. This includes syntax highlighting (using the
same color themes as `bat`), word-level diffs (like in GitHub), line-numbering
and also side-by-side views of diffs. Again, not a big functionality upgrade,
but an enjoyable improvement to quality of life.

## Color theme: Catppuccin Macchiato

Finally, not a tool at all, but a color theme. I like my environment to be as
uniform as possible. Functionally, I like having similar keybindings where
possible. Aesthetically, it means using the same colors wherever possible. For a
long time now I've been using the [Zenburn](https://kippura.org/zenburnpage/)
color theme. I still really like it, it's easy on the eyes, with a good contrast
ratio between the different colors. However, it started off as a Vim theme and
though there are ports of it for a lot of applications, they're not all
collected in the same place and in my experience, not 100% consistent. Enter
[Catppuccin](https://catppuccin.com): it's another well-designed pastel color
theme, but it also has [4
flavors](https://github.com/catppuccin/catppuccin#-palette), a massive array of
[ports](https://catppuccin.com/ports), and a very detailed [style
guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
and instructions for [creating new
ports](https://github.com/catppuccin/catppuccin/blob/main/docs/port-creation.md).
I decided to go with the darker "Macchiato" flavor and found ports for Emacs and
Wezterm, and also for `fzf`, `bat`, `git delta` and Obsidian. Even the colors on
this site are currently derived from Catppuccin. With the theme in place
everywhere, it feels like I have a nicely integrated environment, even if it's
made up of a bunch of different tools working together.

---

Okay, so I probably spent way more time on all this than I really needed to, but
I am very pleased with the result, both in terms of functionality and looks. I
also feel pretty future-proofed. I might adopt new tools in the future, but I
think I won't feel like I need to make a _change_ anytime soon. On a separate
note, it was a pleasant surprise to see how well the newer tools integrated with
each other to give a cohesive command-line experience. I love the UNIX
philosophy and tools as much as the next hacker, but they always felt just a
little too disconnected for me. With this current set of tools, I feel more like
I'm in more of a unified environment.
