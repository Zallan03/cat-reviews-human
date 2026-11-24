// Entry for "Make the AI Judge Laugh: Cat Reviews Its Human" (make.fun).
// Writes one funny single-line one-star review from a house cat (<200 chars)
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star. He bought a $200 cat bed. I sleep in the box it came in. He still hasn't learned.";

// The gate requires 1–200 characters; fail loudly instead of submitting junk.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, must be 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
