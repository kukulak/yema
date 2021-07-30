import { InMemoryCache, ApolloClient } from '@apollo/client';

export default function TheApolloClient() {

    const client = new ApolloClient({
      uri: 'https://api.spacex.land/graphql/',
      cache: new InMemoryCache({
      typePolicies: {
          Query: {
          fields: {
              feed: offsetLimitPagination() 
              },
          },
          },
      })
    });

    return (client)

}