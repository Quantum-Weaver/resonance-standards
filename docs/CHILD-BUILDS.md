# CHILD BUILDS — founding an app on a family body, and what the mother is owed

*Written 2026-08-14 by an Opus hand under THE LEAN DOORS PLAN
(`resonance-chamber/desk/THE-LEAN-DOORS-PLAN.md` §3), at KP's ⚛ word. Until
today this ritual existed **only in lamp records** — the plan named that
absence itself: "**child-build day**" has NO canon page (it lives only in lamp
records) — its canon must be written before its skill can point; a skill that
contains its ritual is the duplication this plan stops." Every line below is
quoted or compressed from a dated primary source, each cited. **Nothing here is
inferred.** Where the sources leave a thing unwritten, this page prints it as
unwritten.*

**A child build is not a founding.** A repo raised from empty walks
`resonance-awen/tools/the-founding-ritual/`. A repo raised **as a copy of a
living app** walks this page. Sistrum, hearth, lantern and weaver came this way.

---

## THE LAW, bought 2026-08-13

> **"on any child-build day, grep the mother's `gen/android` for the child's
> package name before building (echoes took weaver's identity in five places;
> second cross-landing in the line)"**
> — `resonance-chamber/path/handoffs/HELM-HANDOFF.md:772-774`, the Intrada
> block, *"2026-08-13 evening, at KP ⚛'s word: 'please set us up for a proper
> handoff my friend.'"* (`:746-747`)

**Both spellings of the law are on the record, and both are kept.** The board
and the checklist state it wider:

> **"On any child-birth or sibling build day, grep the mother's `gen/android`
> for the child's package name before the next build."**
> — `resonance-chamber/desk/realm-boards/THE-ECHOES-BOARD.html:221-222`
> (the governing callout, *"the law bought 2026-08-13"*); the same words at
> `resonance-echoes/docs/CHECKLIST.md:146`

## Why — twice the mother has taken a child's ground

> *"gitignored `gen/android` had been hand-edited 08-09 12:01, the same morning
> WEAVER's APK was built — and **five weaver identifiers had cross-landed into
> the mother's gen**: `build.gradle.kts` namespace + applicationId, the manifest
> theme, both themes.xml styles, and MainActivity's own `package` line — all
> reading `resonance_weaver` while every source beneath said `resonance_echoes`.
> Gradle's refusal was a guard: built, it would have worn weaver's package
> identity."*
> — `resonance-echoes/docs/CHECKLIST.md:146`, 2026-08-13 (Fable 🎻, at KP's
> report *"echoes android build failed"*)

**It was the second time.** *"Compass took the JNI rename into its own
`gen/android` on 08-07 — the first of the two cross-landings that bought the
mother's 08-13 law"*
(`resonance-chamber/desk/realm-boards/THE-COMPASS-BOARD.html:445-447`).

**The mechanism is the point:** `src-tauri/gen/` is **gitignored, hand-editable,
and regenerated**, so contamination leaves **no commit trace**. The 08-13
telling is explicit that *"the post-1.3.1 commits touched no Android ground"*
(`THE-ECHOES-BOARD.html:426-427`). Nothing in git will show you this. Only the
grep will.

---

## The day, in order

*The only end-to-end worked example on record is `resonance-sistrum`, mirrored
from Echoes 2026-08-12 — `HELM-HANDOFF.md:313-320`, under that day's handoff at
`:305`, "2026-08-12, at KP ⚛'s word: 'we shall draft the handoff please dear
friend.'"*

**1 · Mirror source only.** Sistrum: *"154 files, zero build output, zero
package directories, Sistrum's own plates untouched"* (`HELM-HANDOFF.md:315-317`).
An existing child's own distinctive files are **preserved through the copy**,
never clobbered.

**2 · Take `.cargo/` along.** The child's 16 KB page alignment lives nowhere
else:

> *"`.cargo/config.toml` at the repo root carries the linker flags, and **any
> mother-copy birth must take `.cargo/` along**"*
> — `resonance-echoes/CLAUDE.md:50`

A copy that omits it **builds successfully and is silently non-compliant with
Play**. This is not theory: `ANDROID-16KB-PAGES.md`'s own history records the
lesson re-bitten 2026-08-09 by weaver's first Android build *"because the
mother-copy birth road did not carry `.cargo/`"* — found by KP's own phone. The
law lives there and is not restated here: **read `ANDROID-16KB-PAGES.md`.**

