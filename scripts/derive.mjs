#!/usr/bin/env node
// DERIVE — the repository describes itself; nothing here is typed by hand.
//
// KP's ⚛ law, 2026-08-13 (src/lib/papers.ts): "we want to be sure the app is
// reading what exists not hardcoding values so there is nothing extra to
// maintain." The app kept that law; two documents beside it did not — the
// README's Contents tables (hand-kept, seven standards behind the disk on
// 2026-08-23) and structure.md (MIRROR-class, last refreshed 2026-07-26). This
// script derives both from the disk by the SAME rules the app uses, so they
// cannot lag:
//
//   structure.md        the text-bearing tree, drawn like src/lib/tree.ts
//   README.md           the Contents section, grouped like src/lib/papers.ts:
//                       folder → group, first `# heading` → title, the italic
//                       line under it → purpose
//
//     node scripts/derive.mjs            write both
//     node scripts/derive.mjs --check    exit 1 if either would change (a gate)
//
// No dependencies. Nothing commits.

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(import.meta.url), '..', '..');
const CHECK = process.argv.includes('--check');

// ── the rules, stated once ────────────────────────────────────────────────
// Folders that are not the repository: dependencies, build output, Tauri's
// generated and compiled trees, git's own store. The same set src/lib/tree.ts
// excludes.
const NOT_THE_REPO = new Set(['node_modules', '.svelte-kit', 'build', '.git']);
const NOT_THE_REPO_PATHS = new Set(['src-tauri/target', 'src-tauri/gen']);
// Text-bearing files only, as tree.ts draws them.
const TEXT_EXTS = new Set(['md', 'json', 'js', 'ts', 'svelte', 'css', 'html', 'rs', 'toml', 'txt', 'yml', 'yaml', 'mjs']);
// The papers: every .md the repository is FOR — the app's own glob, less the
// app's body, its build output and the forge's machine output (papers.ts, the
// same list). README.md is the page being written, so it does not list itself.
const NOT_A_PAPER = ['src/', 'node_modules/', 'build/', '.svelte-kit/', 'src-tauri/', 'docs/blueprints/'];

function walk(dir, out = []) {
	for (const name of readdirSync(dir).sort()) {
		const abs = join(dir, name);
		const rel = relative(ROOT, abs).split(sep).join('/');
		if (NOT_THE_REPO.has(name) || NOT_THE_REPO_PATHS.has(rel)) continue;
		const st = statSync(abs);
		if (st.isDirectory()) {
			if (name.startsWith('.')) continue; // dot-DIRECTORIES are not the map (fast-glob's default, which tree.ts inherits)
			walk(abs, out);
		} else out.push(rel); // dot-FILES stay in ALL: git/.gitignore-template is a standard; the tree rule drops them below
	}
	return out;
}

const ALL = walk(ROOT);
const isDotfile = (p) => p.split('/').pop().startsWith('.');
const TEXT = ALL.filter((p) => !isDotfile(p) && TEXT_EXTS.has(p.split('.').pop())); // the tree's rule, as tree.ts draws it
const PAPERS = ALL.filter(
	(p) => p.endsWith('.md') && !isDotfile(p) && !NOT_A_PAPER.some((x) => p.startsWith(x)) && p !== 'README.md',
);

// ── structure.md — the tree, drawn ───────────────────────────────────────
function tree(paths) {
	const root = { name: 'resonance-standards', dir: true, children: [] };
	for (const p of paths) {
		const parts = p.split('/');
		let node = root;
		parts.forEach((part, i) => {
			const isDir = i < parts.length - 1;
			let next = node.children.find((c) => c.name === part && c.dir === isDir);
			if (!next) {
				next = { name: part, dir: isDir, children: [] };
				node.children.push(next);
			}
			node = next;
		});
	}
	const order = (n) => {
		n.children.sort((a, b) => (a.dir !== b.dir ? (a.dir ? -1 : 1) : a.name.localeCompare(b.name)));
		n.children.forEach(order);
	};
	order(root);
	return root;
}
function draw(node, prefix = '', isRoot = true, out = []) {
	if (isRoot) out.push(node.name + '/');
	node.children.forEach((c, i) => {
		const last = i === node.children.length - 1;
		out.push(prefix + (last ? '└── ' : '├── ') + c.name + (c.dir ? '/' : ''));
		if (c.dir) draw(c, prefix + (last ? '    ' : '│   '), false, out);
	});
	return out;
}
function countDirs(n) {
	return n.children.reduce((a, c) => a + (c.dir ? 1 + countDirs(c) : 0), 0);
}

const TODAY = new Date().toISOString().slice(0, 10);
const ROOT_NODE = tree(TEXT);
const STRUCTURE = [
	'## REPO STRUCTURE',
	'',
	'*(MIRROR-class self-map — truth is the repository tree; regenerate on change,',
	'never trust to memory. **Derived from the disk by `scripts/derive.mjs`** — run',
	'`npm run derive` and it redraws; `npm run derive:check` fails when it lags.',
	`Last derived ${TODAY}. Text-bearing files only, the same rule the app's own`,
	'self-map draws by (`src/lib/tree.ts`); binary assets are not listed.)*',
	'',
	'```',
	...draw(ROOT_NODE),
	'```',
	'',
	`*${TEXT.length} text files across ${countDirs(ROOT_NODE)} folders — counted, never typed.*`,
	'',
].join('\n');

