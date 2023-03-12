import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { podcastsDetailState as podcastDetailAtom } from 'domain/atoms/podcastDetails';
import { podcastState as podcastsStateAtom } from 'domain/atoms/podcasts';

import PodcastInformationCard from 'service/ui/components/PodcastInformationCard';

import EpisodeContainer from './EpisodeContainer';

import EpisodeBodyStyles from './EpisodeDetailBody.module.css';

export const EpisodeDetailBody = () => {
  const podcastsDetailState = useRecoilValue(podcastDetailAtom);
  const podcastState = useRecoilValue(podcastsStateAtom);

  const { episodeId, podcastId } = useParams();

  const episodeDetail = podcastsDetailState.find(detail => detail.podcastDetail.results.find(episode => episode.trackId === Number(episodeId)));
  const episode = episodeDetail?.podcastDetail.results.find(episode => episode.trackId === Number(episodeId));

  const podcast = podcastState.podcast.find(podcast => podcast.id.attributes['im:id'] === podcastId);

  return (
    <div className={EpisodeBodyStyles.container}>
      <div>
        {podcast && (
          <PodcastInformationCard
            author={podcast?.['im:artist'].label}
            description={podcast?.summary.label}
            id={podcast.id.attributes['im:id']}
            imageSrc={podcast?.['im:image'][2].label}
            podcastName={podcast?.title.label}
          />
        )}
      </div>
      <EpisodeContainer descriptions={episode?.description!} episodeUrl={episode?.episodeUrl!} title={episode?.trackName!} />
    </div>
  );
};
