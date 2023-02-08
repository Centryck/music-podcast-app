import React, { useEffect, useState } from 'react';
import { Podcast } from '../../podcast/model';
import * as PodcastActions from "../../podcast/use-case";
import { Link } from "react-router-dom";
import "./homeStyles.css";
import PodcastItem from '../../podcast/component/podcast-item';

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
							state={{podcast: JSON.stringify(podcast)}}
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