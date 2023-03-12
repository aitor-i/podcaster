import PodcastCard from 'service/ui/components/PodcastGrid/PodcastCard';

import { usePodcastGrid } from './usePodcastGrid';

import PodcastGridStyles from './PodcastGrid.module.css';

export const PodcastGrid = () => {
  const { fetchingState, podcastsState } = usePodcastGrid();

  return (
    <>
      <div>Filter</div>
      {fetchingState === 'loading' && <div>Loading ...</div>}
      <div className={PodcastGridStyles.podcastCardsGrid}>
        {fetchingState !== 'loading' &&
          podcastsState.podcast.map(podcastData => (
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
