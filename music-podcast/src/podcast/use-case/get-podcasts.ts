import { getPodcastsFromItunes, getSinglePodcast } from "../service";

export const getAllPodcasts = () => {	
	return getPodcastsFromItunes();
}

export const getPodcastById = (id: string) => {
	return getSinglePodcast(id);
}