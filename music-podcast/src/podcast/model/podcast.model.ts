interface ImageAttributes {
	height: string;
}

export interface PodcastImage {
	label: string;
	attributes: ImageAttributes;
}

export interface Podcast {
	id: string;
	name: string;
	image: PodcastImage[];
	summary: string;
	rights: string;
	title: string;
	artist: string;
}

export interface RawPodcast {
	podcast: Podcast[];
}

export interface LocalStoragePodcasts {
	podcast: Podcast[];
	date: Date;
}

export interface LocalStorageSinglePodcast {
	podcast: Podcast;
	date: Date;
}

