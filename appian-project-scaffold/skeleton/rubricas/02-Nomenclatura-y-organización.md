# 02 · Nomenclatura y organización

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Aplicar convenciones por tipo y gestionar diferencias con el histórico.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-02-01 · Aplicación

**Criterio:** Nombre corto y descriptivo, descripción obligatoria y prefijo de 2–3 caracteres según D1; confirmar convivencia con prefijos históricos.

- **Aplica a:** Aplicación nueva
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 78 · El prefijo de una aplicación
- **Verificación:** Comparar ficha y convención aprobada; no renombrar objetos históricos automáticamente.
- **Evidencia esperada:** Ficha de aplicación y excepción cuando proceda.
- **Rol sugerido:** Arquitectura
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar política para NCI_OPER, NCI_MONIT y otros prefijos históricos.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-02-02 · Interfaces y reglas

**Criterio:** Prefijo, PascalCase, guion bajo, nombre único, descripción y uso de inglés según capítulo del tipo.

- **Aplica a:** Interfaces y Expression Rules
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 124 · HRO_AddNewEmployee
- **Verificación:** Inspeccionar nombres/descripciones y catálogo; contrastar con ejemplos divergentes.
- **Evidencia esperada:** Listado por UUID, convención elegida y desviaciones.
- **Rol sugerido:** Desarrollo
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-02-03 · Inputs y variables

**Criterio:** Inputs y variables con camelCase, nombre descriptivo y sufijo de tipo donde D1 lo establece.

- **Aplica a:** Rule Inputs y variables locales
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 130 · ri!folio_txt
- **Verificación:** Revisar firma, tipos, descripciones y uso real de cada variable.
- **Evidencia esperada:** Contrato de entradas y muestra de variables.
- **Rol sugerido:** Desarrollo
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-02-04 · Constantes y tipos restantes

**Criterio:** Constantes en mayúsculas con tipo; PM/Connected Systems/Sites según Title Case; revisar por separado Decision, Integration y Web API.

- **Aplica a:** Constantes, decisiones, procesos, conexiones y APIs
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 201 · HRO_INT_SUBPROCESS_ID_LIST
- **Verificación:** Comparar objeto con capítulo aplicable; documentar inconsistencias de los ejemplos.
- **Evidencia esperada:** Inventario y decisión de nomenclatura por tipo.
- **Rol sugerido:** Líder Appian
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** D1 presenta ejemplos incompatibles con algunas reglas de Web API e Integration; requiere criterio uniforme.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

