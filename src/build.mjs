/* FORUS Digital · static build
   Usage: node src/build.mjs
   Assembles every page in src/pages into site/*.html using the shared components. */
import { readdirSync, writeFileSync } from 'node:fs';
import { layout } from './components.mjs';

const pagesDir = new URL('./pages/', import.meta.url);
const files = readdirSync(pagesDir).filter(f => f.endsWith('.mjs')).sort();
let count = 0;
for (const f of files) {
  const mod = await import(new URL(f, pagesDir));
  const pages = Array.isArray(mod.default) ? mod.default : [mod.default];
  for (const p of pages) {
    const html = layout(p);
    if (html.includes('\u2014')) throw new Error(`Em dash found in ${p.file}`);
    writeFileSync(new URL(`../site/${p.file}`, import.meta.url), html);
    count++;
    console.log('built', p.file);
  }
}
console.log(`${count} pages built`);
