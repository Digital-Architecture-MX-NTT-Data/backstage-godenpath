# 07 · Integraciones y Web APIs

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Definir fronteras y contratos antes de construir llamadas.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-07-01 · Connected System

**Criterio:** Gestionar autenticación nativamente en Connected System y utilizarlo para URL base según D1.

- **Aplica a:** Connected Systems e Integrations
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 287 · autenticación en constantes
- **Verificación:** Inspeccionar configuración sin extraer secretos; comprobar referencia de integración.
- **Evidencia esperada:** Tipo de autenticación, dueño y configuración censurada.
- **Rol sugerido:** Integración / Seguridad
- **Severidad propuesta si incumple:** Crítica
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-07-02 · Contrato

**Criterio:** Registrar proveedor/consumidor, inputs, outputs, códigos, esquema y versión por operación.

- **Aplica a:** Integration y Web API
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de contratos INT-ID
- **Verificación:** Contrastar contrato con objeto y pruebas de ambos extremos.
- **Evidencia esperada:** INT-ID, esquema y ejemplos sintéticos.
- **Rol sugerido:** Integración
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-07-03 · Fallos y repetición

**Criterio:** Definir timeout, reintentos, idempotencia y conciliación según operación; no inventar valores.

- **Aplica a:** Llamadas síncronas/asíncronas
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de resiliencia
- **Verificación:** Revisar errores técnicos/negocio y resultado incierto en pruebas autorizadas.
- **Evidencia esperada:** Tabla de fallos, fuente de umbrales y pruebas.
- **Rol sugerido:** Integración / QA
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-07-04 · Exposición

**Criterio:** Acordar permisos, autenticación/autorización y consumidores de Web API; no inferirlos del objeto existente.

- **Aplica a:** Web APIs
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de seguridad de frontera
- **Verificación:** Validar solicitudes autorizadas y rechazadas con entorno de prueba.
- **Evidencia esperada:** Matriz de permisos y contrato sin credenciales.
- **Rol sugerido:** Seguridad / Integración
- **Severidad propuesta si incumple:** Crítica
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

