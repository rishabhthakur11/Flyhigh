import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })

    }
    if (auth.userId && req.nextUrl.pathname === "/") {
      const orgURL = new URL("/dashboard", req.url)
      return NextResponse.redirect(orgURL)
    }
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next()
    }

    return NextResponse.next()
  },
  publicRoutes: ['(^(?!/(?:account|upload-new|add-info)|.*/edit$)/.*$)', '/'],



});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};


