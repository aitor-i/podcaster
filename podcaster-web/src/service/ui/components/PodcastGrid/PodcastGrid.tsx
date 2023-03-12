import { useMemo } from 'react';

import PodcastCard from 'service/ui/components/PodcastGrid/PodcastCard';
import { useFetch } from 'service/ui/hooks/useFetch';

import PodcastGridStyles from './PodcastGrid.module.css';

import type { RootObject as IPodcastsData } from 'domain/model/IPodcastsData';
import type { IFetcher } from 'service/fetcher/IFetcher';

export const PodcastGrid = () => {
  const fetchConfiguration: IFetcher = useMemo(
    () => ({
      method: 'GET',
      url: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    }),
    []
  );
  const { apiData, fetchingState } = useFetch<IPodcastsData>({ fetchConfig: fetchConfiguration });

  return (
    <>
      <div>Filter</div>
      {fetchingState === 'loading' && <div>Loading ...</div>}
      <div className={PodcastGridStyles.podcastCardsGrid}>
        {fetchingState === 'success' &&
          apiData?.feed.entry.map(podcastData => (
            <PodcastCard
              author={podcastData['im:artist'].label}
              id={podcastData.id.attributes['im:id']}
              imageSrc={podcastData['im:image'][2].label}
              key={podcastData.id.attributes['im:id']}
              podcastName={podcastData.title.label}
            />
          ))}
      </div>
    </>
  );
};
