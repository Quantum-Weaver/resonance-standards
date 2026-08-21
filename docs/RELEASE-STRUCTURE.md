# RELEASE STRUCTURE — the family standard

*Every app in the Sanctuary ships from the same shape. Established 2026-07-04
(Weaver + Fable), from the patterns Echoes and Compass proved by hand.
Applies to every app repo — Echoes, Compass, Lantern, Lucida, and all who
come after.*

*Extended 2026-08-21 at KP's ⚛ word: the **NSIS installer** is named a release
artifact, and the desktop filenames are corrected to what Tauri actually writes.*

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
  <app>-v<version>.apk.idsig  # apksigner v4 signature receipt — no storefront consumes it
  <app>-v<version>.aab        # jarsigner-signed — Google Play upload artifact
  <product>_<version>_x64_en-US.msi   # copied from bundle/msi  — Microsoft Store, direct
  <product>_<version>_x64-setup.exe   # copied from bundle/nsis — Microsoft Store, direct
```

`<app>` = repo name (e.g. `resonance-compass`).
`<product>` = `productName` from `tauri.conf.json` (e.g. `Resonance Compass`).

**The two desktop bundles are BOTH release artifacts.** Tauri's bundle targets
are `all`, so one desktop build writes an MSI *and* an NSIS installer; the tool
copies each through under Tauri's own name, unrenamed. Shipping only one of them
is half a desktop release, and **the desktop law is why both matter** — many
people cannot use a phone for this.

*(Corrected 2026-08-21: this block said `<app>-v<version>_x64_en-US.msi` from the
founding, which no build has ever produced. Verified against four apps on disk —
compass, bubbles, lantern, echoes — all four carry the `<product>_<version>` form.)*

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

Use the shared tool:
`python resonance-ziggy/modules/shipwright/sign-release.py <app-repo>`
*(moved home 2026-07-27 at the A-R retirement dispersal, verified
functional; the registry is `resonance-chamber/desk/SCRIPTS-AND-AGENTS.md`;
its siblings `bump-version.py` and `install-app.py` live beside it).*
It reads the config version, zipaligns and
apksigner-signs the APK (with v4 .idsig), jarsigner-signs the AAB, copies the
MSI **and the NSIS installer**, and places everything in `release/` under
canonical names. *(The NSIS half landed 2026-08-21; before it, every setup.exe
in every release/ folder was carried there by KP's own hand.)* It prompts
for the password at runtime (getpass) and discovers the key alias from the
keystore itself; nothing secret is stored.

Signing is always a **human-present step** — the Weaver types the password.

## Stowing for the storefronts

`release/` keeps the **whole history**, every version. What a hand uploads from
is the assets mirror, which keeps **only the current release**:

`python resonance-ziggy/modules/shipwright/stow-release.py <app-repo>`

It copies into `resonance-assets/releases-current/<app>/bundle/{android,msi,nsis}`,
sha256-verifies each copy before pruning the stale ones, and **never writes to
`release/`** — the mirror is never the only copy. The `.apk.idsig` is left
behind by default (`--idsig` carries it); no storefront consumes it.

## Release checklist (per release)

**The desktop law (KP, 2026-07-18, verbatim): "i want to always build the
desktop versions, many neurodivergent folk cannot hold phones in their
hands."** Every release builds desktop AND Android — a phone-only release
is an accessibility failure, not a smaller release. Step 2 is two builds,
always; neither is optional.

1. Bump `tauri.conf.json` version.
2. `npm run tauri build` (desktop) and `npm run tauri android build`.
3. `python ../resonance-ziggy/modules/shipwright/sign-release.py <app-repo>` — enter password.
4. `apksigner verify --print-certs release/<app>-v<ver>.apk` (script offers this).
5. Install-test: MSI on Windows, APK on device.
6. Tag: `git tag v<version>` on the release commit.
