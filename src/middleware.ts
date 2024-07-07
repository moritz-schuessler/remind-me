import { auth } from "@/auth";
import { redirect } from "next/navigation";

const authRoutes = ["/signin", "/verify-request"];

export default auth((request) => {
  if (!request.auth && !authRoutes.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL("/signin", request.nextUrl.origin));
  }

  if (request.auth && authRoutes.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL("/", request.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
