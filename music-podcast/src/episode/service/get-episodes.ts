import { getEpisodesEndpoint } from "../endpoint/get-episodes-endpoint";
import { mapEpisodesResults } from "../mapper";
import { Episode } from "../model";

type GetEpisodesFromAPI = (podcastId: number) => Promise<Episode[]>;

export const getEpisodesFromItunes: GetEpisodesFromAPI = async (podcastId: number) => {
	try {
		return await getEpisodesEndpoint(podcastId).then((data) => {
			console.log(data)
			return mapEpisodesResults(data);
		})
	}
	catch (err) {
		console.error(err);
		throw new Error("Error at retrieving the podcasts");
	}
}