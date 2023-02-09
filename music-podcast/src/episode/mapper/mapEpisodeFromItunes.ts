import { DetailedItunesPodcast } from "../../podcast/mapper/mapDetailedPodcastFromItunes";
import { Episode } from "../model";

interface EpisodeGenre {
  name: string;
  id: string;
}

export interface ItunesEpisode extends Partial<DetailedItunesPodcast> {
  country: string;
  previewUrl?: string;
  artistIds?: number[];
  genres: EpisodeGenre[] | string[];
  episodeGuid?: string;
  description?: string;
  shortDescription?: string;
  trackId: number;
  trackName: string;
  collectionId: number;
  collectionName: string;
  feedUrl: string;
  closedCaptioning?: string;
  releaseDate: Date;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  artworkUrl160?: string;
  episodeFileExtension?: string;
  episodeContentType?: string;
  collectionViewUrl: string;
  trackTimeMillis: number;
  episodeUrl?: string;
  artworkUrl600: string;
  artworkUrl60: string;
  artistViewUrl: string;
  kind: string;
}

export interface EpisodeResult {
  resultCount: number;
  results: ItunesEpisode[];
}

type Mapper<BackendType, MappedType> = (input: BackendType) => MappedType;

const mapEpisode: Mapper<ItunesEpisode, Episode> = input => {
  return {
    id: input.trackId,
    name: input.trackName,
    description: input.description,
    releaseDate: input.releaseDate,
    collectionId: input.collectionId,
    trackTimeMillis: input.trackTimeMillis,
    episodeUrl: input.episodeUrl,
    collectionName: input.collectionName
  }
}

const mapEpisodes = (episodes: ItunesEpisode[]): Episode[] =>
  episodes.map(mapEpisode).map((episode, index) => {
    return {
      ...episode,
      index,
    }
  })

export const mapEpisodesResults: Mapper<EpisodeResult, Episode[]> = input => {
  return mapEpisodes(input.results)
}