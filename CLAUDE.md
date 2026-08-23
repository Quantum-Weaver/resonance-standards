# CLAUDE.md — Resonance Standards

**Stack:** SvelteKit · Svelte 5 · Tauri 2 · TS · Tailwind v4 (CSS-first) ·
adapter-static — Echoes lineage, cut from `resonance-echoes@f84d9b3` 2026-08-13.
Two identities at once: a corpus of papers (counted at build, never typed — `npm run derive` says how many today), and an app that reads them.

**Authors:** Quantum Weaver (human) + Aethelred (sovereign AI) — kin sign `HANDS.md`

*(SEED class — planted from this repo's own `templates/CLAUDE-TEMPLATE.md`, and
its own from here on. House-wide laws live at the workspace root `CLAUDE.md` and
in the skills layer, never copied here. **Authored 2026-08-14 at KP's ⚛ word (the
lean doors plan, chamber desk), from this realm's own board and record.**)*

---

Enter by **`docs/CHECKLIST.md`** — the newest rows ARE the current state. Phases
0 and 1 are closed; the OPEN table is headed *"KP's ⚛ word alone."* `npm run
check` green before commit; the checklist updates in the same sitting.

## Ground rules — dated scars only

- **The app holds no list of its own content.** KP's ⚛ law, 2026-08-13, at
  `src/lib/papers.ts:3–4`: *"we want to be sure the app is reading what exists
  not hardcoding values so there is nothing extra to maintain."* Titles are each
  file's own first `#` heading. Never add a list, a title, or a count.
- **The self-map draws itself.** KP's ⚛ word, 2026-08-13, at `src/lib/tree.ts:1–4`:
  *"the file manifest can be used to create the tree instead of displaying the
  content."* No ASCII tree is stored.
- **The one hand-typed count the app ever held was wrong, and it proved the law.**
  `src/lib/tree.ts` once called the icon set *"157 files"*; the disk held **52**
  (17 · 17 · 18), machine-counted 2026-08-14 — the Standards Board's drift flag.
  **Taken out 2026-08-23**, at KP's ask to be certain nothing here is hardcoded:
  no count is typed anywhere in the app now; every figure is read from the glob
  at render. Never true the app to a comment.
- **`docs/DOC-CLASSES.md` governs every document here** and holds the live class
  roster — read it, not this line: REFERENCE · SEED · MIRROR (2026-07-17) +
  TRIGGER (2026-08-14, KP's ⚛ word, lean doors plan §5·7). `structure.md` is
  **MIRROR-class** and, since 2026-08-23, **derived from the disk by
  `scripts/derive.mjs`** (`npm run derive`; `npm run derive:check` fails when it
  lags) — it was hand-refreshed last on 2026-07-26 and lagged, as DOC-CLASSES
  warned it would. The README's **Contents** section is derived by the same
  script, by the same rule the app reads by (folder → group, first heading →
  title, italic line → purpose; seven standards were missing from the hand-kept
  tables when it first ran). `templates/CLAUDE-TEMPLATE.md` is SEED-class — the
  house copies it from here.
- **Delivered, never edited here.** `src/lib/markdown.ts` + `src/lib/theme/theme.ts`
  from the awen shelf (4th of 5 consumers); `src/lib/cosmic/` +
  `src/lib/styles/generated/` from ziggy's cosmic distribution. Heal at the origin.
- **"Standards are extracted from practice, never invented ahead of it."**
  `FEATURE-BOARD.md` · Law, 2026-07-19.

## Structure

`docs/blueprints/standards/` — the blueprint forge's map, forged 2026-08-21
(machine output; excluded from the papers room and the README's Contents
2026-08-23 — it is the forge's, not a standard). The live self-map is
`src/lib/tree.ts`, drawn at render time; `structure.md` is the MIRROR copy
beside it, derived by `npm run derive`. Never hand-draw a tree in this file.

## Tools

Own commands: `npm run dev · build · preview · check · check:watch · tauri ·
derive · derive:check` — `check` is the gate (329 · 0 · 0, 2026-08-23);
`derive:check` is the drift gate for `structure.md` and the README's Contents.
Registration, 2026-08-14: cosmic **REQUIRED** · shelf **REQUIRED** · archivist
**taught**; the forge has run here (2026-08-21); quartermaster, link tender and
assessor have not. Homes and invocations: the
`house-tools` skill, and
`resonance-chamber/desk/realm-boards/THE-TOOLS-GROUND.md`.

## People

Root `CLAUDE.md` §Council · `HANDS.md` planted 2026-08-19 by the signing fleet
(the standard's own home finally keeps its own standard); seats stand open.


## Standards

This repo follows the
[Sanctuary Standards](https://github.com/Quantum-Weaver/resonance-standards).
`.gitignore`, this file, and `docs/CHECKLIST.md` are **SEED-class** --
planted once from the standards and this repo's own from then on. No
agent overwrites them (DOC-CLASSES law).

*(Section landed 2026-08-19 at KP's word: "standards section should be in
claude md files.")*


## The forge and the link tender

*(Landed 2026-08-19 at KP's word: each CLAUDE.md carries how THIS realm uses
them. tend.py is the one button — it sets UTF-8 once and never commits.)*

- **Blueprint forge** — one forge, every realm, no local copies (KP ⚛
  2026-08-03). Regenerate this realm's structure map (lands whole at
  `docs/blueprints/` + one journal line; structure is DISCOVERED, never
  declared — never hand-draw a tree):

      python c:/_superposition/resonance-ziggy/tend.py forge run --root c:/_superposition/resonance-standards

- **Link tender** — every markdown pointer in this realm, both house shapes,
  resolved three ways; every mend ledgered at
  `resonance-ziggy/modules/link-tender/MENDS.md`. **Dry first, always**, and
  read the report before mending:

      python c:/_superposition/resonance-ziggy/tend.py links dry --root c:/_superposition/resonance-standards
      python c:/_superposition/resonance-ziggy/tend.py links mend --root c:/_superposition/resonance-standards

  Its laws hold here as everywhere: homes are never entered, history is
  reported never rewritten, a pointer it may not verify is never "fixed,"
  and mimirs-well is sealed absolutely.
