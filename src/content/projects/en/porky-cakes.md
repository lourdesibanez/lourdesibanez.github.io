---
title: "Stock Management System — Bakery"
kicker: "Backend · Functional analysis · University"
summary: "Analysis, design and implementation of a system for Porky Cakes, a home bakery business: orders, recipes and ingredient stock."
cardSummary: "Analysis, design and implementation for Porky Cakes: recipes, orders and ingredient stock."
order: 4
categories: [backend, analisis]
tags: ["Java", "MySQL", "Functional analysis"]
cover: { src: "/assets/gestion-pasteleria/logo-pasteleria.webp", alt: "Porky Cakes logo", fit: "logo" }
hero: { fit: "logo", images: [ { src: "/assets/gestion-pasteleria/logo-pasteleria.webp", alt: "Porky Cakes logo" } ] }
facts:
  - { label: "Type", value: "Final project" }
  - { label: "Course", value: "Systems Analysis and Design II" }
  - { label: "School", value: "Engineering · UNLPam" }
  - { label: "Year", value: "2023" }
  - { label: "Team", value: "3 members" }
  - { label: "Stack", value: "Java · JDBC · MySQL · Velocity" }
links:
  - { label: "View demo", href: "https://porkycakes-demo.onrender.com", kind: "demo" }
  - { label: "View prototype", href: "https://www.figma.com/design/v7tW0uIsu3zTrXh1f57Vff/Porky?node-id=127-324&t=V2bOzF1i8xcUm01D-1", kind: "figma" }
  - { label: "View code", href: "https://github.com/lourdesibanez/PorkyCakes", kind: "github" }
gallery:
  variant: "default"
  items:
    - { src: "/assets/gestion-pasteleria/listado-pedidos.webp", alt: "Porky Cakes order list screen", caption: "View orders" }
    - { src: "/assets/gestion-pasteleria/cargar-receta.webp", alt: "Screen for creating a new recipe", caption: "Add recipe" }
    - { src: "/assets/gestion-pasteleria/actualizar-stock.webp", alt: "Screen for updating ingredient stock", caption: "Update stock" }
    - { src: "/assets/gestion-pasteleria/lista-compras1.webp", alt: "Screen for confirming shopping list generation", caption: "Create shopping list" }
    - { src: "/assets/gestion-pasteleria/lista-compras2.webp", alt: "Generated shopping list with the ingredients to buy", caption: "Generated list" }
---

> To log in to the demo, use the username **admin** and the password **12345**

## The context

Porky Cakes is a one-person home bakery business in General Pico that sells cakes and desserts through Instagram and WhatsApp. The owner handled the entire process by hand —quoting, buying ingredients, baking and delivering— with product and ingredient prices kept in an Excel spreadsheet. This was the final project for the Systems Analysis and Design II course (School of Engineering, UNLPam, 2023), which I did together with Nicolás Lucero and Martín Dal Santo: we surveyed that real-world process and turned it into the analysis, design and implementation of a management system.

## What we built

The project includes the code and the complete documentation of the system: from the domain model to the implementation of design patterns such as Facade, Singleton and DAO with Abstract Factory. We exposed an API with endpoints for CRUD operations on recipes, ingredients and orders, logged user access to a log file, and documented the architecture using Clements' components-and-connectors view.

- Domain narrative and domain model based on the survey of the real process
- Entity-relationship diagram and use case model (Administrator role)
- Static (class) and dynamic (sequence) design of the main use cases
- Clickable Figma prototypes for every screen
- Backend implementation in Java, with persistence to MySQL via JDBC

## Main use cases

### View orders

The administrator lists orders with the customer's name, order and delivery dates, price and status. Orders can be filtered, sorted by different attributes, or opened to see their products and payment method.

### Add recipe

Lets the user add a new recipe to the system's recipe book: select the product it belongs to, enter the preparation time and number of servings, and fill in the ingredients and preparation steps.

### Update stock

The administrator selects the ingredient whose stock they want to change, enters the quantity and confirms; the system saves it and shows the updated value.

### Create shopping list

The system automatically generates a list of ingredients to buy based on current stock, with the option to print it.

## Patterns and architecture

We used the Facade, Singleton and DAO with Abstract Factory patterns to separate responsibilities between controllers, DAOs and the model. The architecture was documented with a components-and-connectors view: the browser communicates over HTTP with PorkyApp (a JavaEE application), which accesses the management database via JDBC.
