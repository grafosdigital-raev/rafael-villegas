# Rafael Villegas — Marca Personal

**Repositorio maestro del ecosistema Rafael Villegas — Marca Personal.**  
**Versión de arquitectura:** 1.0  
**Fecha de establecimiento:** 2026-09-20  
**Visibilidad esperada:** public

---

## 1. Propósito de este repositorio

Este repositorio es la **fuente versionada de verdad técnica, visual y operativa** para Rafael Villegas — Marca Personal.

No es solamente un lugar para guardar código. Su función es permitir que distintas personas y agentes de IA —ChatGPT, Codex, OpenDesign, Gemini, Claude u otros— trabajen sobre el mismo contexto, respeten las decisiones ya tomadas y puedan evolucionar el proyecto sin reconstruir su identidad en cada sesión.

Este repositorio gobierna los activos públicos de la marca personal Rafael Villegas. Debe mantener integrada su intersección entre desarrollo humano, estrategia, liderazgo, marketing, transformación digital e inteligencia artificial sin reducirla a una sola etiqueta profesional.

Principio rector:

> **Comprender antes de modificar. Preservar antes de reemplazar. Documentar antes de olvidar.**

---

## 2. Cómo debe leer este repositorio una IA

Antes de diseñar, escribir, programar, refactorizar o proponer cambios, un agente debe leer en este orden:

1. **`README.md`** — explica la naturaleza, intención y reglas generales del repositorio.
2. **`PROJECT_CONTEXT.md`** — explica qué es el proyecto, su arquitectura, alcance, prioridades y restricciones.
3. **`BRAND.md`** — define identidad, narrativa, voz, personalidad, posicionamiento y principios de marca.
4. **`DESIGN.md`** — contrato visual que debe gobernar interfaces, páginas, presentaciones y otros artefactos.
5. Documentos específicos del módulo o carpeta en la que se trabajará.
6. Código, assets, configuraciones y changelog existentes.

Una IA **no debe empezar por generar**. Primero debe entender qué existe.

---

## 3. Jerarquía de verdad

Cuando exista información contradictoria, utilizar este orden:

1. Instrucción actual y explícita de Rafael Villegas.
2. Decisión reciente documentada específicamente para el proyecto.
3. `PROJECT_CONTEXT.md`.
4. `BRAND.md`.
5. `DESIGN.md`.
6. Documentación histórica.
7. Inferencias del agente.

Una inferencia nunca debe presentarse como una decisión ya tomada.

---

## 4. Archivos raíz

### `README.md`
Manual de entrada al repositorio.

### `PROJECT_CONTEXT.md`
Contexto funcional y estratégico. Explica qué se está construyendo, cómo se relacionan las piezas y qué debe preservarse.

### `BRAND.md`
ADN de marca: propósito, posicionamiento, voz, narrativa, audiencias y reglas de comunicación.

### `DESIGN.md`
Contrato visual consumible por OpenDesign y otros agentes de diseño/desarrollo.

No sustituye a los assets aprobados. Un logo, fotografía o pieza visual existente no debe reinterpretarse sin una razón documentada.

---

## 5. Estructura recomendada

```text
/
├── README.md
├── PROJECT_CONTEXT.md
├── BRAND.md
├── DESIGN.md
│
├── docs/
│   ├── decisions/
│   ├── architecture/
│   ├── research/
│   └── changelog/
│
├── design/
│   ├── references/
│   ├── components/
│   └── prototypes/
│
├── assets/
│   ├── brand/
│   ├── images/
│   ├── icons/
│   └── media/
│
├── src/
│   └── ... código del proyecto cuando aplique
│
└── archive/
    └── material histórico que ya no gobierna el proyecto
```

Las carpetas se crean cuando exista contenido real. **No crear estructura vacía por estética.**

---

## 6. Forma de trabajo

El patrón preferido es:

> **Contexto → Decisión → Diseño → Construcción → Auditoría → Humano → Publicación**

### Para cambios visuales
1. Leer `DESIGN.md`.
2. Revisar el estado actual.
3. Identificar qué debe conservarse.
4. Proponer o construir sobre lo existente.
5. Validar móvil, accesibilidad y consistencia de marca.
6. Documentar cambios relevantes.

