import { gql } from '@apollo/client'

export const QUERY_CATEGORIES = gql`
{
  categories(first: 12, level: 1){
    edges{
      node {
        name
        slug
      }
    }
  }
}
`
