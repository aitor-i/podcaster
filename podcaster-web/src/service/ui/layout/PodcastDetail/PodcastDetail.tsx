import Header from 'service/ui/components/Header';
import PodcastDetailBody from 'service/ui/components/PodcastDetailBody';

import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Fallback from '../Fallback';

import PodcastDetailStyles from './PodcastDetail.module.css';

export const PodcastDetail = () => {
  return (
    <div className={PodcastDetailStyles.podcastDetailPage}>
      <Header />
      <ErrorBoundary Fallback={<Fallback />}>
        <PodcastDetailBody />
      </ErrorBoundary>
    </div>
  );
};
