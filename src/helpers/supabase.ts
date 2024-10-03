'use client'

// Module imports
import {
	type Provider,
	type SupabaseClient,
} from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'
import SteamSignIn from 'steam-signin'





// Local imports
import { type Application } from '@/typedefs/Application'
import { type GameKey } from '@/typedefs/GameKey'





// Constants
const defaultOAuthOptions = {
	redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
}





// Variables
let supabaseClient: SupabaseClient





/** Creates or retrieves the Supabase client. */
export function getSupabaseClient(): SupabaseClient {
	if (!supabaseClient) {
		supabaseClient = createBrowserClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		)
	}

	return supabaseClient
}

/**
 * Retrieves game keys for the currently user.
 *
 * @param applicationIDs An array of application IDs to filter on.
 * @returns The results of the query.
 */
export async function getApplications(applicationIDs: string[]): Promise<null | Application[]> {
	const supabase = getSupabaseClient()

	let query = supabase
		.from('applications')
		.select()

	if (applicationIDs) {
		query = query.in('id', applicationIDs)
	}

	const { data } = await query

	return data
}

/**
 * Retrieves game keys for the currently user.
 *
 * @returns The results of the query.
 */
export async function getGameKeys(): Promise<null | GameKey[]> {
	const supabase = getSupabaseClient()

	const { data } = await supabase
		.from('keys')
		.select()

	return data
}

/**
 * Registers a new user.
 *
 * @param email The user's email.
 * @param password The user's password.
 */
export async function registerNewAccount(email: string, password: string) {
	const supabase = getSupabaseClient()

	const { error } = await supabase.auth.signUp({
		email,
		password,
	})

	if (error) {
		throw error
	}
}

/**
 * Requests a password reset.
 *
 * @param email The user's email.
 */
export async function requestPasswordReset(email: string) {
	const supabase = getSupabaseClient()

	const { error } = await supabase.auth.resetPasswordForEmail(email)

	if (error) {
		throw error
	}
}

/**
 * Initiates login via Supabase.
 *
 * @param provider The ID of the provider to be used.
 */
export async function signInWithOAuth(provider: Provider) {
	const supabase = getSupabaseClient()

	await supabase.auth.signInWithOAuth({
		provider,
		options: defaultOAuthOptions,
	})
}

/** Initiates Apple login via Supabase. */
export async function signInWithApple() {
	await signInWithOAuth('apple')
}

/** Initiates Discord login via Supabase. */
export async function signInWithDiscord() {
	await signInWithOAuth('discord')
}

/** Initiates Google login via Supabase. */
export async function signInWithGoogle() {
	await signInWithOAuth('google')
}

/** Initiates Steam login. */
export function signInWithSteam() {
	const steamManager = new SteamSignIn(process.env.NEXT_PUBLIC_SITE_URL!)
	const returnURL = `${process.env.NEXT_PUBLIC_SITE_URL}/oauth/steam`

	// @ts-expect-error `URL` is totally valid here, so fuck off Typescript, you're drunk.
	window.location = steamManager.getUrl(returnURL)
}

/** Initiates Twitch login via Supabase. */
export async function signInWithTwitch() {
	await signInWithOAuth('twitch')
}

/**
 * Logs the user in to Supabase using their email and password.
 *
 * @param email The user's email.
 * @param password The user's password.
 */
export async function signInWithEmail(email: string, password: string) {
	const supabase = getSupabaseClient()

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	})

	if (error) {
		throw error
	}
}

/** Signs the user out. */
export async function signOut() {
	const supabase = getSupabaseClient()

	await supabase.auth.signOut()
}
