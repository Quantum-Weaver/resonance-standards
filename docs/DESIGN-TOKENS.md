# Design Tokens — the Cosmic Design System

*REFERENCE-class pointer (see [DOC-CLASSES](DOC-CLASSES.md)). Added at KP's
word, 2026-07-17: "cosmic needs to be presented somehow in the standards.
currently ziggy homes all of it and it is distributed from there."*

## The single truth

The Sanctuary's design language — colors, dimensions, easing, typography,
attention, consciousness, the whole token vocabulary — is the **Cosmic Design
System**, and its one editable home is:

    C:\_superposition\resonance-ziggy\modules\cosmic\

([resonance-ziggy on GitHub](https://github.com/Quantum-Weaver/resonance-ziggy)
· rehomed from AudHDities by KP's signature, Shuttle Run 04 Phase 3,
2026-07-15.)

## The laws that travel with it

- **Tokens are edited in ziggy only.** Copies living inside consuming apps
  are MIRROR-class: refreshed by the distribution system (`distribute.ts`),
  each carrying the mirror header per its `MIRROR.md`. Never edit a mirror.
- **Apps adopt intentionally — the Cosmic Consumption Duty** (KP's signed
  law, 2026-07-15): every app decides deliberately which artifact families
  it consumes; its `app.css` carries the full menu as commented imports, and
  adoption is uncommenting with intent. No app inherits by accident.
- **Token hygiene:** hardcoded hex values, durations, or easing curves that
  tokens already provide are findings, not style choices. The folder-run of
  every app audits for them.

## For a new repo

Do not copy token files by hand. Consume via the distribution system, or
reference ziggy directly. If your repo needs a mirror, it enters through
distribution — with the header, the refresh path, and the date.
