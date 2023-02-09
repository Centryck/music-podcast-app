import { getPodcastsEndpoint } from "../endpoint/get-podcasts.endpoint";
import { mapPodcastsFromItunes } from "../mapper";
import { LocalStoragePodcast, Podcast, RawPodcast } from "../model";

type GetPodcastsFromAPI = () => Promise<RawPodcast>;
type GetPodcastsFromLocalStorage = () => Promise<LocalStoragePodcast>;
type GetSinglePodcast = (podcastId: string) => Promise<Podcast[]>;

export const getPodcastsFromItunes: GetPodcastsFromAPI = async () => {
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

export const getPodcastsFromLocalStorage: GetPodcastsFromLocalStorage = () => {
	return Promise.resolve(JSON.parse(localStorage.getItem("podcasts")!));
}

export const getSinglePodcast: GetSinglePodcast = async (podcastId: string) => {
	const allPodcasts = getPodcastsFromItunes();

	const requiredPodcast = (await allPodcasts).podcast.filter((filteredPodcast: Podcast) => filteredPodcast.id === podcastId);

	return requiredPodcast;
}