import { useEffect, useState } from 'react';
import { Podcast } from '../../podcast/model';
import { Link } from "react-router-dom";
import "./homeStyles.css";
import PodcastItem from '../../podcast/component/podcast-item';
import Header from '../../components/header';
import FilterComponent from '../../components/filter';
import { useAllPodcasts } from '../../podcast/hook';

const Home = () => {
	const [podcasts, , isLoading] = useAllPodcasts();
	const [currentPodcasts, setCurrentPodcasts] = useState<Podcast[] | undefined>()

	useEffect(() => {
		setCurrentPodcasts(podcasts);
	}, [podcasts])
	
	const handleChangeFilterText = (text: string) => {
		const filterText = text.toLowerCase();

		const filterPodcast = podcasts?.filter((podcast) =>
			podcast.name.toLowerCase().match(filterText) || podcast.artist.toLowerCase().match(filterText)
		);

		setCurrentPodcasts(filterPodcast)
	}

	return (
		<div className="home-container" data-testid="home-page">
			<Header isLoading={isLoading} />

			<FilterComponent onChange={handleChangeFilterText} podcastNumber={!!currentPodcasts ? `${currentPodcasts?.length}` : undefined} />
			<div className="podcastListContainer">
				{
					currentPodcasts &&
					currentPodcasts.map((podcast) =>
						<Link
							to={`/podcast/${podcast.id}`}
							state={{ podcastId: podcast.id }}
							key={podcast.id}
							className={"podcastListItem"}
						>
							<PodcastItem
								image={podcast.image[2]}
								name={podcast.name}
								artist={podcast.artist}
							/>
						</Link>
					)
				}
			</div>
		</div>
	)
}

export default Home;