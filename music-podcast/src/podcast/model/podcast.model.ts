export interface ImageAttributes {
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

export interface LocalStoragePodcast {
	podcast: Podcast[];
	date: Date;
}

