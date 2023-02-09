import { useEffect, useState } from 'react';
import { Podcast } from '../../podcast/model';
import * as PodcastActions from "../../podcast/use-case";
import { Link } from "react-router-dom";
import "./homeStyles.css";
import PodcastItem from '../../podcast/component/podcast-item';
import Header from '../../components/header';

const Home = () => {
	const [podcasts, setPodcasts] = useState<Podcast[] | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		PodcastActions.getAllPodcasts().then((data) => {
			setPodcasts(data.podcast);
			setIsLoading(false);
		})
	}, []);

	return (
		<div className="home-container" data-testid="home-page">
			<Header isLoading={isLoading}/>

			<div className="podcastListContainer">
				{
					podcasts &&
					podcasts.map((podcast) =>
						<Link
							to={`/podcast/${podcast.id}`}
							state={{podcastId: podcast.id}}
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