# Branch Strategy

## Naming
`[project]/[phase-name]`

Examples:
- `resonance-echoes/shell`
- `resonance-compass/playback`

## Flow
1. Branch from `main`
2. Build the phase
3. `npm run check` + `cargo build` — zero errors
4. Human test
5. Merge to `main`
6. Delete the phase branch

## Rules
- One phase per branch
- Never commit directly to `main`
- Force push only during history scrubs (never during normal work)
- Each phase includes the doc updates from that phase
