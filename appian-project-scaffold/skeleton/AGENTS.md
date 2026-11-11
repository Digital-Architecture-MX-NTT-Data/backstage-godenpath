# AGENTS.md — ${{ values.name }}

Proyecto Appian: **${{ values.description }}**

## Contexto

Este repositorio es el punto de arranque para desarrollar en Appian siguiendo los estándares de Profuturo. Contiene la skill de referencia técnica y las rúbricas de evaluación.

## Antes de empezar

1. Carga la skill Appian: está en `skills/appian/SKILL.md`
2. Lee `SKILL.md` completo antes de llamar cualquier herramienta MCP de Appian
3. Verifica que tienes conexión MCP activa con Appian (ver `.mcp.json`)

## Estándares que debes seguir

Las rúbricas en `rubricas/` definen los criterios de construcción de Profuturo:

| Rúbrica | Dominio |
|---|---|
| 01-Arquitectura-y-modularidad | Responsabilidades, límites, reutilización |
| 02-Nomenclatura-y-organización | Convenciones de nombres por tipo de objeto |
| 03-Datos-y-Record-Types | Modelo de datos, relaciones, sincronización |
| 04-Reglas-y-decisiones | Lógica, expression rules, decisiones |
| 05-Procesos-y-tareas-humanas | Process models, tareas, orquestación |
| 06-Interfaces-y-branding | SAIL, Sites, accesibilidad, branding Profuturo |
| 07-Integraciones-y-Web-APIs | Connected Systems, Integrations, Web APIs |
| 08-Seguridad | Roles, grupos, permisos, record-level security |
| 09-Rendimiento | Queries, paginación, optimización |
| 10-Pruebas-y-calidad | Pruebas, evidencias, validación |
| 11-Versionado-y-despliegue | Paquetes, versiones, despliegue |
| 12-Operación-y-mantenimiento | Soporte, monitoreo, operación |

## Flujo de trabajo

1. **Planear** — Usa `skills/appian/references/change-planning.md` antes de crear objetos
2. **Construir** — Sigue el orden de dependencias del `SKILL.md`
3. **Validar** — Usa `validateExpression` antes de crear interfaces o reglas
4. **Revisar** — Evalúa contra las rúbricas de `rubricas/`
5. **Registrar** — Actualiza `catalog-info.yaml` con los componentes creados

## Límites

- No modificar objetos en producción sin autorización explícita
- No inventar UUIDs — obtenerlos siempre del entorno con list/get
- No aprobar automáticamente criterios pendientes de confirmación con Profuturo
