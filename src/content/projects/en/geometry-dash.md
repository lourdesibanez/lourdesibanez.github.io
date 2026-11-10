---
title: "Geometry Dash"
kicker: "Mobile · Flutter · University"
summary: "A runner-style platform game built in Flutter: jump over obstacles, rack up points and collect diamonds. You can play it right in your browser."
cardSummary: "A runner game in Flutter with diamonds, a shop and a PRO account. Playable right in the browser."
order: 6
categories: []
tags: ["Flutter", "Dart", "Playable"]
cover: { src: "/assets/geometry-dash/flutter_05.webp", alt: "Geometry Dash gameplay: the cube jumps over two spikes", fit: "phone" }
hero:
  fit: "phone"
  images:
    - { src: "/assets/geometry-dash/flutter_02.webp", alt: "The game's home screen in light mode, showing the player profile, points, diamonds and the Start game button" }
    - { src: "/assets/geometry-dash/flutter_05.webp", alt: "Game in progress: the cube jumps over two spikes and picks up a diamond" }
    - { src: "/assets/geometry-dash/flutter_01.webp", alt: "The game's home screen in dark mode" }
facts:
  - { label: "Type", value: "Coursework project (University)" }
  - { label: "Platform", value: "Mobile · Web" }
  - { label: "Stack", value: "Flutter · Dart" }
links:
  - { label: "Play now", href: "https://lourdesibanez.github.io/geometry_dash_game/", kind: "play" }
  - { label: "View code", href: "https://github.com/lourdesibanez/geometry_dash_game", kind: "github" }
gallery:
  variant: "phone"
  items:
    - { src: "/assets/geometry-dash/flutter_02.webp", alt: "Home screen in light mode", caption: "Home · light mode" }
    - { src: "/assets/geometry-dash/flutter_01.webp", alt: "Home screen in dark mode", caption: "Home · dark mode" }
    - { src: "/assets/geometry-dash/flutter_05.webp", alt: "Game in progress with the cube jumping over spikes", caption: "In game" }
    - { src: "/assets/geometry-dash/flutter_03.webp", alt: "\"You crashed!\" dialog with the option to continue for 10 diamonds", caption: "Revive with diamonds" }
    - { src: "/assets/geometry-dash/flutter_04.webp", alt: "\"Get ready!\" countdown before resuming the game", caption: "Resume with countdown" }
    - { src: "/assets/geometry-dash/flutter_06.webp", alt: "Confirmation before restarting the game", caption: "Confirm restart" }
    - { src: "/assets/geometry-dash/flutter_07.webp", alt: "Interstitial ad with a timer and a button to upgrade to PRO", caption: "Ads" }
    - { src: "/assets/geometry-dash/flutter_08.webp", alt: "Shop with diamond packs and the PRO account", caption: "Shop" }
    - { src: "/assets/geometry-dash/flutter_09.webp", alt: "PRO account details with its benefits", caption: "PRO account" }
    - { src: "/assets/geometry-dash/flutter_10.webp", alt: "Game Over screen with points, high score and diamonds earned", caption: "Game over" }
---

## The project

A game app built in Flutter for a university course, inspired by Geometry Dash: the player controls a cube that moves forward on its own and has to jump at just the right moment to dodge the spikes. Every obstacle cleared adds points, and along the way you collect diamonds, the game's currency.

Beyond the game itself, the app includes everything that surrounds a real mobile game: a player profile, a high score, a diamond economy, ads, a shop and a subscription-based PRO account.

## What we built

- Runner mechanics: jumping, collision detection with obstacles and real-time scoring
- Player profile with account tier (BASIC / PRO), high score, and accumulated points and diamonds
- Revive on crash: for 10 diamonds you continue the run from where you crashed, or you end it and see the summary
- Pause with a countdown to resume, and a confirmation before restarting so you don't lose your run by accident
- Interstitial ads with a timer and a direct link to the PRO version
- Shop with diamond packs and a PRO subscription: no ads, revives for 5 diamonds and 50 diamonds per month
- Light / dark mode and sound control

## How to play

From the home screen, you start with "Start game". The cube moves forward on its own, and you tap the screen (or click, in the web version) to jump over the spikes. If you crash, you can spend diamonds to keep going or end the run; at the end you see your points, your high score and the diamonds you earned.
