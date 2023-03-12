import Header from 'service/ui/components/Header';
import EpisodeDetailBody from 'service/ui/components/EpisodeDetailBody';

import EpisodeDetailStyles from './EpisodeDetail.module.css';

export const EpisodeDetail = () => {
  return (
    <div className={EpisodeDetailStyles.episodeDetailPage}>
      <Header />
      <EpisodeDetailBody />
    </div>
  );
};
