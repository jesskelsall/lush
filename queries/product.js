import { gql } from '@apollo/client'

export const QUERY_PRODUCT = gql`
  query productPage($productSlug: String!){
    product(
      channel: "uk",
      slug: $productSlug
    ){
      name
      description
      category{
        name
      }
      weight{
        unit
        value
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
      media{
        alt
        url
      }
      collections{
        id
        name
      }
    }
  }
`
