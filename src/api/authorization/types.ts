import { TUserRole } from 'types/global';

export type TLoginParams = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  token: string;
  role: Array<TUserRole>;
};

export type TMeResponse = {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: Array<TUserRole>;
  };
};

export type TChangePasswordParams = {
  email: string;
  oldPassword: string;
  newPassword: string;
};

export type TChangePasswordWithTokenParams = {
  token: string;
  newPassword: string;
};

export type TVerifyEmailParams = {
  token: string;
};

export type TResetPasswordParams = {
  email: string;
};

export type TRegisterAsInfluencerParams = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  socialMediaAccount?: {
    socialMedia: 'INSTAGRAM' | 'TWITTER' | 'FACEBOOK' | 'YOUTUBE' | 'TIKTOK';
    username: string;
    followers: number;
  } | null;
  affiliation?: string;
};

export type TRegisterAsCompanyParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company: {
    name: string;
    role: string;
  };
};
