import React from 'react';
import { PodcastImage } from '../../model';
import "./podcastCardStyles.css";

interface PodcastCardProps {
	image: PodcastImage;
	name: string;
	artist: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ image, name, artist }) => {

	const nameInUpperCase = name.toUpperCase();
	const imageUrl = image.label;

	return (
		<div className="podcastCardContainer">
			<div className="podcastCard">
				<img
					src={imageUrl}
					alt={name}
					height={80}
					width={80}
					className={"roundedImage"}
				/>
				<span className="podcastName">{nameInUpperCase}</span>
				<span className="podcastAuthor">Author: {artist}</span>
			</div>
		</div>
	)
};

export default PodcastCard;