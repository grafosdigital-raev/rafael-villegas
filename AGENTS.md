# AGENTS.md — Protocolo obligatorio de continuidad

Versión: 1.0
Fecha: 2026-09-20

Este archivo define cómo debe trabajar cualquier IA o agente dentro de este repositorio.

## Antes de hacer cualquier trabajo

Leer, en este orden:

1. README.md
2. PROJECT_CONTEXT.md
3. BRAND.md
4. DESIGN.md
5. STATUS.md, si existe
6. PENDING.md, si existe
7. CHANGELOG.md, si existe
8. documentación específica del módulo afectado
9. código/assets vigentes

No comenzar generando. Primero comprender el estado actual.

## Regla de continuidad

Antes de modificar algo, responder internamente:

- ¿Qué está terminado?
- ¿Qué está pendiente?
- ¿Cuál fue la última decisión?
- ¿Qué no debe romperse?
- ¿Cuál es el siguiente hito verificable?

## Durante el trabajo

- Preservar decisiones aprobadas.
- Evitar reconstrucciones innecesarias.
- Distinguir idea, decisión, implementación y validación.
- No inventar estados, credenciales, precios, métricas ni datos.
- Priorizar entregables terminados sobre nuevas ideas.
- Mantener cambios reversibles cuando sea posible.

## Al terminar cada sesión de trabajo

Actualizar obligatoriamente:

### STATUS.md
Estado actual del proyecto, porcentaje operativo estimado, último hito y siguiente hito.

### PENDING.md
Pendientes reales, separados por:
- P0 — bloquea venta/producción/entrega
- P1 — importante esta semana
- P2 — mejora posterior
- P3 — idea / exploración

### CHANGELOG.md
Registrar:
- fecha
- qué se hizo de forma tangible
- archivos/sistemas modificados
- decisiones tomadas
- pruebas realizadas
- resultado
- pendientes abiertos

## Definición de terminado

Una tarea no está "terminada" porque:
- se discutió;
- existe un prompt;
- hay un prototipo;
- una IA dijo que funcionaría.

Está terminada cuando existe un resultado verificable y, cuando aplica:
- está implementado;
- está probado;
- está conectado;
- está documentado;
- tiene responsable/siguiente paso;
- está listo para usuario/cliente.

## Prioridad

Cuando haya tensión entre investigar algo nuevo y cerrar un pendiente ya avanzado:

> cerrar primero lo que ya puede producir valor, salvo que exista un bloqueo real.

## Production OS

Este repositorio participa en un sistema central de producción. Cuando exista el repositorio maestro Production OS, su índice y prioridades globales prevalecerán para secuenciar el trabajo, sin sustituir la verdad técnica específica de este proyecto.
