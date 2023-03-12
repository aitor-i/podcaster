import EpisodeListItem from 'service/ui/components/PodcastDetailBody/PodcastEpisodes/EpisodeListItem';

import EpisodesStyles from './PodcastEpisodes.module.css';

import type { Result as IEpisode } from 'domain/model/IPodcastDetailData';
interface IProps {
  episodeList: IEpisode[];
  episodeCount: number;
}

export const PodcastEpisodes = ({ episodeCount, episodeList }: IProps) => {
  return (
    <div>
      <h2>Episodes: {episodeCount}</h2>
      <div className={EpisodesStyles.episodesContainer}>
        <div className={EpisodesStyles.episode}>
          <b className={EpisodesStyles.episodeTitle}>Title</b>
          <b className={EpisodesStyles.episodeDate}>Date</b>
          <b className={EpisodesStyles.episodeDuration}>Time</b>
        </div>
        {episodeList &&
          episodeList.map((episode, index) => (
            <EpisodeListItem
              date={episode.releaseDate}
              durationMs={episode.trackTimeMillis}
              id={episode.trackId}
              index={index}
              key={episode.trackId}
              title={episode.trackName}
            />
          ))}
      </div>
    </div>
  );
};
