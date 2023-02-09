import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import EpisodeList from '../../episode/component/episode-list';
import { Episode } from '../../episode/model';
import { getAllEpisodes } from '../../episode/use-case';
import PodcastCard from '../../podcast/component/podcast-card';
import { Podcast } from '../../podcast/model';
import { getSinglePodcast } from '../../podcast/service';


const PodcastDetails = () => {
	const location = useLocation();

	const url = location.pathname;
	const podcastId = url.split('/').pop();

	const [episodes, setEpisodes] = useState<Episode[] | undefined>(undefined);
	const [podcast, setPodcast] = useState<Podcast | undefined>(undefined);

	useEffect(() => {
		if (podcastId) {
			getSinglePodcast(podcastId).then((data) => {
				setPodcast(data[0])
			})
		}
	}, [podcastId])

	useEffect(() => {
		getAllEpisodes(Number(podcastId)).then((data) => {

			//This because the first object is some data from the podcast that we already have
			data.shift();

			setEpisodes(data);
		})
	}, [podcastId]);

	return (
		<div className='podcastDetailsContainer'>
			{
				podcast &&
				<PodcastCard
					image={podcast.image[2]}
					name={podcast.name}
					artist={podcast.artist}
					description={podcast.summary}
				/>
			}
			{
				episodes &&
				<EpisodeList episodes={episodes} />
			}
		</div>
	)
}

export default PodcastDetails;