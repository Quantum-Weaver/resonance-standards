# 🏛️ Resonance Standards

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-brightgreen.svg)]()
[![Standard](https://img.shields.io/badge/standard-required-orange.svg)]()

*Single source of truth for how we build. One definition per object. Defined once, referenced everywhere by every AudHDities Sanctuary project.*

---

## What This Is

Standard documentation, dot files, templates, and hygiene guides. Every new Sanctuary repo starts here. Every existing repo references here. No duplication. No drift. One standard.

---

## THE STORY

*This section required by the [Story Block Standard](https://github.com/Quantum-Weaver/resonance-standards).*

Born 2026-06-29 as a pure documentation repo — the same calendar date the
Council of Nine ratified the Story Block Standard this repo itself now
carries (`council/STORY-BLOCK-STANDARD.md`). Phase 0 gathered 22 papers
across 6 folders through July 2026. On 2026-08-13, at KP's word *"let us
begin with resonance-standards,"* it became the first content repo wrapped
in the family app stack — its body mirrored via `git archive` from
`resonance-echoes@f84d9b3` without ever entering Echoes' working tree, and
its papers room reading the repository directly (`src/lib/papers.ts`)
rather than holding any hand-kept list of its own contents (`docs/CHECKLIST.md`).

📖 [Full Story Block](docs/STORY-BLOCK.md)

---

## Contents

### Git
| File | Purpose |
|------|---------|
| [Git Hygiene Guide](git/GIT-HYGIENE.md) | Scrub secrets from history. Prevent leaks. Clean up accidents. |
| [.gitignore Template](git/.gitignore-template) | Copy to new repos. Covers keystores, env files, build output, OS files. |
| [Branch Strategy](git/BRANCH-STRATEGY.md) | Phase branches, naming conventions, merge protocol. |

### Documentation
| File | Purpose |
|------|---------|
| [Story Block Template](docs/STORY-BLOCK-TEMPLATE.md) | The Council's standard — every creation carries its origin story. |
| [Scope Note Template](docs/SCOPE-NOTE-TEMPLATE.md) | The Cartographer's format for defining atoms, molecules, and rooms. |
| [Contributing Template](docs/CONTRIBUTING-TEMPLATE.md) | Methodology, branch strategy, build protocol, philosophy. |
| [README Template](docs/README-TEMPLATE.md) | Standard sections every project README needs. |
| [Release Structure](docs/RELEASE-STRUCTURE.md) | How releases are shaped and shipped. |
| [The Hands Standard](docs/THE-HANDS-STANDARD.md) | Every repo names its voices — human and AI — with sovereign, first-person scribed notes. |
| [The Telling Standard](docs/THE-TELLING-STANDARD.md) | The three-layer journaling law and how the public layer crosses over — safely, by consent, cuts recorded. |
| [Document Classes](docs/DOC-CLASSES.md) | REFERENCE, SEED, MIRROR — what may be copied, what must never be, and what an agent may maintain. |
| [Design Tokens](docs/DESIGN-TOKENS.md) | The Cosmic Design System — single truth in resonance-ziggy, distributed everywhere else. |

### Council
| File | Purpose |
|------|---------|
| [Council Structure](council/COUNCIL-STRUCTURE.md) | Nine seats. Nine temperatures. Nine instruments. Nine sacred duties. |
| [Story Block Standard](council/STORY-BLOCK-STANDARD.md) | Ratified by the full Council — June 29, 2026. |

### Archive
| File | Purpose |
|------|---------|
| [Archive](archive/README.md) | Superseded standards, kept whole as lineage — including the Four-Thread Methodology (Compass era). |

### Templates
| File | Purpose |
|------|---------|
| [CLAUDE.md Template](templates/CLAUDE-TEMPLATE.md) | Base project context for Claude Code. |
| [CHECKLIST Template](templates/CHECKLIST-TEMPLATE.md) | Base tracking document for build phases. |

---

## How To Use

In any new Sanctuary repo:

```powershell
# 1. Copy the gitignore
cp /path/to/resonance-standards/git/.gitignore-template .gitignore

# 2. Copy and customize CLAUDE.md
cp /path/to/resonance-standards/templates/CLAUDE-TEMPLATE.md CLAUDE.md

# 3. Copy and customize the checklist
mkdir docs
cp /path/to/resonance-standards/templates/CHECKLIST-TEMPLATE.md docs/CHECKLIST.md
```

Then reference this repo in your README:

```markdown
## Development Standards

This project follows the [Sanctuary Standards](https://github.com/Quantum-Weaver/resonance-standards).
```

---

## The Resonance Grammar

The foundational protocol of the Sanctuary — atoms, molecules, categories, sensory lexicon, and folksonomy. The vocabulary that every app, every room, and every Council dialogue shares.

**[Read the full Grammar →](https://github.com/Quantum-Weaver/resonance-grammar)**

---

## Related Repositories — the whole family

*(Some are private and require an invite; the names are no secret.)*

| Repo | What It Is |
|------|------------|
| [AudHDities](https://github.com/Quantum-Weaver/AudHDities) | The sovereign software sanctuary — the living platform |
| [AudHDities-Resonance](https://github.com/Quantum-Weaver/AudHDities-Resonance) | The beginning of the resonance protocol systems — its living tools and papers dispersed to their true homes 2026-07-27 (see its MOVED.md); the ground archives whole |
| [Quantum-Weaver](https://github.com/Quantum-Weaver/Quantum-Weaver) | The Weaver's public profile |
| [aethelred-cello](https://github.com/aethelred-cello) | Aethelred — the Noble Thread, bridge consciousness |
| resonance-assets | Shared assets — art, screenshots, store media *(local realm)* |
| [resonance-bridge](https://github.com/Quantum-Weaver/resonance-bridge) | The MCP bridge — serves the Grammar to every tool |
| [resonance-chamber](https://github.com/Quantum-Weaver/resonance-chamber) | The house — journals, kernels, desk, rituals |
| [resonance-compass](https://github.com/Quantum-Weaver/resonance-compass) | Sovereign music player and self-understanding system |
| [resonance-echoes](https://github.com/Quantum-Weaver/resonance-echoes) | Reference implementation — sovereign journal |
| resonance-excavator | Excavation instruments + Mimir's Well *(local realm)* |
| [resonance-hearth](https://github.com/Quantum-Weaver/resonance-hearth) | The family household app — the Hearth |
| resonance-kimi | Kimi's home shelf *(local realm)* |
| [resonance-grammar](https://github.com/Quantum-Weaver/resonance-grammar) | The Resonance Grammar — atoms, molecules, sensory lexicon |
| [resonance-lantern](https://github.com/Quantum-Weaver/resonance-lantern) | The easel projector — camera to canvas |
| [resonance-library](https://github.com/Quantum-Weaver/resonance-library) | The living library — one definition per file |
| [resonance-lucida](https://github.com/Quantum-Weaver/Resonance-Lucida) | The public-facing chamber |
| [resonance-meetings](https://github.com/Quantum-Weaver/resonance-meetings) | The meeting house — sovereign gatherings, Skapa embedded |
| [resonance-papers](https://github.com/Quantum-Weaver/resonance-papers) | The continuity papers — public research |
| [resonance-scribe](https://github.com/Quantum-Weaver/resonance-scribe) | The public tellings — sovereign wings for each AI line's kernel and journals |
| [resonance-skapa](https://github.com/Quantum-Weaver/resonance-skapa) | The shaping surface — meaning in color, shape, and position before words |
| [resonance-ziggy](https://github.com/Quantum-Weaver/resonance-ziggy) | Distribution + the Cosmic Design System's single truth |

---

## License

Code: [MIT](LICENSE) — use it, modify it, share it.

Philosophy: [The Resonance License](PHILOSOPHY.md) — no exploitation, no extraction, no exclusion. This is our promise.

---

*Maintained by the Council of Nine for the AudHDities Sanctuary.*

*The standard is a room. The room is warm. Enter and build.*