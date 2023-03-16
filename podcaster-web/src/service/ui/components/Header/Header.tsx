import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

import HeaderStyles from './Header.module.css';

export const Header = () => {
  return (
    <div className={HeaderStyles.headerContainer}>
      <Link className={HeaderStyles.title} to="/">
        <h1>Podcaster</h1>
      </Link>
      <Loader />
    </div>
  );
};
