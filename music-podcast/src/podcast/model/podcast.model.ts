export interface ImageAttributes {
	height: number;
}

export interface Image {
	label: string;
	attributes: ImageAttributes;
}

export interface Podcast {
	id: string;
	name: string;
	image: Image[];
	summary: string;
	rights: string;
	title: string;
	artist: string;
}

