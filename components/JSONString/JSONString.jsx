import PropTypes from 'prop-types'
import React from 'react'

const reactElements = {
  paragraph: 'p',
}

const JSONString = ({ json }) => {
  try {
    const data = JSON.parse(json)

    return data.blocks.map((block) => {
      const element = reactElements[block.type] || reactElements.paragraph

      return React.createElement(element, {
        dangerouslySetInnerHTML: { __html: block.data.text || '' },
      })
    })
  } catch {
    return <em>Could not parse the given JSONString.</em>
  }
}

JSONString.propTypes = {
  json: PropTypes.string.isRequired,
}

export default JSONString
