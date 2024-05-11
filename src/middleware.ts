import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
    publicRoutes: ["/"],
    afterAuth(auth, req, evt) {
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url })
        }
        if (auth.userId && !auth.isPublicRoute) {
            return NextResponse.next();
        }
        if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/dashboard") {
            const orgSelection = new URL("/dashboard", req.url);
            return NextResponse.redirect(orgSelection);
        }
        return NextResponse.next();
    },
    ignoredRoutes: ["/close.svg"]
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};