### Para cambios de contenido
1. Leer `BRAND.md`.
2. Respetar la voz y nomenclatura.
3. No inventar datos, testimonios, resultados, precios, credenciales o fechas.
4. Separar borrador, decisión aprobada y contenido publicado.

### Para cambios técnicos
1. Leer `PROJECT_CONTEXT.md`.
2. Evitar sobreingeniería.
3. Proteger lo que ya funciona.
4. Preferir componentes reutilizables.
5. Mantener trazabilidad.
6. No introducir una herramienta nueva si no resuelve un problema real.

---

## 7. Uso con OpenDesign

Este repositorio está preparado para funcionar como **fuente de contexto versionada** para OpenDesign.

Flujo esperado:

```text
GitHub
   ↓
clon local
   ↓
README.md
PROJECT_CONTEXT.md
BRAND.md
DESIGN.md
assets/
   ↓
OpenDesign
   ↓
prototipo / sitio / interfaz / documento / presentación
   ↓
Codex / Gemini / otro agente
   ↓
implementación
   ↓
commit
```

### Regla importante
OpenDesign no es la fuente maestra del conocimiento.

**GitHub lo es.**

OpenDesign interpreta el sistema de diseño y genera artefactos. Las decisiones persistentes deben regresar al repositorio.

---

## 8. Trabajo con múltiples IAs

Distintas IAs pueden participar sin competir por una “versión propia” del proyecto.

Ejemplo:

```text
ChatGPT  → estrategia / arquitectura / integración
Codex    → ingeniería / implementación
OpenDesign → diseño / prototipado / producción visual
Gemini   → análisis / construcción / alternativa
Claude   → auditoría / documentación / profundidad
```

Los roles pueden variar. Lo importante es que **todos consuman la misma fuente de verdad**.

Si una IA descubre una mejora importante, debe:

1. explicar el problema;
2. distinguir observación de decisión;
3. preservar el ADN existente;
4. documentar la decisión aceptada.

---

## 9. Qué NO debe hacer una IA

- No reconstruir el proyecto desde cero porque “puede hacerlo mejor”.
- No sustituir decisiones aprobadas por preferencias propias.
- No inventar información faltante.
- No introducir frameworks, plugins o servicios sin necesidad.
- No mezclar el ADN de otros ecosistemas.
- No publicar directamente cambios sensibles sin revisión humana.
- No convertir documentación histórica en verdad vigente si existe una decisión posterior.
- No guardar secretos, tokens, contraseñas o credenciales dentro del repositorio.

---

## 10. Privacidad y seguridad

Este repositorio es público. Solo debe contener información apta para publicación. Nunca almacenar aquí información financiera privada, datos personales sensibles, clientes confidenciales, credenciales, infraestructura privada o contexto interno que no deba hacerse público.

Los archivos de entorno y secretos deben mantenerse fuera del control de versiones.

---

## 11. Alcance de Rafael Villegas — Marca Personal

Ámbitos públicos:
- coaching ontológico, transformacional y sistémico;
- liderazgo;
- desarrollo organizacional;
- talleres y conferencias;
- consultoría;
- estrategia digital;
- IA aplicada con criterio humano;
- contenido y posicionamiento.

La marca personal funciona como puente humano entre eXeT y Funnel-IA, pero conserva identidad propia.

---

## 12. Reglas particulares

- Principio: **CONCIENCIA · ACCIÓN · RESULTADOS**.
- Evitar estética de "coach motivacional genérico".
- Evitar estética de consultoría corporativa genérica.
- Evitar convertir la marca personal en una startup de IA.
- Priorizar humanidad, criterio, profundidad y acción.
- Este repositorio es público: únicamente información publicable.

---

## 13. Filosofía de continuidad

Este repositorio debe permitir que cualquier colaborador humano o agente pueda entrar meses después y responder rápidamente:

- ¿Qué estamos construyendo?
- ¿Por qué existe?
- ¿Cómo debe sentirse?
- ¿Qué decisiones ya fueron tomadas?
- ¿Qué puedo modificar?
- ¿Qué debo preservar?
- ¿Cuál es la siguiente prioridad?

Si esa respuesta no está clara, la documentación debe mejorarse.

---

## 14. Principio final

> **Idea → Decisión → Arquitectura → Construcción → Sistema → Activo → Resultado**

El objetivo no es acumular documentación ni tecnología.

El objetivo es construir activos consistentes, reutilizables y capaces de evolucionar sin perder su identidad.
