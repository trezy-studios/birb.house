export type GameKey = {
	/** @description The unique identifier of the game key. */
	id: string,

	/** @description The timestamp when the game key was added to the database. */
	createdAt: string,

	/** @description The unique identifier of the application the game key will grant. */
	appID: string,

	/** @description The unique identifier of the owner of the game key. */
	ownerID: string | null,

	/** @description The unique identifier of the claim that was used to issue this game key. */
	claimID: string | null,

	/** @description The game key. */
	key: string,
}
