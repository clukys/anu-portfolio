import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  const correct = process.env.PORTFOLIO_PASSWORD;
  const token = process.env.PORTFOLIO_AUTH_TOKEN;

  if (!correct || !token) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  if (password !== correct) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("portfolio_auth", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return res;
}
