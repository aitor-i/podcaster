import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import HomePage from 'service/ui/layout/HomePage';
import PodcastDetail from 'service/ui/layout/PodcastDetail';
import ErrorBoundary from './service/ui/components/ErrorBoundary/ErrorBoundary';
import EpisodeDetail from './service/ui/layout/EpisodeDetail';
import Fallback from './service/ui/layout/Fallback';

export const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            }
            path="/"
          />
          <Route
            element={
              <ErrorBoundary>
                <PodcastDetail />
              </ErrorBoundary>
            }
            path="/podcast/:podcastId"
          />
          <Route
            element={
              <ErrorBoundary>
                <EpisodeDetail />
              </ErrorBoundary>
            }
            path="/podcast/:podcastId/episode/:episodeId"
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
