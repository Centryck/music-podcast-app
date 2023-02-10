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

export interface LocalStorageEpisodes {
	episodes: Episode[];
	date: Date;
}

export interface LocalStorageSingleEpisode {
	episode: Episode;
	date: Date;
}