import { ItunesPodcast } from "../mapper";

export const getPodcastsEndpoint = async () => {
	return await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json", {
		method: "GET",
		headers: { "Content-Type": "application/json"}
	}).then((res: Response) => res.json()) as Promise<ItunesPodcast>
}