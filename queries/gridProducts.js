import { gql } from '@apollo/client'

export const PRODUCTS_PER_PAGE = 16

// The category page uses similar queries depending on pagination direction
// This function helps with mutually exclusive query arguments
const buildgridProductQuery = (queryName, queryVariables, productsArguments) => gql`
  query ${queryName}(
    $categoryId: ID!,
    $productsCount: Int!,
    $sortDirection: OrderDirection!,
    $sortField: ProductOrderField!,
    ${queryVariables}
  ){
    products(
      channel: "uk",
      filter: {
        categories: [$categoryId],
      },
      sortBy: {
        direction: $sortDirection,
        field: $sortField,
      },
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
`

// Default query or when navigating to the next page
export const QUERY_GRID_PRODUCTS_AFTER = buildgridProductQuery(
  'categoryAfter',
  '$after: String',
  `first: $productsCount,
  after: $after,`,
)

// Query when navigating to the previous page
export const QUERY_GRID_PRODUCTS_BEFORE = buildgridProductQuery(
  'categoryBefore',
  '$before: String!',
  `last: $productsCount,
  before: $before,`,
)
