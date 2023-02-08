export interface Episode {
	id: number;
	collectionId: number;
	name: string;
	description?: string;
	collectionName: string;
	releaseDate: Date;
	episodeUrl?: string;
	trackTimeMillis: number;
}