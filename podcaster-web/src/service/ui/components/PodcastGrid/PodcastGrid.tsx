import PodcastCard from 'service/ui/components/PodcastGrid/PodcastCard';

import { usePodcastGrid } from './usePodcastGrid';

import PodcastGridStyles from './PodcastGrid.module.css';
import PodcastFilter from './PodcastFilter';
import { useState } from 'react';

import type { Entry as IPodcast } from 'domain/model/IPodcastsData';

export interface IFilteredPodcast {
  isFiltered: boolean;
  podcasts: IPodcast[];
}

export const PodcastGrid = () => {
  const { fetchingState, podcastsState } = usePodcastGrid();
  const [filteredPodcast, setFilteredPodcast] = useState<IFilteredPodcast>({ isFiltered: false, podcasts: podcastsState.podcast });

  const filterPodcastHandler = (podcasts: IFilteredPodcast) => {
    setFilteredPodcast(podcasts);
  };

  return (
    <>
      <PodcastFilter filteredPodcastState={filteredPodcast} setPodcastHandler={filterPodcastHandler} />
      {fetchingState === 'loading' && <div>Loading ...</div>}
      <div className={PodcastGridStyles.podcastCardsGrid}>
        {filteredPodcast.isFiltered
          ? filteredPodcast.podcasts.map(podcastData => (
              <PodcastCard
                author={podcastData['im:artist'].label}
                id={podcastData.id.attributes['im:id']}
                imageSrc={podcastData['im:image'][2].label}
                key={podcastData.id.attributes['im:id']}
                podcastName={podcastData.title.label}
              />
            ))
          : podcastsState.podcast.map(podcastData => (
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
