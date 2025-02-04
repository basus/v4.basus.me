---
date: 2025-02-04T21:11:15+05:30
started: 2025-02-04T10:23:24+05:30 
title: wyd
description: A quick script to summarize all the work I've done today
tags: ["Programming", "Productivity"]
---

Recently I've been working on a number of different projects each day that are
spread across a number of Git repositories. I have also been trying to keep a
worklog of everything that I get done during the day. I should be updating the
worklog as I go, but, fallible creature that I am, most days I don't remember to
update the log until the end day. And by that time, I've inconveniently
forgotten most what I've worked on through the day. So I did what all good
programmers would do in this situation, and wrote myself a little script helper.

<aside class="sidenote">For old fogies like me, <span class="program">wyd</span>
is an abbreviation for "what (are) you doing".</aside>

I'm calling the script <span class="program">wyd</span><span
class="sidenote-number"></span>. Given a directory (or just the current one) it looks
into each subdirectory and checks if it is a Git repository. If it is, and there
have been commits made today (technically since midnight), <span
class="program">wyd</span> reports the commit messages, and if the commits
haven't been pushed to a remote. (All my repositories have a remote they backup
to.) At the end, <span class="program">wyd</span> also lists the repositories
that have uncommitted changes. At the end of the day (or really at any time), I
can get an overview of everything I've done so far.

The [script](https://github.com/basus/scripts/blob/master/wyd.sh) is available
in my [public scripts repo](https://github.com/basus/scripts). Feel free to
copy, fork or send any suggestions my way. I went to some pains to make it POSIX
compliant, so it should run with common shells (namely <span
class="program">bash</span> and <span class="program">zsh</span>).

## On Shell Scripting

I initially wanted to write this in Rust, because I have been wanting to sit
down and learn Rust for a while. But that seemed a bit overkill, and I wanted to
see if I could get a shell script to do what I wanted without too much trouble.
Though I've been writing and using small shell scripts forever, this is the
first time that I really sat down and understood what I was writing, rather than
just copying-and-pasting something that worked.

<aside class="sidenote">For example, POSIX shell doesn't have arrays, except for
the array of program arguments, which <span class="program">wyd</span> abuses.
</aside>

This process made me realize that for a long time, I've been afraid of writing
serious shell scripts. The shell script language is definitely quirky. Depending
on external programs for most of the heavy lifting means diving into
documentation spread across different places. On top of that, being POSIX
compliant borders on masochism<span class="sidenote-number"></span>. But once I
did decide to dive in, I was pleasantly surprised by how quickly I could not
only get something working, but understand what was happening (leaning heavily
on [Stack Overflow](https://stackoverflow.com) and the [Unix Stack
Exchange](https://unix.stackexchange.com)). Am I going to build large pieces of
software in shell script? No, but I am much more comfortable reaching for it to
write small utilities and automations.

Over the last few months or so, I have been making it a point to dive into new
languages, technologies and problems. As a result, I have felt my
abilities and confidence as a programmer grow steadily. Not only do I know a lot
more, I also feel more comfortable with just diving into a new problem, domain
or codebase and figuring things out. I hope to write more about this later.
Happy scripting!
