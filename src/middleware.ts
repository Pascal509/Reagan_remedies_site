import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isCaseStudiesRoute = pathname.startsWith("/case-studies");

  if (!isAdminRoute && !isDashboardRoute && !isCaseStudiesRoute) {
    return NextResponse.next();
  }

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    const signInUrl = new URL(`/auth/signin`, request.url);
    signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  if (isAdminRoute && token.role !== "Admin") {
    return NextResponse.redirect(new URL(`/`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"]
};
