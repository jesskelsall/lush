import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = () => new ApolloClient({
  uri: 'https://twstg2.eu.saleor.cloud/graphql/',
  cache: new InMemoryCache(),
})

export default apolloClient
