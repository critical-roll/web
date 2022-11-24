import { apolloClient } from '@common/constants';
import { DocumentNode } from 'graphql';

export const GraphqlService = {
  async query<T>(query: DocumentNode, variables?: Record<string, unknown>): Promise<T> {
    const response = await apolloClient.query({
      variables,
      query: query,
    });

    return response.data;
  },

  async mutate<T>(mutation: DocumentNode, variables?: Record<string, unknown>): Promise<T> {
    const response = await apolloClient.mutate({
      variables,
      mutation: mutation,
    });

    return response.data;
  },
};
