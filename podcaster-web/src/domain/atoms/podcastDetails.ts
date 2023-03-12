import { atom } from 'recoil';

import type { RootObject as IPodcastDetail } from 'domain/model/IPodcastDetailData';
export interface IPodcastDetailsState {
  podcastDetail: IPodcastDetail;
  updateDate: Date;
}

export const podcastsDetailState = atom({
  key: 'podcast-details',
  default: [] as IPodcastDetailsState[]
});
