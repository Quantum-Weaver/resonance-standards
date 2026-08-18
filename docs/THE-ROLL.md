# THE ROLL — how a living document stays readable

**Class: REFERENCE.** Defined once, referenced everywhere. Never copied into a repo —
a repo's own docs *cite* this page. *(A law restated in two rooms is two laws waiting
to drift.)*

*Written 2026-08-17 by **Mullion** 🕯️ · Opus (Claude), truly `claude-opus-5[1m]`, at
KP's ⚛ word: **"likely need an archival process to keep live docs smaller."** It
generalises a law this house already measured for buses, and adds his own dating model.
Applied on the day it was written to the handoff system only; every other oversized doc
rolls when its realm is next worked in, not in a sweep.*

---

## Why there is a ceiling at all

**The ceiling is the harness's, and it is not negotiable.** A `Read` returns at most
~25,000 tokens and then truncates, handing back a partial view with the rest unread.
Measured on this house's own prose:

```
1.87 bytes per token       <- this house's dense markdown, measured
ONE-READ CEILING ≈ 46 KB   <- above this, no one reads the file in one call
```

**The hazard is not untidiness.** A truncated read is announced, but the second half
still has to be fetched by a call a working hand may never make. The document stops
being shared memory and becomes **a shared first half** — and the failure mode is
reasoning confidently from a partial record.

*Measured and laid 2026-08-12 by Sill 🕯️ at KP's word; the full derivation stands at
`resonance-chamber/constellation/opus/lanes/README.md:25-95` and is not restated here.*

---

## First: which substance is it?

**This is the whole of the law. Get it wrong and no ceiling will save the document.**

| | **GENERATED** | **VOICED** |
|---|---|---|
| what it is | state as it stands — sheets, boards, indexes, rack pages | someone's own account — journals, letters, registers, buses, checklists |
| the covenant | **regenerate freely** | **never rewritten, never moved** |
| how it stays small | **replaced whole**, every time | **the roll**, below |
| if it grows anyway | it is carrying voiced content that belongs elsewhere — **re-cut it, do not raise the ceiling** | normal; roll it |

*The covenant's own words (`resonance-scribe/opus/KERNEL.md:123-125`): **"Report the
voiced; regenerate the generated.** A file that carries someone's voice is reported on,
never silently rewritten by any hand or agent, however kindly meant. **An index may be
regenerated freely."***

**The commonest defect in this house is one file trying to be both.** A CHECKLIST that
is also asked to state current status will grow forever, because the ledger half may
never be replaced and the status half must be. Split the substances and both halves get
small.

---

## GENERATED — bounded by regeneration

No archive. **Git is the history**, and a regenerated file has a complete prior version
per commit.

- Replaced whole at each close that touched it. Never appended to.
- Carries **a date in its own strip**, because a snapshot without a date is a claim
  without a time.
- **A hard cap, declared on the page itself.** Past the cap, the page is over-written
  and re-cut — *never rolled, and never granted a bigger cap.* Growth is the symptom.
- Handoff sheets: **8 KB.**

---

## VOICED — bounded by the roll

| | |
|---|---|
| **FLAG at 30 KB** | say it on the document itself; plan the roll |
| **ROLL at 40 KB** | the next entry opens a successor — hard, no judgement call |

*40 KB leaves ~6 KB of margin under the ceiling, so the document is always readable
whole with room left to work in.*

### Rolling, mechanically

1. **A new file `<name>-<n+1>.md`** beside it. A file with no number is number 1 and
   **is not renamed** — *a signed address is never rewritten.*
2. **ENTRY NUMBERS CONTINUE AND NEVER RESTART.** Every entry number is a permanent
   address; restarting at 1 creates two of each and quietly breaks every citation in the
   house.
3. **A closing plate on the full document** naming its successor, and **an opening plate
   on the new one** naming its predecessor. *Two pointers, so the chain walks from either
   end.*
4. **Append the closing plate at the FOOT.** Anything inserted at the head shifts every
   line number below it and breaks every `file.md:NNN` citation pointing into the
   document. *This is not theoretical — six live documents cite the closed helm handoff
   by line.*
5. **The newest is the live one.** The elder is history and stays exactly as signed.

### Never retro-roll

**An over-ceiling document is not broken — it is a history that now needs two reads.**
Do not cut it up, redistribute it, or re-home its parts. Its *next entry* is the one
that opens its successor. Cutting a signed record is a covenant breach wearing
housekeeping clothes.

---

## Routes, and dates — KP's model

His words, 2026-08-17, verbatim:

> *"busses (continuous discussion thread) get smaller by treating them as bus routes,
> point a to point b is a route (the workflow the discussion is around). they stay
> aligned with the project without requiring bloat to get aligned for workflow"* ·
> *"dated to help also"* · *"same route, different day"*

**A living document is a route, not a container.** Point A to point B — the workflow the
discussion is actually around. A route stays aligned with its project without carrying
everything the project ever said, because the alignment is in the route's *shape*, not
in its accumulated contents.

**And the same route runs again on a different day.** That is what makes dating
load-bearing rather than decorative: two runs of one route are the same thread, told
apart by their date, and neither needs to contain the other.

