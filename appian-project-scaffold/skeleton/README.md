# ${{ values.title }}

${{ values.description }}

## Cómo arrancar

1. Clona este repo y ábrelo en tu IDE con Claude Code
2. Claude cargará automáticamente la skill Appian desde `skills/appian/`
3. Configura `.mcp.json` con tu token de Appian
4. Lee `AGENTS.md` para entender el flujo de trabajo

## Estructura

```
├── .claude/settings.json     # Activa la skill Appian en Claude
├── .mcp.json                 # Conexión MCP Appian + Backstage
├── skills/appian/            # Skill de referencia técnica Appian
│   ├── SKILL.md              # Instrucciones para el agente
│   ├── references/           # Patrones, convenciones y guías
│   └── registry/             # Registro de componentes SAIL
├── rubricas/                 # Estándares de construcción Profuturo
├── AGENTS.md                 # Instrucciones para el agente IA
└── catalog-info.yaml         # Registro en Backstage
```

## Estándares

Este proyecto sigue las rúbricas de construcción Appian de Profuturo (v0.1).
Ver `rubricas/` para los 52 criterios organizados en 12 dominios.
