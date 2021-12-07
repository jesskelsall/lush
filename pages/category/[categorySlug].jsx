import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import GridProduct from '../../components/GridProduct/GridProduct'
import JSONString from '../../components/JSONString/JSONString'
import Pagination from '../../components/Pagination/Pagination'
import { gridProductsType, pageInfoType } from '../../propTypes'
import { QUERY_CATEGORY } from '../../queries/category'
import {
  PRODUCTS_PER_PAGE, QUERY_GRID_PRODUCTS_AFTER, QUERY_GRID_PRODUCTS_BEFORE,
} from '../../queries/gridProducts'
import apolloClient from '../../utils/apollo'
import styles from './[categorySlug].module.scss'

const SORT_TYPES = [
  {
    name: 'Name',
    slug: '',
    sortBy: {
      direction: 'ASC',
      field: 'NAME',
    },
  },
  {
    name: 'Price Lowest',
    slug: 'price-lowest',
    sortBy: {
      direction: 'ASC',
      field: 'PRICE',
    },
  },
  {
    name: 'Price Highest',
    slug: 'price-highest',
    sortBy: {
      direction: 'DESC',
      field: 'PRICE',
    },
  },
]

export const getServerSideProps = async (context) => {
  const {
    after, before, categorySlug, sortBy,
  } = context.query
  const client = apolloClient()

  // Get the sort query variables based on the query string
  const sortType = SORT_TYPES.find((type) => type.slug === sortBy) || SORT_TYPES[0]

  // API request for details of the category, notably its ID
  const { data: categoryData } = await client.query({
    query: QUERY_CATEGORY,
    variables: {
      categorySlug,
    },
  })

  // Separate API request to the products query, rather than using category.products
  // Allows sorting arguments to be provided
  const { data: productsData } = await client.query({
    query: before ? QUERY_GRID_PRODUCTS_BEFORE : QUERY_GRID_PRODUCTS_AFTER,
    variables: {
      after,
      before,
      categoryId: categoryData.category.id,
      productsCount: PRODUCTS_PER_PAGE,
      sortDirection: sortType.sortBy.direction,
      sortField: sortType.sortBy.field,
    },
  })

  // Unpack the responses into separate props that will be passed to other components
  const { description, name } = categoryData.category
  const { edges, pageInfo } = productsData.products

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

// Lists products belonging to the chosen category
const CategoryPage = ({
  categorySlug,
  description,
  name,
  pageInfo,
  products,
}) => {
  const router = useRouter()

  // Sorting redirects to the same page with a sorting query string added
  const onChangeSort = (event) => {
    const queryString = event.target.value ? `?sortBy=${event.target.value}` : ''
    const url = `/category/${categorySlug}${queryString}`

    router.push(url)
  }

  return (
    <div className="content">
      {/* Category details */}
      <div className={styles.category}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.description}>
          <JSONString json={description} />
        </div>
      </div>

      {/* Sort dropdown */}
      <div className={styles.controls}>
        <select className={styles.sort} onChange={onChangeSort}>
          {SORT_TYPES.map(({ name, slug }) => (
            <option key={slug} value={slug}>
              Sort By:
              {' '}
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Products grid */}
      <div className={styles.grid}>
        {products.map((product) => <GridProduct key={product.node.slug} product={product} />)}
      </div>
      <Pagination
        baseUrl={`/category/${categorySlug}`}
        pageInfo={pageInfo}
      />
    </div>
  )
}

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
