import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  fetch: async (input: RequestInfo, init: RequestInit | undefined) => {
    return window.fetch(input, init);
  },
  uri: process.env.NEXT_PUBLIC_BFF_URL + '/graphql',
  credentials: 'include',
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: httpLink,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});
