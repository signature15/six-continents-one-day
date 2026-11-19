import { join } from 'node:path';
/**
 * six-continents-one-day — entry for the make.fun news-image-20261118
 * bounty, archived as entry.png at the root of this repository.
 *
 * entry.png is a full broadsheet front page for Wednesday 18 November 2026:
 * thirty wire stories from every inhabited continent, compressed onto one
 * printable sheet under the banner "WEDNESDAY'S WORLD".
 *
 * What a reader sees, top to bottom:
 * - Masthead: the "WEDNESDAY'S WORLD" title with its "30 STORIES - 7
 *   REGIONS - ONE PAGE" strapline, and a date panel "NOV 18 WED 2026".
 * - Day-in-numbers strip: four headline figures — 64 children killed in
 *   Yemen, 330,000 displaced there, Voyager 1 at 25.9 billion km, and the
 *   EUR 45 billion Ukraine loan.
 * - Lead stories: OVERNIGHT cards (Asia-Pacific, the Iran war, space) and
 *   MORNING cards (the 141-drone strike, the 56-44 Senate vote, casualty
 *   figures), each tagged with its region and time of filing.
 * - Region color grid: seven color-coded region tiles — MIDDLE EAST 7,
 *   US 7, ASIA 6, EUROPE 4, WORLD 3, UKRAINE 2, AFRICA 1 — so readers can
 *   trace every story back to its part of the world at a glance.
 * - Evening briefs: numbered items 15-30, short AFTERNOON and EVENING
 *   dispatches filed region by region to close out the day.
 * - Sources footer: the wire services and outlets behind every item.
 *
 * Program logic: copy entry.png to /output/entry.png with the Node.js
 * standard library only — no network, identical bytes every run.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
const input = join(import.meta.dirname, 'entry.png');
const output = join('/output', 'entry.png');

mkdirSync('/output', { recursive: true });
mkdirSync('/output', { recursive: true });
const data = readFileSync(input);
writeFileSync(output, data);
