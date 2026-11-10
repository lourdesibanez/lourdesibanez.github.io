---
title: "1943: Battle of Midway"
kicker: "Backend · Java · University"
summary: "A desktop platform for running different video games, with \"1943: Battle of Midway\" as the first game implemented."
cardSummary: "A desktop platform for running video games, with \"1943: Battle of Midway\" as the first game implemented."
order: 5
categories: [backend]
tags: ["Java", "Swing / AWT"]
cover: { src: "/assets/videojuego-batalla-midway/home-juego.webp", alt: "Home screen of the game 1943: Battle of Midway", fit: "cover" }
hero: { fit: "cover", images: [ { src: "/assets/videojuego-batalla-midway/home-juego.webp", alt: "Home screen of the game 1943: Battle of Midway, with the Play, Ranking and Exit options" } ] }
facts:
  - { label: "Type", value: "Coursework (University)" }
  - { label: "Platform", value: "Desktop application" }
  - { label: "Stack", value: "Java · Swing · AWT" }
links:
  - { label: "View code", href: "https://github.com/lourdesibanez/Juego1943", kind: "github" }
gallery:
  variant: "default"
  items:
    - { src: "/assets/videojuego-batalla-midway/home-juego.webp", alt: "Home screen with the Play, Ranking and Exit options", caption: "Home screen" }
    - { src: "/assets/videojuego-batalla-midway/juego.webp", alt: "Gameplay: the player's plane dodging formations of enemy planes", caption: "In game: aerial combat phase" }
    - { src: "/assets/videojuego-batalla-midway/diagrama-clases.webp", alt: "UML class diagram of the video game system", caption: "Class diagram" }
---

## The context

The assignment was to build a software platform capable of running different video games, implementing the basic elements they all share so that new games would be easy to develop and add in the future. On top of that foundation, the game we developed was "1943: Battle of Midway": the player flies a U.S. Air Force plane, and the mission is to fight through several levels destroying the Empire of Japan's air fleet, until facing and destroying the enemy flagship, the Yamato.

## What we built

- The logic for the different levels and for every moving object (planes, ammunition, bonuses), following the fundamentals of Object-Oriented Programming
- A settings screen: keys, volume and display mode
- A ranking system: the player's name, score and date are saved to a JSON file and shown on a dedicated top-10 screen

## How to play

After choosing the game, you can check the ranking table with the 10 best scores or jump straight into playing. The goal is to destroy enemy planes to reach the final phase of each mission and face that level's "boss"; to advance you need to deal between 70% and 100% damage, otherwise the mission starts over.

The player's plane has an energy bar that drops when it takes hits, collides with another plane, runs out of mission time, or uses special attacks (Lightning and Tsunami). Along the way you can pick up power-ups and temporary weapons —Shotgun, Machine Gun, Laser, among others— which get stronger if you collect the same bonus again. The controls (arrow keys to move, X to shoot, Z for the special attack, space to pause) are fully remappable, with a button to restore the defaults.

The game ends when the player destroys the Yamato (the mandatory final boss) or runs out of energy.

## Architecture

The class design models the typical hierarchy for this kind of game: a base `JGame` class that `1943 Batalla de Midway` inherits from, levels made up of `Objeto gráfico` (graphic objects: planes, bonuses, ammunition), hierarchies of `Enemigo` (enemies: planes, ships and final bosses) and `Arma` (weapons) for each type of shot, and a `Sistema` (system) that manages the `Ranking` of scores.
