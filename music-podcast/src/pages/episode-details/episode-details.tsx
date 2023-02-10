import { useParams } from "react-router-dom";
import Header from "../../components/header";
import EpisodeCard from "../../episode/component/episode-card";
import { useSingleEpisode } from "../../episode/hook";
import PodcastCard from "../../podcast/component/podcast-card";
import { useSinglePodcast } from "../../podcast/hook";
import "./episodeDetailsStyles.css";

const EpisodeDetails = () => {

	const { podcastId, episodeId } = useParams();

	const [episode, , isEpisodeLoading] = useSingleEpisode(podcastId, episodeId);
	const [podcast, , isPodcastLoading] = useSinglePodcast(podcastId!);

	return (
		<div>
			<Header isLoading={isEpisodeLoading || isPodcastLoading} />
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