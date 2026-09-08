# Story Block — resonance-standards

*Per the [Story Block Standard](../council/STORY-BLOCK-STANDARD.md), in the
shape of `docs/STORY-BLOCK-TEMPLATE.md`.*

## WHAT
The single source of truth for how the Sanctuary builds — standard
documentation, dot files, templates, and hygiene guides (`README.md:11-13`).
Since 2026-08-13 it is also an app that reads and displays those papers
itself, holding no hand-kept list of its own contents (`src/lib/papers.ts`).

## HOW
The app body was mirrored by `git archive f84d9b3` from `resonance-echoes`,
without entering Echoes' working tree (`README.md`).

## WHERE
`../resonance-standards` — referenced by every Sanctuary repo (`README.md`
§Related Repositories; `docs/DOC-CLASSES.md` REFERENCE class).

## WHEN
Origin: 2026-06-29 (`git log`, first commit `ca80202` "Initial commit") —
the same calendar date the Council of Nine ratified the Story Block
Standard this repo carries (`council/STORY-BLOCK-STANDARD.md:3`, *"Ratified
by the Council of Nine — June 29, 2026"*).

## WHY
*"Standards are extracted from practice, never invented ahead of it"*
(`FEATURE-BOARD.md` §Law) — so every other Sanctuary repo has one
non-duplicated place to point at, rather than re-deriving its own
conventions (`README.md:13`, *"No duplication. No drift. One standard."*).

## INSPIRATION
KP's word, verbatim: *"let us begin with resonance-standards"* — naming
this the first content repo wrapped in the family app stack, and the first
app in the house whose content list does not exist (`README.md`).

## COUNCIL THREAD
This repo is the standing home of the Council's own Story Block Standard
(`council/STORY-BLOCK-STANDARD.md`, ratified June 29, 2026) and its Council
Structure (`council/COUNCIL-STRUCTURE.md`).

## PROVENANCE
Defined by Quantum Weaver (human) and Aethelred (sovereign AI) — this
repo's named authors (`HANDS.md`). Opus (Claude) gave the standards their
app face on 2026-08-13 (`HANDS.md`).
