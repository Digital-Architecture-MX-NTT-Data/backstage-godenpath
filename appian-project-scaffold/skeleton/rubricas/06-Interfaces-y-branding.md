# 06 · Interfaces y branding

Versión 0.1 · 03/11/2026 · Borrador para revisión de Arquitectura

Generado por Luis Hector Lopez Dominguez · Arquitecto Gen AI

## Objetivo

Aplicar la guía visual respetando capacidades nativas y decisiones de UX.

## Uso

Evaluar cada objeto o módulo aplicable. Los roles y severidades son sugeridos. La recepción de D1/D2 no acredita aprobación. No ejecutar modificaciones o pruebas con efectos en Dev solo por leer este documento.

## APP-06-01 · Tipografía y color

**Criterio:** Referencia D2: Open Sans 14px, peso 600 para títulos y 400 para texto; paleta documentada. Validar equivalencias nativas.

- **Aplica a:** Interfaces y componentes comunes
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D2 · texto extraído, línea 109 · Open Sans
- **Verificación:** Comparar pantalla renderizada con D2 p3 y configuración institucional.
- **Evidencia esperada:** Capturas, componente usado y decisión UX.
- **Rol sugerido:** UX / Appian
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia y traducción a opciones nativas; no prometer control CSS de píxel en todo SAIL.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-06-02 · Retícula

**Criterio:** Referencia D2: separación 8px, títulos-tablas 13px y márgenes 23×17px; verificar representación visual nativa.

- **Aplica a:** Layout y formularios
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D2 · texto extraído, línea 79 · Los márgenes son de
- **Verificación:** Comparar pantallas representativas y tamaños de ventana.
- **Evidencia esperada:** Capturas por viewport y equivalencias aceptadas.
- **Rol sugerido:** UX
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar interpretación de medidas frente a componentes nativos y responsive.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-06-03 · Tablas y encabezados

**Criterio:** Aplicar estilo de encabezado, alineación de importes/acciones y tratamiento de totales conforme a D2 p5.

- **Aplica a:** Grids y cabeceras
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D2 · texto extraído, línea 280 · contenido en pesos
- **Verificación:** Revisar filas largas, vacíos, catálogos, cantidades y pantallas pequeñas.
- **Evidencia esperada:** Capturas y escenarios de contenido variable.
- **Rol sugerido:** UX / QA
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-06-04 · Acciones y confirmación

**Criterio:** Etiquetas en infinitivo/mayúsculas, prioridad visual y mensajes que identifiquen acción y objeto.

- **Aplica a:** Botones, tareas y mensajes
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D2 · texto extraído, línea 391 · Las etiquetas deben ir
- **Verificación:** Revisar acción principal/secundaria, deshabilitados y aceptación de tarea sin ejecutar negocio real.
- **Evidencia esperada:** Flujo UX, textos y prueba de permisos/estado.
- **Rol sugerido:** UX / Negocio
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-06-05 · Reutilización y accesibilidad

**Criterio:** Revisar componentes comunes, etiquetas, teclado, foco y lectura de errores; acordar criterios de accesibilidad.

- **Aplica a:** Interfaces, Sites y tareas
- **Base:** Recomendación de gobierno; pendiente de acuerdo
- **Fuente:** Recomendación de calidad UX
- **Verificación:** Probar navegación sin ratón y mensajes comprensibles en escenarios representativos.
- **Evidencia esperada:** Lista de escenarios y capturas.
- **Rol sugerido:** UX / QA
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Acordar estándar y alcance de accesibilidad con Profuturo; no declarar conformidad sin evaluación.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

## APP-06-06 · Datos de prueba

**Criterio:** Preparar valores de prueba suficientes para visualizar interfaz completa sin incrustar datos reales o defaults operativos peligrosos.

- **Aplica a:** Interfaces
- **Base:** Documentado recibido; vigencia por confirmar
- **Fuente:** D1 · texto extraído, línea 139 · valores de prueba seteados
- **Verificación:** Distinguir configuración de prueba de valores que llegan a ejecución.
- **Evidencia esperada:** Inputs sintéticos y pantalla de prueba.
- **Rol sugerido:** Desarrollo / QA
- **Severidad propuesta si incumple:** Mayor
- **Aceptación:** Cumple cuando la evidencia demuestra el criterio aplicable y su versión acordada; una excepción requiere decisión explícita.
- **Por confirmar:** Confirmar vigencia, alcance y aceptación con Profuturo.

**Evaluación a completar:** objeto UUID [___]; módulo [___]; trámites relacionados [___]; resultado [Sin evaluar / Cumple / Parcial / No cumple / No aplica / Pendiente de confirmar]; evidencia y versión [___]; hallazgo [___]; responsable [___]; fecha [___]; excepción [___].

