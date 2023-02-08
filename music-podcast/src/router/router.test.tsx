import React from 'react';
import Router from "./";
import { render, screen } from "@testing-library/react";
import Home from '../pages/home';
import EpisodeDetails from '../pages/episode-details';
import PodcastDetails from '../pages/podcast-details';

// MOCKS
jest.mock("../pages/episode-details");
jest.mock("../pages/podcast-details");
jest.mock("../pages/home");

(EpisodeDetails as jest.Mock).mockReturnValue(<div>Episode Details</div>);
(PodcastDetails as jest.Mock).mockReturnValue(<div>Podcast Details</div>);
(Home as jest.Mock).mockReturnValue(<div>Home</div>);

// Render Function

const renderElement = ({route= "/"} = {}) => {
	window.history.pushState({}, "Test page", route);

	const utils = render(<Router />);

	const query = {
		homePage: () => screen.queryByText("Home"),
		episodeDetailsPage: () => screen.queryByText("Episode Details"),
		podcastDetailsPage: () => screen.queryByText("Podcast Details"),
		wrongPage: () => screen.queryByText("404"),
	}

	return {
		...utils,
		query
	}
};

describe("Router", () => {
	
	it("should render home as default page", () => {

		const { query } = renderElement();

		expect(query.homePage()).not.toBeNull();
	});

	it("should render podcastDetails page if route is passed", () => {
		const route = "/podcast/1";

		const { query } = renderElement({ route });

		expect(query.podcastDetailsPage()).not.toBeNull()
	});

	it("should render episodeDetails page if route is passed", () => {
		const { query } = renderElement({ route: "/podcast/1/episode/1"});

		expect(query.episodeDetailsPage()).not.toBeNull();
	});

	it("should render a 404 if route is wrong", () => {
		const route = "/wpodcast/1";

		const { query } = renderElement({ route });

		expect(query.wrongPage()).not.toBeNull()
	});
})