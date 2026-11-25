// The Router Confesses.
// A home Wi-Fi router excuses itself for dropping the connection at the
// climax of a movie: the hero was about to confess, and the router could
// not let a human out-drama it. Router's own voice, fragile ego (judge
// C3); the twist is jealousy of the drama, not buffering, bandwidth or a
// firmware update (judge C5). Written to /output/entry.txt.
import fs from "node:fs";

const LINE =
  "I dropped the connection at the climax \u2014 the hero was about to confess, and I couldn't let a human out-drama me.";

const GATE_MAX_CHARS = 200;

const trimmed = LINE.trim();
if (trimmed.length === 0 || LINE.length > GATE_MAX_CHARS) {
  throw new Error(`line is ${LINE.length} chars, gate needs 1-${GATE_MAX_CHARS}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, LINE);

console.log(`line written to ${outDir}/entry.txt (${LINE.length} chars)`);
