import { gql } from '@apollo/client'

export const PRODUCTS_PER_PAGE = 16

// The category page uses similar queries depending on pagination direction
// This function helps with mutually exclusive query arguments
const buildCategoryQuery = (queryName, queryVariables, productsArguments) => gql`
  query ${queryName}(
    $categorySlug: String!,
    $productsCount: Int!,
    ${queryVariables}
  ){
    category(slug: $categorySlug){
      name
      description
      products(
        channel: "uk",
        ${productsArguments}
      ){
        edges{
          node{
            name
            slug
            category{
              name
            }
            rating
            thumbnail{
              url
              alt
            }
            pricing{
              priceRangeUndiscounted{
                start{
                  net{
                    currency
                    amount
                  }
                }
              }
            }
          }
        }
        pageInfo{
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`

// Default query or when navigating to the next page
export const QUERY_CATEGORY_AFTER = buildCategoryQuery(
  'categoryAfter',
  '$after: String',
  `first: $productsCount,
  after: $after,`,
)

// Query when navigating to the previous page
export const QUERY_CATEGORY_BEFORE = buildCategoryQuery(
  'categoryBefore',
  '$before: String!',
  `last: $productsCount,
  before: $before,`,
)
