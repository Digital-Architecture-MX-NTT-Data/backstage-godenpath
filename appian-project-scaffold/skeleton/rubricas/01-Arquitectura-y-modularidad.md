# 01 · Arquitectura y modularidad

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Definir responsabilidades técnicas, límites y reutilización sin asignar exclusividad por trámite.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-01-01 · Capacidades y límites

**Criterio:** Asignar cada capacidad a un componente y un responsable; relacionar trámites como consumidores sin imponer propiedad exclusiva.

- **Aplica a:** Aplicaciones, módulos y objetos compartidos
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Atlas previo: vistas Ecosistema y Repos
- **Verificación:** Revisar mapa capacidad–componente–trámite y decisión de límites.
- **Evidencia esperada:** Mapa y decisión de Arquitectura con responsables.
- **Rol sugerido:** Arquitectura
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-01-02 · Identidad y dependencias

**Criterio:** Registrar UUID, aplicaciones asociadas y referencias reales antes de declarar una dependencia o propiedad.

- **Aplica a:** Todos los objetos reutilizados
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Evidencia Dev D01–D07; referencias por confirmar
- **Verificación:** Contrastar UUID y Used By / Depends On; separar nombre, descripción y referencia.
- **Evidencia esperada:** Inventario por UUID y captura de referencias.
- **Rol sugerido:** Arquitectura / Desarrollo
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-01-03 · Librería transversal

**Criterio:** Identificar interfaces comunes o transversales y su librería de reutilización autorizada.

- **Aplica a:** Interfaces comunes
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 122 · Si es una interfaz común
- **Verificación:** Consultar catálogo, ubicación, consumidores y responsable.
- **Evidencia esperada:** Objeto, librería y consumidores identificados.
- **Rol sugerido:** Líder Appian
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-01-04 · Organización inicial

**Criterio:** Definir carpetas por tipo principal y grupos Users/Admins conforme al alcance confirmado.

- **Aplica a:** Aplicaciones nuevas
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 83 · Folder por cada tipo principal
- **Verificación:** Inspeccionar estructura y grupos sin modificar permisos.
- **Evidencia esperada:** Inventario de carpetas y matriz de acceso.
- **Rol sugerido:** Líder Appian / Seguridad
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

