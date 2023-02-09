import React from 'react';
import { Episode } from '../../model';

interface EpisodeListItemProps {
	episode: Episode;
}

const EpisodeListItem: React.FC<EpisodeListItemProps> = ({episode}) => {

	const {name, releaseDate, trackTimeMillis} = episode;

	const parsedDate = () => {
		const date = new Date(releaseDate)
		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate();

		return `${year}/${month + 1}/${day} ||`
	}

	const parsedTimeMillis = () => {
		const timeInSeconds = trackTimeMillis / 1000;

		const hours = Math.floor(timeInSeconds / 3600);
		const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
		const seconds = Math.floor(timeInSeconds  - hours * 3600 - minutes * 60).toFixed();

		const hoursString = hours < 1 ? '' : hours.toString().padStart(2, '0') + ':';
		const timeString = hoursString + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
	
		return timeString;
	}

	return (
		<div>
			<span>{name}</span>
			<span>{parsedDate()}</span>
			<span>{parsedTimeMillis()}</span>
		</div>
	)
}

export default EpisodeListItem;