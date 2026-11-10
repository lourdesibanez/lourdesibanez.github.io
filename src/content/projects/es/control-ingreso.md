---
title: "Migración CodeIgniter a Laravel"
kicker: "Backend · Seeker Parking"
summary: "Migración del módulo de Control de Ingreso desde una arquitectura legacy en CodeIgniter hacia una API REST en Laravel."
cardSummary: "De CodeIgniter a una API REST en Laravel: endpoints, migraciones y documentación Swagger."
order: 2
categories: [backend]
tags: ["Laravel", "REST API", "Backend"]
cover: { src: "/assets/seeker/seeker.svg", alt: "Logo de Seeker Parking", fit: "logo" }
hero: { fit: "logo", images: [ { src: "/assets/seeker/seeker.svg", alt: "Logo de Seeker Parking" } ] }
facts:
  - { label: "Tipo", value: "Migración backend" }
  - { label: "Empresa", value: "Seeker Parking" }
  - { label: "Stack", value: "Laravel · MySQL" }
---

## El contexto

Seeker Parking es la empresa donde trabajo actualmente: digitalizamos la gestión de estacionamientos y eventos. El módulo de Control de Ingreso —el que registra cuándo entra y sale cada vehículo— venía funcionando desde hacía años sobre una tecnología vieja, cada vez más difícil de mantener y de hacer crecer. Mi trabajo fue llevar ese módulo a una tecnología más moderna, manteniendo el servicio funcionando sin cortes para los usuarios.

## Mi rol

- Reconstruí las funcionalidades del módulo viejo en el nuevo sistema
- Adapté la base de datos a la nueva estructura sin perder información existente
- Sumé la lógica para registrar entradas, salidas y cambios de vehículo dentro de un mismo ticket
- Documenté cómo funciona cada parte para que el resto del equipo pueda usarla

## Por qué importa

Modernizar este módulo hace que sea más fácil detectar y corregir errores, más simple sumar funcionalidades nuevas a futuro, y reduce el riesgo de que el sistema falle justo en el momento en que un cliente necesita registrar un ingreso.
