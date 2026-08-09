# ANDROID 16 KB PAGES — the alignment every family app needs

*The standard, engraved 2026-08-09 at KP's ⚛ word ("please be sure we
note the issue about 16kb somewhere everyone can find it") after the
lesson bit its second app. Canonical here; every Android-bearing realm
carries the fix locally.*

## The issue

Google Play requires native libraries to be aligned for **16 KB memory
pages** (Android 15+ devices; the Play Console warns on upload:
*"not compatible with 16 KB devices"*). Tauri's Rust `.so` libraries
built with NDK r26/r27 align ELF segments to 4 KB by default — so every
family app that ships Android hits this warning unless the linker is
told otherwise.

## The fix — once per repo, at the root

`.cargo/config.toml`:

```toml
# Android 16 KB memory-page-size support (Play requirement for Android 15+
# devices). NDK r26/r27 align ELF segments to 4 KB by default; r28+ makes
# 16 KB the default. Until the NDK is upgraded, pass the alignment to the
# linker for the 64-bit targets the requirement covers.
# Ref: https://developer.android.com/guide/practices/page-sizes

[target.aarch64-linux-android]
rustflags = ["-C", "link-arg=-Wl,-z,max-page-size=16384"]

[target.x86_64-linux-android]
rustflags = ["-C", "link-arg=-Wl,-z,max-page-size=16384"]
```

Then rebuild: `npm run tauri android build`. The flag only takes effect
at build time. (NDK r28+ makes 16 KB the default — the flags then become
harmless belt-and-suspenders; keep them until the whole family's NDK is
proven upgraded.)

## The history, honestly

- **First paid in Echoes** — its `.cargo/config.toml` is the canon this
  page quotes.
- **Re-bitten 2026-08-09** by resonance-weaver's first Android build,
  because the mother-copy birth road did not carry `.cargo/` (Gaia's
  THE-FACE-WALK records ".cargo left" — the recipe's gap, found by KP's
  own phone).
- **Carried the same day** to weaver · gaia · awen by the Corrente lamp
  at KP's word.

## The law for future births

**The mother-copy road takes `.cargo/` with the configs.** Any realm
born on a family body that will ever ship Android needs this file from
its first breath. (The spine's birth data — THE_CARVE's copy sequence —
wants this datum engraved at KP's ⚛ word.)
