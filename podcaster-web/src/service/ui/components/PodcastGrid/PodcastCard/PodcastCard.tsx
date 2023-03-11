import React from 'react';

import PodcastCardStyles from './PodcastCard.module.css';

interface IProps {
  imageSrc: string;
  podcastName: string;
  author: string;
}

export const PodcastCard = ({ author, imageSrc, podcastName }: IProps) => {
  return (
    <div className={PodcastCardStyles.cardContainer}>
      <div className={PodcastCardStyles.imageContainer}>
        <img alt="podcast" src={imageSrc} />
      </div>
      <div className={PodcastCardStyles.informationContainer}>
        <h3 className={PodcastCardStyles.name}>{podcastName}</h3>
        <p className={PodcastCardStyles.author}>Author: {author}</p>
      </div>
    </div>
  );
};
