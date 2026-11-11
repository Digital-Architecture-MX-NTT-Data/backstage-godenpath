# 09 · Rendimiento

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Medir escenarios reales sin convertir referencias en promesas universales.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-09-01 · Evaluación local

**Criterio:** D1 menciona 200ms para variables locales; definir método, volumen, ambiente y tratamiento de dependencias.

- **Aplica a:** Interfaces y reglas
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 144 · 200 ms
- **Verificación:** Medir evaluaciones repetidas y guardar condiciones y resultados.
- **Evidencia esperada:** Medición reproducible y umbral acordado.
- **Rol sugerido:** Appian / QA
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar 200ms, estadístico y alcance; no prometer SLA extremo a extremo con este valor.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-09-02 · Tamaño de interfaz

**Criterio:** Al superar 700 líneas, considerar modularización según D1.

- **Aplica a:** Interfaces
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 145 · 700 líneas
- **Verificación:** Revisar responsabilidades y mantenibilidad; justificar separación o excepción.
- **Evidencia esperada:** Conteo, revisión y decisión.
- **Rol sugerido:** Líder Appian
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Es criterio de revisión; confirmar si se adopta como recomendación o requisito.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-09-03 · Consultas y carga

**Criterio:** Evitar consultas en bucle y pasar solo los campos requeridos; medir paginación y carga.

- **Aplica a:** Interfaces y reglas
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 143 · campos requeridos
- **Verificación:** Reutilizar APP-04-03 y medir consultas con tamaños representativos.
- **Evidencia esperada:** Traza y medición con datos sintéticos.
- **Rol sugerido:** Appian / Datos
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-09-04 · Capacidad

**Criterio:** Acordar volumen, concurrencia, latencia y degradación por capacidad antes de afirmar desempeño.

- **Aplica a:** Aplicación y fronteras
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de capacidad
- **Verificación:** Diseñar prueba y comparar contra objetivos confirmados.
- **Evidencia esperada:** Escenarios, entorno y resultados.
- **Rol sugerido:** Arquitectura / QA
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

