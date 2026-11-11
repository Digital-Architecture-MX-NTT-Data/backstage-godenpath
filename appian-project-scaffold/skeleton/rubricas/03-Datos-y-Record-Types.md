# 03 · Datos y Record Types

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Diseñar datos, acceso y sincronización con evidencia.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-03-01 · Modelo y origen

**Criterio:** Definir fuente maestra, entidades, campos, claves y relaciones antes del mapeo Appian.

- **Aplica a:** Record Types y persistencia
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación derivada de análisis de datos
- **Verificación:** Revisar diccionario y contratos de lectura/escritura.
- **Evidencia esperada:** Modelo y diccionario versionados.
- **Rol sugerido:** Datos / Appian
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-03-02 · Campos

**Criterio:** Usar camelCase, Display Name descriptivo y descripción de utilidad de cada campo.

- **Aplica a:** Campos de Record Type
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 98 · Un Display Name descriptivo
- **Verificación:** Inspeccionar configuración y correspondencia con diccionario.
- **Evidencia esperada:** Captura o export autorizado del Record Type.
- **Rol sugerido:** Desarrollo / Datos
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-03-03 · Sincronización

**Criterio:** Justificar modo y agenda de sincronización y revisar manejo de fallos; no aplicar omisión de fallos sin analizar consistencia.

- **Aplica a:** Record Types sincronizados
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 101 · saltar las sincronizaciones fallidas
- **Verificación:** Confirmar necesidad de frescura, fallo parcial y recuperación antes de aceptar la configuración.
- **Evidencia esperada:** Decisión, configuración y prueba de recuperación.
- **Rol sugerido:** Datos / Operación
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Revisar recomendación D1 de omitir fallos y Data Sync con Datos; no garantiza integridad por sí sola.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-03-04 · Seguridad y filtros

**Criterio:** Gestionar autorización en Record y campos/vistas/acciones; evitar que filtros visuales sean el único control.

- **Aplica a:** Record Types e interfaces consumidoras
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 104 · Record-Level Security
- **Verificación:** Probar acceso con roles y consultas directas autorizadas.
- **Evidencia esperada:** Matriz y pruebas positivas/negativas con datos sintéticos.
- **Rol sugerido:** Seguridad / Datos
- **Severidad propuesta si incumple:** Crítica
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-03-05 · Persistencia

**Criterio:** Revisar justificación de Data Stores y centralización de filtros en Record Types según D1.

- **Aplica a:** Data Stores y consultas
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 107 · múltiples Data Stores
- **Verificación:** Inspeccionar duplicación y decidir excepciones con Datos; no migrar automáticamente.
- **Evidencia esperada:** Inventario de fuentes y decisión de excepciones.
- **Rol sugerido:** Datos
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

