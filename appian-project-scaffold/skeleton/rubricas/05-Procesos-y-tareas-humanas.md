# 05 · Procesos y tareas humanas

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Controlar orquestación, decisiones y recuperación.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-05-01 · Descomposición

**Criterio:** Revisar procesos que superen 30 nodos, lógica compleja en nodos y exceso de Activity Chaining.

- **Aplica a:** Process Models
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 238 · más de 30 nodos
- **Verificación:** Contar nodos y evaluar separación según contrato, pruebas y límite confirmado.
- **Evidencia esperada:** Diagrama, conteo y decisión de descomposición.
- **Rol sugerido:** Appian / Arquitectura
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar 30 nodos como regla institucional; no confundir con límite técnico de plataforma.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-05-02 · Variables

**Criterio:** Mantener variables necesarias, revisar Hidden para información larga y limpiar cargas pesadas al finalizar.

- **Aplica a:** Process Variables
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 229 · base64, respuestas de servicios largas
- **Verificación:** Revisar ciclo de vida, visibilidad, persistencia y riesgos de datos.
- **Evidencia esperada:** Diccionario de variables y prueba de finalización.
- **Rol sugerido:** Desarrollo / Seguridad
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-05-03 · Rutas y subprocesos

**Criterio:** Seleccionar gateways por semántica y revisar patrón de inicio asíncrono y terminación de cada ruta.

- **Aplica a:** Process Models y subprocesos
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 242 · Gateway XOR
- **Verificación:** Inspeccionar caminos normales, paralelos, cancelación y errores; justificar Terminate Process cuando corresponda.
- **Evidencia esperada:** Modelo y escenarios con resultado esperado.
- **Rol sugerido:** Appian / QA
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar alcance de instrucciones D1 sobre Start Process y Terminate Process; no imponer terminación global indiscriminada.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-05-04 · Tareas y recuperación

**Criterio:** Definir actores/grupos, asignación, autorización, plazos, reintentos, cancelación y resultado incierto.

- **Aplica a:** Tareas humanas y procesos
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de contrato operativo
- **Verificación:** Revisar estados y ejecutar pruebas acotadas en ambiente autorizado.
- **Evidencia esperada:** Matriz rol–acción y casos de excepción.
- **Rol sugerido:** Negocio / Appian / QA
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-05-05 · Revisión del modelo

**Criterio:** Usar nombres descriptivos y revisar errores/recomendaciones antes de entregar el modelo.

- **Aplica a:** Process Models
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 241 · nombres por default
- **Verificación:** Inspeccionar validaciones del diseñador y justificar advertencias remanentes.
- **Evidencia esperada:** Recibo de revisión del modelo con pendientes.
- **Rol sugerido:** Desarrollo / QA
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

