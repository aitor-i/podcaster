import PodcastInformationCard from 'service/ui/components/PodcastInformationCard';

import EpisodeContainer from './EpisodeContainer';

import EpisodeBodyStyles from './EpisodeDetailBody.module.css';
import { useEpisodeBody } from './useEpisodeBody';

export const EpisodeDetailBody = () => {
  const { episode, podcast } = useEpisodeBody();

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
