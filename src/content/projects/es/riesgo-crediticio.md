---
title: "Riesgo crediticio explicable"
kicker: "IA · Machine Learning · Facultad"
summary: "Un modelo de machine learning que predice si una solicitud de crédito sería aprobada o rechazada según la política vigente de una cooperativa, y deja a la vista qué reglas está aplicando."
cardSummary: "Árbol de decisión que predice la aprobación de créditos de una cooperativa con 84,82 % de precisión. Elegido por ser explicable: cada decisión se puede leer como una regla."
order: 0
categories: [ia]
tags: ["Python", "Scikit-Learn", "Pandas", "EDA", "Árboles de decisión", "Validación cruzada"]
cover: { src: "/assets/riesgo-crediticio/cover.svg", alt: "Esquema del árbol de decisión: primero evalúa si el cliente es moroso y después si la cuota supera el 30 % del ingreso", fit: "cover" }
hero: { fit: "cover", images: [ { src: "/assets/riesgo-crediticio/cover.svg", alt: "Esquema del árbol de decisión: primero evalúa si el cliente es moroso y después si la cuota supera el 30 % del ingreso" } ] }
stats:
  - { value: "84,82 %", label: "Precisión · clase Aprobado" }
  - { value: "5-Fold", label: "Validación cruzada estratificada" }
  - { value: "962", label: "Solicitudes analizadas" }
facts:
  - { label: "Tipo", value: "Proyecto de facultad" }
  - { label: "Materia", value: "Laboratorio de Inteligencia Artificial" }
  - { label: "Fecha", value: "Octubre 2026" }
  - { label: "Cliente objetivo", value: "Cooperativa de crédito" }
  - { label: "Equipo", value: "Lourdes Ibañez · Vanesa Contreras" }
  - { label: "Facultad", value: "Ingeniería · UNLPam" }
  - { label: "Aprendizaje", value: "Supervisado · clasificación binaria" }
  - { label: "Stack", value: "Python · Pandas · Scikit-Learn" }
---

## El desafío

Una cooperativa de crédito recibe solicitudes todos los días y necesita responder una pregunta concreta: **¿esta solicitud nueva sería aprobada o rechazada según la política vigente, y qué reglas se están aplicando?**

La segunda mitad de la pregunta es tan importante como la primera. En una entidad financiera no alcanza con un modelo que "acierte": hay que poder explicarle la decisión a un oficial de crédito, a un auditor o al propio socio. Por eso, desde el principio, la explicabilidad fue un requisito y no un extra.

Lo trabajé junto a Vanesa Contreras en la Facultad de Ingeniería (UNLPam), con un dataset de **962 solicitudes** con variables socioeconómicas y crediticias.

## Qué nos dijeron los datos

Antes de modelar, hicimos un análisis exploratorio para entender cómo es el cliente típico y qué variables pesan en la decisión.

**El cliente típico** gana alrededor de $780.000 y pide unos $1,5 millones, casi el doble de su sueldo. Las dos distribuciones tienen sesgo positivo (pocos valores muy altos a la derecha que tiran el promedio para arriba), así que usamos la **mediana** para describirlas.

<figure class="chart">
  <a href="/assets/riesgo-crediticio/histograma.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/histograma.png" alt="Histogramas del ingreso mensual (mediana 0,78 millones) y del monto solicitado (mediana 1,51 millones), ambos con sesgo hacia la derecha" loading="lazy"></a>
  <figcaption>Ingreso y monto solicitado: en los dos casos la media queda a la derecha de la mediana por los valores extremos.</figcaption>
</figure>

**Ninguna variable numérica decide sola.** La correlación más alta es entre el monto solicitado y la relación cuota-ingreso (r = 0,33): a mayor monto, más pesa la cuota sobre el sueldo. En cambio, lo que gana un cliente y lo que pide prestado prácticamente no se relacionan (r = −0,04).

<figure class="chart">
  <a href="/assets/riesgo-crediticio/correlacion.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/correlacion.png" alt="Matriz de correlación entre edad, ingreso, antigüedad laboral, monto, cuotas y relación cuota-ingreso" loading="lazy"></a>
  <figcaption>Matriz de correlación de las variables numéricas.</figcaption>
</figure>

**A mayor monto, más rechazos.** Al separar las solicitudes por resultado, los montos más altos se concentran del lado de los rechazados (r = −0,27 entre monto y aprobación).

<figure class="chart">
  <a href="/assets/riesgo-crediticio/dispersion.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/dispersion.png" alt="Dispersión entre ingreso y monto sin patrón claro, y montos solicitados separados por resultado: los rechazados llegan a montos mucho más altos" loading="lazy"></a>
  <figcaption>Izquierda: ingreso vs. monto, sin relación lineal. Derecha: los montos más altos terminan rechazados.</figcaption>
</figure>

**El historial de mora es casi determinante:** de 140 solicitudes de clientes morosos, se rechazaron 134 (el 96 %).

