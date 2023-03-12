import { useCallback, useEffect, useMemo } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { podcastsDetailState as podcastsDetailAtom } from 'domain/atoms/podcastDetails';
import { podcastState as podcastsStateAtom } from 'domain/atoms/podcasts';

import { useFetch } from 'service/ui/hooks/useFetch';

import PodcastInformationCard from 'service/ui/components/PodcastInformationCard';

import PodcastDetailBodyStyles from './PodcastDetailBody.module.css';
import PodcastEpisodes from './PodcastEpisodes';

import type { IFetcher } from 'service/fetcher/IFetcher';
import type { RootObject as IDetailData } from 'domain/model/IPodcastDetailData';
import type { IPodcastDetailsState } from 'domain/atoms/podcastDetails';

export const PodcastDetailBody = () => {
  const [podcastsDetailState, setPodcastDetailState] = useRecoilState(podcastsDetailAtom);
  const podcastState = useRecoilValue(podcastsStateAtom);
  const { podcastId } = useParams();
  const fetchPodcastDetailConfig: IFetcher = useMemo(
    () => ({ method: 'GET', url: `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20` }),
    [podcastId]
  );
  const detailFromStore = podcastsDetailState.find(detail => detail.podcastDetail.results[0].collectionId === Number(podcastId));
  const detailFetchingDate = podcastsDetailState.find(detail => detail.podcastDetail.results[0].collectionId === Number(podcastId))?.updateDate;

  const { apiData, fetchingState, isUpdated } = useFetch<IDetailData>({ fetchConfig: fetchPodcastDetailConfig, fetchDate: detailFetchingDate });

  const updateDetailHandler = useCallback(() => {
    const detailsWithoutCurrent = podcastsDetailState.filter(detail => detail.podcastDetail.results[0].collectionId !== Number(podcastId));
    const newDate = new Date();
    const updatedDetail: IPodcastDetailsState = { podcastDetail: apiData!, updateDate: newDate };
    const updatedDetails: IPodcastDetailsState[] = [...detailsWithoutCurrent, updatedDetail];

    setPodcastDetailState(updatedDetails);
  }, [apiData, podcastId, podcastsDetailState, setPodcastDetailState]);

  useEffect(() => {
    if (isUpdated && fetchingState === 'success') {
      updateDetailHandler();
    }
  }, [fetchingState, isUpdated, updateDetailHandler]);

  const podcast = podcastState.podcast.find(podcast => podcast.id.attributes['im:id'] === podcastId);

  return (
    <div className={PodcastDetailBodyStyles.container}>
      <div className={PodcastDetailBodyStyles.informationContainer}>
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
      <div className={PodcastDetailBodyStyles.episodesContainer}>
        {fetchingState !== 'loading' && (
          <PodcastEpisodes episodeCount={detailFromStore?.podcastDetail.resultCount!} episodeList={detailFromStore?.podcastDetail.results!} />
        )}
      </div>
    </div>
  );
};
