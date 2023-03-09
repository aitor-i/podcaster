import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

import App from 'service/ui/App';
import HomePage from 'service/ui/layout/HomePage';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
