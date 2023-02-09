import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import Header from '../../components/header';
import EpisodeList from '../../episode/component/episode-list';
import { Episode } from '../../episode/model';
import { getAllEpisodes } from '../../episode/use-case';
import PodcastCard from '../../podcast/component/podcast-card';
import { Podcast } from '../../podcast/model';
import { getPodcastById } from '../../podcast/use-case';
import "./podcastDetailsStyles.css";

const PodcastDetails = () => {
	const location = useLocation();

	const url = location.pathname;
	const podcastId = url.split('/').pop();

	const [episodes, setEpisodes] = useState<Episode[] | undefined>(undefined);
	const [podcast, setPodcast] = useState<Podcast | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (podcastId) {
			getPodcastById(podcastId).then((data) => {
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

	useEffect(() => {
		setIsLoading(true);

		if (episodes && podcast) {
			setIsLoading(false);
		}
	}, [episodes, podcast])

	return (
		<div>
			<Header isLoading={isLoading} />

			<div className='podcastDetailsContainer'>

				{
					podcast &&
					<div>
						<PodcastCard
							image={podcast.image[2]}
							name={podcast.name}
							artist={podcast.artist}
							description={podcast.summary}
							id={podcast.id}
						/>
					</div>
				}
				{
					episodes &&
					<div className="listContainer">
						<EpisodeList episodes={episodes} />
					</div>
				}
			</div>
		</div>
	)
}

export default PodcastDetails;