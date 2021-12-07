export const formatWeight = ({ unit, value }) => {
  if (!unit || !value) return null

  if (unit === 'KG') {
    if (value < 1) return `${Math.floor(value * 1000)}g`
    return `${Math.floor(value)}kg`
  }

  return `${Math.floor(value)} ${unit}`
}
