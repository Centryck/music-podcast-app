import { Podcast, RawPodcast } from "../model";

export interface Entry {
	"im:name": {
		label: string;
	};
	"im:image": [{
		label: string;
		attributes: {
			height: string;
		};
	}];
	summary: {
		label: string;
	};
	"im:price": {
		label: string;
		attributes: {
			amount: string;
			currency: string;
		};
	};
	"im:contentType": {
		attributes: {
			term: string;
			label: string;
		};
	};
	rights: {
		label: string;
	};
	title: {
		label: string;
	};
	link: {
		attributes: {
			rel: string;
			type: string;
			href: string;
		};
	};
	id: {
		label: string;
		attributes: {
		"im:id": string;
		};
	};
	"im:artist": {
		label: string;
		attributes: {
			href: string;
		};
	};
	category: {
		attributes: {
			"im:id": string;
			term: string;
			scheme: string;
			label: string;
		};
	};
	"im:releaseDate": {
		label: Date;
		attributes: {
			label: string;
		}
	}
}

export interface ItunesPodcast {
	feed: {
		author: {
			name: {
				label: string;
			};
			uri: {
				label: string;
			};
		};
		entry: Entry[];
	}
}

type Mapper<BackendType, MappedType> = (input: BackendType) => MappedType;

const mapPodcast: Mapper<Entry, Podcast> = input => {
	return {
			id: input.id.attributes["im:id"],
			name: input["im:name"]?.label,
			image: input["im:image"],
			summary: input.summary?.label,
			rights: input.rights?.label,
			title: input.title.label,
			artist: input["im:artist"]?.label
	}
}

const mapPodcasts = (podcasts: Entry[]): Podcast[] => 
podcasts.map(mapPodcast).map((podcast, index) => {
	return {
		...podcast,
		index,
	};
});

export const mapPodcastsFromItunes: Mapper<ItunesPodcast, RawPodcast> = input => {
	
	return {
		podcast: mapPodcasts(input.feed.entry)
	};
};

