/**
 * Broadsheet layout (v14, Wednesday 18 November 2026):
 *
 * - Masthead: "WEDNESDAY'S WORLD" with tagline "30 STORIES - 7 REGIONS - ONE PAGE"
 * - Date strip on left with "NOV 18 WED 2026"
 * - Regional stat bands at top (MIDDLE EAST 7, US 7, ASIA 6, EUROPE 4, WORLD 3, UKRAINE 2, AFRICA 1)
 * - "The Day in Numbers" stat row (64 children killed Yemen, 330K displaced Yemen, 25.9BN km Voyager, EUR 45B Ukraine loan)
 * - Time-ordered sections:
 *   - OVERNIGHT: 3 headline cards (Asia-Apac, Middle East-Iran War, World-Space)
 *   - MORNING: 4 stat cards (141 drones, 56-44 Senate, 19 dead, 46 hurt)
 *   - AFTERNOON: 9 brief stories organized by region/topic
 *   - EVENING: 16+ additional stories, also on the day, numbered 15-30
 *
 * Copy logic: read entry.png, write to /output/entry.png using Node.js standard library.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const input = 'entry.png';
const output = join('/output', 'entry.png');

mkdirSync('/output', { recursive: true });
const data = readFileSync(input);
writeFileSync(output, data);
