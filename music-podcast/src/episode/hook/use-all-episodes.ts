import { useState, useEffect } from 'react';
import { Episode } from '../model';
import { getAllEpisodes } from '../use-case';

const useAllEpisodes = (podcastId: string | undefined): [Episode[], React.Dispatch<React.SetStateAction<Episode[]>>, boolean] => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
	const [isLoading, setIsLoading] = useState(true);

  const dayInMilliseconds = 24 * 60 * 60 * 1000;

  useEffect(() => {
    if (!podcastId) {
			setIsLoading(false);
      return;
    }

    const storedEpisodes = localStorage.getItem(`${podcastId}-episodes`);
    const savedEpisodes = storedEpisodes ? JSON.parse(storedEpisodes) : undefined;
    const timeElapsed = new Date().getTime() - new Date(savedEpisodes?.date).getTime();

    if (timeElapsed < dayInMilliseconds) {
      setEpisodes(savedEpisodes.episodes);
			setIsLoading(false);
    } 
		
		else {
      getAllEpisodes(Number(podcastId)).then((data) => {
        data.shift();
        setEpisodes(data);
        localStorage.setItem(`${podcastId}-episodes`, JSON.stringify({ date: new Date(), episodes: data }));
				setIsLoading(false);
			});
    }
  }, [podcastId]);

  return [episodes, setEpisodes, isLoading];
};

export default useAllEpisodes;