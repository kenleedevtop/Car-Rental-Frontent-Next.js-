import Project from 'constants/project';
import {
  TSingleAmbassador,
  TRegisterAsAmbassadorParams,
  ISingleAmbassadorResponse,
  IPagintatedAmbassadors,
  IAffiliatedAmbassador,
} from 'api/ambassador/types';

import { client } from 'api/api-client';

const AmbassadorAPI = {
  getAffiliateCodeOwner: async (
    affiliateCode: string
  ): Promise<IAffiliatedAmbassador> => {
    const { data } = await client.get(
      `${Project.apis.v1}/ambassador/affiliateCodeOwner/${affiliateCode}`
    );

    return data;
  },

  registration: async (
    body: TRegisterAsAmbassadorParams,
    token: string,
    locale: string
  ) => {
    await client.post(
      `${Project.apis.v1}/ambassador/registration?token=${token}`,
      body,
      {
        params: {
          lang: locale,
        },
      }
    );
  },

  getAmbassadors: async (params?: any): Promise<IPagintatedAmbassadors> => {
    const { data } = await client.get(`${Project.apis.v1}/ambassador`, {
      params,
    });

    return data;
  },

  getSingleAmbassador: async (
    id: number
  ): Promise<ISingleAmbassadorResponse> => {
    const { data } = await client.get(`${Project.apis.v1}/ambassador/${id}`);

    return data;
  },

  deleteAmbassador: async (id: TSingleAmbassador) => {
    await client.delete(`${Project.apis.v1}/ambassador/${id}`);
  },

  updateSingleAmbassador: async (body: any, id: number) => {
    await client.patch(`${Project.apis.v1}/ambassador/${id}`, body);
  },
};

export default AmbassadorAPI;
