import { useState, useEffect } from 'react';
import { Podcast } from '../model';
import { getPodcastById } from '../use-case';

const useSinglePodcast = (podcastId: string): [Podcast | undefined, React.Dispatch<React.SetStateAction<Podcast | undefined>> , boolean] => {
  const [podcast, setPodcast] = useState<Podcast>();
  const [isLoading, setIsLoading] = useState(true);

  const dayInMilliseconds = 24 * 60 * 60 * 1000;

  useEffect(() => {
    if (!podcastId) {
      setIsLoading(false);
      return;
    }

    const storedPodcast = localStorage.getItem(`${podcastId}-podcast`);
    const savedPodcast = storedPodcast ? JSON.parse(storedPodcast) : undefined;
    const timeElapsed = new Date().getTime() - new Date(savedPodcast?.date).getTime();

    if (timeElapsed < dayInMilliseconds) {
      setPodcast(savedPodcast.podcast);
      setIsLoading(false);
    } 
    
    else {
      getPodcastById(podcastId).then((data) => {
        setPodcast(data[0]);
        localStorage.setItem(`${podcastId}-podcast`, JSON.stringify({ date: new Date(), podcast: data[0] }));
        setIsLoading(false);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcastId]);

  return [podcast, setPodcast, isLoading];
};

export default useSinglePodcast;