import React from 'react';
import { PodcastImage } from '../../model';
import "./podcastItemStyles.css";

interface PodcastItemProps {
	image: PodcastImage;
	name: string;
	artist: string;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ image, name, artist }) => {

	const nameInUpperCase = name.toUpperCase();
	const imageUrl = image.label;

	return (
		<div className="podcastItemContainer">
			<div className="podcastItem">
				<img
					src={imageUrl}
					alt={name}
					height={80}
					width={80}
					className={"roundedImage"}
				/>
				<span className="podcastItemName">{nameInUpperCase}</span>
				<span className="podcastItemAuthor">Author: {artist}</span>
			</div>
		</div>
	)
};

export default PodcastItem;