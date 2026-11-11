# 04 · Reglas y decisiones

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Hacer verificable la lógica reutilizable y sus contratos.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-04-01 · Responsabilidad

**Criterio:** Extraer lógica compleja de variables y componentes a reglas con responsabilidad delimitada.

- **Aplica a:** Expression Rules y Decisions
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 182 · Considere separar responsabilidades
- **Verificación:** Revisar dependencias, complejidad y contrato por regla.
- **Evidencia esperada:** Regla y contrato entradas/salidas, errores y consumidores.
- **Rol sugerido:** Desarrollo
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-04-02 · Pruebas mínimas

**Criterio:** Cubrir happy path y entradas nulas; añadir límites de fechas, negativos, grandes valores y arreglos según dominio.

- **Aplica a:** Expression Rules
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 175 · por lo menos 2 casos
- **Verificación:** Ejecutar casos autorizados con sintéticos y verificar esperado vs obtenido.
- **Evidencia esperada:** Casos de prueba y resultados por versión.
- **Rol sugerido:** Desarrollo / QA
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-04-03 · Consultas

**Criterio:** Evitar queryEntity/queryRecordType dentro de loops; justificar alternativas y medir volumen.

- **Aplica a:** Reglas e interfaces
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 141 · consultar en funciones loop
- **Verificación:** Inspeccionar bucles y traza de consultas en escenario representativo.
- **Evidencia esperada:** Código revisado y evidencia de evaluación.
- **Rol sugerido:** Desarrollo
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-04-04 · Funciones y comentarios

**Criterio:** Usar funciones documentadas y plugins con soporte; aclarar la frase ambigua sobre documentación de código.

- **Aplica a:** Reglas y decisiones
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 185 · No deberá documentar código
- **Verificación:** Revisar catálogo y política de comentarios antes de exigir o prohibir documentación.
- **Evidencia esperada:** Listado de dependencias y decisión aclaratoria.
- **Rol sugerido:** Líder Appian
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Aclarar «No deberá documentar código, solo ... comentarios descriptivos»; no eliminar documentación útil.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

