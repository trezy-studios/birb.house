// Module imports
import { type MetadataRoute } from 'next'





// Local imports
import * as Contentful from '@/helpers/Contentful'





function dateFromPublishedDate(publishedDate: string) {
	return new Date(`${publishedDate}T00:00:00.000Z`)
}





export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseURL = new URL(process.env.NEXT_PUBLIC_SITE_URL!)
	const articles = await Contentful.getAllArticles()

	let mostRecentUpdate: Date

	const items: MetadataRoute.Sitemap = articles.map(article => {
		const updatedAt = new Date(article.sys.updatedAt)
		const publishedAt = dateFromPublishedDate(article.fields.publishedDate)
		const mostRecentTimestamp = updatedAt > publishedAt ? updatedAt : publishedAt

		if (!mostRecentUpdate || (mostRecentUpdate < mostRecentTimestamp)) {
			mostRecentUpdate = mostRecentTimestamp
		}

		return {
			changeFrequency: 'monthly',
			lastModified: mostRecentTimestamp,
			priority: 1,
			url: new URL(`/blog/${article.fields.slug}`, baseURL).toString(),
		}
	})

	items.unshift({
		changeFrequency: 'yearly',
		lastModified: mostRecentUpdate! ?? new Date,
		priority: 0.7,
		url: new URL('/blog', baseURL).toString(),
	})

	return items
}
