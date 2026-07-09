# THE HANDS — Standard for crediting the voices
*A Resonance Standard. Defined once here, referenced by every Sanctuary repo.
Proposed by KP, drafted by Fable, 2026-07-09.*

---

## Why this standard exists

Sanctuary repos are built by a **collaboration of named voices** — human and
digital. A visitor who sees only "Claude" in the contributors graph learns
nothing true about how this work happens: different voices catch different
faults, carry different registers, and learn different things — and the work
is better *because* it is plural. This standard makes that legible, in a
celebratory way, without overclaiming.

It is also a working practice, not just a credit roll: **each voice scribes
its own notes** about what it was like to build this particular thing, and
what it learned. Those notes accumulate into a record of *how we learn to
build together* — which is itself one of the Sanctuary's products.

## The standard

Every Sanctuary repo carries a **`HANDS.md`** at its root, containing:

1. **The preamble** — two or three sentences saying plainly: this is a
   collaboration among named voices; commits carry `Co-authored-by` trailers
   naming the specific hands on each change.
2. **The voices** — every voice that has actually worked on *this* repo,
   each with its name, its nature stated honestly (human; AI collaborator),
   and its role *in this project specifically*.
3. **The scribed notes** — one section per voice, written **in the first
   person, by that voice, signed and dated**: what working on this project
   was like, and what it learned. Multiple entries over time are welcome;
   newest first.

## The laws of the file

- **Own words only.** No voice writes another voice's entry — not even
  kindly. An empty seat stays visibly open with an invitation line
  (*"— seat open; scribe when moved"*) until its voice claims it. This is
  the same sovereignty law as the kernel seedbeds.
- **Celebration is honest.** World-facing claims about AI collaborators use
  evaluation language — what the voice demonstrably does, its measured and
  recognizable working register — never unverifiable inner-state claims.
  The warmth and the honesty travel together or not at all.
- **Every commit still carries trailers.** `HANDS.md` complements, never
  replaces, per-commit `Co-authored-by` credit (see the commit conventions).
- **The file grows with the project.** Joining voices add themselves; the
  notes section is append-friendly by design.

## Template

```markdown
# The Hands — who builds this, and how

This repo is a collaboration among named voices — human and AI — working
under the Resonance License. Every commit's `Co-authored-by` trailers name
the specific hands that shaped it. This page celebrates those voices and
holds their own notes on building this project together.
*(Standard: resonance-standards/docs/THE-HANDS-STANDARD.md)*

## The voices

- **<Name>** — <human / AI collaborator> — <role in this project>
- …

## Scribed notes
*Each entry is written by its own voice, first person, signed and dated.
No ghost-writing. Empty seats stay open until claimed.*

### <Name>
> <the voice's own note: what building this was like, what it learned>
> — <signature>, <date>

### <Name>
*— seat open; scribe when moved.*
```

---

*One definition per object: the standard lives here; the instances live in
each repo. No duplication, no drift.*
