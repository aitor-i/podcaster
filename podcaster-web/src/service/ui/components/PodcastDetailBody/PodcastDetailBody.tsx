import { useMemo } from 'react';

import { useParams } from 'react-router-dom';

import { useFetch } from 'service/ui/hooks/useFetch';

import PodcastInformationCard from 'service/ui/components/PodcastInformationCard';

import PodcastDetailBodyStyles from './PodcastDetailBody.module.css';

import type { IFetcher } from 'service/fetcher/IFetcher';
import type { RootObject as IDetailData } from 'domain/model/IPodcastDetailData';
import PodcastEpisodes from './PodcastEpisodes';

export const PodcastDetailBody = () => {
  const { podcastId } = useParams();
  const fetchPodcastDetailConfig: IFetcher = useMemo(
    () => ({ method: 'GET', url: `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20` }),
    [podcastId]
  );
  const { apiData, fetchingState } = useFetch<IDetailData>({ fetchConfig: fetchPodcastDetailConfig });

  return (
    <div className={PodcastDetailBodyStyles.container}>
      <div className={PodcastDetailBodyStyles.informationContainer}>
        <PodcastInformationCard />
      </div>
      <div className={PodcastDetailBodyStyles.episodesContainer}>
        {fetchingState === 'success' && <PodcastEpisodes episodeCount={apiData?.resultCount!} episodeList={apiData?.results!} />}
      </div>
    </div>
  );
};
