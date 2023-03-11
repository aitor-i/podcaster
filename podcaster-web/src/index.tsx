import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from 'service/ui/layout/HomePage';

import './index.css';
import PodcastDetail from './service/ui/layout/PodcastDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/podcast/:podcastId',
    element: <PodcastDetail />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
