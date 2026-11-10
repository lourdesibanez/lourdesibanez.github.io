---
title: "Payroll System"
kicker: "Backend · Production system"
summary: "Payroll processing for Los Caldenes, an institution in La Pampa, with a configurable calculation engine and direct integration with AFIP."
cardSummary: "Payroll for Los Caldenes with AFIP integration: a configurable calculation engine and the Libro Sueldo Digital."
order: 3
categories: [backend, analisis]
tags: ["Laravel", "Vue", "Backend"]
cover: { src: "/assets/liquidacion-sueldos/logoLosCaldenes.webp", alt: "Los Caldenes logo", fit: "logo" }
hero: { fit: "logo", images: [ { src: "/assets/liquidacion-sueldos/logoLosCaldenes.webp", alt: "Los Caldenes logo" } ] }
facts:
  - { label: "Type", value: "Production system" }
  - { label: "Client", value: "Los Caldenes · La Pampa" }
  - { label: "Role", value: "Full-stack" }
  - { label: "Team", value: "3 people" }
  - { label: "Stack", value: "Laravel · Vue · MySQL" }
  - { label: "Since", value: "August 2024" }
gallery:
  variant: "default"
  items:
    - { src: "/assets/liquidacion-sueldos/listado-liquidaciones.webp", alt: "List of processed payroll runs", caption: "Payroll runs list" }
    - { src: "/assets/liquidacion-sueldos/listado-conceptos.webp", alt: "List of configured payroll items", caption: "Payroll items list" }
    - { src: "/assets/liquidacion-sueldos/edicion-empleado-basico.webp", alt: "Editing an employee's basic personal details", caption: "Employee basic details" }
    - { src: "/assets/liquidacion-sueldos/edicion-empleado-laboral.webp", alt: "Editing an employee's employment details", caption: "Employee employment details" }
    - { src: "/assets/liquidacion-sueldos/cargo-asignado-empleado.webp", alt: "Position assigned to an employee, with category and points", caption: "Position assigned to an employee" }
    - { src: "/assets/liquidacion-sueldos/conceptos-asignados-empleado.webp", alt: "Payroll items assigned to an employee", caption: "Payroll items assigned to an employee" }
---

## The context

Los Caldenes is an institution in La Pampa with two very different kinds of staff: teachers, under the "Docentes de La Pampa" collective agreement, and retail staff, under the Empleados de Comercio (retail workers) agreement, plus some staff outside any agreement. Each group has its own pay scale, its own taxable and non-taxable pay items, and its own rules for employee and employer contributions. They needed a system of their own that could calculate all of that —base salary, seniority, attendance bonus, aguinaldo (the mandatory 13th-month bonus), family allowances— without being tied to a single way of running payroll, and that also met AFIP's (Argentina's tax agency) requirements: generating the Libro Sueldo Digital (the digital payroll ledger) and submitting social security information in the format the agency requires.

## My role

I've been part of the team that builds and maintains the system since August 2024, alongside two other colleagues. I work full-stack: backend in Laravel —data model, migrations, controllers, integration with AFIP's SOAP web services— and frontend in Vue via Inertia, including a good part of the payroll calculation engine that runs on the client side.

## How payroll calculation works

Instead of hardcoding each agreement's rules, every payroll item (base salary, seniority, attendance bonus, SAC, family allowance...) is defined by an editable formula, using custom Excel-like functions (SI, MAX, MIN, ANOS_ENTRE, teacher seniority percentages) and reusable variables. The engine evaluates those formulas dynamically for each employee and position, calculates the aguinaldo by comparing the best salary of the semester across agreements, and works out taxable bases and contributions broken down by category (SIPA, INSSJyP, health insurance, ART, family allowances). This makes it possible to adjust an item or add a new one when a pay scale or decree changes, without touching the system's code.

## Main features

- **Employee management:** personal details, AFIP data, health insurance, CBU (bank account number), agreement, general and teaching seniority, family group
- **Positions and payroll items:** positions with points and category, configurable items with their own formula and mapping to AFIP's official codes
- **Payroll runs:** monthly, biweekly, aguinaldo, vacation, advances and final settlement, with employee selection and entry of period changes
- **Pay slips:** PDF generation (standard and for pre-printed numbered paper) and delivery by email
- **Bank export:** Excel files grouped by bank, ready to submit to Banco de la Pampa
- **AFIP:** generation of the Libro Sueldo Digital in the fixed-width format the agency requires, and management of digital certificates for the web services

## Current status

The system has been in production and under active development for almost two years, with ongoing improvements requested by the client. As a next step, I'd like to add automated tests for the calculation engine and the AFIP file generation, which is currently the part of the system with the least coverage.
