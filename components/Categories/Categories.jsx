import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Categories.module.scss'

// Displays a list of categories that can be clicked on to view its products
const Categories = ({ categories }) => (
  <ul className={styles.categories}>
    {categories.map((category) => (
      <li className={styles.category} key={category.node.slug}>
        <Link href={`/category/${category.node.slug}`}>
          <a className={styles.link}>{category.node.name}</a>
        </Link>
      </li>
    ))}
  </ul>
)

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
}

export default Categories
