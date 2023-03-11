import Header from 'service/ui/components/Header';
import PodcastGrid from 'service/ui/components/PodcastGrid';

import HomePageStyles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={HomePageStyles.homePage}>
      <Header />
      <PodcastGrid />
    </div>
  );
};
