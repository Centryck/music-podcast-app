import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { Episode } from '../../episode/model';
import { getAllEpisodes } from '../../episode/use-case';
import PodcastCard from '../../podcast/component/podcast-card';


const PodcastDetails = () => {
	const location = useLocation();

	const stringifiedPodcast = location.state.podcast;
	const podcast = JSON.parse(stringifiedPodcast);

	const [episodes, setEpisodes] = useState<Episode[] | undefined>(undefined);

	useEffect(() => {
		getAllEpisodes(Number(podcast.id)).then((data) => {

			//This because the first object is some data from the podcast that we already have
			data.shift();

			setEpisodes(data);
		})
	}, []);

	return (
		<div className='podcastDetails-container'>
			<PodcastCard
				image={podcast.image[2]}
				name={podcast.name}
				artist={podcast.artist}
				description={podcast.summary}
			/>
			{
				episodes &&
				episodes.map((episode) => <div key={episode.id}>{episode.name}</div>)
			}
		</div>
	)
}

export default PodcastDetails;