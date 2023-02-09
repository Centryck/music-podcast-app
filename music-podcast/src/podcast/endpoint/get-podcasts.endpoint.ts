import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import { ItunesPodcast } from "../mapper";

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

const axios = setupCache(Axios);

export const getPodcastsEndpoint = async () => {

	const response = await axios.get(proxyUrl + targetUrl, {
		headers: { 'Content-Type': 'application/json' }
	});

	return response.data as ItunesPodcast;
};
