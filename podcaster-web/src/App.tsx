import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import HomePage from 'service/ui/layout/HomePage';
import PodcastDetail from 'service/ui/layout/PodcastDetail';

export const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<PodcastDetail />} path="/podcast/:podcastId" />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
