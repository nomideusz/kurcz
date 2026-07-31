import assert from 'node:assert/strict';
import { localizeUrl, cleanTitle, toHits } from '../src/utils/search-links.js';

// --- localizeUrl: PL is the unprefixed default; EN uses English slugs under /en/ -------
assert.equal(localizeUrl('https://kurcz.pl/kurcze-lydek/', 'pl'), '/kurcze-lydek/');
assert.equal(localizeUrl('https://kurcz.pl/en/calf-cramps/', 'pl'), '/kurcze-lydek/');
assert.equal(localizeUrl('https://kurcz.pl/kurcze-lydek/', 'en'), '/en/calf-cramps/');
assert.equal(localizeUrl('https://kurcz.pl/en/kurcze-lydek/', 'en'), '/en/calf-cramps/');
assert.equal(localizeUrl('https://kurcz.pl/en/calf-cramps/', 'en'), '/en/calf-cramps/');

// homepage in both directions
assert.equal(localizeUrl('https://kurcz.pl/', 'pl'), '/');
assert.equal(localizeUrl('https://kurcz.pl/en/', 'pl'), '/');
assert.equal(localizeUrl('https://kurcz.pl/', 'en'), '/en/');
assert.equal(localizeUrl('https://kurcz.pl/en/', 'en'), '/en/');

// a slug that merely starts with "en" must not be mistaken for the locale prefix
assert.equal(localizeUrl('https://kurcz.pl/energia/', 'pl'), '/energia/');
assert.equal(localizeUrl('https://kurcz.pl/energia/', 'en'), '/en/energia/');

// trailing slashes are preserved — the site is built with trailingSlash: 'always'
assert.ok(localizeUrl('https://kurcz.pl/en/faq/', 'pl').endsWith('/'));

// --- cleanTitle ----------------------------------------------------------------------
assert.equal(cleanTitle('Kurcze łydek — jak ulżyć | Kurcz.pl'), 'Kurcze łydek — jak ulżyć');
assert.equal(cleanTitle('Leg Cramps | Kurcz.pl'), 'Leg Cramps');
assert.equal(cleanTitle('Bez sufiksu'), 'Bez sufiksu');
assert.equal(cleanTitle(undefined), '');

// --- toHits: dedupe across languages, prefer reader-language metadata ----------------
const chunk = (key, language, title, score) => ({
  score,
  item: { key, metadata: { language, title, description: `d:${language}` } },
});

// the same page indexed in both languages collapses to ONE row for the reader
const mixed = toHits(
  [
    chunk('https://kurcz.pl/en/calf-cramps/', 'en', 'Calf Cramps | Kurcz.pl', 0.98),
    chunk('https://kurcz.pl/kurcze-lydek/', 'pl', 'Kurcze łydek | Kurcz.pl', 0.91),
  ],
  'pl',
);
assert.equal(mixed.length, 1, 'PL and EN twins must collapse to one row');
assert.equal(mixed[0].url, '/kurcze-lydek/');
assert.equal(mixed[0].title, 'Kurcze łydek', 'reader-language title must win');
assert.equal(mixed[0].description, 'd:pl');

// when only the other language is available, its metadata is still shown
const enOnly = toHits([chunk('https://kurcz.pl/en/leg-cramps/', 'en', 'Leg Cramps | Kurcz.pl', 0.9)], 'pl');
assert.equal(enOnly.length, 1);
assert.equal(enOnly[0].url, '/kurcze-nog/', 'link must still point at the PL page');
assert.equal(enOnly[0].title, 'Leg Cramps');

// ranking order is preserved and the limit is honoured
const many = toHits(
  Array.from({ length: 9 }, (_, i) => chunk(`https://kurcz.pl/p${i}/`, 'pl', `T${i} | Kurcz.pl`, 1 - i / 10)),
  'pl',
);
assert.equal(many.length, 6, 'limit must cap the result rows');
assert.deepEqual(
  many.map((h) => h.url),
  ['/p0/', '/p1/', '/p2/', '/p3/', '/p4/', '/p5/'],
);

// malformed chunks are skipped rather than thrown on
assert.deepEqual(toHits([{}, { item: {} }, { item: { key: 'https://kurcz.pl/x/' } }], 'pl'), []);
assert.deepEqual(toHits(undefined, 'pl'), []);

console.log('Search link helpers verified: locale rewriting, title cleanup, cross-language dedupe.');
