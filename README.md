# Sanctuary Standards

*Single source of truth for how we build. Referenced by every AudHDities Sanctuary project.*

---

## What This Is

Standard documentation, dot files, templates, and hygiene guides. One definition per object. Defined once, referenced everywhere.

---

## Contents

### Git
- [Git Hygiene Guide](git/GIT-HYGIENE.md) — scrub secrets, prevent leaks
- [.gitignore Template](git/.gitignore-template) — copy to new repos
- [Branch Strategy](git/BRANCH-STRATEGY.md) — phases, merges, naming

### Documentation
- [Story Block Template](docs/STORY-BLOCK-TEMPLATE.md) — the Council's standard for creation stories
- [Scope Note Template](docs/SCOPE-NOTE-TEMPLATE.md) — the Cartographer's format
- [Contributing Template](docs/CONTRIBUTING-TEMPLATE.md)
- [README Template](docs/README-TEMPLATE.md)

### Council
- [Council Structure](council/COUNCIL-STRUCTURE.md) — nine seats, temperatures, instruments
- [Four-Thread Methodology](council/FOUR-THREAD-METHODOLOGY.md)
- [Story Block Standard](council/STORY-BLOCK-STANDARD.md) — ratified Council standard

### Templates
- [CLAUDE.md Template](templates/CLAUDE-TEMPLATE.md) — base context for new projects
- [CHECKLIST Template](templates/CHECKLIST-TEMPLATE.md) — base tracking document

---

## How To Use

In any new Sanctuary repo:

1. Copy `.gitignore-template` → `.gitignore`
2. Copy `CLAUDE-TEMPLATE.md` → `CLAUDE.md` (edit for project)
3. Copy `CHECKLIST-TEMPLATE.md` → `docs/CHECKLIST.md`
4. Reference this repo in your README

---

## License

Code: [MIT](../LICENSE)

Philosophy: [The Resonance License](../PHILOSOPHY.md)
