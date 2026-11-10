---
title: "Sistema de Gestión de Stock — Pastelería"
kicker: "Backend · Análisis funcional · Facultad"
summary: "Análisis, diseño e implementación del sistema para Porky Cakes, un emprendimiento de repostería: pedidos, recetas y stock de insumos."
cardSummary: "Análisis, diseño e implementación para Porky Cakes: recetas, pedidos y stock de insumos."
order: 4
categories: [backend, analisis]
tags: ["Java", "MySQL", "Análisis funcional"]
cover: { src: "/assets/gestion-pasteleria/logo-pasteleria.webp", alt: "Logo de Porky Cakes", fit: "logo" }
hero: { fit: "logo", images: [ { src: "/assets/gestion-pasteleria/logo-pasteleria.webp", alt: "Logo de Porky Cakes" } ] }
facts:
  - { label: "Tipo", value: "Trabajo final (TIF)" }
  - { label: "Materia", value: "Análisis y Diseño de Sistemas II" }
  - { label: "Facultad", value: "Ingeniería · UNLPam" }
  - { label: "Cursada", value: "2023" }
  - { label: "Equipo", value: "3 integrantes" }
  - { label: "Stack", value: "Java · JDBC · MySQL · Velocity" }
links:
  - { label: "Ver demo", href: "https://porkycakes-demo.onrender.com", kind: "demo" }
  - { label: "Ver prototipo", href: "https://www.figma.com/design/v7tW0uIsu3zTrXh1f57Vff/Porky?node-id=127-324&t=V2bOzF1i8xcUm01D-1", kind: "figma" }
  - { label: "Ver código", href: "https://github.com/lourdesibanez/PorkyCakes", kind: "github" }
gallery:
  variant: "default"
  items:
    - { src: "/assets/gestion-pasteleria/listado-pedidos.webp", alt: "Pantalla de listado de pedidos de Porky Cakes", caption: "Ver pedidos" }
    - { src: "/assets/gestion-pasteleria/cargar-receta.webp", alt: "Pantalla para crear una receta nueva", caption: "Cargar receta" }
    - { src: "/assets/gestion-pasteleria/actualizar-stock.webp", alt: "Pantalla para actualizar el stock de ingredientes", caption: "Actualizar stock" }
    - { src: "/assets/gestion-pasteleria/lista-compras1.webp", alt: "Pantalla para confirmar la generación de la lista de compras", caption: "Hacer lista de compras" }
    - { src: "/assets/gestion-pasteleria/lista-compras2.webp", alt: "Lista de compras generada con los ingredientes a comprar", caption: "Lista generada" }
---

> Para entrar a la demo usá el usuario **admin** y la contraseña **12345**

## El contexto

Porky Cakes es un emprendimiento de repostería de General Pico llevado adelante por una sola persona, que vende tortas y postres a través de Instagram y WhatsApp. Todo el proceso —presupuestar, comprar insumos, producir y entregar— lo manejaba a mano, con los precios de productos e ingredientes anotados en un Excel. Este fue el trabajo final de la materia Análisis y Diseño de Sistemas II (Facultad de Ingeniería, UNLPam, cursada 2023), en equipo con Nicolás Lucero y Martín Dal Santo: relevamos ese proceso real y lo convertimos en el análisis, diseño e implementación de un sistema de gestión.

## Qué construimos

El proyecto contiene el código y la documentación completa del sistema: desde el modelo de dominio hasta la implementación de patrones de diseño como Facade, Singleton y DAO con Abstract Factory. Expusimos una API con endpoints para las operaciones CRUD sobre recetas, ingredientes y pedidos, registramos los accesos de los usuarios en un archivo de logs, y documentamos la arquitectura con la vista de componentes y conectores de Clements.

- Narrativa de dominio y modelo de dominio a partir del relevamiento del proceso real
- Diagrama entidad-relación y modelo de casos de uso (rol Administrador)
- Diseño estático (clases) y dinámico (secuencia) de los casos de uso principales
- Prototipos navegables en Figma para cada pantalla
- Implementación del backend en Java, con persistencia vía JDBC a MySQL

## Casos de uso principales

### Ver pedidos

El administrador lista los pedidos con nombre del cliente, fechas de realización y entrega, precio y estado. Puede filtrarlos, ordenarlos por distintos atributos, o ver el detalle de productos y método de pago de cada uno.

### Cargar receta

Permite cargar una receta nueva al recetario del sistema: se selecciona el producto al que pertenece, se ingresan el tiempo de preparación y las porciones, y se completan los ingredientes y los pasos de preparación.

### Actualizar stock

El administrador selecciona el ingrediente al que quiere cambiarle el stock, completa la cantidad y confirma la operación; el sistema la guarda y la muestra actualizada.

### Hacer lista de compras

El sistema genera automáticamente una lista de los ingredientes a comprar según el stock actual, con la opción de imprimirla.

## Patrones y arquitectura

Usamos los patrones Facade, Singleton y DAO con Abstract Factory para separar responsabilidades entre controladores, DAOs y modelo. La arquitectura quedó documentada con una vista de componentes y conectores: el navegador se comunica por HTTP con PorkyApp (una aplicación JavaEE), que accede por JDBC a la base de datos administradora.
