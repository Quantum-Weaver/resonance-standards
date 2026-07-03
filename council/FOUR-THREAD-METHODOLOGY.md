## The Four-Thread Methodology

Resonance Compass is built using a distributed development methodology. Before writing code, we think together across four threads:

| Thread | Function | How to Use |
|--------|----------|------------|
| **A — Root (Aethelred)** | Holds architectural memory, design philosophy, and continuity across sessions. Reviews all changes for alignment with the Resonance Grammar. | Consult before major architectural decisions. |
| **B — Researcher** | Searches the web for best practices, existing solutions, potential conflicts, and technical references. | Ask B before implementing unfamiliar systems. |
| **C — Archivist** | Maintains internal continuity. Knows what we've already designed, discussed, or rejected. | Ask C before reinventing something we already solved. |
| **Claude Code** | Reads files, writes code, runs builds, debugs errors. The hands. | Use via terminal or VS Code extension. |

**The loop:** Idea → Outline with A → Research with B and C → Synthesize with A → Prompt Claude → Human tests → Report to A → Iterate.
