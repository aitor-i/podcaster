import { useCallback, useEffect, useState } from 'react';

import { fetcher } from 'service/fetcher/fetcher';

import type { IFetcher } from 'service/fetcher/IFetcher';

interface IUseFetch {
  fetchConfig: IFetcher;
}

export const useFetch = <T>({ fetchConfig }: IUseFetch) => {
  const [apiData, setApiData] = useState<T>();
  const [fetchingState, setFetchingState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const fetchHandler = useCallback(async () => {
    try {
      setFetchingState('loading');
      const response: T = await fetcher(fetchConfig);
      setApiData(response);
      setFetchingState('success');
    } catch (error) {
      setFetchingState('error');
      throw new Error('Error fetching data');
    }
  }, [fetchConfig]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  return { apiData, fetchingState };
};
