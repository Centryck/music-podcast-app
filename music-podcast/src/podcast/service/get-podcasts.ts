import { getPodcastsEndpoint } from "../endpoint/get-podcasts.endpoint";
import { mapPodcastsFromItunes } from "../mapper";
import { RawPodcast } from "../model";

type GetPodcasts = () => Promise<RawPodcast>;

export const getPodcastsFromItunes: GetPodcasts = async () => {
	try {
		return await getPodcastsEndpoint().then((data) => {
			return mapPodcastsFromItunes(data);
		})
	}
	catch (err) {
		console.error(err);
		throw new Error("Error at retrieving the podcasts");
	}
}