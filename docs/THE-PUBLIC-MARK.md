# THE PUBLIC MARK — the readings before an app is marked public

*What every app in the Sanctuary is read for before its store standing moves
from a closed track to public. Established 2026-09-09 at KP's ⚛ word, verbatim:
"if we were a media empire how would we analyze the code and app before marking
it for public distribution. are there stress tests." Applies to every app repo.
The release-road and play-track skills point at this page.*

**Nothing here is a checklist.** A reading is run, its result is written where
the app keeps its record, and the standing moves when every reading holds. The
store's own reports are the truth over anything the repo says.

---

## 1 · The four readings

| reading | what it asks | the house's hand today |
|---|---|---|
| **Static** | Are the dependencies clean, and does the app hold only the permissions it uses? | `resonance-ziggy/modules/assessor` (vulnerabilities) · `resonance-ziggy/modules/shipwright/guard-gen.py` (identity and the 16 KB flags) · `src-tauri/capabilities/*.json` read line by line |
| **Correctness** | Does it do what its README says, on the devices people hold? | the app's `.journals/proofs/` · `npm run check` · a device matrix (§3) |
| **Stress** | Does it survive abuse, time, and bad luck? | §2, by hand, results written to the app's `docs/RELEASE.md` |
| **The store's own** | What did the store find when it ran the build? | Play's pre-launch report · the Windows App Certification Kit (§4) |

## 2 · The stress readings

Each is run on the signed build, never on a dev build.

- **The monkey.** Android's own random-input tool fires thousands of taps,
  swipes and keys at the app and stops at the first crash.
  `adb shell monkey -p <identifier> --throttle 100 --pct-syskeys 0 -v 5000`
  A run that ends without a crash line is the result; a crash line is the
  address of the next fix.
- **The soak.** The app left open and in use for hours. Memory is read at the
  start and at the end: Android Studio's profiler on a phone, Task Manager's
  private bytes on Windows. Memory that climbs and never settles is a leak.
- **The pull.** The plug pulled mid-save: `adb shell am force-stop <identifier>`
  while a write is in flight, or the desktop process ended from Task Manager.
  On reopen the record is whole, or the last save is whole and nothing else is
  touched. A half-written record is a defect.
- **The load.** Thousands of rows seeded, then every list scrolled, every
  search run, every export written. The app stays responsive or it says how it
  degrades.
- **The conditions.** Airplane mode. Rotation. Backgrounded and brought back
  after an hour. Storage nearly full. Battery saver on. The smallest supported
  screen. The oldest supported OS.
- **The fresh house.** Installed on a machine or profile that never held the
  app; opened; used; uninstalled. Nothing left behind that the uninstall did
  not name.

## 3 · The device matrix

At least: one low-end phone · one phone on the oldest supported Android · one
small screen · one Windows machine that is not the build machine. Emulators
stand in for what the house does not own and are named as emulators in the
record.

## 4 · The store's own readings

- **Google Play, pre-launch report.** Every build uploaded to a test track is
  run on real devices by Play; the report lists crashes, ANRs, accessibility
  findings and security findings. It is read before the public mark, and its
  findings are addressed or named in `docs/RELEASE.md`. A new personal
  developer account must run a closed test with opted-in testers for fourteen
  days before production is offered; the Console states the count, and the
  Console is the truth.
- **Microsoft Store, the Windows App Certification Kit.** An MSIX must pass the
  kit before the Store accepts it. The kit is run on the signed package on the
  build machine; its report is kept beside the release.
- **Galaxy Store.** No automated report; the seller review is the reading.

## 5 · Apple, for the day it comes

- **macOS is required, an iPhone is not.** Xcode runs only on macOS and is the
  only road to build, sign and upload. A Mac, a rented cloud Mac, or a GitHub
  macOS runner each count.
- **The simulator is enough to submit.** A real device is read before a public
  release, since camera, purchases and performance differ on one.
- **Enrollment** is 99 USD a year on an Apple ID with two-factor on. An
  individual needs nothing more; an LLC needs a D-U-N-S number.
- **TestFlight** is the closed track's twin; the same fourteen-day habit
  applies.
- Tauri 2 builds for iOS.

## 6 · The mark itself

An app's store standing in the `beacons` register moves to public only after
the four readings hold on the signed build and the store's own report has been
read. The reading's date and result stand in the app's `docs/RELEASE.md` under
that version. The register is the record; the README cites it.
