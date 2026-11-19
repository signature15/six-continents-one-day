/**
 * six-continents-one-day — news-image-20261118 entry.
 *
 * The image (entry.png, committed at the repo root) is a v14 broadsheet
 * front page covering the news of Wednesday 18 November 2026 on a single
 * sheet, with 30 stories spread across seven regions and six continents.
 *
 * Layout, top to bottom:
 * - Masthead "WEDNESDAY'S WORLD" with the tagline "30 STORIES - 7 REGIONS -
 *   ONE PAGE", flanked by a date block reading "NOV 18 WED 2026".
 * - A day-in-numbers strip: 64 children killed in Yemen, 330,000 displaced
 *   there, Voyager at 25.9 billion km, and the EUR 45B Ukraine loan.
 * - A lead band of regional stat tags (MIDDLE EAST 7, US 7, ASIA 6, EUROPE 4,
 *   WORLD 3, UKRAINE 2, AFRICA 1) introducing the region grid.
 * - Lead stories in time order: OVERNIGHT headline cards (Asia-Apac, the
 *   Middle East / Iran war, space) and MORNING stat cards (141 drones, the
 *   56-44 Senate vote, 19 dead, 46 hurt).
 * - AFTERNOON briefs: nine short stories filed by region and topic.
 * - EVENING briefs: sixteen-plus further stories, numbered 15-30.
 * - Sources footer crediting the wire services behind every item.
 *
 * Program logic: copy entry.png to /output/entry.png with the Node.js
 * standard library only — no network, identical bytes every run.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const input = 'entry.png';
const output = join('/output', 'entry.png');

mkdirSync('/output', { recursive: true });
const data = readFileSync(input);
writeFileSync(output, data);
