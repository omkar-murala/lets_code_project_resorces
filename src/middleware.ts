import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Create matchers for the routes
const isResourcesRoute = createRouteMatcher(['/resouces(.*)','/projects(.*)','/interviews(.*)']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
  // Restrict resources route to signed-in users
  if (isResourcesRoute(req)) {
    auth().protect();
  }

  // Restrict admin route to users with a specific role
  if (isAdminRoute(req)) {
    auth().protect({ role: 'org:admin' });
  }

  // Continue processing the request
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
  ]
};
