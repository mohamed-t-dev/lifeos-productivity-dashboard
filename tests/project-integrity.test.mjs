import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('document includes required accessibility and responsive metadata', () => {
  assert.match(html, /<meta\s+name=["']viewport["']/i);
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /aria-modal=["']true["']/);
});

test('HTML identifiers are unique', () => {
  const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  assert.deepEqual([...new Set(duplicates)], []);
});
