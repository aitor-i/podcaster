import { atom } from 'recoil';

export const fetchingState = atom({
  key: 'fetching-state',
  default: false
});
