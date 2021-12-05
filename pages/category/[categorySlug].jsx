import { gql } from '@apollo/client'
import PropTypes from 'prop-types'
import Pagination from '../../components/Pagination/Pagination'
import JSONString from '../../components/JSONString/JSONString'
import apolloClient from '../../utils/apollo'
import styles from './[categorySlug].module.scss'

export const getServerSideProps = async (context) => {
  const { categorySlug } = context.query

  const client = apolloClient()
  const { data } = await client.query({
    query: gql`
    {
      category(slug: "${categorySlug}"){
        name
        description
        products(channel: "uk", first: 16){
          edges{
            node{
              id
              name
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
    `,
  })

  const { description, name } = data.category
  const {
    endCursor,
    hasNextPage,
    hasPreviousPage,
    startCursor,
  } = data.category.products.pageInfo

  return {
    props: {
      categorySlug,
      description,
      endCursor,
      hasNextPage,
      hasPreviousPage,
      name,
      products: data.category.products.edges,
      startCursor,
    },
  }
}

const CategoryPage = ({
  categorySlug,
  description,
  endCursor,
  hasNextPage,
  hasPreviousPage,
  name,
  startCursor,
}) => (
  <div className="content">
    <div className={styles.category}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.description}>
        <JSONString json={description} />
      </div>
    </div>
    <Pagination
      baseUrl={`/category/${categorySlug}`}
      endCursor={endCursor}
      hasNextPage={hasNextPage}
      hasPreviousPage={hasPreviousPage}
      startCursor={startCursor}
    />
  </div>
)

CategoryPage.propTypes = {
  categorySlug: PropTypes.string.isRequired,
  description: PropTypes.string,
  endCursor: PropTypes.string,
  hasNextPage: PropTypes.bool.isRequired,
  hasPreviousPage: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  startCursor: PropTypes.string,
}

CategoryPage.defaultProps = {
  description: null,
  startCursor: '',
  endCursor: '',
}

export default CategoryPage
