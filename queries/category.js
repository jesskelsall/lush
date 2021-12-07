import { gql } from '@apollo/client'

export const QUERY_CATEGORY = gql`
  query category(
    $categorySlug: String!,
  ) {
    category(slug: $categorySlug){
      id
      name
      description
    }
  }
`
