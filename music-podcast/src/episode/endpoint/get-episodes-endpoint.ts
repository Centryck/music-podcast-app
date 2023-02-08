import { EpisodeResult } from "../mapper";

export const getEpisodesEndpoint = async (id: number) => {
	return await fetch(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}).then((res: Response) => res.json()) as Promise<EpisodeResult>
	}