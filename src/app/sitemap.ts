// Module imports
import { type MetadataRoute } from 'next'





export default function sitemap(): MetadataRoute.Sitemap {
	const baseURL = new URL(process.env.NEXT_PUBLIC_SITE_URL!)

	return [
		{
			changeFrequency: 'yearly',
			lastModified: new Date(),
			priority: 0.7,
			url: baseURL.toString(),
		},
		{
			changeFrequency: 'monthly',
			lastModified: new Date(),
			priority: 0.5,
			url: new URL('/about', baseURL).toString(),
		},
		{
			changeFrequency: 'monthly',
			lastModified: new Date(),
			priority: 1,
			url: new URL('/games', baseURL).toString(),
		},
	]
}
