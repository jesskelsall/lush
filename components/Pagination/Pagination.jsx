import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Pagination.module.scss'

const Pagination = ({
  baseUrl,
  endCursor,
  hasNextPage,
  hasPreviousPage,
  startCursor,
}) => {
  const buttonStyle = styles.button
  const disabledButtonStyle = styles['button--disabled']

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
        cursor: startCursor,
        enabled: hasPreviousPage,
        relation: 'before',
        text: '\u2190 Previous',
      })}
      {renderButton({
        cursor: endCursor,
        enabled: hasNextPage,
        relation: 'after',
        text: 'Next \u2192',
      })}
    </footer>
  )
}

Pagination.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  endCursor: PropTypes.string,
  hasNextPage: PropTypes.bool,
  hasPreviousPage: PropTypes.bool,
  startCursor: PropTypes.string,
}

Pagination.defaultProps = {
  endCursor: null,
  hasNextPage: false,
  hasPreviousPage: false,
  startCursor: null,
}

export default Pagination
