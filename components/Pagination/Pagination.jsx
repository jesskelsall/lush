import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Pagination.module.scss'
import { pageInfoType } from '../../propTypes'

// Next and previous page controls
// Use the pagination cursor to form query strings to modify the page content
const Pagination = ({ baseUrl, pageInfo }) => {
  const buttonStyle = styles.button
  const disabledButtonStyle = styles['button--disabled']

  // DRY function as both buttons are very similar
  const renderButton = ({
    cursor, enabled, relation, text,
  }) => (enabled
    ? (
      <Link href={`${baseUrl}?${relation}=${cursor}`}>
        <a className={buttonStyle} role="button">{text}</a>
      </Link>
    )
    : <div className={disabledButtonStyle}>{text}</div>
  )

  return (
    <footer className={styles.pagination}>
      {renderButton({
        cursor: pageInfo.startCursor,
        enabled: pageInfo.hasPreviousPage,
        relation: 'before',
        text: '\u2190 Previous',
      })}
      {renderButton({
        cursor: pageInfo.endCursor,
        enabled: pageInfo.hasNextPage,
        relation: 'after',
        text: 'Next \u2192',
      })}
    </footer>
  )
}

Pagination.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  pageInfo: pageInfoType.isRequired,
}

export default Pagination
