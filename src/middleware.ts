import {
   convexAuthNextjsMiddleware,
   createRouteMatcher,
   isAuthenticatedNextjs,
   nextjsMiddlewareRedirect
} from "@convex-dev/auth/nextjs/server";

const isAuthRoute = createRouteMatcher(["/login"]);
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default convexAuthNextjsMiddleware((request) => {
   // if the route is protected and the user is not authenticated.
   if (isProtectedRoute(request) && !isAuthenticatedNextjs()) {
      return nextjsMiddlewareRedirect(request, "/login");
   }

   // if the user is already authenticated redirect the user to home from login page
   if (isAuthRoute(request) && isAuthenticatedNextjs()) {
      return nextjsMiddlewareRedirect(request, "/");
   }
});

export const config = {
   // The following matcher runs middleware on all routes
   // except static assets.
   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};
