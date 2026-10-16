# Day List

A to-do list built around days, not times. Built for my own use, to replace a paid app that didn't handle my workflow well.

**Try it:** [edcomer.github.io/day-list/#demo](https://edcomer.github.io/day-list/#demo) opens a demo with sample tasks. No account needed.

## What it does differently

- **Days, not times.** Every task is either on a day or *Unscheduled*. Picking a time was the slowest part of adding tasks in other apps.
- **A real Unscheduled list.** Things I want to get to without a day yet. Giving a task a day moves it out of the list, and removing the day moves it back.
- **Missed tasks demand a decision.** Anything left unfinished from an earlier day sits in a *Needs a decision* box at the top of Today until I move it (Today, a new day, or Unscheduled) or delete it. Nothing quietly disappears, and the app counts how often a task has been put off.
- **Fast capture on the phone.** One text box at the bottom with priority and day buttons. The day button follows the tab I'm on, so most tasks take one tap after typing.
- **Priorities as groups.** High, Medium and Low groups that I can reorder, and drag tasks between, by hand.
- **Repeating tasks** on a fixed schedule (daily, chosen weekdays, every few days or weeks, monthly by date or weekday) or counted from when I last finished them. A week away leaves one missed copy to deal with, not seven.

## How it's built

- A single-page web app (HTML, CSS, JavaScript), installable on Android and desktop as a Progressive Web App and usable offline.
- Google sign-in and per-person storage with Firebase Authentication and Cloud Firestore. Each person can read and write only their own tasks (`firestore.rules`).
- Hosted on GitHub Pages; every change pushed to this repository is live within a minute or two.
- Designed and built by directing Claude (Anthropic's AI). I defined the requirements, tested it in daily use, and drove each revision; Claude wrote the code.
