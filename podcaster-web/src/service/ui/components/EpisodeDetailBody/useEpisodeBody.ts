import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { podcastsDetailState as podcastDetailAtom } from 'domain/atoms/podcastDetails';
import { podcastState as podcastsStateAtom } from 'domain/atoms/podcasts';

export const useEpisodeBody = () => {
  const podcastsDetailState = useRecoilValue(podcastDetailAtom);
  const podcastState = useRecoilValue(podcastsStateAtom);

  const { episodeId, podcastId } = useParams();

  const episodeDetail = podcastsDetailState.find(detail => detail.podcastDetail.results.find(episode => episode.trackId === Number(episodeId)));
  const episode = episodeDetail?.podcastDetail.results.find(episode => episode.trackId === Number(episodeId));

  const podcast = podcastState.podcast.find(podcast => podcast.id.attributes['im:id'] === podcastId);

  return { podcast, episode };
};
