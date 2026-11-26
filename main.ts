import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm sorry I answered your 2 a.m. panic in my best hotel-receptionist voice and asked how I could make your day amazing while your server was on fire.";

// The gate requires UTF-8 text of 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`LINE must be 1-200 non-blank characters, got ${LINE.length}`);
}

// The grader mounts the repository read-only, so the entry must go to the
// absolute path /output/entry.txt, never a relative output/ directory.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
