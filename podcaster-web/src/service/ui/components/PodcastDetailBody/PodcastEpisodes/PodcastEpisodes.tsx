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
      <div className={EpisodesStyles.episode}>
        <p className={EpisodesStyles.episodeTitle}>title</p>
        <p className={EpisodesStyles.episodeDate}>formattedDate</p>
        <p className={EpisodesStyles.episodeDuration}>time</p>
      </div>
      <div>
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
