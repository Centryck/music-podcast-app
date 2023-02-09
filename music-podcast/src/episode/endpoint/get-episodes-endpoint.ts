import Axios from 'axios';
import { EpisodeResult } from "../mapper";


export const getEpisodesEndpoint = async (id: number) => {
	try {
		const response = await Axios.get(
			`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode`,
			{
				headers: { 'Content-Type': 'application/json' },
			}
		);
		return response.data as EpisodeResult;
	} catch (error) {
		console.error(error);
		throw new Error("Error at retrieving the episodes");
	}
};