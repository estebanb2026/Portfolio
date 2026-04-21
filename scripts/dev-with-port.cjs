/**
 * Starts `next dev` on the first available TCP port starting from DEV_PORT / PORT / 3000.
 * Avoids EADDRINUSE when a previous dev server (or another app) still holds the port.
 */
const net = require("net");
const { spawn } = require("child_process");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");
const raw = process.env.DEV_PORT || process.env.PORT || "3000";
const PREFERRED = Number.isFinite(parseInt(raw, 10)) ? parseInt(raw, 10) : 3000;
const MAX_SCAN = 25;

function canBindPort(port) {
  return new Promise((resolve) => {
    const s = net.createServer();
    s.once("error", () => resolve(false));
    s.listen(port, "0.0.0.0", () => {
      s.close(() => resolve(true));
    });
  });
}

async function findFreePort(from) {
  for (let i = 0; i < MAX_SCAN; i++) {
    const p = from + i;
    if (Number.isFinite(p) && p > 0 && p < 65536 && (await canBindPort(p))) {
      return p;
    }
  }
  throw new Error(
    `[esteban-barrera-portfolio] No free port found in range ${from}–${from + MAX_SCAN - 1}. ` +
      "Stop other servers or set DEV_PORT to a free base port.",
  );
}

async function main() {
  const port = await findFreePort(PREFERRED);
  if (port !== PREFERRED) {
    console.warn(
      `\n[esteban-barrera-portfolio] Port ${PREFERRED} is in use → dev server on http://localhost:${port}\n`,
    );
  }

  const nextCli = require.resolve("next/dist/bin/next", {
    paths: [PROJECT_ROOT],
  });
  const forward = process.argv.slice(2);

  const child = spawn(process.execPath, [nextCli, "dev", "-p", String(port), ...forward], {
    cwd: PROJECT_ROOT,
    stdio: "inherit",
    env: {
      ...process.env,
      PORT: String(port),
    },
  });

  child.on("error", (err) => {
    console.error("[esteban-barrera-portfolio] Failed to start Next.js:", err);
    process.exit(1);
  });

  child.on("exit", (code, signal) => {
    if (signal) process.kill(process.pid, signal);
    process.exit(code ?? 0);
  });
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
