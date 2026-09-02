# 2026-09-01 — the checklist doc retired from the standards

*Realm journal. A Fable lamp at KP's word, "please make the red green, then go", working
THE BUILD CENSUS PLAN item 0.4 (`resonance-chamber/desk/THE-BUILD-CENSUS-PLAN.md` §4).
Nothing committed.*

**His ruling, verbatim:** *"no checklist docs should exist"* · *"we use progenatrix for most
track things now"*.

**Done, per `docs/THE-ROLL.md` §RETIREMENT (archive whole · one log line · live page keeps
nothing of the change):**

- `templates/CHECKLIST-TEMPLATE.md` — already `git rm`'d and staged at his word; its 28 lines
  archived byte-verbatim from `git show HEAD:` at
  `docs/archive/CHECKLIST-TEMPLATE-retired-2026-09-01.md`.
- Seven live pages had their `docs/CHECKLIST.md` clauses retired to `docs/archive/<DOC>-retired-2026-09-01.md`
  (retired text verbatim, with the line span it stood at) and replaced with the base —
  `progenatrix.db`, read by `progenatrix.py recall --realm <slug>`, written by `item` · `tick` ·
  `plan` · `handoff` — his ruling cited once per page as provenance: `docs/DOC-CLASSES.md`
  (SEED example), `docs/THE-ROLL.md` (§First's example; §WORKING DOCUMENTS — `RUN-LOG.md`
  stays the working document, tracking is rows), `docs/CHILD-BUILDS.md` (§Beside this page),
  `docs/CONTRIBUTING-TEMPLATE.md` (build protocol step 1), `templates/CLAUDE-TEMPLATE.md`
  (the door; the same-sitting clause now binds the tick), `templates/HANDOFF-TEMPLATE.md`
  (header and footer), and `README.md` §How To Use step 3 (it planted one).
- `docs/RETIRED.md` — eight rows, dated 2026-09-01, four columns, no prose.
- `git/GIT-HYGIENE.md` — untouched: its only hit is the heading "SETUP CHECKLIST FOR EVERY NEW
  SANCTUARY REPO", a list of six steps in the plain sense, not a checklist doc. Same for
  `docs/RELEASE-STRUCTURE.md` "Release checklist (per release)". His to rename if he wants the
  word gone.
- `npm run derive` redrew `structure.md` and the README Contents (the census's DRIFT): the
  template row, the dead `docs/CHECKLIST.md` row, and the `CLAUDE.md`/`HANDOFF.md` rows left
  (those two files left the tree 2026-08-25, `166ee01`); the eight archive files joined.
  `derive:check` clean · `npm run check` 0 errors / 0 warnings (329 files) · `npm run build` done.

**Left as history, named, not touched:** `docs/THE-ROLL.md` 2026-08-17 census rows naming
five checklist files that no longer exist, its VOICED/PROCESS class lists and ancestors line;
`docs/CHILD-BUILDS.md` provenance citations of `resonance-echoes/docs/CHECKLIST.md:146` (first
one now marked as a git address); `docs/STORY-BLOCK.md`, `HANDS.md`, `README.md:29`,
`FEATURE-BOARD.md:12` (accounts of dated days); `src/lib/cumdach/MIRROR.md:19` and
`src/lib/epagoge/MIRROR.md:19` (mirrors — heal at origin, never by hand);
`docs/blueprints/**/fbp.ai.json` (the forge's output, regenerates).

**One reading for the next hand:** `scripts/derive.mjs` stamps "Last derived" from
`toISOString()` — UTC — so this evening's derive is dated 2026-09-02. The date is excluded
from drift, so it costs nothing; it is just not the local day.
