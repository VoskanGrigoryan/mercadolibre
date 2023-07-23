import { TAddress, TInstallments } from "./types";

export interface ContainerProps {
  children: React.ReactNode;
}

export interface IItemsState {
  data: IDevelopmentData;
  // isLoading: 'pending' | 'succeeded' | 'failed';
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string | unknown;
}

export interface IItemState {
  data: IData;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string | unknown;
}
// export interface IItemsState<T = any> {
//   data: T;
//   // isLoading: 'pending' | 'succeeded' | 'failed';
//   isLoading: boolean;
//   isSuccess: boolean;
//   errorMessage: string | unknown;
// }

// export interface IPagination<T = any> {
//   data?: T[];
//   paging?: {
//     total?: number;
//     primary_results?: number;
//     offset?: number;
//     limit?: number;
//   };
// }

export interface IDevelopmentData {
  results?: IData[];
  price?: string;
  pagination?: any;
}

export interface IData {
  title?: string;
  installments?: TInstallments;
  thumbnail?: string;
  address?: TAddress;
  id?: string;
  price?: string;
  currency_id?: string;
}
