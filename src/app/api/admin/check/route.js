import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const cookie = req.cookies.get("admin-auth");
    if (cookie && cookie.value === "1") {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
