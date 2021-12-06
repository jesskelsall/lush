import PropTypes from 'prop-types'

// Render five coloured stars and a 1 decimal point rating score
const Rating = ({ rating }) => {
  // The saturation of each star is proportional to how "full" it is
  const renderStar = (star, percentageFull) => (
    <span
      data-percentage={percentageFull}
      key={star}
      style={{ color: `hsl(var(--hue), ${percentageFull}%, 50%)` }}
    >
      {'\u2605'}
    </span>
  )

  const stars = [...Array(5).keys()].map((star) => star + 1)
  const displayRating = (Math.floor(rating * 10) / 10).toFixed(1)

  return (
    <div>
      {stars.map((star) => {
        // Convert the rating to a number between 0 and 1 that represents this particular star
        const clampedRating = Math.max(star - 1, Math.min(star, rating))
        const starCompletion = clampedRating - (star - 1)
        const percent = starCompletion * 100

        return renderStar(star, percent)
      })}
      {' '}
      {displayRating}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default Rating
