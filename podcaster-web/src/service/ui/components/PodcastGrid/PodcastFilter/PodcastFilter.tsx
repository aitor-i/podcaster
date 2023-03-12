import React, { useState } from 'react';

import { useRecoilValue } from 'recoil';

import { podcastState as podcastsAtom } from 'domain/atoms/podcasts';

import type { IFilteredPodcast } from '../PodcastGrid';

import PodcastFilterStyles from './PodcastFilter.module.css';

interface IProps {
  setPodcastHandler: (podcasts: IFilteredPodcast) => void;
  filteredPodcastState: IFilteredPodcast;
}

export const PodcastFilter = ({ setPodcastHandler, filteredPodcastState }: IProps) => {
  const podcastsState = useRecoilValue(podcastsAtom);
  const [isFiltered, setIsFiltered] = useState(false);

  const filterChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value) {
      setIsFiltered(false);
      return;
    }
    const filteredPodcasts = podcastsState.podcast.filter(podcast => {
      const title = podcast.title.label;
      const author = podcast['im:artist'].label;
      return title.toLowerCase().match(value.toLowerCase()) || author.toLowerCase().match(value.toLowerCase());
    });

    setIsFiltered(true);
    setPodcastHandler({ isFiltered: isFiltered, podcasts: filteredPodcasts });
  };

  const podcastsNumber = !isFiltered ? podcastsState.podcast.length : filteredPodcastState.podcasts.length;

  return (
    <div className={PodcastFilterStyles.container}>
      <div className={PodcastFilterStyles.number}>{podcastsNumber}</div>
      <div className={PodcastFilterStyles.input}>
        <input id="podcast-filter" name="podcast-filter" onChange={filterChangeHandler} placeholder="Filter podcasts..." type="text" />
      </div>
    </div>
  );
};
