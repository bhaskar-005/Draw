import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from 'next/server';

 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest ) {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
    return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/', request.url))
   }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/plans','/dashboard/projects', '/workspace/:path*'],
}