import { Result as IEpisode } from '@/domain/model/IPodcastDetailData';

interface IProps {
  episodeList: IEpisode[];
  episodeCount: number;
}

export const PodcastEpisodes = ({ episodeCount, episodeList }: IProps) => {
  return (
    <div>
      <h2>Episodes: {episodeCount}</h2>
      <div>{episodeList && episodeList.map(episode => <div key={episode.trackId}>{episode.trackName}</div>)}</div>
    </div>
  );
};
