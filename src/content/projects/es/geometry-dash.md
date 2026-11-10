---
title: "Geometry Dash"
kicker: "Mobile · Flutter · Facultad"
summary: "Juego de plataformas estilo runner hecho en Flutter: saltá los obstáculos, sumá puntos y juntá diamantes. Se puede jugar directo desde el navegador."
cardSummary: "Juego runner en Flutter con diamantes, tienda y cuenta PRO. Se puede jugar desde el navegador."
order: 6
categories: []
tags: ["Flutter", "Dart", "Jugable"]
cover: { src: "/assets/geometry-dash/flutter_05.webp", alt: "Partida de Geometry Dash: el cubo salta sobre dos pinchos", fit: "phone" }
hero:
  fit: "phone"
  images:
    - { src: "/assets/geometry-dash/flutter_02.webp", alt: "Pantalla principal del juego en modo claro, con el perfil del jugador, puntos, diamantes y el botón Iniciar partida" }
    - { src: "/assets/geometry-dash/flutter_05.webp", alt: "Partida en curso: el cubo salta sobre dos pinchos y suma un diamante" }
    - { src: "/assets/geometry-dash/flutter_01.webp", alt: "Pantalla principal del juego en modo oscuro" }
facts:
  - { label: "Tipo", value: "Trabajo práctico (Facultad)" }
  - { label: "Plataforma", value: "Mobile · Web" }
  - { label: "Stack", value: "Flutter · Dart" }
links:
  - { label: "Jugar ahora", href: "https://lourdesibanez.github.io/geometry_dash_game/", kind: "play" }
  - { label: "Ver código", href: "https://github.com/lourdesibanez/geometry_dash_game", kind: "github" }
gallery:
  variant: "phone"
  items:
    - { src: "/assets/geometry-dash/flutter_02.webp", alt: "Pantalla principal en modo claro", caption: "Inicio · modo claro" }
    - { src: "/assets/geometry-dash/flutter_01.webp", alt: "Pantalla principal en modo oscuro", caption: "Inicio · modo oscuro" }
    - { src: "/assets/geometry-dash/flutter_05.webp", alt: "Partida en curso con el cubo saltando sobre pinchos", caption: "En juego" }
    - { src: "/assets/geometry-dash/flutter_03.webp", alt: "Diálogo ¡Chocaste! con la opción de seguir por 10 diamantes", caption: "Revivir con diamantes" }
    - { src: "/assets/geometry-dash/flutter_04.webp", alt: "Cuenta regresiva ¡Preparate! antes de reanudar la partida", caption: "Reanudar con cuenta regresiva" }
    - { src: "/assets/geometry-dash/flutter_06.webp", alt: "Confirmación antes de reiniciar la partida", caption: "Confirmar reinicio" }
    - { src: "/assets/geometry-dash/flutter_07.webp", alt: "Publicidad intersticial con temporizador y botón para pasarse a PRO", caption: "Publicidad" }
    - { src: "/assets/geometry-dash/flutter_08.webp", alt: "Tienda con paquetes de diamantes y la cuenta PRO", caption: "Tienda" }
    - { src: "/assets/geometry-dash/flutter_09.webp", alt: "Detalle de la cuenta PRO con sus beneficios", caption: "Cuenta PRO" }
    - { src: "/assets/geometry-dash/flutter_10.webp", alt: "Pantalla de Game Over con puntos, récord y diamantes ganados", caption: "Game over" }
---

## El proyecto

Una app de juego desarrollada en Flutter para una materia de la facultad, inspirada en Geometry Dash: el jugador controla un cubo que avanza solo y tiene que saltar en el momento justo para esquivar los pinchos. Cada obstáculo superado suma puntos y en el camino se juntan diamantes, la moneda del juego.

Además del juego en sí, la app incluye todo lo que rodea a un juego mobile real: perfil del jugador, récord, una economía de diamantes, publicidad, tienda y una cuenta PRO por suscripción.

## Qué construimos

- Mecánica de runner: salto, detección de colisiones con los obstáculos y puntaje en tiempo real
- Perfil del jugador con nivel de cuenta (BASIC / PRO), récord, puntos y diamantes acumulados
- Revivir al chocar: por 10 diamantes se sigue la partida desde donde se chocó, o se termina y se ve el resumen
- Pausa con cuenta regresiva para retomar y confirmación antes de reiniciar para no perder la partida por error
- Publicidad intersticial con temporizador y acceso directo a la versión PRO
- Tienda de paquetes de diamantes y suscripción PRO: sin publicidad, revivir a 5 diamantes y 50 diamantes por mes
- Modo claro / oscuro y control de sonido

## Cómo se juega

Desde la pantalla principal se arranca con "Iniciar partida". El cubo avanza solo y hay que tocar la pantalla (o hacer clic, en la versión web) para saltar los pinchos. Si chocás, podés gastar diamantes para seguir o terminar la partida; al final se muestran los puntos, el récord y los diamantes ganados.
