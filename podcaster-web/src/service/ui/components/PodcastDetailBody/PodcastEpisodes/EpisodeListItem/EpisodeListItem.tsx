import { timeFormatter } from 'application/utils/timeFormatter/timeFormatter';

import EpisodeListItemStyles from './EpisodeListItem.module.css';

interface IProps {
  title: string;
  date: Date;
  durationMs: number;
  index: number;
}

const dateFormatter = (date: Date) => new Date(date).toLocaleDateString();

export const EpisodeListItem = ({ title, date, durationMs, index }: IProps) => {
  const formattedDate = dateFormatter(date);
  const { minutes, restSeconds } = timeFormatter(durationMs);
  const background = index % 2 !== 0 ? EpisodeListItemStyles.episodeOdd : '';
  return (
    <div className={`${EpisodeListItemStyles.episode} ${background}`}>
      <p className={EpisodeListItemStyles.episodeTitle}>{title}</p>
      <p className={EpisodeListItemStyles.episodeDate}>{formattedDate}</p>
      <p className={EpisodeListItemStyles.episodeDuration}>
        {minutes}:{restSeconds}
      </p>
    </div>
  );
};
