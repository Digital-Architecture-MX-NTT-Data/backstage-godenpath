# 11 · Versionado y despliegue

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Versionar componentes y coordinar paquetes con su análisis de impacto.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-11-01 · Identidad y consumidores

**Criterio:** Mantener inventario UUID–capacidad–responsable–consumidores para cada versión entregada.

- **Aplica a:** Objetos y componentes compartidos
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Atlas previo y análisis de repositorios
- **Verificación:** Verificar referencias y cambios; no tratar prefijo como propiedad.
- **Evidencia esperada:** Manifiesto por versión y matriz de impacto.
- **Rol sugerido:** Líder Appian / DevOps
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-11-02 · Repositorio y paquete

**Criterio:** Acordar estructura Git y paquetes Appian sin exigir un repo exclusivo por trámite.

- **Aplica a:** Código/export y configuración
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de organización técnica
- **Verificación:** Revisar cohesión, reutilización y estrategia de versiones con Arquitectura.
- **Evidencia esperada:** Decisión de organización y contrato de entrega.
- **Rol sugerido:** Arquitectura / DevOps
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-11-03 · Promoción

**Criterio:** Registrar precedentes, diferencias por ambiente, inspección de paquete y responsable antes de promover.

- **Aplica a:** Paquetes Appian
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de control de promoción
- **Verificación:** Revisar dependencias y configuración; no ejecutar despliegue por completar rúbrica.
- **Evidencia esperada:** Inspección, inventario y aprobación por ambiente.
- **Rol sugerido:** DevOps / Appian
- **Severidad propuesta si incumple:** Crítica
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-11-04 · Recuperación

**Criterio:** Planificar recuperación ante fallo de objetos, datos e integraciones; no asumir reversión automática.

- **Aplica a:** Release y migraciones
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de continuidad
- **Verificación:** Revisar compatibilidad y ensayar recuperación en ambiente autorizado.
- **Evidencia esperada:** Plan, precondiciones, prueba y responsable.
- **Rol sugerido:** Operación / DevOps
- **Severidad propuesta si incumple:** Crítica
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