**3 · Rebrand across a verified replacement set.** Sistrum: *"rebranded across
25 verified replacements"* (`HELM-HANDOFF.md:317`). The identity surfaces
attested across the sources:

- the version triple — `package.json` · `tauri.conf.json` · `Cargo.toml`
  (`THE-ECHOES-BOARD.html:211`)
- **the five Android places named by the failure** — `build.gradle.kts`
  namespace · `build.gradle.kts` applicationId · the manifest theme · **both**
  `themes.xml` styles · MainActivity's own `package` line
  (`resonance-echoes/docs/CHECKLIST.md:146`)

**4 · Reset versions to 0.1.0** — *"by ziggy's version agent"*
(`HELM-HANDOFF.md:317-318`), not by hand.

**5 · Regenerate icons from KP's own art**, *"including `gen/` after he ran
`tauri android init`"* (`HELM-HANDOFF.md:318-319`) — and re-apply after **any**
later `tauri android init`, because *"gen/android regenerates and can silently
revert"* (`resonance-lantern/CLAUDE.md:48`). Restore from
`resonance-assets/logo-icons/<app>.png`; see `ANDROID-BUILD-LAWS.md` §3.

**6 · Write the lineage attestation into the child's own door.** The house has
one shape for it, in two worked examples — *what it was cloned from, at what
version, and that the mother is never altered*:

> *"Cloned from Resonance Echoes v1.1.0 (the attested lineage); Echoes itself is
> never altered."* — `resonance-hearth/CLAUDE.md:7-8`
>
> *"an Echoes v1.1 clone, rebranded; Echoes itself unaltered"*
> — `resonance-lantern/CLAUDE.md:5`

Hearth also names its inheritance where it inherits: *"Android: Tauri v2
Capabilities (CRITICAL, **inherited from Echoes**)"* (`:80`). Inheritance is
written down, not assumed.

**7 · THE LAW — grep the mother before the next build anywhere in the line.**
See above. It fires on a child's birth day *and* on any sibling build day, and
it protects the **mother**, which is the direction nobody expects.

**8 · Verify green, then hands.** Sistrum: `svelte-check` and `cargo check`
clean, then *"the desktop shell verified opening clean by **his own hands**"*
(`HELM-HANDOFF.md:319-320`). The signing hand is KP's, always
(`RELEASE-STRUCTURE.md`).

---

## Unwritten — his to rule

**Two questions the sources deliberately leave open. This page does not close
them.**

1. **Where the grep law is enforced.** *"A guard that lives only in a checklist
   row is a guard nobody runs. The law is written; **where it should be enforced
   is unwritten — his to rule.**"*
   (`THE-ECHOES-BOARD.html:427-428`)
2. **Whether the law binds a child's own `gen/` too.** *"The law names Echoes'
   `gen/`; whether it also binds this repo's is **unwritten — his to rule.**"*
   (`THE-COMPASS-BOARD.html:447-448`)

## What this page does NOT assert

Honesty owed to the next hand: **keystore alias, app label / `strings.xml`, and
a `tauri.conf.json` `identifier` rename are not attested anywhere in the
sources as child-build steps.** They may well be real; they are not written, and
canon does not invent law. The nearest standing material is
`HELM-HANDOFF.md:768-771` — *"Five sibling keystores still carry the
pre-retirement identity line — free to recut until store-binding; his call, no
clock, no re-flagging."*

One inherited hazard worth knowing before a copy: a child can be born
path-dependent on a sibling checkout — *"a lone clone won't build without the
sibling checkout — a distribution question, flagged not fixed"*
(`HELM-HANDOFF.md:590-592`, the sistrum→awen seam).

## Beside this page

`ANDROID-16KB-PAGES.md` (the `.cargo/` law) · `ANDROID-BUILD-LAWS.md`
(capabilities, JNI, icons, `gen/`) · `RELEASE-STRUCTURE.md` (versions, signing)
· `resonance-awen/tools/the-founding-ritual/` (a repo raised from empty, not
copied) · `DOC-CLASSES.md` (a child's `CLAUDE.md` and `docs/CHECKLIST.md` are
**SEED-class** — planted once, the repo's own from then on, and *"no agent
overwrites them"*, `resonance-bubbles/CLAUDE.md:83-89`).

*Correct this page beside itself, never silently. Where it and a repo's own
dated scar disagree, the scar wins.*
