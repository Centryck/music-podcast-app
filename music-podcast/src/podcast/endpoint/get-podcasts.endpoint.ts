import { ItunesPodcast } from "../mapper";

export const getPodcastsEndpoint = async () => {
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

  return await fetch(proxyUrl + targetUrl, {
		method: "GET",
		headers: { "Content-Type": "application/json"}
	}).then((res: Response) => res.json()) as Promise<ItunesPodcast>
}