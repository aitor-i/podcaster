import { useCallback, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { fetchingState as fetchingStateAtom } from 'domain/atoms/fetching';

import { fetcher } from 'service/fetcher/fetcher';

import type { IFetcher } from 'service/fetcher/IFetcher';

interface IDatesValidator {
  firstDate: Date | undefined;
  secondDate: Date;
  hours: number;
}
const datesValidator = ({ firstDate, secondDate, hours }: IDatesValidator) => {
  if (firstDate === undefined) return true;
  const diffInMs: number = Math.abs(secondDate.getTime() - firstDate.getTime());
  const diffInHours: number = Math.floor(diffInMs / (1000 * 60 * 60));

  if (hours <= diffInHours) return true;
  return false;
};

interface IUseFetch {
  fetchConfig: IFetcher;
  fetchDate?: Date;
}

export const useFetch = <T>({ fetchConfig, fetchDate }: IUseFetch) => {
  const [apiData, setApiData] = useState<T>();
  const [fetchingState, setFetchingState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const setFetchingGlobalState = useSetRecoilState(fetchingStateAtom);
  const validateDates: IDatesValidator = {
    firstDate: fetchDate,
    secondDate: new Date(),
    hours: 24
  };
  const isOneDayPassed = datesValidator(validateDates);

  const fetchHandler = useCallback(async () => {
    try {
      setFetchingState('loading');
      setFetchingGlobalState(true);
      const response: T = await fetcher(fetchConfig);
      setApiData(response);
      setFetchingState('success');
      setFetchingGlobalState(false);
    } catch (error) {
      setFetchingState('error');
      setFetchingGlobalState(false);
      throw new Error('Error fetching data');
    }
  }, [fetchConfig, setFetchingGlobalState]);

  useEffect(() => {
    if (isOneDayPassed) {
      fetchHandler();
    }
  }, [fetchHandler, isOneDayPassed]);

  return { apiData, fetchingState, isUpdated: isOneDayPassed };
};
