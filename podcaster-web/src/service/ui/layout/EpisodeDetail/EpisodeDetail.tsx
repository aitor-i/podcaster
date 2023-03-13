import Header from 'service/ui/components/Header';
import EpisodeDetailBody from 'service/ui/components/EpisodeDetailBody';

import EpisodeDetailStyles from './EpisodeDetail.module.css';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Fallback from '../Fallback';

export const EpisodeDetail = () => {
  return (
    <div className={EpisodeDetailStyles.episodeDetailPage}>
      <Header />
      <ErrorBoundary Fallback={<Fallback />}>
        <EpisodeDetailBody />
      </ErrorBoundary>
    </div>
  );
};
