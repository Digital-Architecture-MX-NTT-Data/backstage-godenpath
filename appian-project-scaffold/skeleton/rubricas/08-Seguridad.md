# 08 · Seguridad

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Controlar permisos, protección de información y evidencia de autorización.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-08-01 · Grupos

**Criterio:** Definir perfiles y mínimo privilegio; usar Users/Admins como base D1, sin asumir que dos grupos bastan.

- **Aplica a:** Aplicaciones y objetos
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 84 · 2 grupos principales
- **Verificación:** Revisar matriz rol–objeto–acción y grupos heredados.
- **Evidencia esperada:** Matriz, aprobación y pruebas por perfil.
- **Rol sugerido:** Seguridad
- **Severidad propuesta si incumple:** Crítica
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-08-02 · Autorización de datos

**Criterio:** Probar separación de registros, campos y acciones por usuario/rol.

- **Aplica a:** Record Types y consumidores
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 104 · Field-Level Security
- **Verificación:** Reutilizar evidencia APP-03-04; comprobar casos negativos además de ocultamiento visual.
- **Evidencia esperada:** Resultados de acceso por rol y versión.
- **Rol sugerido:** Seguridad / QA
- **Severidad propuesta si incumple:** Crítica
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-08-03 · Secretos

**Criterio:** Evitar credenciales en constantes, ejemplos, logs y documentos; acordar custodia y rotación.

- **Aplica a:** Integraciones y configuración
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 287 · autenticación en constantes
- **Verificación:** Reutilizar APP-07-01; revisar registros censurados y referencias.
- **Evidencia esperada:** Evidencia sin valores sensibles y responsable.
- **Rol sugerido:** Seguridad
- **Severidad propuesta si incumple:** Crítica
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-08-04 · Datos y auditoría

**Criterio:** Acordar clasificación, retención, trazas y acceso a evidencia; no inferir normativa por el sector.

- **Aplica a:** Datos y documentos
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de gobierno de información
- **Verificación:** Confirmar categorías, obligaciones aplicables y acceso permitido.
- **Evidencia esperada:** Política fuente, decisión y pruebas.
- **Rol sugerido:** Seguridad / Datos
- **Severidad propuesta si incumple:** Crítica
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

