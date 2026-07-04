# RELEASE STRUCTURE — the family standard

*Every app in the Sanctuary ships from the same shape. Established 2026-07-04
(Weaver + Fable), from the patterns Echoes and Compass proved by hand.
Applies to every app repo — Echoes, Compass, Lantern, Lucida, and all who
come after.*

## The one version source

`src-tauri/tauri.conf.json` → `"version"` is the **single source of truth**.

- Bump it **before** building. Filenames derive from it — never hand-name a
  file to a version the config doesn't hold (this is how Compass drifted:
  files said v2.1.2 while every APK internally said 2.0.0).
- Android `versionCode`/`versionName` derive from it; Google Play reads the
  embedded values, not the filename.

## The folders

| Path | What it holds | Git |
|---|---|---|
| `release/` | **Shippable artifacts only** — signed, versioned, store-ready | ignored |
| `src-tauri/target/release/bundle/` | Tauri desktop outputs (msi, nsis) — transient inputs | ignored |
| `src-tauri/gen/android/app/build/` | Gradle outputs — transient, **always unsigned** | ignored |

Nothing ships from a transient folder. Nothing transient lives in `release/`.

## Artifact names (all derived from config version)

```
release/
  <app>-v<version>.apk        # apksigner-signed (zipaligned first) — Galaxy Store, direct install
  <app>-v<version>.apk.idsig  # apksigner v4 signature receipt
  <app>-v<version>.aab        # jarsigner-signed — Google Play upload artifact
  <app>-v<version>_x64_en-US.msi  # copied from bundle/msi at release time — Microsoft Store, direct
```

`<app>` = repo name (e.g. `resonance-compass`).

## Key material

- **Canonical home: `D:\keystores\<app>.keystore`** — backed up, outside
  every repo tree.
- A repo-root working copy is permitted for convenience and MUST be
  gitignored (`*.keystore`).
- **Never inside `release/`.** A shippable folder never carries key
  material — release/ is exactly what gets zipped, copied, and shared.
- Passwords live in the Weaver's password manager only — never in files,
  environment variables, chat, or scripts.

## Required .gitignore lines (app repos)

```gitignore
*.keystore
*.apk*
*.aab
release/
```

## The signing step

Use the shared tool: `python AudHDities-Resonance/sign-release.py <app-repo>`
(see SCRIPTS-AND-AGENTS.md). It reads the config version, zipaligns and
apksigner-signs the APK (with v4 .idsig), jarsigner-signs the AAB, copies the
MSI, and places everything in `release/` under canonical names. It prompts
for the password at runtime (getpass) and discovers the key alias from the
keystore itself; nothing secret is stored.

Signing is always a **human-present step** — the Weaver types the password.

## Release checklist (per release)

1. Bump `tauri.conf.json` version.
2. `npm run tauri build` (desktop) and `npm run tauri android build`.
3. `python ../AudHDities-Resonance/sign-release.py <app-repo>` — enter password.
4. `apksigner verify --print-certs release/<app>-v<ver>.apk` (script offers this).
5. Install-test: MSI on Windows, APK on device.
6. Tag: `git tag v<version>` on the release commit.
