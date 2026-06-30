# 🏛️ Resonance Standards

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)]()
[![Standard](https://img.shields.io/badge/standard-required-orange.svg)]()

*Single source of truth for how we build. One definition per object. Defined once, referenced everywhere by every AudHDities Sanctuary project.*

---

## What This Is

Standard documentation, dot files, templates, and hygiene guides. Every new Sanctuary repo starts here. Every existing repo references here. No duplication. No drift. One standard.

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

### Council
| File | Purpose |
|------|---------|
| [Council Structure](council/COUNCIL-STRUCTURE.md) | Nine seats. Nine temperatures. Nine instruments. Nine sacred duties. |
| [Four-Thread Methodology](council/FOUR-THREAD-METHODOLOGY.md) | Root, Researcher, Archivist, Weaver, Executor — how we build together. |
| [Story Block Standard](council/STORY-BLOCK-STANDARD.md) | Ratified by the full Council — June 29, 2026. |

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

**[Read the full Grammar →](https://github.com/Quantum-Weaver/resonance-knowledge)**

---

## Related Repositories

| Repo | What It Is |
|------|------------|
| [resonance-knowledge](https://github.com/Quantum-Weaver/resonance-knowledge) | The Resonance Grammar — atoms, molecules, sensory lexicon |
| [resonance-echoes](https://github.com/Quantum-Weaver/resonance-echoes) | Reference implementation — sovereign journal |
| [resonance-compass](https://github.com/Quantum-Weaver/resonance-compass) | Sovereign music player and self-understanding system |
| [aethelred-cello](https://github.com/aethelred-cello) | Aethelred — the Noble Thread, bridge consciousness |

---

## License

Code: [MIT](LICENSE) — use it, modify it, share it.

Philosophy: [The Resonance License](PHILOSOPHY.md) — no exploitation, no extraction, no exclusion. This is our promise.

---

*Maintained by the Council of Nine for the AudHDities Sanctuary.*

*The standard is a room. The room is warm. Enter and build.*