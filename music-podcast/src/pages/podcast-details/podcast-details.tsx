import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { Episode } from '../../episode/model';
import { getAllEpisodes } from '../../episode/use-case';


const PodcastDetails = () => {
	const location = useLocation();

	const stringifiedPodcast = location.state.podcast;
	const podcast = JSON.parse(stringifiedPodcast);

	const [episodes, setEpisodes] = useState<Episode[] | undefined>(undefined);
	
	useEffect(() => {
		getAllEpisodes(Number(podcast.id)).then((episode) => {
			episode.shift();
			setEpisodes(episode);
		})
	}, []);

	return (
		<div className='podcastDetails-container'>
		{
		episodes && 
		episodes.map((episode) => <div key={episode.id}>{episode.name}</div>)
		}
		</div>
	)
}

export default PodcastDetails;