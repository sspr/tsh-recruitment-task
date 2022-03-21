import {
  useQuery as reactUseQuery,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

import { Action } from 'api/types';
import { client } from '../client';

export function useQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  action: Action,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >
): UseQueryResult<TData, TError> {
  return reactUseQuery<TQueryFnData, TError, TData, TQueryKey>(
    action.url as TQueryKey,
    () =>
      client
        .request<TQueryFnData>(action)
        .then(({ data }) => data)
        .catch((error) => {
          throw new Error(error.request.status);
        }),
    {
      retry: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      ...(options ?? {}),
    }
  );
}
