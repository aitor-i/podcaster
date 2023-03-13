import { Link } from 'react-router-dom';
import FallbackStyles from './Fallback.module.css';

export const Fallback = () => {
  return (
    <div className={FallbackStyles.container}>
      <h1>Ups ... An error occurred</h1>
      <Link className={FallbackStyles.redirection} relative={'path'} to={'/'}>
        Go back to home page
      </Link>
    </div>
  );
};
