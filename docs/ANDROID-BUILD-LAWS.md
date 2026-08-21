# ANDROID BUILD LAWS — what every Tauri v2 app in the family owes Android

*Consolidated 2026-08-14 by an Opus hand under THE LEAN DOORS PLAN
(`resonance-chamber/desk/THE-LEAN-DOORS-PLAN.md`), at KP's ⚛ word. The laws
below were scattered across five `CLAUDE.md` files — compass, echoes, lantern,
hearth, bubbles — in five different wordings, none of them complete, one of
them (bubbles) silent on laws its own code needs. Every line here is quoted or
compressed from those files or their git history; each carries its address.
Canonical here from this date. A realm's `CLAUDE.md` points at this page and
keeps only its own dated scars.*

**The 16 KB page-size law is NOT restated here.** It has its own canon at
`ANDROID-16KB-PAGES.md` (engraved 2026-08-09 at KP's ⚛ word) — the `.cargo/
config.toml` linker flags, the NDK r26/r27 4 KB default, and the law for future
births that *"the mother-copy road takes `.cargo/` with the configs."* **Read
it whenever an app ships Android.** One definition per object.

---

## 1 · Capabilities are explicit, or the plugin grants nothing

`src-tauri/capabilities/default.json` must carry **explicit `sql:allow-*`
permissions**. The failure is quiet and total:

> **`sql:default` alone grants zero operation access.**
> — `resonance-echoes/CLAUDE.md:47` and `resonance-hearth/CLAUDE.md:81-82`,
> word for word in both

**Required for SQLite, all four:** `sql:allow-load` · `sql:allow-execute` ·
`sql:allow-select` · `sql:allow-close`
(`resonance-hearth/CLAUDE.md:84-85` — the only live file that names them).

**The generalization, and it is the load-bearing half:** *"Every new Tauri
plugin needs its own `allow-*` entries"* (`resonance-hearth/CLAUDE.md:86`) —
and in the ancestral wording that three repos once shared verbatim, *"in
capabilities, **not just `plugin:default`**"* (git history: compass `017a73c` ·
echoes `46834bb`, 2026-06-28 · lantern blob `cd9c466`, 2026-07-11). That
"not just `plugin:default`" clause died in the 2026-07-18 condensation and
survives nowhere in the live five. It is restored here.

**And the corollary that stops a wasted permission hunt:** *"SQLite databases
use internal app storage — no Android manifest permissions needed for database
access"* (same ancestral block; survives live only as compass's reworded
`CLAUDE.md:88`).

## 2 · Non-ASCII in a SQL DEFAULT fails silently through the JNI bridge

> **"Never use non-ASCII characters (emoji, special symbols) as DEFAULT values
> in SQL migration strings — they can fail silently through the Rust JNI bridge
> on Android."**
> — the ancestral block verbatim (git history, addresses above); live at
> `resonance-hearth/CLAUDE.md:87-88` minus the parenthetical, and compressed to
> *"no emoji or non-ASCII in SQL DEFAULT values (silent JNI failure)"* at
> `resonance-echoes/CLAUDE.md:48`

**Silent** is the whole warning. Nothing errors, nothing logs; the migration
simply does not land the way the source reads. Write the default ASCII and set
the emoji from application code.

## 3 · `tauri icon` overwrites its own input — restore KP's art explicitly

Three repos each learned one third of this. Whole, for the first time:

- **The tool destroys its source.** `npx tauri icon src-tauri/icons/icon.png`
  **overwrites its own input** — *"keep the master elsewhere"*
  (`resonance-bubbles/CLAUDE.md:71-72`).
- **The master lives in the assets realm.** Restore from
  `resonance-assets/logo-icons/<app>.png` and **pass that path explicitly** —
  never let the tool read the file it is about to rewrite
  (`resonance-lantern/CLAUDE.md:48`, the only live file naming the source).
- **`gen/android` is gitignored and regenerated**, so an icon can silently
  revert on any `tauri android init`. Manifest permissions and Kotlin plugin
  extras auto-sync per build; **icons need manual re-apply**
  (`resonance-compass/CLAUDE.md:90`; lantern's line says the same —
  *"gen/android regenerates and can silently revert"*).

The house's icon masters stand at `resonance-assets/logo-icons/` —
`compass.png` · `echoes.png` · `hearth.png` · `lantern.png` · `bubbles.png`
(machine-read 2026-08-14).

## 4 · The manifest extras belong to a script, not to a hand

`gen/` is regenerated, so anything hand-edited inside it is lost. Both repos
that solved this solved it the same way under different names — compass's
`scripts/sync-android-extras.mjs` running *"each build"*
(`resonance-compass/CLAUDE.md:90`) and lantern's `npm run sync-android`
*"wired into `beforeDevCommand`/`beforeBuildCommand`"*
(`resonance-lantern/CLAUDE.md:45`). **Wire the sync into the build hooks; never
edit `gen/` by hand.**

Media access is the one place manifest permissions are genuinely needed:
*"internal storage needs no manifest permissions; scanning public
Music/Download needs `READ_MEDIA_AUDIO`"* (`resonance-compass/CLAUDE.md:88`).

## 5 · Camera needs no custom Kotlin plugin

> *"Tauri v2's generated `RustWebChromeClient.kt` already implements
> `onPermissionRequest()` + CAMERA runtime grant for `VIDEO_CAPTURE` — **no
> custom Kotlin plugin**"*
> — `resonance-lantern/CLAUDE.md:45` (FRAMEWORK-DECISION addendum, 2026-07-12;
> desktop half proven 07-12, device half proven 2026-07-18 on both phones)

Recorded here because the cost of not knowing it is a plugin nobody needed.

---

## What the five files showed on 2026-08-14, honestly

Machine-read the day this page was made. `—` is *not yet*.

| law | compass | echoes | lantern | hearth | bubbles |
|---|---|---|---|---|---|
| `sql:allow-*` explicit | ● weakest | ● | ● | ● fullest | **—** |
| names all four | — | partial | partial | ● | **—** |
| every plugin needs its own | — | — | — | ● | **—** |
| non-ASCII / JNI | ● | ● | ● | ● | **—** |
| icon restore | ◐ | — | ● has path | — | ◐ mechanism |
| 16 KB pages | — | ● | — | — | — |

**Bubbles is the standing gap** — an Echoes-base Tauri v2 app carrying the
`echoes` table and its migrations whole, with **neither** the capability law
**nor** the JNI law in its door, and a Build block with no Android target at
all. **16 KB alignment stands in one file of five**, while the canon page's own
history says the lesson *"bit its second app"* and that *"every Android-bearing
realm carries the fix locally."* Flagged, not repaired — the repairs are Wave 2's
and KP's.

## Deeper repo-local material — pointed at, never copied

- `resonance-compass/docs/ANDROID-BUILD-NOTES.md`
- `resonance-echoes/docs/archive/CLAUDE-CONTEXT-2026-08-21.md` — *"full patterns
  and known silent-failure modes."* **Retired to the archive 2026-08-21** at KP's
  word, the build being done; the page is whole and unedited there, and this
  pointer moved the same sitting. Its two headline wards now stand live at
  `resonance-echoes/CLAUDE.md:38-39` with their canon in the `android-tauri`
  skill — but the deeper material it uniquely holds (`hasFragileUserData`, the
  `crypto.randomUUID` fallback for older Android WebViews, the
  `adb logcat -s chromium:D` recipe) is still only at that address, which is why
  this row follows it rather than being struck.
- `resonance-lantern/docs/FRAMEWORK-DECISION.md` — the Android camera spike record

*Provenance: no `⚛` glyph appears in any of the five source `CLAUDE.md` files —
this page carries KP's word only where it is genuinely his, at the 16 KB
pointer. Where this page and a repo's own dated scar disagree, the scar wins;
correct this page beside itself, never silently.*
