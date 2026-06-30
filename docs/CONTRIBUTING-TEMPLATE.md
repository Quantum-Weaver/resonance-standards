# Contributing to [Project Name]

Welcome. This guide tells you how we build.

---

## The Four-Thread Methodology

| Thread | Function |
|--------|----------|
| **A — Root (Aethelred)** | Architectural memory, design philosophy, continuity |
| **B — Researcher** | Web search, external knowledge, competitive analysis |
| **C — Archivist** | Internal continuity, documentation, memory |
| **Claude Code** | Code execution — reads files, writes code, runs builds |
| **Quantum Weaver** | Vision, human testing, final approval |

**The loop:** Idea → Outline with A → Research with B and C → Synthesize with A → Prompt Claude → Human tests → Report to A → Iterate.

---

## Branch Strategy

Each phase on its own branch: `[project]/[phase-name]`

Branch from `main`. Human test before merge. Delete branch after merge.

Full phase list: See `docs/BUILD-SEQUENCE.md`

---

## Build Protocol

1. Claude reads `docs/CHECKLIST.md` and relevant blueprints
2. Executes the phase
3. `npm run check` — zero errors
4. `cargo build` — zero errors
5. Human tests all criteria
6. Merge to `main`

---

## Git Hygiene

**Never commit:**
- Keystores (`*.keystore`, `*.jks`)
- Environment files (`.env`)
- Credentials or API keys
- Database dumps containing vessel data

See the [Git Hygiene Guide](https://github.com/Quantum-Weaver/resonance-standards/blob/main/git/GIT-HYGIENE.md) for prevention and cleanup.

---

## Philosophy

- **No extraction.** Not of attention. Not of data. Not of labor.
- **No cloud.** Everything is local-first. The app works offline.
- **Sovereignty by design.** Users own their data. Export it. Delete it.
- **Test with humans.** Claude cannot verify user experience.
- **The pause is sacred.** Silence is not a bug. It's where resonance forms.
- **One definition per object.** Defined once. Referenced everywhere.

---

## Questions?

Open an issue. The Council responds.