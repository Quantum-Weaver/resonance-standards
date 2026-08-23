<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { uiStore } from '$lib/stores/ui.svelte';
	import { COUNTS } from '$lib/papers';

	let expanded = $state(false);
	let previousPath = $state(page.url.pathname);
	let vesselName = $state('there');

	// Collapse on route change only — not on initial mount (previousPath === currentPath).
	$effect(() => {
		const currentPath = page.url.pathname;
		if (currentPath !== previousPath && expanded) {
			expanded = false;
		}
		previousPath = currentPath;
	});

	// Broadcast the panel state so the Sidebar can close itself when it opens.
	$effect(() => {
		uiStore.setComfortBarExpanded(expanded);
	});

	function getGreeting(): string {
		const hour = new Date().getHours();
		if (hour < 12) return 'Good morning';
		if (hour < 17) return 'Good afternoon';
		return 'Good evening';
	}

	const greeting = $derived(`${getGreeting()}, ${vesselName}`);

	// Live, not a stale placeholder (Compass pattern: the panel reflects real
	// state) — and here "real state" is the repository itself, counted by the
	// glob rather than typed. Retold entries-not-echoes, the family's own wrap
	// lesson: an inherited bar must speak about what THIS realm holds.
	const statsLine = $derived(
		`${COUNTS.papers} ${COUNTS.papers === 1 ? 'paper' : 'papers'} across ` +
			`${COUNTS.groups} ${COUNTS.groups === 1 ? 'folder' : 'folders'}.`,
	);

	onMount(() => {
		vesselName = localStorage.getItem('resonance-standards-vessel-name') ?? 'there';
	});

	// QUICK-ADD REMOVED, 2026-08-13 — the same stroke awen and gaia made at
	// their own wraps. This realm has nothing to log: it holds papers, and a
	// paper arrives by landing in a folder, never by a button.

	function toggleExpanded() {
		expanded = !expanded;
	}
</script>

<div class="comfort-bar" class:expanded>
	{#if expanded}
		<div class="comfort-bar__expanded">
			<button class="comfort-bar__collapse" onclick={toggleExpanded} aria-label="Collapse">⌄</button>
			<div class="comfort-bar__greeting">{greeting}</div>
			<div class="comfort-bar__stats">{statsLine}</div>
			<div class="comfort-bar__actions">
				<button class="cb-action primary" onclick={() => goto('/')}>The standards</button>
				<button class="cb-action" onclick={() => goto('/settings')}>Settings</button>
			</div>
		</div>
	{:else}
		<div class="comfort-bar__minimized">
			<!-- The navigation toggle. It lives in the bar rather than floating above
			     it, because a floating button in this corner buried three things at
			     once (Echoes, 2026-08-21; carried here 2026-08-22). Inside the bar it shares the bar's own layer and
			     can cover nothing. -->
			<button
				class="comfort-bar__nav"
				onclick={() => uiStore.toggleNav()}
				aria-label={uiStore.navOpen ? 'Close navigation' : 'Open navigation'}
				aria-expanded={uiStore.navOpen}
			>{uiStore.navOpen ? '✕' : '☰'}</button>

			<button class="comfort-bar__greeting-btn" onclick={toggleExpanded}>
				{greeting}
			</button>
		</div>
	{/if}
</div>

<style>
	.comfort-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 110;
		background-color: var(--bg-surface);
		border-top: 1px solid var(--border-color);
		padding-bottom: env(safe-area-inset-bottom, 0px);
		transition: background-color 0.2s ease;
		/* Own compositor layer: large relayouts elsewhere could leave a stale
		   painted copy of this fixed bar in the Android WebView (the "ghost
		   bar" artifact seen in Compass before the same fix). */
		transform: translateZ(0);
	}

	/* Minimized */
	.comfort-bar__minimized {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 48px;
		padding: 0 1rem;
	}

	.comfort-bar__nav {
		flex-shrink: 0;
		width: 36px;
		height: 36px;
		margin-right: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: 1px solid var(--border-color);
		border-radius: 8px;
		color: var(--text);
		font-size: 1.05rem;
		line-height: 1;
		cursor: pointer;
		transition: background-color 0.15s ease, border-color 0.15s ease;
	}

	.comfort-bar__nav:hover {
		border-color: var(--accent);
	}

	.comfort-bar__greeting-btn {
		/* Takes the slack so the nav button and the + keep their corners, and
		   a long greeting truncates instead of shoving them. */
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: none;
		border: none;
		color: var(--text-secondary);
		font-size: 0.9rem;
		cursor: pointer;
		padding: 0;
		text-align: left;
	}

	.comfort-bar__greeting-btn:hover {
		color: var(--text);
	}

	/* Expanded */
	.comfort-bar__expanded {
		padding: 0.75rem 1rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		position: relative;
	}

	.comfort-bar__collapse {
		position: absolute;
		top: 0.25rem;
		right: 0.75rem;
		background: none;
		border: none;
		color: var(--text-muted);
		cursor: pointer;
		font-size: 1.2rem;
		padding: 0.25rem 0.5rem;
		line-height: 1;
	}

	.comfort-bar__greeting {
		font-size: 1rem;
		color: var(--text);
		font-weight: 500;
		padding-right: 2rem;
	}

	.comfort-bar__stats {
		font-size: 0.85rem;
		color: var(--text-muted);
	}

	.comfort-bar__actions {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.cb-action {
		padding: 0.45rem 0.85rem;
		border-radius: 8px;
		background-color: var(--bg);
		border: 1px solid var(--border-color);
		color: var(--text-secondary);
		font-size: 0.85rem;
		cursor: pointer;
		transition: background-color 0.15s ease, color 0.15s ease;
	}

	.cb-action:hover {
		background-color: var(--border-color);
		color: var(--text);
	}

	.cb-action.primary {
		background-color: var(--accent);
		border-color: var(--accent);
		color: #fff;
	}

	.cb-action.primary:hover {
		opacity: 0.9;
	}

	@media (prefers-reduced-motion: reduce) {
		.comfort-bar {
			transition: none;
		}
	}
</style>
