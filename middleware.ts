import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/enter", "/api/auth"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow password page and auth API through
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Allow static assets through
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/videos") ||
    pathname.endsWith(".pdf") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".ico")
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get("portfolio_auth")?.value;
  const expected = process.env.PORTFOLIO_AUTH_TOKEN;

  if (!expected || token !== expected) {
    const url = req.nextUrl.clone();
    url.pathname = "/enter";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
