import { Link } from 'react-router-dom';

import HeaderStyles from './Header.module.css';

export const Header = () => {
  return (
    <Link className={HeaderStyles.title} to="/">
      <h1>Podcaster</h1>
    </Link>
  );
};
