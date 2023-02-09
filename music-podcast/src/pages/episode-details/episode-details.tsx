import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import EpisodeCard from "../../episode/component/episode-card";
import { Episode } from "../../episode/model";
import { getEpisodeById } from "../../episode/use-case";
import PodcastCard from "../../podcast/component/podcast-card";
import { Podcast } from "../../podcast/model";
import { getPodcastById } from "../../podcast/use-case";
import "./episodeDetailsStyles.css";

const EpisodeDetails = () => {

	const { podcastId, episodeId } = useParams();

	const [episode, setEpisode] = useState<Episode | undefined>();
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
		if (podcastId && episodeId) {
			getEpisodeById(Number(podcastId), Number(episodeId)).then((data) => {
				setEpisode(data[0])
			})
		}

	}, [podcastId, episodeId])

	useEffect(() => {
		setIsLoading(true);

		if (episode && podcast) {
			setIsLoading(false);
		}
	}, [episode, podcast])

	return (
		<div>
			<Header isLoading={isLoading} />
			<div className='episodeDetailsContainer'>
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
					episode &&
					<div>
						<EpisodeCard episode={episode} />
					</div>
				}
			</div>
		</div>
	)
}

export default EpisodeDetails;