<figure class="chart">
  <a href="/assets/riesgo-crediticio/historial.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/historial.png" alt="Barras de aprobados y rechazados por historial: cumplidores 365 aprobados y 130 rechazados, morosos 6 aprobados y 134 rechazados, sin antecedentes 188 aprobados y 80 rechazados" loading="lazy"></a>
  <figcaption>Aprobados y rechazados según historial crediticio.</figcaption>
</figure>

**Ganar más ayuda, pero no alcanza.** Los aprobados tienen un ingreso mediano algo mayor (unos $840.000 contra $700.000), pero los rangos se superponen casi por completo: hay muchos rechazados que ganan más que muchos aprobados.

<figure class="chart">
  <a href="/assets/riesgo-crediticio/ingresos.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/ingresos.png" alt="Boxplot del ingreso mensual de aprobados y rechazados, con medianas cercanas y rangos superpuestos" loading="lazy"></a>
  <figcaption>Ingreso mensual de aprobados y rechazados.</figcaption>
</figure>

Esa fue la conclusión clave para elegir el modelo: como ninguna variable explica la decisión por sí sola, hacía falta uno capaz de combinar varias reglas a la vez.

## Estrategia de limpieza

Dos variables tenían muchos datos faltantes, y las tratamos de forma distinta según cuánto aportaban al problema:

- **`relacion_cuota_ingreso` → imputación con la mediana.** Le faltaba cerca del 40 % de los registros, pero es la variable que mejor mide la capacidad de pago. Eliminarla habría significado perder justo la señal más importante (y, como se ve más abajo, terminó siendo la segunda regla del árbol), así que completamos los vacíos con la mediana, que es robusta frente a los valores extremos.
- **`nro_sucursal` → eliminada.** Le faltaba más del 83 % de los datos y, además, la sucursal no dice nada sobre el riesgo de la persona. Imputar ahí solo habría agregado ruido.
- **Registros sin fecha → eliminados.** Fueron las únicas filas que sacamos del dataset; el resto de las variables de riesgo se conservaron.

## Modelo y resultados

Planteamos el problema como **aprendizaje supervisado de clasificación binaria** (aprobado / rechazado) y elegimos un **árbol de decisión** (`DecisionTreeClassifier` de Scikit-Learn, con profundidad máxima 5) por dos motivos:

1. **Es explicable:** cada predicción se puede leer como una secuencia de reglas del tipo *si… entonces…*, que cualquier persona del área de créditos puede entender y discutir, y que permite justificarle el rechazo al socio.
2. **No asume relaciones lineales**, algo clave cuando el análisis exploratorio ya mostró que ninguna variable se relaciona linealmente con la decisión.

<figure class="chart">
  <a href="/assets/riesgo-crediticio/arbol.png" target="_blank" rel="noopener"><img src="/assets/riesgo-crediticio/arbol.png" alt="Primeros tres niveles del árbol de decisión: el primer corte es si el cliente es moroso, el segundo si la relación cuota-ingreso supera 0,301, y después la cantidad de cuotas y el monto" loading="lazy"></a>
  <figcaption>Primeros 3 niveles del árbol. Verde: el nodo predice Aprobado; lila: Rechazado. Tocá la imagen para verla en grande.</figcaption>
</figure>

**¿Por qué priorizar la precisión?** Para la cooperativa, el error más caro es el **falso positivo**: aprobarle un crédito a alguien que después no puede pagarlo. Por eso optimizamos la **precisión de la clase "Aprobado"**: cuando el modelo dice "aprobar", queremos que se equivoque lo menos posible, aunque eso implique ser más conservador con algunos casos dudosos.

Para no depender de una sola partición de los datos, validamos con **validación cruzada estratificada de 5 folds** (cada fold respeta la proporción de aprobados y rechazados). El resultado: una **precisión promedio del 84,82 %**.

## De los datos a reglas de negocio

Leyendo los primeros niveles del árbol, la política de la cooperativa se resume en tres reglas:

<div class="rules">
  <div class="rule"><b>01 · Mora primero</b>Es el primer corte del árbol: el 96 % de las solicitudes de clientes morosos termina rechazada. Conviene evaluarlo antes que cualquier otra variable.</div>
  <div class="rule"><b>02 · La cuota, hasta el 30 %</b>Si el cliente no es moroso y la cuota se lleva hasta el 30 % de su ingreso, se aprueba el 82 % de las veces. Si supera ese 30 %, se rechaza el 90 %.</div>
  <div class="rule"><b>03 · Ojo con los plazos cortos</b>Aun con la cuota bajo control, las solicitudes a 9 cuotas o menos se aprueban solo el 48 % de las veces, contra el 86 % con más cuotas. Plazos cortos y montos altos merecen una revisión más cuidadosa.</div>
</div>

## Próximos pasos

- Probar distintas profundidades máximas (`max_depth`) y criterios de división para optimizar todavía más la precisión.
- Comparar el árbol con otros modelos, como **Random Forest**, para ver si se puede subir la precisión sin perder demasiada explicabilidad.
