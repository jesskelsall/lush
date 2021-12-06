import PropTypes from 'prop-types'
import Pagination from '../../components/Pagination/Pagination'
import JSONString from '../../components/JSONString/JSONString'
import apolloClient from '../../utils/apollo'
import styles from './[categorySlug].module.scss'
import { gridProductsType, pageInfoType } from '../../propTypes'
import GridProduct from '@/components/GridProduct/GridProduct'
import { PRODUCTS_PER_PAGE, QUERY_CATEGORY_AFTER, QUERY_CATEGORY_BEFORE } from '../../queries/category'

export const getServerSideProps = async (context) => {
  const { after, before, categorySlug } = context.query

  const client = apolloClient()
  const { data } = await client.query({
    query: before ? QUERY_CATEGORY_BEFORE : QUERY_CATEGORY_AFTER,
    variables: {
      after,
      before,
      categorySlug,
      productsCount: PRODUCTS_PER_PAGE,
    },
  })

  const { description, name } = data.category
  const { edges, pageInfo } = data.category.products

  return {
    props: {
      categorySlug,
      description,
      name,
      products: edges,
      pageInfo,
    },
  }
}

const CategoryPage = ({
  categorySlug,
  description,
  name,
  pageInfo,
  products,
}) => (
  <div className="content">
    <div className={styles.category}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.description}>
        <JSONString json={description} />
      </div>
    </div>
    <div className={styles.grid}>
      {products.map((product) => <GridProduct key={product.node.slug} product={product} />)}
    </div>
    <Pagination
      baseUrl={`/category/${categorySlug}`}
      pageInfo={pageInfo}
    />
  </div>
)

CategoryPage.propTypes = {
  categorySlug: PropTypes.string.isRequired,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  pageInfo: pageInfoType.isRequired,
  products: gridProductsType.isRequired,
}

CategoryPage.defaultProps = {
  description: null,
}

export default CategoryPage
