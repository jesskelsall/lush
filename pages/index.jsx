import { gql } from '@apollo/client'
import cn from 'classnames'
import Head from 'next/head'
import Categories from '../components/Categories/Categories'
import apolloClient from '../utils/apollo'
import styles from './index.module.scss'

export const getServerSideProps = async () => {
  const client = apolloClient()
  const { data } = await client.query({
    query: gql`
      {
        categories(first: 12, level: 1){
          edges{
            node {
              name
              slug
            }
          }
        }
      }
    `,
  })

  return { props: { categories: data.categories.edges } }
}

const HomePage = ({ categories }) => (
  <div className={cn('content', styles.content)}>
    <Head>
      <title>Lush Web Engineer Task: Home</title>
    </Head>
    <div className={styles.pageTop}>
      <h1 className={styles.welcome}>Hello!</h1>
      <p className={styles.instruction}>Select a category to start browsing products.</p>
    </div>
    <div className={styles.pageBottom}>
      <Categories categories={categories} />
    </div>
  </div>
)

export default HomePage
