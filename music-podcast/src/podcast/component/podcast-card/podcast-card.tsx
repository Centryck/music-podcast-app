import React from 'react';
import { PodcastImage } from '../../model';
import "./podcastCardStyles.css"

interface PodcastCardProps {
	image: PodcastImage;
	name: string;
	artist: string;
	description: string;
};

const PodcastCard: React.FC<PodcastCardProps> = ({image, name, artist, description}) => {

	const imageUrl = image.label;

	return (
		<div className="podcastCardContainer">
				<img
					src={imageUrl}
					alt={name}
					className={"cardImage"}
					height={170}
					width={170}
				/>

				<div className="podcastCardTitleBlock">
					<span className="podcastNameCard">{name}</span>
					<span className="podcastArtistCard">by {artist}</span>
				</div>

				<div className="podcastCardDescriptionBlock">
					<span className="podcastDescriptionLabel">Description:</span>
					<span className="podcastDescriptionText">{description}</span>
				</div>
		</div>
	)
}

export default PodcastCard;