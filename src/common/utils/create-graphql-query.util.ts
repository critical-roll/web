import { apolloClient } from '@common/constants';
import { DocumentNode } from 'graphql';

export const createGraphqlQuery = <Response, Variables = object>(query: DocumentNode) => ({
  loading: false,

  async query(variables?: Variables): Promise<Response> {
    this.loading = true;

    const response = await apolloClient.query({
      variables,
      query: query,
    });

    this.loading = false;

    return response.data;
  },
});
