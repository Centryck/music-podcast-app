import { Podcast, RawPodcast } from "../model";

export interface Entry {
	name: {
		label: string;
	};
	image: [{
		label: string;
		attributes: {
			height: string;
		};
	}];
	summary: {
		label: string;
	};
	price: {
		label: string;
		attributes: {
			amount: string;
			currency: string;
		};
	};
	contentType: {
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
			id: string;
		};
	};
	artist: {
		label: string;
		attributes: {
			href: string;
		};
	};
	category: {
		attributes: {
			id: string;
			term: string;
			scheme: string;
			label: string;
		};
	};
	releaseDate: {
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

export const mapPodcast: Mapper<Entry, Podcast> = input => {
	return {
			id: input.id.attributes.id,
			name: input.name.label,
			image: input.image,
			summary: input.summary.label,
			rights: input.rights.label,
			title: input.title.label,
			artist: input.artist.label
	}
}

export const mapPodcasts = (podcasts: Entry[]): Podcast[] => 
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