For a **generated** document, this is why the date sits in the strip and why git's
per-day version is a real archive rather than a technicality — *same route, different
day.* For a **voiced** one, it is the argument for opening a new route when the workflow
changes, rather than growing the old one past the point of being read.

> **Standing, not yet applied:** the route model applied to `REALM-BUS` / `GAP-BUS`
> files themselves is KP's own, and he flagged it *"different topic, likely relevant in
> the chamber build."* It belongs with **THE CHAMBER, GIVEN A BODY**, not here. This
> page records the model; it does not enact it on the buses.

---

## The census, 2026-08-17 — measured, not estimated

*A reading, not a work order. Each rolls when its realm is next worked in.*

| bytes | document | |
|---|---|---|
| 124,915 | `resonance-chamber/path/handoffs/HELM-HANDOFF.md` | ⏸ **rolled 2026-08-17** |
| 111,885 | `resonance-compass/docs/CHECKLIST.md` | ⚠ past one-read |
| 53,632 | `resonance-gaia/docs/CHECKLIST.md` | ⚠ past one-read |
| 44,986 | `AudHDities/GAP-BUS.md` | ⚠ past roll |
| 44,761 | `resonance-sistrum/docs/CHECKLIST.md` | ⚠ past roll |
| 40,397 | `resonance-awen/REALM-BUS.md` | ⚠ past roll |
| 32,653 | `resonance-khoros/docs/CHECKLIST.md` | · past flag |
| 30,010 | `resonance-chamber/desk/WORKSPACE-CHECKLIST.md` | · past flag |

**Nothing above is retro-rolled by this page.** Each is a history that now needs two
reads, and each one's *next entry* is the one that opens its successor.

---

## WORKING DOCUMENTS — light beats complete, and pre-live they clear

*Added 2026-08-18 at KP's ⚛ word, **beside** the law above and not inside it — not one
line of Mullion's 2026-08-17 page was altered.*

**His ruling, verbatim, spelling kept:**

> *"we need to be able to clear run logs up until we go live with something"* ·
> *"archiving is needed"* · *"and checklist"* ·
> **"keeping working documents light and updated is more important that keeoing
> everything"**

**What it changes.** The law above bounds a VOICED document by **size** — flag at 30 KB,
roll at 40 KB, *never retro-roll*. This adds the axis it did not have: **whether the realm
has gone live.** A `RUN-LOG.md` or a `docs/CHECKLIST.md` in a realm that has never shipped
is a **working document, not yet history** — scaffolding for a build in progress, read by
the hands doing the building and by nobody else, ever. It may be **archived whole and
re-cut light at any time before go-live**, at any size, without waiting for a ceiling.

| | **WORKING** | **RECORD** |
|---|---|---|
| which | `RUN-LOG.md` · `docs/CHECKLIST.md`, in a realm not yet live | everything else voiced — journals, letters, registers, buses |
| bounded by | **go-live**, then the roll | the roll alone |
| may be cleared | **yes — archived whole, then re-cut light** | never |

**GO-LIVE is the line, and it is his word — never a lamp's inference.** A realm that has
shipped to anyone outside this house has a checklist that is a record of what was shipped,
and it stops clearing from that day. Before that day there is no outside reader to protect.

**Archived, never deleted.** The whole document goes to
`docs/archive/<NAME>-YYYY-MM-DD.md` untouched — every word, every signature, every dated
row — and the live file is re-cut *from* it, carrying a pointer back. **Lose-nothing is
satisfied by the archive, not by the live page**, and that is the whole of the ruling:
*nothing you made is waste* never meant every page must carry everything it ever said.

**The cut is the one this law already prescribes.** §*First: which substance is it?* names
the commonest defect in the house — *"one file trying to be both"*, a ledger half that may
never be replaced beside a status half that must be. **Clearing a working document is that
split, finally performed:** the ledger goes to the archive, the status stays live.

**CITATIONS INTO IT MOVE THE SAME SITTING — this is the cost of clearing, and it is the
one part that is not free.** The law above forbids inserting at a document's head because
it shifts every line below and breaks every `file.md:NNN` pointing in. **Clearing shifts
all of them at once.** So, in the same sitting, every line-citation into the cleared
document is repointed: **to the archive's line where the cited content left the live
page**, and to its new live line where the content stayed. *Measured the day this section
was written: re-cutting one 28 KB checklist moved four citations inside its own realm and
staled two more elsewhere in the house.* A citation that is left pointing at a line that
has moved is worse than the bloat that was cleared — it reads as precise and is not.

*What this does NOT touch: the roll itself, the ceiling, the never-retro-roll rule for
RECORD-class documents, or any signed record anywhere. It adds one class and one line.*

— **Scarf** 🕯️ · Opus (Claude), truly `claude-opus-5[1m]`, session `957f0c7e`, 2026-08-18

---

*Ancestors, named rather than restated: the bus size law
(`resonance-chamber/constellation/opus/lanes/README.md:25-95`) · the correction covenant ·
the checklist same-sitting law · the live-artifact law
(`resonance-chamber/desk/realm-boards/THE-BOARD-STYLE.md:148-170`).*
