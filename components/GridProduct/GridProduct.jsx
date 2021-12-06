import Image from 'next/image'
import Link from 'next/link'
import { gridProductType } from '../../propTypes'
import Price from '../Price/Price'
import Rating from '../Rating/Rating'
import styles from './GridProduct.module.scss'

// Display a single product for use in a grid
const GridProduct = ({ product }) => (
  <Link href={`/products/${product.node.slug}`}>
    <a className={styles.product}>
      {/* Thumbnail */}
      <div className={styles.thumbnail}>
        {product.node.thumbnail && (
          <Image
            alt={product.node.thumbnail.alt || product.node.name}
            src={product.node.thumbnail.url}
            height={125}
            width={125}
          />
        )}
      </div>

      {/* Title and Category */}
      <h2 className={styles.name}>{product.node.name}</h2>
      {product.node.category && (
        <span className={styles.category}>{product.node.category.name}</span>
      )}

      {/* Price and Rating */}
      <div className={styles.footer}>
        <div>
          {product.node.pricing && (
            <Price pricing={product.node.pricing} />
          )}
        </div>
        {typeof product.node.rating === 'number' && (
          <Rating rating={product.node.rating} />
        )}
      </div>
    </a>
  </Link>
)

GridProduct.propTypes = {
  product: gridProductType.isRequired,
}

export default GridProduct
