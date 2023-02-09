import React from 'react';
import { Episode } from '../../model';
import EpisodeListItem from './episode-list-item';
import "./episodeListStyles.css";

interface EpisodeListProps {
	episodes: Episode[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {

	return (
		<div className="episodeListContainer">
			<span className="episodesNumber">Episodes: {episodes.length}</span>

		<div className="episodeListData">
			<div className="episodeItemContainer">
				<strong className="episodeTitle">Title</strong>
				<div className="dataContainer">
					<strong>Date</strong>
					<strong>Duration</strong>
				</div>
			</div>
			{
				episodes.map(episode => <EpisodeListItem episode={episode} key={episode.id} />)
			}
		</div>
		</div>
	)
}

export default EpisodeList;