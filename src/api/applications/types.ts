import { ICar } from 'api/cars/types';
import { IUser } from 'api/users/types';

export type TCreateAsApplicationParams = {
  tier: string;
  carId: number;
  houseName: string;
};

export type TSingleApplication = {
  id: number;
};

export interface IApplication {
  id: number;
  tier: string;
  status: string;
  ownerId: number | null;
  carId: number | null;
  house: ICar;
  owner: IUser;
  createdAt: string;
  updatedAt: string;
}
