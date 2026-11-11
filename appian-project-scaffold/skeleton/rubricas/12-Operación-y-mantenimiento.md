# 12 · Operación y mantenimiento

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Acordar limpieza, tiempos, alertas y soporte antes de operar.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-12-01 · Retención de procesos

**Criterio:** D1 propone eliminación padre/hijo/asíncrono a 3/2/1 días; validar necesidad legal, soporte y recuperación antes de configurar.

- **Aplica a:** Instancias y políticas de limpieza
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 249 · Procesos Padre
- **Verificación:** Contrastar política documental y necesidad de consulta; conservar excepciones.
- **Evidencia esperada:** Política aprobada y configuración por tipo.
- **Rol sugerido:** Operación / Seguridad
- **Severidad propuesta si incumple:** Crítica
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** No aplicar automáticamente 3/2/1 días; confirmar retención, auditoría y obligaciones con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-12-02 · Deadlines

**Criterio:** D1 indica 30 días para todos los procesos; verificar alcance, acción al vencer y SLA por tipo.

- **Aplica a:** Process Models e instancias
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 258 · Política de Deadlines
- **Verificación:** Revisar procesos largos, escalamiento y expiración con Negocio.
- **Evidencia esperada:** Matriz de plazos y decisión de excepción.
- **Rol sugerido:** Negocio / Operación
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar que 30 días aplica al proceso y contexto; no cancelar indiscriminadamente.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-12-03 · Alertas

**Criterio:** D1 cita NCI_OPER_GROUPS_ALERTS_ERROR; acordar receptor y ruteo por aplicación sin reutilizarlo por defecto.

- **Aplica a:** Alertas de procesos
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 271 · NCI_OPER_GROUPS_ALERTS_ERROR
- **Verificación:** Inspeccionar constante/grupo y probar entrega con autorización.
- **Evidencia esperada:** Matriz de alertas y evidencia sin datos sensibles.
- **Rol sugerido:** Operación / Appian
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar receptor institucional; la constante específica del histórico no es un estándar global.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-12-04 · Soporte

**Criterio:** Definir runbook, diagnóstico, propietario y atención de incidencias de componentes compartidos.

- **Aplica a:** Aplicaciones, datos e integraciones
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de operación modular
- **Verificación:** Simular incidente en entorno autorizado y rastrear objeto/correlación.
- **Evidencia esperada:** Runbook, contactos por rol y prueba.
- **Rol sugerido:** Operación
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

