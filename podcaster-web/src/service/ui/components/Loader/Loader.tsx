import { useRecoilValue } from 'recoil';
import { fetchingState as fetchingStateAtom } from 'domain/atoms/fetching';

import LoaderStyles from './Loader.module.css';

export const Loader = () => {
  const globalFetchingState = useRecoilValue(fetchingStateAtom);

  return globalFetchingState ? <span className={LoaderStyles.loader}></span> : <span></span>;
};
