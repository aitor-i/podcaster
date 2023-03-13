import PodcastInformationCard from 'service/ui/components/PodcastInformationCard';

import PodcastDetailBodyStyles from './PodcastDetailBody.module.css';
import PodcastEpisodes from './PodcastEpisodes';
import { usePodcastDetailBody } from './usePodcastDetailBody';

export const PodcastDetailBody = () => {
  const { detailFromStore, fetchingState, podcast } = usePodcastDetailBody();

  return (
    <div className={PodcastDetailBodyStyles.container}>
      <div className={PodcastDetailBodyStyles.informationContainer}>
        {podcast && (
          <PodcastInformationCard
            author={podcast?.['im:artist'].label}
            description={podcast?.summary.label}
            id={podcast.id.attributes['im:id']}
            imageSrc={podcast?.['im:image'][2].label}
            podcastName={podcast?.title.label}
          />
        )}
      </div>
      <div className={PodcastDetailBodyStyles.episodesContainer}>
        {fetchingState !== 'loading' && (
          <PodcastEpisodes episodeCount={detailFromStore?.podcastDetail.resultCount!} episodeList={detailFromStore?.podcastDetail.results!} />
        )}
      </div>
    </div>
  );
};
