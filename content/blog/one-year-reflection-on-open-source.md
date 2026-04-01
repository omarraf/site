---
title: "A Year of Open Source Contributions"
date: "2026-02-23"
excerpt: "How a year of open source shaped me as an engineer."
tags: ["open-source", "system-design", "growth"]
---

The first time I contributed to open source was November 2024, with a roughly 100-line change adding a single test case to the [Open Energy Dashboard (OED)](https://github.com/OpenEnergyDashboard/OED) repository. Since then, I've been actively involved in the open source community and wanted to share what that past year has looked like for me.

Recently, I came back to OED to address an issue far bigger than where I started: a change that eventually touched 40+ files and 8,000 lines of code. In this post I want to go over what that issue was, how I approached it, and how I've grown as an engineer between my first and latest contribution to the Open Energy Dashboard.

## The Issue

If you haven't read my [previous post on OED](/blog/first-open-source-contribution), the short version is that it's a free, open-source energy dashboard that helps organizations visualize and manage their energy data. It's a genuinely useful alternative to pricier proprietary solutions, with over 100 contributors.

![OED workflow diagram](/oed_demo.png "How the Open Energy Dashboard works")

I worked on [issue #1497](https://github.com/OpenEnergyDashboard/OED/issues/1497), which proposed introducing a new testing methodology to systematically strengthen each of OED's 20+ API routes against security vulnerabilities like SQL injection and cross-site scripting. The goal was to go through every route, figure out what valid and invalid inputs looked like, and build a test suite that enforced those boundaries.

Even though the scope looked manageable at first, it ended up being much larger than I initially expected. Each route had its own set of parameters that needed testing across a range of conditions: valid inputs, invalid inputs, edge cases, and optional fields. In a lot of cases, I couldn't just write tests against the existing code because the validation wasn't there yet. Part of the work was fixing the codebase first, figuring out what the correct limits should be, patching the validation logic, and then writing tests against it.

Figuring out what those correct limits even were was its own challenge. I dug into the client code to see how routes were being called, checked the database schema for constraints, used common sense where things were unclear (like capping string fields at 1,024 characters), and looped in the OED team when I genuinely didn't know. One thing that helped a lot was noticing how many routes shared similar structures. I ended up creating a utility file, `validationHelpers.js`, to centralize reusable logic, which kept things consistent and saved a lot of time.

## Challenges and The Result

There were a few roadblocks along the way. One was the sheer size of the issue. Addressing wave after wave of review comments felt discouraging at times, and there were stretches where I waited weeks to a month between code reviews. I've come to understand that this is a normal part of the open source development cycle. You have to be respectful of maintainers' time, and you have to be prepared for honest feedback. Sometimes your code isn't good enough and they'll tell you straight up. Sometimes they'll ask you to rethink your entire approach. That's just the nature of software development. You can't be too attached to your work or assume it's the best solution. You have to listen to other perspectives, because chances are you're not seeing the full picture. Because of that, I made sure each round of changes was easier for the maintainer to review than the last. I gave clear summaries of my changes and stayed prompt in my responses when I could. That's something I'll carry with me going forward.

After a lot of back and forth, [the PR was merged](https://github.com/OpenEnergyDashboard/OED/pull/1528). It added a dedicated test file for each route and introduced a framework the community can build on as new routes are added. From there, I created [follow-up sub-issues](https://github.com/OpenEnergyDashboard/OED/issues/1573) for areas that still needed work and started giving feedback to other contributors who picked them up, trying to pass along the context I had built up from being deep in that part of the codebase.

That last part was something I didn't expect to value as much as I did. Not long ago, I was the one asking questions and waiting for direction. Getting to be on the other side of that felt really meaningful.

## Reflecting on the Growth

I feel like I've grown immensely between these two issues. My first was a small, scoped ticket: follow the pattern, add the test, open the PR. The latest was something I had to own from start to finish. Understanding the problem, making decisions about the right approach, pushing back in discussions when I thought something was off, and ultimately shipping something that touched real security concerns in a codebase that real organizations use. What I noticed most about myself through that process was that I wasn't just waiting to be told what to do. I was actively contributing to the conversation, explaining my reasoning, proposing solutions, and advocating for my approach.

More generally, I've started to take ownership more naturally across the other projects I work on. All the code reviews I've been through over the past year have made me more deliberate about what I push. I catch bugs earlier, I question my own approach more often, and I think more carefully before opening a PR, because I know there's someone on the other side of that screen who has to understand my code. I don't think I'd have that awareness if I didn't contribute to open source.

Going into the next year, I want to keep working on harder problems and keep learning from the people around me, in code reviews, conversations, and whatever else comes up. I've already started branching out into much larger codebases like [Koog](https://github.com/JetBrains/koog) (4k stars) and [TensorZero](https://github.com/tensorzero/tensorzero) (10k stars), which comes with its own set of challenges compared to a smaller community like OED. But I believe the experience I've gained here gave me the confidence to tackle virtually any codebase I encounter. In a field where you can never know everything, the best thing I can do is stay curious and stay proactive.

The gap between my first and last OED contributions represents about a year of real growth as an engineer, and I'm excited to see what the next one looks like.
