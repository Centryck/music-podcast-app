import { useState, useEffect } from 'react';
import { Episode, LocalStorageEpisodes } from '../model';
import {  getEpisodeById } from '../use-case';

const useSingleEpisode = (podcastId: string | undefined, episodeId: string | undefined): [Episode | undefined, React.Dispatch<React.SetStateAction<Episode | undefined>>, boolean] => {
  const [episode, setEpisode] = useState<Episode>();
	const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!podcastId || !episodeId) {
			setIsLoading(false);
      return;
    }

    const storedEpisodes = localStorage.getItem(`${podcastId}-episodes`);
    const savedEpisodes: LocalStorageEpisodes = storedEpisodes ? JSON.parse(storedEpisodes) : undefined;
		const episode: Episode[] = savedEpisodes.episodes.filter((filteredEpisode: Episode) => filteredEpisode.id === Number(episodeId));

    if (episode) {
      setEpisode(episode[0]);
			setIsLoading(false);
    } 
		
		else {
			getEpisodeById(Number(podcastId), Number(episodeId)).then((data) => {
				setEpisode(data[0]);
				setIsLoading(false);
			});
    }
  }, [episodeId, podcastId]);

  return [episode, setEpisode, isLoading];
};

export default useSingleEpisode;