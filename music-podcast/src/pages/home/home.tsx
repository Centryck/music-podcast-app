import React, { useEffect, useState } from 'react';
import PodcastCard from '../../podcast/component/podcast-card';
import { Podcast } from '../../podcast/model';
import * as PodcastActions from "../../podcast/use-case";
import { Link } from "react-router-dom";
import "./homeStyles.css";

const Home = () => {
	const [podcasts, setPodcasts] = useState<Podcast[] | undefined>(undefined);

	useEffect(() => {
		PodcastActions.getAllPodcasts().then((data) => {
			setPodcasts(data.podcast);
		})
	}, []);

	return (
		<div className="home-container" data-testid="home-page">
			<p>Podcaster</p>

			<div className="podcastListContainer">
				{
					podcasts &&
					podcasts.map((podcast) =>
						<Link
							to={`/podcast/${podcast.id}`}
							key={podcast.id}
							className={"podcastListItem"}
						>
							<PodcastCard
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