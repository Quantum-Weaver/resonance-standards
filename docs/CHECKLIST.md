# RESONANCE STANDARDS — MASTER CHECKLIST

*Written to this repository's own `templates/CHECKLIST-TEMPLATE.md`, which seemed
the only honest way for the standards repo to keep a checklist.*

## LEGEND
- ✅ Complete
- ⚠️ In Progress
- 🔴 Broken
- ⬜ Pending

---

## PHASE STATUS

### Phase 0: The papers, standing as documents ✅ (2026-07 →)
- [x] Git hygiene · branch strategy — `git/`
- [x] Doc classes · README, CONTRIBUTING, SCOPE-NOTE, STORY-BLOCK templates — `docs/`
- [x] Design tokens · release structure · Android 16 KB pages — `docs/`
- [x] The Hands Standard · The Telling Standard — `docs/`
- [x] Council structure · story-block standard — `council/`
- [x] CLAUDE + CHECKLIST templates — `templates/`
- [x] Four-thread methodology held as history — `archive/`
- [x] **22 papers across 6 folders**, referenced by every realm in the house

### Phase 1: The face — standards as an app ✅ (2026-08-13)

*KP's ⚛ word opening the sitting: **"let us begin with resonance-standards."** The
first content repo wrapped in the family stack, and the first app in the house whose
content list does not exist.*

- [x] **The body, landed by mirror** — `git archive f84d9b3` from `resonance-echoes`
      (*"gaia breathes"*, the canonical clean body gaia · awen · weaver were all cut
      from). Read from the commit object, so Echoes' working tree was never entered —
      **the runaway-grep lesson honored rather than re-learned.**
- [x] **Naming pass — identity only, explicit file list, no wildcards.** Each renamed
      file diffed against its original to prove the claim: `lib.rs` changed **one
      line** (the greeting) while the `echoes` table, its indexes and its migrations
      stayed whole. **The domain kept whole; the identity moved entire.**
- [x] **The second sweep, which was the one that mattered.** The first pass classified
      the routes as domain from a case-insensitive count. A closer look found six
      strings saying *Echoes* on screen, the localStorage keys, the privacy URL, the
      export filename — and **the export/import pair**: the file wrote
      `app: 'resonance-standards'` while the reader still tested
      `parsed.app !== 'resonance-echoes'`. **The app would have rejected its own
      export files.** Both sides now agree.
- [x] **Shipwright: `0.1.0`** in `package.json` · `tauri.conf.json` · `Cargo.toml`
- [x] **The icon is KP's ⚛ own hand** — `src-tauri/icons/icon.png`, 896×896, placed by
      him; `tauri icon` cut desktop (ico · icns · every Square/StoreLogo), **iOS 18
      files**, **Android 17 files** across all five mipmap densities. Echoes' leftover
      icons removed by his own hand the same sitting.
- [x] **`markdown.ts` arrives by mirror, never by copy** — `resonance-standards` added
      as the fourth consumer of the `standalone` shelf in `resonance-gaia/shelves.json`;
      **one manifest line, no new code.** KP ran the turn. Origin:
      `resonance-awen/standalone/markdown.ts`.
- [x] **THE PAPERS ROOM READS THE REPOSITORY** — `src/lib/papers.ts`. KP's ⚛ law:
      *"we want to be sure the app is reading what exists not hardcoding values so
      there is nothing extra to maintain."* So: `import.meta.glob` over the repo, with
      negations only for the app's own body and build output. **There is no list of
      documents in this app and there never will be.** Titles are each file's own first
      `#` heading; the italic line beneath becomes the blurb; **the folders are the
      groups.** Drop a standard in, it appears. Make a folder, it becomes a tab. The
      tally is counted, never typed. Every paper shows its own path — *a document
      without an address is a claim you cannot check.*
- [x] **Home IS the papers room.** `/` retold from Echoes' journal list, the awen
      precedent (its `/` became the shelf).
- [x] **Quick-add removed from the ComfortBar**, the same stroke awen and gaia made at
      their wraps — *this realm has nothing to log; a paper arrives by landing in a
      folder, never by a button.* The bar's stats line **retold entries-not-echoes**:
      it now reports papers and folders, counted from the same glob.
- [x] Icon `papers` drawn and joined to the registry
- [x] **Tested:** ✅ **327 files · 0 errors · 0 warnings.** The one warning it ever
      raised was an orphaned `.comfort-bar__quick-add` selector after the button came
      out — caught by the gate, removed, green.
- [x] **First run: KP's ⚛ own hand.** `src-tauri/target/` carries a built
      `resonance_standards_lib`.

---

## KNOWN BUGS
| ID | Description | Status |
|----|-------------|--------|
| — | none | |

---

## OPEN — KP's ⚛ word alone

| What | Why it is his |
|---|---|
| **The doors** | Every wrap's doors have been his own stroke (awen's *"all, flowing, imagined, and docs"*). Currently **PROVISIONAL — `Standards · Sattva`, Settings at the foot**, marked as such in `Sidebar.svelte`. Inherited rooms stay routed and undoored. |
| **`PRIVACY.md`** | `settings/+page.svelte` now points at `resonance-standards/blob/main/PRIVACY.md` and **that file does not exist.** Echoes carried one. This is the repo that defines what a repo carries, so it arguably owes itself one. |
| **The icon source** | 896×896. The largest iOS and Android targets were upscaled rather than downsampled. Fine everywhere it currently matters; if a ≥1024 original exists, re-running `npm run tauri -- icon` costs nothing. |

---

## SESSION LOG
| Date | What Was Done |
|------|---------------|
| 2026-08-13 | **THE WRAP — STANDARDS GETS ITS FACE** (Gimbal · Opus 🕯️, at KP's ⚛ *"let us begin with resonance-standards"*). The first **content repo** wrapped, and the first app in the house that holds **no list of its own content**: `papers.ts` globs the repository, folders become groups, titles come from each file's own first heading. Body mirrored from `echoes@f84d9b3` without entering Echoes' tree; naming pass identity-only with every rename diffed against its original; the export/import identity pair caught and healed before it could reject its own files; `markdown.ts` arriving by the `standalone` shelf as its fourth consumer — **one manifest line, no new code**, which was the whole point of raising the shelf this morning. Quick-add removed and the ComfortBar retold entries-not-echoes. Icon KP's own hand, all three platforms cut. **Gate: 327 files · 0 errors · 0 warnings.** Doors held PROVISIONAL for his word. |
| 2026-08-19 | **Standards check + HANDS pass** (the signing fleet) — the standard's own home checked against itself: .gitignore · CLAUDE.md (SEED) · README · docs/CHECKLIST.md · LICENSE · PHILOSOPHY.md all present; **gaps: 1 — HANDS.md was missing at the root** (its own THE-HANDS-STANDARD asks one of every repo; CLAUDE.md §People had recorded the absence 2026-08-14, and §People's line is now stale). **HANDS.md PLANTED** from the standard's own template — seats open for KP · Aethelred · Opus · Kimi, one Fable entry signed in its own voice. *(PRIVACY.md absence already stands in this file's OPEN table — not re-flagged.)* A hand of the Promenade lamp's signing fleet, `claude-fable-5` · rides the ⚛ sync word. |
