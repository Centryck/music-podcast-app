import { getEpisodesFromItunes } from "../service";

export const getAllEpisodes = (podcastId: number) => {
	return getEpisodesFromItunes(podcastId);
};