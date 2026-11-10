---
title: "Sistema de Liquidación de Sueldos"
kicker: "Backend · Sistema en producción"
summary: "Liquidación de haberes para Los Caldenes, una institución de La Pampa, con motor de cálculo configurable e integración directa a AFIP."
cardSummary: "Liquidación de haberes para Los Caldenes con integración a AFIP: motor de cálculo configurable y Libro Sueldo Digital."
order: 3
categories: [backend, analisis]
tags: ["Laravel", "Vue", "Backend"]
cover: { src: "/assets/liquidacion-sueldos/logoLosCaldenes.webp", alt: "Logo de Los Caldenes", fit: "logo" }
hero: { fit: "logo", images: [ { src: "/assets/liquidacion-sueldos/logoLosCaldenes.webp", alt: "Logo de Los Caldenes" } ] }
facts:
  - { label: "Tipo", value: "Sistema en producción" }
  - { label: "Cliente", value: "Los Caldenes · La Pampa" }
  - { label: "Rol", value: "Full-stack" }
  - { label: "Equipo", value: "3 personas" }
  - { label: "Stack", value: "Laravel · Vue · MySQL" }
  - { label: "Desde", value: "Agosto 2024" }
gallery:
  variant: "default"
  items:
    - { src: "/assets/liquidacion-sueldos/listado-liquidaciones.webp", alt: "Listado de liquidaciones realizadas", caption: "Listado de liquidaciones" }
    - { src: "/assets/liquidacion-sueldos/listado-conceptos.webp", alt: "Listado de conceptos de liquidación configurados", caption: "Listado de conceptos" }
    - { src: "/assets/liquidacion-sueldos/edicion-empleado-basico.webp", alt: "Edición de los datos personales básicos de un empleado", caption: "Datos básicos del empleado" }
    - { src: "/assets/liquidacion-sueldos/edicion-empleado-laboral.webp", alt: "Edición de los datos laborales de un empleado", caption: "Datos laborales del empleado" }
    - { src: "/assets/liquidacion-sueldos/cargo-asignado-empleado.webp", alt: "Cargo asignado a un empleado, con categoría y puntos", caption: "Cargo asignado a un empleado" }
    - { src: "/assets/liquidacion-sueldos/conceptos-asignados-empleado.webp", alt: "Conceptos de liquidación asignados a un empleado", caption: "Conceptos asignados a un empleado" }
---

## El contexto

Los Caldenes es una institución de La Pampa con dos tipos de personal muy distintos entre sí: docentes, bajo el convenio "Docentes de La Pampa", y personal de comercio, bajo el convenio de Empleados de Comercio, además de personal fuera de convenio. Cada grupo tiene su propia escala salarial, sus propios conceptos remunerativos y no remunerativos, y sus propias reglas de aportes y contribuciones. Necesitaban un sistema propio que pudiera calcular todo eso —básico, antigüedad, presentismo, aguinaldo, asignaciones familiares— sin quedar atado a una única forma de liquidar, y que además cumpliera con lo que exige AFIP: generar el Libro Sueldo Digital y presentar la información previsional en el formato que pide el organismo.

## Mi rol

Formo parte del equipo que desarrolla y mantiene el sistema desde agosto de 2024, junto a dos compañeras más. Trabajo full-stack: backend en Laravel —modelo de datos, migraciones, controladores, integración con los webservices SOAP de AFIP— y frontend en Vue vía Inertia, incluyendo buena parte del motor de cálculo de liquidación que corre del lado del cliente.

## Cómo funciona la liquidación

En vez de hardcodear las reglas de cada convenio, cada concepto de liquidación (básico, antigüedad, presentismo, SAC, asignación familiar...) se define con una fórmula editable, usando funciones propias tipo Excel (SI, MAX, MIN, ANOS_ENTRE, porcentajes de antigüedad docente) y variables reutilizables. El motor evalúa esas fórmulas dinámicamente para cada empleado y cargo, calcula el aguinaldo comparando la mejor remuneración del semestre entre convenios, y resuelve bases imponibles y aportes diferenciados por rubro (SIPA, INSSJyP, obra social, ART, asignaciones familiares). Esto permite ajustar un concepto o sumar uno nuevo cuando cambia una escala o un decreto, sin tocar el código del sistema.

## Funcionalidades principales

- **Gestión de empleados:** datos personales, AFIP, obra social, CBU, convenio, antigüedad general y docente, grupo familiar
- **Cargos y conceptos:** puestos con puntos y categoría, conceptos configurables con fórmula propia y mapeo a los códigos oficiales de AFIP
- **Liquidaciones:** mensuales, quincenas, aguinaldo, vacaciones, adelantos y liquidación final, con selección de empleados y carga de novedades
- **Recibos de sueldo:** generación en PDF (estándar y para papel foliado preimpreso) y envío por correo
- **Exportación bancaria:** archivos Excel agrupados por banco, listos para presentar en Banco de la Pampa
- **AFIP:** generación del Libro Sueldo Digital en el formato de ancho fijo que exige el organismo, y gestión de certificados digitales para los webservices

## Estado actual

El sistema está en producción y en desarrollo activo desde hace casi dos años, con mejoras constantes a pedido del cliente. Como próximo paso, me gustaría sumar tests automatizados sobre el motor de cálculo y la generación de AFIP, hoy la parte del sistema con menos cobertura.
