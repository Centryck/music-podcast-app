import { useParams } from "react-router-dom"
import Header from '../../components/header';
import EpisodeList from '../../episode/component/episode-list';
import { useAllEpisodes } from '../../episode/hook';
import PodcastCard from '../../podcast/component/podcast-card';
import { useSinglePodcast } from '../../podcast/hook';
import "./podcastDetailsStyles.css";

const PodcastDetails = () => {

	const { podcastId } = useParams();

	const [episodes, , isLoadingEpisodes] = useAllEpisodes(podcastId);  
	const [podcast, , isLoadingPodcast] = useSinglePodcast(podcastId!);

	return (
		<div>
			<Header isLoading={isLoadingEpisodes || isLoadingPodcast} />

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