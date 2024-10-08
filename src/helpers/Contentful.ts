// Module imports
import {
	type CreateClientParams,
	createClient as createContentfulClient,
	type Entry,
} from 'contentful'





// Local imports
import { calculateReadtime } from '@/helpers/calculateReadtime'
import { type TypeGameSkeleton } from '@/typedefs/contentful/TypeGame'
import { type TypePageBlogPostSkeleton } from '@/typedefs/contentful'





// Constants
const ITEMS_PER_PAGE = 7





/**
 * Retrieves the Contentful client.
 *
 * @param isPreview Whether the client should retrieve preview data.
 * @returns The Contentful client.
 */
function getClient(isPreview = false) {
	const clientConfig: CreateClientParams = {
		accessToken: process.env.CONTENTFUL_API_ACCESS_TOKEN!,
		space: process.env.CONTENTFUL_API_SPACE_ID!,
	}

	if (isPreview) {
		clientConfig.accessToken = process.env.CONTENTFUL_PREVIEW_API_ACCESS_TOKEN!
		clientConfig.host = 'preview.contentful.com'
	}

	return createContentfulClient(clientConfig)
}

/**
 * Simplifies the structure of an article from Contentful.
 *
 * @param article The original article from Contentful.
 * @returns The simplified article.
 */
function parseArticle(article: Entry<TypePageBlogPostSkeleton>) {
	return {
		...article.fields,
		id: article.sys.id,
		createdAt: article.fields.publishedDate,
		readtime: calculateReadtime(article.fields.content),
	}
}

/**
 * Retrieves all articles from Contentful.
 *
 * @returns A list of all articles.
 */
export async function getAllArticles() {
	const contentfulClient = getClient()
	const contentfulResponse = await contentfulClient
		.withoutUnresolvableLinks
		.getEntries<TypePageBlogPostSkeleton>({
			content_type: 'pageBlogPost',
			order: ['-fields.publishedDate'],
		})

	return contentfulResponse.items
}

/**
 * Retrieves a single article from Contentful by its slug.
 *
 * @param slug The slug of the article.
 * @param isPreview Whether or not to retrieve the latest draft version of the article.
 * @returns The retrieved article.
 */
export async function getArticle(slug: string, isPreview = false) {
	const contentfulClient = getClient(isPreview)
	const contentfulResponse = await contentfulClient
		.withoutUnresolvableLinks
		.getEntries<TypePageBlogPostSkeleton>({
			content_type: 'pageBlogPost',
			'fields.slug': slug,
			include: 3,
			limit: 1,
		})

	if (contentfulResponse.total === 0) {
		return null
	}

	return parseArticle(contentfulResponse.items[0])
}

/**
 * Retrieves an article from Contentful by its ID.
 *
 * @param id The ID of the article.
 * @param isPreview Whether or not to retrieve the latest draft version of the article.
 * @returns The retrieved article.
 */
export async function getArticleByID(id: string, isPreview: boolean) {
	const contentfulClient = getClient(isPreview)
	const article = await contentfulClient
		.withoutUnresolvableLinks
		.getEntry<TypePageBlogPostSkeleton>(id)

	if (!article) {
		return null
	}

	return parseArticle(article)
}

/**
 * Retrieves a page of articles from Contentful.
 *
 * @param pageNumber The number of the page to be retrieved.
 * @returns A list of articles in the page.
 */
export async function getGames(pageNumber = 1) {
	const contentfulClient = getClient()
	const contentfulResponse = await contentfulClient
		.withoutUnresolvableLinks
		.getEntries<TypeGameSkeleton>({
			content_type: 'game',
			include: 10,
			limit: ITEMS_PER_PAGE,
			order: ['-sys.createdAt'],
			skip: (Number(pageNumber) - 1) * ITEMS_PER_PAGE,
		})

	return contentfulResponse.items
}

/**
 * Retrieves articles from Contentful.
 *
 * @param pageNumber The number of the page to be retrieved.
 * @returns A list of articles in the page.
 */
export async function getArticles(pageNumber = 1) {
	const contentfulClient = getClient()
	const contentfulResponse = await contentfulClient
		.withoutUnresolvableLinks
		.getEntries<TypePageBlogPostSkeleton>({
			content_type: 'pageBlogPost',
			include: 10,
			limit: ITEMS_PER_PAGE,
			order: ['-fields.publishedDate'],
			skip: (Number(pageNumber) - 1) * ITEMS_PER_PAGE,
		})

	return contentfulResponse.items
}

/**
 * Retrieves a list of articles relevant to a search query.
 *
 * @param query The search query.
 * @returns A list of articles in the page.
 */
export async function searchArticles(query: string) {
	const contentfulClient = getClient()
	const contentfulResponse = await contentfulClient
		.withoutUnresolvableLinks
		.getEntries<TypePageBlogPostSkeleton>({
			content_type: 'pageBlogPost',
			include: 3,
			limit: 5,
			query,
		})

	return contentfulResponse.items
}
