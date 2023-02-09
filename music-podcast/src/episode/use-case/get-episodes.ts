import { getEpisodesFromItunes, getSingleEpisode } from "../service";

export const getAllEpisodes = (podcastId: number) => {
	return getEpisodesFromItunes(podcastId);
};

export const getEpisodeById = (podcastId: number, episodeId: number) => {
	return getSingleEpisode(podcastId, episodeId);
}