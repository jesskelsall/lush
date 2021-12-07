import Link from 'next/link'
import { categoriesType } from '../../propTypes'
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
  categories: categoriesType.isRequired,
}

export default Categories
