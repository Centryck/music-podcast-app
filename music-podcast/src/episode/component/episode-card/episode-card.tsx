import React from 'react';
import { Episode } from '../../model';
import "./episodeCardStyles.css";

interface EpisodeCardProps {
	episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> =({episode}) => {
	
	return (
		<div className="episodeCardContainer">
			<span className="episodeCardTitle">{episode.name}</span>

			<span dangerouslySetInnerHTML={{__html: episode.description || ""}} className="episodeCardDescription"/>

			<audio controls className='episodeReproductor'>
			<source src={episode.episodeUrl} type="audio/mpeg" />
			</audio>
		</div>
	)
}

export default EpisodeCard;