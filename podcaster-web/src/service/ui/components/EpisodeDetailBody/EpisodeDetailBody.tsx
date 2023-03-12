import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { podcastsDetailState as podcastDetailAtom } from 'domain/atoms/podcastDetails';
import EpisodeContainer from './EpisodeContainer';

export const EpisodeDetailBody = () => {
  const podcastsDetailState = useRecoilValue(podcastDetailAtom);
  const { episodeId } = useParams();

  const episodeDetail = podcastsDetailState.find(detail => detail.podcastDetail.results.find(episode => episode.trackId === Number(episodeId)));
  const episode = episodeDetail?.podcastDetail.results.find(episode => episode.trackId === Number(episodeId));

  console.log('episode', episode);
  console.log('episodeDetail', episodeDetail);
  return (
    <div>
      <div>Information</div>
      <EpisodeContainer descriptions={episode?.description!} episodeUrl={episode?.episodeUrl!} title={episode?.trackName!} />
    </div>
  );
};
