import { useEffect, useState } from 'react';
import { Podcast } from '../../podcast/model';
import * as PodcastActions from "../../podcast/use-case";
import { Link } from "react-router-dom";
import "./homeStyles.css";
import PodcastItem from '../../podcast/component/podcast-item';
import Header from '../../components/header';
import FilterComponent from '../../components/filter';

const Home = () => {
	const [podcasts, setPodcasts] = useState<Podcast[] | undefined>();
	const [currentPodcasts, setCurrentPodcasts] = useState<Podcast[] | undefined>()
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		PodcastActions.getAllPodcasts().then((data) => {
			setPodcasts(data.podcast);
			setCurrentPodcasts(data.podcast);
			setIsLoading(false);
		})
	}, []);

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