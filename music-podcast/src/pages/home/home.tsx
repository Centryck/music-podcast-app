import React, { useEffect, useState } from 'react';
import { Podcast, RawPodcast } from '../../podcast/model';
import * as PodcastActions from "../../podcast/use-case";

const Home = () => {
	const [podcasts, setPodcasts] = useState<RawPodcast | undefined>(undefined);

	useEffect(() => {
		PodcastActions.getAllPodcasts().then((data) => {
			setPodcasts(data);
			console.log(data);
		})
	}, []);
	
	return (
		<div className="home-container" data-testid="home-page">
			<p>Home</p>
		</div>
	)
}

export default Home;