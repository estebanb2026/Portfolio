import { NextResponse } from "next/server";

/** Lightweight probe for deploys / uptime (avoids depending on RSC HTML). */
export function GET() {
  return NextResponse.json(
    { ok: true, service: "esteban-barrera-portfolio" },
    { status: 200, headers: { "cache-control": "no-store" } }
  );
}
