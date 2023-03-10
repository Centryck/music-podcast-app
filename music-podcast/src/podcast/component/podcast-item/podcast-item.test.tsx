import React from 'react';
import { render, screen } from "@testing-library/react";
import PodcastItem from './podcast-item';
import { PodcastImage } from '../../model';

const IMG: PodcastImage = {
	label: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png',
	attributes: {
		height: "80"
	}
};

const NAME: string = "Podcast Mock";
const ARTIST: string = "Centryck";

const renderElement = () => {
	const utils = render(<PodcastItem image={IMG} name={NAME} artist={ARTIST} />);

	const query = {
		roundedImg: () => screen.queryByAltText(NAME),
		podcastName: () => screen.queryByText("PODCAST MOCK"),
		podcastArtist: () => screen.queryByText("Author: "+ARTIST),
	}

	return {
		...utils,
		query
	}
}

describe("PodcastItem", () => {
	it("renders all the items by default", () => {

		const { query } = renderElement();

		expect(query.roundedImg()).not.toBeNull();
		expect(query.podcastName()).not.toBeNull();
		expect(query.podcastArtist()).not.toBeNull();
	})
})
