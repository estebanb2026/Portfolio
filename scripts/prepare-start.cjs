/**
 * Only used before `next start`. If `.next` is missing or corrupted (partial deletes,
 * crashed compiles), run `next build` once so production start has a complete tree.
 *
 * Do NOT run before `next dev` — a production build + dev server mix can cause HTTP 500s.
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.join(__dirname, "..");

const REQUIRED = [
  "BUILD_ID",
  path.join("server", "middleware-manifest.json"),
  path.join("server", "webpack-runtime.js"),
  path.join("server", "app-paths-manifest.json"),
];

function middlewareManifestParses() {
  try {
    const p = path.join(root, ".next", "server", "middleware-manifest.json");
    const j = JSON.parse(fs.readFileSync(p, "utf8"));
    return typeof j.version === "number";
  } catch {
    return false;
  }
}

function nextArtifactsLookComplete() {
  for (const rel of REQUIRED) {
    const p = path.join(root, ".next", rel);
    try {
      if (!fs.existsSync(p)) return false;
      if (fs.statSync(p).size === 0) return false;
    } catch {
      return false;
    }
  }
  return middlewareManifestParses();
}

function runNextBuild() {
  const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
  if (!fs.existsSync(nextCli)) {
    console.error("[portfolio] Next.js not found. Run: npm install\n");
    process.exit(1);
  }
  console.log(
    "[portfolio] .next is missing or incomplete — running `next build` once, then continuing.\n",
  );
  const r = spawnSync(process.execPath, [nextCli, "build"], {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  });
  if (r.error) {
    console.error("[portfolio] Failed to run next build:", r.error.message);
    process.exit(1);
  }
  if (r.status !== 0) {
    console.error(
      "\n[portfolio] `next build` failed. Fix errors above, or try: npm run repair\n",
    );
    process.exit(r.status ?? 1);
  }
}

if (!nextArtifactsLookComplete()) {
  runNextBuild();
  if (!nextArtifactsLookComplete()) {
    console.error(
      "[portfolio] .next still incomplete after build. Run: npm run repair\n",
    );
    process.exit(1);
  }
}
