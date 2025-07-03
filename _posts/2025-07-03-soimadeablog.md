---
layout: post
title:  "So I... Made a Blog!"
date:   2025-07-03 11:44:06 +0530
categories: jekyll update
---

I've been meaning to start a series of blog posts for quite a while, and I was inspired by quite a few people, and I just wanted to pen down my thought process of why I've done what I have (so far). 

I'm hoping to start each entry with "So I..." and some action I took, or some *thing* that I built. Hopefully, I'll also improve my writing skills along the way.


## So why write this? 
Since [!!Con 2024](https://www.bangbangcon.com/), I stumbled upon quite a few blogs from some truly amazing speakers. I've had this idea gnawing at me in the back of my head: "You must make a blog and write down all of your stories, adventures, et cetera". Now that I'm finally done with my undergraduate degree, I have the time to write to my heart's content.

Most of this post will be about setting up the blog itself, and the annoying lengths I had to go through to set up Jekyll on Windows[^1]. Note that this preceded the release of Ruby 3.4.4, by exactly 2 days. Had I waited 2 days, I would probably have not gone through this ordeal.

## Why Jekyll?
At least 3 of my professors have used it throughout undergrad. I would've used Astro, but I've procrastinated this for long enough and need to get started *somehow*.

## Setup
Jekyll has a good guide for setting things up, even for Windows. At this point, you have two options:

<ol>
<li> MSYS2 </li> 
<li> WSL </li>
</ol>

While I won't go into the pros/cons of either, I quite like MSYS because it doesn't mean spinning up a VM[^2] to get things done. To be honest, my objective is to stay "closer" to a Windows environment, and WSL seems like a cop-out to that end.  

Follow the [Jekyll on Windows](https://jekyllrb.com/docs/installation/windows/) tutorial. If you have MSYS beforehand, pull up a terminal of your choice that *isn't* MSYS (e.g. `cmd.exe` and `pwsh`) and run `ridk enable`.

The rest should be smooth sailing  (especially now that [Ruby 3.4.4 is out](https://www.ruby-lang.org/en/news/2025/05/14/ruby-3-4-4-released/).)

When I ran `gem install jekyll bundler` though, I hit a brick wall.


## BigDecimal Woes
I was running gcc-15 and `bundler` would fail to compile, with an issue quite similar to this:

```c
bigdecimal.c:4439:45: error: passing argument 2 of 'rb_define_global_function' from incompatible pointer type [-Wincompatible-pointer-types]
 4439 |     rb_define_global_function("BigDecimal", f_BigDecimal, -1);
      |                                             ^~~~~~~~~~~~
      |                                             |
      |                                             VALUE (*)(int,  VALUE *, VALUE) {aka long unsigned int (*)(int,  long unsigned int *, long unsigned int)}
In file included from C:/Ruby34/include/ruby-3.4.0/ruby/internal/anyargs.h:78,
                 from C:/Ruby34/include/ruby-3.4.0/ruby/ruby.h:27,
                 from bigdecimal.h:13,
                 from bigdecimal.c:11:
```

While I no longer have the original error message, this is from a [github issue](https://github.com/ruby/bigdecimal/issues/315). The solution at the time was to downgrade my GCC version. If this were any other package manager and system, it would've been easier. To the best of my knowledge however, downgrades using `pacman` on MSYS are *manual*.


## Downgrading GCC
We only need to downgrade to GCC-14 or lower. 
Assuming you've uninstalled gcc-15, manually download an older version of GCC from the MINGW archives:

```bash
# this installs an old version of GCC
wget https://repo.msys2.org/msys/x86_64/gcc-13.2.0-2-x86_64.pkg.tar.zst
```

MSYS has a [guide on installing standalone](https://www.msys2.org/docs/package-management/#installing-a-specific-version-of-a-package-or-a-stand-alone-packages) packages, in case you'd like to know more.

```bash
#continuing our example
pacman -U gcc-13.2.0-2-x86_64.pkg.tar.zst
```

And `gem install jekyll bundler` worked! Now I was finally ready to spin up 

## Why document any of this?
A lot of the information in this post may no longer be useful, but I believe that there is merit in documenting the journey. It's a nice way to document package downgrades on MSYS, and hopefully someone finds this read interesting.

## Conclusion
This is hopefully the start of a long journey, where I pen down all of my scattered thoughts. 

Also, if you find any errors here, let me know! I don't know a lot more than I do know, so I'd appeciate any corrections.

# Footnotes
[^1]: Before someone messages me to proselytize Linux: Yes, I do use Linux. The point wasn't whether I should, but whether I could.

[^2]: I'm assuming that you don't use WSL1. 