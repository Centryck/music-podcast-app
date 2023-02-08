import React from 'react';
import { render, screen } from "@testing-library/react";
import PodcastCard from './podcast-card';
import { PodcastImage } from '../../model';

const IMG: PodcastImage = {
	label: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png',
	attributes: {
		height: "80"
	}
};

const NAME: string = "Podcast Mock";
const ARTIST: string = "Centryck";
const DESCRIPTION: string = "podcast description"

const renderElement = () => {
	const utils = render(<PodcastCard image={IMG} name={NAME} artist={ARTIST} description={DESCRIPTION}/>);

	const query = {
		cardImg: () => screen.queryByAltText(NAME),
		podcastName: () => screen.queryByText(NAME),
		podcastArtist: () => screen.queryByText("by "+ARTIST),
		podcastDescription: () => screen.queryByText(DESCRIPTION),
	}

	return {
		...utils,
		query
	}
}

describe("PodcastCard", () => {
	it("renders all the items by default", () => {

		const { query } = renderElement();

		expect(query.cardImg()).not.toBeNull();
		expect(query.podcastName()).not.toBeNull();
		expect(query.podcastArtist()).not.toBeNull();
		expect(query.podcastDescription()).not.toBeNull();
	})
})
