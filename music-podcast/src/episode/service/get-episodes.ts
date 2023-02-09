import { getEpisodesEndpoint } from "../endpoint/get-episodes-endpoint";
import { mapEpisodesResults } from "../mapper";
import { Episode } from "../model";

type GetEpisodesFromAPI = (podcastId: number) => Promise<Episode[]>;
type GetSingleEpisode = (podcastId: number, episodeId: number ) => Promise<Episode[]>;

export const getEpisodesFromItunes: GetEpisodesFromAPI = async (podcastId: number) => {
	try {
		return await getEpisodesEndpoint(podcastId).then((data) => {
			return mapEpisodesResults(data);
		})
	}
	catch (err) {
		console.error(err);
		throw new Error("Error at retrieving the podcasts");
	}
}

export const getSingleEpisode: GetSingleEpisode = async (podcastId: number, episodeId: number) => {
	const allEpisodes = getEpisodesFromItunes(podcastId);

	const selectedEpisode = (await allEpisodes).filter((filteredEpisode: Episode) => filteredEpisode.id === episodeId);

	return selectedEpisode;
}