/**
 * Warns if the active Node major differs from .nvmrc (many Next.js issues come
 * from unsupported Node versions). Exits 0 so it never blocks `npm run dev`.
 */
const fs = require("fs");
const path = require("path");

const nvmrcPath = path.join(__dirname, "..", ".nvmrc");
let wantRaw = "20";
try {
  wantRaw = fs.readFileSync(nvmrcPath, "utf8").trim();
} catch {
  /* optional file */
}
const wantMajor = parseInt(String(wantRaw).split(/[.\s]/)[0], 10);
const cur = process.version;
const curMajor = parseInt(cur.slice(1).split(".")[0], 10);

if (Number.isFinite(wantMajor) && Number.isFinite(curMajor) && wantMajor !== curMajor) {
  console.warn(
    `\n[esteban-barrera-portfolio] Node ${wantRaw} is recommended (you are on ${cur}). Wrong versions often break Next.js locally.\n  → nvm use   or   fnm use   (see .nvmrc)\n`,
  );
}
