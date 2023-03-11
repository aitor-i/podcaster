import React from 'react';
import { Link } from 'react-router-dom';

import PodcastCardStyles from './PodcastCard.module.css';

interface IProps {
  imageSrc: string;
  podcastName: string;
  author: string;
  id: string;
}

export const PodcastCard = ({ author, imageSrc, podcastName, id }: IProps) => {
  return (
    <Link className={PodcastCardStyles.cardContainer} to={`/podcast/${id}`}>
      <div className={PodcastCardStyles.imageContainer}>
        <img alt="podcast" src={imageSrc} />
      </div>
      <div className={PodcastCardStyles.informationContainer}>
        <h3 className={PodcastCardStyles.name}>{podcastName}</h3>
        <p className={PodcastCardStyles.author}>Author: {author}</p>
      </div>
    </Link>
  );
};
