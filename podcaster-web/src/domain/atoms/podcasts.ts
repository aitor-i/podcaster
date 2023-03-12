import { atom } from 'recoil';

import type { Entry as IPodcast } from 'domain/model/IPodcastsData';

export const podcastState = atom({
  key: 'podcast-state',
  default: [] as IPodcast[]
});
