import store from 'src/store';
import {PaymentInforParams} from './store/auth';

export interface ResponseLinks {
  first: string;
  last: string;
  prev: null;
  next: null;
}

export interface ResponseMeta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface ResponseErrors {
  status: number;
  message?: string;
  errors: {
    field: string;
    message: string;
  }[];
}

export type RootState = ReturnType<typeof store.getState>;

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    backgroundColor: string;
    primaryDark: string;
    grey: string;
    yellow: string;
    blue: string;
    green: string;
    secondYellow: string;
    violet: string;
  }
}

export interface RawCurrentUser {
  id: number;
  name: string;
  gender?: 'Male' | 'Female';
  date_of_birth?: number;
  group: 'Diamon' | 'General';
  group_code: 'General' | 'diamond_member';
  phone?: string;
  email: string;
  avatar?: string;
  amount: string;
  formatted_amount: string;
  isDiamond: boolean;
  payment_account?: PaymentInforParams;
  referrer_code: string;
  refrerer_name: string;
  member_count: number;
  referrer_link: string;
  created_at: number;
  type: string;
  pending_upgrade_diamond: boolean;
  training_point: number;
  training_code:
    | 'level_0'
    | 'level_1'
    | 'level_2'
    | 'level_3'
    | 'level_4'
    | 'level_5'
    | 'level_6';
  training_title: string;
  enable_training?: boolean;
  join_training?: boolean;
  upgrade_diamond_at: number;
  show_training_popup: boolean;
  last_application_review?: {
    comment: string;
    rating: number;
  };
}

export interface LoginData {
  token_type: 'bearer' | '';
  access_token: string;
  expires_in: number;
}

export interface DynamicResponse {
  code: number;
  message: string;
  status: number;
}

export interface RawRegion {
  id: string;
  name: string;
  code: string;
}

export interface RawWard {
  name: string;
  region_id: string;
  id: string;
  district_id: string;
}

export interface RawDistrict {
  id: string;
  name: string;
  region_id: string;
}

export interface RawQuestion {
  id: number;
  question: string;
  answer: string;
}
