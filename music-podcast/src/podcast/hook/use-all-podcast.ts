import { useState, useEffect } from 'react';
import { LocalStoragePodcasts, Podcast } from '../model';
import * as PodcastActions from "../../podcast/use-case";

const useAllPodcasts = (): [Podcast[], React.Dispatch<React.SetStateAction<Podcast[]>>, boolean] => {
	const [podcasts, setPodcasts] = useState<Podcast[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		
		const dayInMilliseconds = 24 * 60 * 60 * 1000;
		const storedPodcasts = localStorage.getItem('podcasts');
		const savedPodcasts: LocalStoragePodcasts = storedPodcasts ? JSON.parse(storedPodcasts) : undefined;
		const timeElapsed = new Date().getTime() - new Date(savedPodcasts?.date).getTime();

		if (timeElapsed <= dayInMilliseconds) {
			setPodcasts(savedPodcasts.podcast);
			setIsLoading(false);
		}
		
		else {
			PodcastActions.getAllPodcasts().then((data) => {
				
				setPodcasts(data.podcast);
				localStorage.setItem("podcasts", JSON.stringify({ date: new Date(), podcast: data.podcast }));
				setIsLoading(false);
			})
		}
	}, []);

	return [podcasts, setPodcasts, isLoading];
}

export default useAllPodcasts;