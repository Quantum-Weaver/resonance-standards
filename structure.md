## REPO STRUCTURE

*(MIRROR-class self-map — truth is the repository tree; regenerate on change,
never trust to memory. **Derived from the disk by `scripts/derive.mjs`** — run
`npm run derive` and it redraws; `npm run derive:check` fails when it lags.
Last derived 2026-08-23. Text-bearing files only, the same rule the app's own
self-map draws by (`src/lib/tree.ts`); binary assets are not listed.)*

```
resonance-standards/
├── archive/
│   ├── FOUR-THREAD-METHODOLOGY.md
│   └── README.md
├── council/
│   ├── COUNCIL-STRUCTURE.md
│   └── STORY-BLOCK-STANDARD.md
├── docs/
│   ├── archive/
│   │   └── THE-ROLL-retired-2026-08-19.md
│   ├── blueprints/
│   │   └── standards/
│   │       ├── archive/
│   │       │   └── fbp.ai.json
│   │       ├── council/
│   │       │   └── fbp.ai.json
│   │       ├── docs/
│   │       │   ├── archive/
│   │       │   │   └── fbp.ai.json
│   │       │   ├── fbp.ai.json
│   │       │   └── obp.ai.json
│   │       ├── git/
│   │       │   └── fbp.ai.json
│   │       ├── src/
│   │       │   ├── lib/
│   │       │   │   ├── components/
│   │       │   │   │   ├── icons/
│   │       │   │   │   │   └── fbp.ai.json
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── cosmic/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── cumdach/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── data/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── epagoge/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── stores/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── styles/
│   │       │   │   │   ├── generated/
│   │       │   │   │   │   └── fbp.ai.json
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── theme/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── types/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── fbp.ai.json
│   │       │   │   └── obp.ai.json
│   │       │   ├── routes/
│   │       │   │   ├── add/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── insights/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── onboarding/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── sattva/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── settings/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── timer/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── fbp.ai.json
│   │       │   │   └── obp.ai.json
│   │       │   ├── dbp.ai.json
│   │       │   └── fbp.ai.json
│   │       ├── src-tauri/
│   │       │   ├── capabilities/
│   │       │   │   ├── fbp.ai.json
│   │       │   │   └── obp.ai.json
│   │       │   ├── gen/
│   │       │   │   ├── fbp.ai.json
│   │       │   │   └── obp.ai.json
│   │       │   ├── icons/
│   │       │   │   ├── android/
│   │       │   │   │   ├── mipmap-anydpi-v26/
│   │       │   │   │   │   └── fbp.ai.json
│   │       │   │   │   ├── mipmap-hdpi/
│   │       │   │   │   │   └── fbp.ai.json
│   │       │   │   │   ├── mipmap-mdpi/
│   │       │   │   │   │   └── fbp.ai.json
│   │       │   │   │   ├── mipmap-xhdpi/
│   │       │   │   │   │   └── fbp.ai.json
│   │       │   │   │   ├── mipmap-xxhdpi/
│   │       │   │   │   │   └── fbp.ai.json
│   │       │   │   │   ├── mipmap-xxxhdpi/
│   │       │   │   │   │   └── fbp.ai.json
│   │       │   │   │   ├── values/
│   │       │   │   │   │   └── fbp.ai.json
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── ios/
│   │       │   │   │   └── fbp.ai.json
│   │       │   │   ├── fbp.ai.json
│   │       │   │   └── obp.ai.json
│   │       │   ├── src/
│   │       │   │   ├── fbp.ai.json
│   │       │   │   └── obp.ai.json
│   │       │   ├── dbp.ai.json
│   │       │   └── fbp.ai.json
│   │       ├── static/
│   │       │   └── fbp.ai.json
│   │       ├── templates/
│   │       │   └── fbp.ai.json
│   │       ├── analysis_sovereignty.ai.json
│   │       ├── fbp.ai.json
│   │       ├── journal.md
│   │       ├── pbp.ai.json
│   │       └── reconciliation.ai.json
│   ├── ANDROID-16KB-PAGES.md
│   ├── ANDROID-BUILD-LAWS.md
│   ├── CHECKLIST.md
│   ├── CHILD-BUILDS.md
│   ├── CONTRIBUTING-TEMPLATE.md
│   ├── DESIGN-TOKENS.md
│   ├── DOC-CLASSES.md
│   ├── README-TEMPLATE.md
│   ├── RELEASE-STRUCTURE.md
│   ├── RETIRED.md
│   ├── SCOPE-NOTE-TEMPLATE.md
│   ├── STORY-BLOCK-TEMPLATE.md
│   ├── STORY-BLOCK.md
│   ├── THE-HANDS-STANDARD.md
│   ├── THE-ROLL.md
│   └── THE-TELLING-STANDARD.md
├── git/
│   ├── BRANCH-STRATEGY.md
│   └── GIT-HYGIENE.md
├── scripts/
│   └── derive.mjs
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── icons/
│   │   │   │   ├── IconHome.svelte
│   │   │   │   ├── IconInsights.svelte
│   │   │   │   ├── IconPapers.svelte
│   │   │   │   ├── Icons.svelte
│   │   │   │   ├── IconSattva.svelte
│   │   │   │   ├── IconSettings.svelte
│   │   │   │   └── IconTimer.svelte
│   │   │   ├── ComfortBar.svelte
│   │   │   ├── GradientPulse.svelte
│   │   │   ├── Sidebar.svelte
│   │   │   └── TimerVisualization.svelte
│   │   ├── cosmic/
│   │   │   ├── attention.ts
│   │   │   ├── colors.ts
│   │   │   ├── consciousness.ts
│   │   │   ├── dimensions.ts
│   │   │   ├── effects.ts
│   │   │   ├── index.ts
│   │   │   ├── interactivity.ts
│   │   │   ├── MIRROR.md
│   │   │   ├── motion.ts
│   │   │   ├── positioning.ts
│   │   │   ├── solids.ts
│   │   │   └── typography.ts
│   │   ├── cumdach/
│   │   │   ├── index.ts
│   │   │   └── MIRROR.md
│   │   ├── data/
│   │   │   ├── emojis.ts
│   │   │   └── senses.ts
│   │   ├── epagoge/
│   │   │   ├── index.ts
│   │   │   └── MIRROR.md
│   │   ├── stores/
│   │   │   ├── echo.svelte.ts
│   │   │   ├── theme.svelte.ts
│   │   │   ├── timer.svelte.ts
│   │   │   └── ui.svelte.ts
│   │   ├── styles/
│   │   │   ├── generated/
│   │   │   │   ├── animations.css
│   │   │   │   ├── attention-modes.css
│   │   │   │   ├── attention-selector.css
│   │   │   │   ├── ceremonies-refuge.css
│   │   │   │   ├── ceremonies.css
│   │   │   │   ├── consciousness-depth.css
│   │   │   │   ├── deity-voices.css
│   │   │   │   ├── domains.css
│   │   │   │   ├── ensemble.css
│   │   │   │   ├── eternal-witness.css
│   │   │   │   ├── gates.css
│   │   │   │   ├── glow-field.css
│   │   │   │   ├── parallax.css
│   │   │   │   ├── pause-state.css
│   │   │   │   ├── scene.css
│   │   │   │   ├── supportive-affordances.css
│   │   │   │   ├── text-effects.css
│   │   │   │   ├── transcendence.css
│   │   │   │   ├── typography.css
│   │   │   │   ├── variables.css
│   │   │   │   └── zoom.css
│   │   │   └── custom_overrides.css
│   │   ├── theme/
│   │   │   └── theme.ts
│   │   ├── types/
│   │   │   └── types.ts
│   │   ├── markdown.ts
│   │   ├── papers.ts
│   │   └── tree.ts
│   ├── routes/
│   │   ├── add/
│   │   │   └── +page.svelte
│   │   ├── insights/
│   │   │   └── +page.svelte
│   │   ├── onboarding/
│   │   │   └── +page.svelte
│   │   ├── sattva/
│   │   │   └── +page.svelte
│   │   ├── settings/
│   │   │   └── +page.svelte
│   │   ├── timer/
│   │   │   └── +page.svelte
│   │   ├── +layout.svelte
│   │   ├── +layout.ts
│   │   └── +page.svelte
│   ├── app.css
│   └── app.html
├── src-tauri/
│   ├── capabilities/
│   │   └── default.json
│   ├── src/
│   │   ├── lib.rs
│   │   └── main.rs
│   ├── build.rs
│   ├── Cargo.toml
│   └── tauri.conf.json
├── templates/
│   ├── CHECKLIST-TEMPLATE.md
│   ├── CLAUDE-TEMPLATE.md
│   └── HANDOFF-TEMPLATE.md
├── CLAUDE.md
├── FEATURE-BOARD.md
├── HANDOFF.md
├── HANDS.md
├── package-lock.json
├── package.json
├── PHILOSOPHY.md
├── README.md
├── structure.md
├── svelte.config.js
├── tsconfig.json
└── vite.config.js
```

*171 text files across 73 folders — counted, never typed.*
