import Header from 'service/ui/components/Header';
import PodcastDetailBody from 'service/ui/components/PodcastDetailBody';

import PodcastDetailStyles from './PodcastDetail.module.css';

export const PodcastDetail = () => {
  return (
    <div className={PodcastDetailStyles.podcastDetailPage}>
      <Header />
      <PodcastDetailBody />
    </div>
  );
};
