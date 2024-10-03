export type Application = {
	/** @description The unique identifier of the application. */
	id: string,

	/** @description The timestamp when the application was added to the database. */
	createdAt: string,

	/** @description The display name of the application. */
	appName: string,

	/** @description Whether the application has been officially released. */
	isReleased: boolean,
}
