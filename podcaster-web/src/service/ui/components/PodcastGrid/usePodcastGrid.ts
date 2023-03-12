import { useCallback, useEffect, useMemo } from 'react';

import { useRecoilState } from 'recoil';

import { podcastState as podcastsAtom } from 'domain/atoms/podcasts';

import { useFetch } from 'service/ui/hooks/useFetch';

import type { RootObject as IPodcastsData } from 'domain/model/IPodcastsData';
import type { IFetcher } from 'service/fetcher/IFetcher';

export const usePodcastGrid = () => {
  const [podcastsState, setPodcastsState] = useRecoilState(podcastsAtom);
  const fetchConfiguration: IFetcher = useMemo(
    () => ({
      method: 'GET',
      url: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    }),
    []
  );
  const { apiData, fetchingState, isUpdated } = useFetch<IPodcastsData>({ fetchConfig: fetchConfiguration, fetchDate: podcastsState.updateDate });

  const updatePodcastStateHandler = useCallback(() => {
    const podcasts = apiData?.feed.entry || [];
    const date = new Date();
    setPodcastsState({ podcast: podcasts, updateDate: date });
  }, [apiData, setPodcastsState]);

  useEffect(() => {
    if (isUpdated && fetchingState === 'success') {
      updatePodcastStateHandler();
    }
  }, [updatePodcastStateHandler, isUpdated, fetchingState]);

  return { fetchingState, podcastsState };
};
