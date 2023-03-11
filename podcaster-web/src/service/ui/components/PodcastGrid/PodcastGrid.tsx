import { useEffect, useState } from 'react';

import PodcastCard from './PodcastCard';

import { fetcher } from 'service/fetcher/fetcher';

import PodcastGridStyles from './PodcastGrid.module.css';

import type { RootObject as IPodcastsData, Entry as IPodcastList } from 'domain/model/IPodcastsData';
import type { IFetcher } from 'service/fetcher/IFetcher';

export const PodcastGrid = () => {
  const [podcasts, setPodcasts] = useState<IPodcastList[]>([]);
  const [fetchingState, setFetchingState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const getPodcast = async () => {
    try {
      setFetchingState('loading');
      const fetchConfiguration: IFetcher = {
        method: 'GET',
        url: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      };
      const response: IPodcastsData = await fetcher(fetchConfiguration);
      setPodcasts(response.feed.entry);
      setFetchingState('success');
    } catch (error) {
      setFetchingState('error');
    }
  };

  useEffect(() => {
    getPodcast();
  }, []);

  return (
    <>
      <div>Filter</div>
      {fetchingState === 'loading' && <div>Loading ...</div>}
      <div className={PodcastGridStyles.podcastCardsGrid}>
        {fetchingState === 'success' &&
          podcasts.map(podcastData => (
            <PodcastCard
              author={podcastData['im:artist'].label}
              imageSrc={podcastData['im:image'][2].label}
              key={podcastData.id.label}
              podcastName={podcastData.title.label}
            />
          ))}
      </div>
    </>
  );
};
