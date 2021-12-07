import Image from 'next/image'
import PropTypes from 'prop-types'
import JSONString from '../../components/JSONString/JSONString'
import Rating from '../../components/Rating/Rating'
import { categoryType, mediaType, pricingType } from '../../propTypes'
import { QUERY_PRODUCT } from '../../queries/product'
import apolloClient from '../../utils/apollo'
import { formatPrice } from '../../utils/price'
import { formatWeight } from '../../utils/weight'
import styles from './[productSlug].module.scss'

export const getServerSideProps = async (context) => {
  const { productSlug } = context.query

  const client = apolloClient()
  const { data } = await client.query({
    query: QUERY_PRODUCT,
    variables: { productSlug },
  })

  return {
    props: { ...data.product },
  }
}

// Shows details of the chosen product
const ProductPage = ({
  category, collections, description, media, name, pricing, rating, thumbnail, weight,
}) => {
  const image = media && media.length ? media[media.length - 1] : null
  const backgroundImage = image ? `url("${image.url}")` : null

  return (
    <div className="content">
      <div className={styles.top}>
        {/* Basic product details */}
        <div className={styles.details}>
          {thumbnail && (
          <Image
            alt={thumbnail.alt || name}
            src={thumbnail.url}
            height={125}
            width={125}
          />
          )}
          <h1 className={styles.name}>{name}</h1>
          {category && (
            <span className={styles.category}>{category.name}</span>
          )}
          {rating && <Rating rating={rating} />}
          {(pricing || weight) && (
          <p className={styles.priceLine}>
            {pricing && (
              <span className={styles.price}>{formatPrice(pricing)}</span>
            )}
            {weight && (
              <span className={styles.weight}>{formatWeight(weight)}</span>
            )}
          </p>
          )}
        </div>

        {/* Hero image */}
        <div className={styles.image} style={{ backgroundImage }} />
      </div>

      <div className={styles.bottom}>
        {/* Collections */}
        {collections && collections.length > 0 && (
          <ul className={styles.collections}>
            {collections.map((collection) => (
              <li
                className={styles.collection}
                key={collection.id}
              >
                {collection.name}
              </li>
            ))}
          </ul>
        )}

        {/* Description */}
        {description && (
          <div className={styles.description}>
            <JSONString json={description} />
          </div>
        )}
      </div>
    </div>
  )
}

ProductPage.propTypes = {
  category: categoryType,
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  description: PropTypes.string,
  media: PropTypes.arrayOf(mediaType),
  name: PropTypes.string.isRequired,
  pricing: pricingType,
  rating: PropTypes.number,
  thumbnail: mediaType,
  weight: PropTypes.shape({
    unit: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }),
}

ProductPage.defaultProps = {
  category: null,
  collections: null,
  description: null,
  media: null,
  pricing: null,
  rating: null,
  thumbnail: null,
  weight: null,
}

export default ProductPage