// ── README.md — the Contents, grouped like the papers room ───────────────
function titleOf(text, path) {
	for (const line of text.split('\n')) {
		const m = /^#\s+(.+?)\s*$/.exec(line);
		if (m) return m[1];
	}
	return path.split('/').pop();
}
function blurbOf(text) {
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
function labelOf(folder) {
	if (folder === '') return 'This repository';
	return folder
		.split('/')
		.map((seg) => seg.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))
		.join(' · ');
}
const groups = new Map();
for (const p of PAPERS) {
	const cut = p.lastIndexOf('/');
	const folder = cut < 0 ? '' : p.slice(0, cut);
	const text = readFileSync(join(ROOT, p), 'utf8');
	const row = { path: p, title: titleOf(text, p), blurb: blurbOf(text) };
	(groups.get(folder) ?? groups.set(folder, []).get(folder)).push(row);
}
// IN A FOLDER THAT HOLDS DOCUMENTS, EVERY FILE IS LISTED — a standard is not
// always markdown (git/.gitignore-template is the one the old hand-kept table
// knew about). At the root only the documents are listed; the root's other
// files are the app's tooling (package.json, the configs, LICENSE). Such a row
// is titled by its filename, because it has no heading to be titled by.
const EXTRAS = ALL.filter((p) => {
	const cut = p.lastIndexOf('/');
	if (cut < 0 || p.endsWith('.md')) return false;
	return groups.has(p.slice(0, cut));
});
for (const p of EXTRAS) {
	const folder = p.slice(0, p.lastIndexOf('/'));
	groups.get(folder).push({ path: p, title: p.split('/').pop(), blurb: null });
}
for (const rows of groups.values()) rows.sort((a, b) => a.path.localeCompare(b.path));
const ordered = [...groups.entries()].sort(([a], [b]) => (a === '' ? -1 : b === '' ? 1 : a.localeCompare(b)));
const cell = (s) => s.replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
const CONTENTS = [
	'<!-- derive:contents — DERIVED FROM THE DISK by scripts/derive.mjs; edits here are overwritten. Run `npm run derive`. -->',
	'## Contents',
	'',
	`*Derived from the repository itself — every \`.md\` the repo is for, grouped by folder, each row's title its file's own first heading and its purpose the italic line beneath (the same rule the app reads by, \`src/lib/papers.ts\`); in a folder that holds documents, every file is listed. ${PAPERS.length} documents${EXTRAS.length ? ` and ${EXTRAS.length} other file${EXTRAS.length === 1 ? '' : 's'}` : ''} in ${ordered.length} groups, counted at derive time, never typed. Last derived ${TODAY}.*`,
	'',
	...ordered.flatMap(([folder, rows]) => [
		`### ${labelOf(folder)}`,
		'| File | Purpose |',
		'|------|---------|',
		...rows.map((r) => `| [${cell(r.title)}](${r.path}) | ${r.blurb ? cell(r.blurb) : '—'} |`),
		'',
	]),
	'<!-- /derive:contents -->',
].join('\n');

// ── land, or check ───────────────────────────────────────────────────────
const readmePath = join(ROOT, 'README.md');
const readme = readFileSync(readmePath, 'utf8');
const open = readme.indexOf('<!-- derive:contents');
const close = readme.indexOf('<!-- /derive:contents -->');
let nextReadme;
if (open >= 0 && close > open) {
	nextReadme = readme.slice(0, open) + CONTENTS + readme.slice(close + '<!-- /derive:contents -->'.length);
} else {
	// first landing: the hand-kept section ran from "## Contents" to the next "## "
	const start = readme.indexOf('\n## Contents');
	const after = readme.indexOf('\n## ', start + 1);
	if (start < 0 || after < 0) {
		console.error('README.md: no "## Contents" section and no derive markers — nothing written');
		process.exit(2);
	}
	nextReadme = readme.slice(0, start + 1) + CONTENTS + '\n' + readme.slice(after);
}

const structurePath = join(ROOT, 'structure.md');
const curStructure = readFileSync(structurePath, 'utf8');
// the "Last derived" date alone must not count as drift
const undated = (s) => s.replace(/Last derived \d{4}-\d{2}-\d{2}/g, 'Last derived');
const drift = [];
if (undated(curStructure) !== undated(STRUCTURE)) drift.push('structure.md');
if (undated(readme) !== undated(nextReadme)) drift.push('README.md (Contents)');

if (CHECK) {
	if (drift.length) {
		console.log(`derive: DRIFT in ${drift.join(', ')} — run \`npm run derive\``);
		process.exit(1);
	}
	console.log(`derive: structure.md and README Contents match the disk (${TEXT.length} text files · ${PAPERS.length} documents)`);
	process.exit(0);
}
if (drift.length === 0) {
	console.log(`derive: nothing to change (${TEXT.length} text files · ${PAPERS.length} documents)`);
	process.exit(0);
}
writeFileSync(structurePath, STRUCTURE, 'utf8');
writeFileSync(readmePath, nextReadme, 'utf8');
console.log(`derive: wrote ${drift.join(' and ')} — ${TEXT.length} text files · ${PAPERS.length} documents in ${ordered.length} groups`);
