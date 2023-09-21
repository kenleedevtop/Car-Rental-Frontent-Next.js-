// eslint-disable-next-line import/no-named-as-default
import Project from 'constants/project';
import {
  IShare,
} from 'api/shares/types';

import { client } from 'api/api-client';

const ShareAPI = {
  createShare: async (body: IShare) => {
    const { data } = await client.post(`${Project.apis.v1}/shares`, body);

    return data;
  },

};

export default ShareAPI;
