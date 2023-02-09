import React from 'react';
import { Episode } from '../../model';
import EpisodeListItem from './episode-list-item';

interface EpisodeListProps {
	episodes: Episode[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {

	return (
		<div>
			<div>
				<span>Title</span>
				<span>Date</span>
				<span>Duration</span>
			</div>
			{
				episodes.map(episode =>  <EpisodeListItem episode={episode} key={episode.id} />)
			}
		</div>
	)
}

export default EpisodeList;