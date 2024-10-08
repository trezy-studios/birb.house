// Module imports
import {
	type NextRequest,
	NextResponse,
} from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
	// Create an unmodified response
	let response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	})

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll()
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value }) => {
						return request.cookies.set(name, value)
					})

					response = NextResponse.next({ request })

					cookiesToSet.forEach(({ name, value, options }) =>{
						return response.cookies.set(name, value, options)
					})
				},
			},
		},
	)

	// This will refresh session if expired - required for Server Components
	// https://supabase.com/docs/guides/auth/server-side/nextjs
	const user = await supabase.auth.getUser()

	// protected routes
	if (request.nextUrl.pathname.startsWith('/protected') && user.error) {
		return NextResponse.redirect(new URL('/sign-in', request.url))
	}

	if (request.nextUrl.pathname === '/' && !user.error) {
		return NextResponse.redirect(new URL('/protected', request.url))
	}

	await supabase.auth.getSession()

	return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
