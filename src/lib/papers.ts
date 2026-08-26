// THE PAPERS — this repo's own markdown, read from the ground at build.

const RAW = import.meta.glob(
	[
		'/**/*.md',
		'!/src/**',
		'!/node_modules/**',
		'!/build/**',
		'!/.svelte-kit/**',
		'!/src-tauri/**',
		'!/docs/blueprints/**',
	],
	{ query: '?raw', import: 'default', eager: true },
) as Record<string, string>;

export interface Paper {
	/** repo-relative path, e.g. "docs/THE-TELLING-STANDARD.md" */
	path: string;
	/** the folder it lives in — "" for the repo root */
	folder: string;
	/** the file's own first `# heading`, falling back to its filename */
	title: string;
	/** the line under the heading if it is an italic one-liner — the house's form */
	blurb: string | null;
	text: string;
}

export interface Group {
	/** the folder, verbatim — "" for the root */
	folder: string;
	/** what the sidebar and headings show */
	label: string;
	papers: Paper[];
}

/** The file's own first `# heading`. Never a string typed beside it. */
function titleOf(text: string, path: string): string {
	for (const line of text.split('\n')) {
		const m = /^#\s+(.+?)\s*$/.exec(line);
		if (m) return m[1];
	}
	return path.split('/').pop() ?? path;
}

/** The house writes a one-line italic gloss under the heading. Take it if it is there. */
function blurbOf(text: string): string | null {
	const lines = text.split('\n');
	const at = lines.findIndex((l) => /^#\s+/.test(l));
	if (at < 0) return null;
	for (const line of lines.slice(at + 1, at + 6)) {
		const t = line.trim();
		if (!t) continue;
		const m = /^\*(.+)\*$/.exec(t);
		return m ? m[1].trim() : null;
	}
	return null;
}

/** "docs" → "Docs"; "" → "The repo itself". Derived, never a lookup table. */
function labelOf(folder: string): string {
	if (folder === '') return 'This repository';
	return folder
		.split('/')
		.map((seg) => seg.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))
		.join(' · ');
}

export const PAPERS: Paper[] = Object.entries(RAW)
	.map(([abs, text]) => {
		const path = abs.replace(/^\//, '');
		const cut = path.lastIndexOf('/');
		const folder = cut < 0 ? '' : path.slice(0, cut);
		return { path, folder, title: titleOf(text, path), blurb: blurbOf(text), text };
	})
	.sort((a, b) => a.path.localeCompare(b.path));

/** Root first. */
export const GROUPS: Group[] = (() => {
	const by = new Map<string, Paper[]>();
	for (const p of PAPERS) {
		const list = by.get(p.folder) ?? [];
		list.push(p);
		by.set(p.folder, list);
	}
	return [...by.entries()]
		.sort(([a], [b]) => (a === '' ? -1 : b === '' ? 1 : a.localeCompare(b)))
		.map(([folder, papers]) => ({ folder, label: labelOf(folder), papers }));
})();

export const COUNTS = {
	papers: PAPERS.length,
	groups: GROUPS.length,
	/** honest bytes */
	bytes: PAPERS.reduce((n, p) => n + p.text.length, 0),
};
