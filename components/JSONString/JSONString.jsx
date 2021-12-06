import PropTypes from 'prop-types'
import React from 'react'
import { nanoid } from 'nanoid'

const reactElements = {
  paragraph: 'p',
}

// Parse JSONString types returned from the API using the types provided.
const JSONString = ({ json }) => {
  try {
    // Will throw an error if the JSON string is malformed
    const data = JSON.parse(json)

    return data.blocks.map((block) => {
      // Determine which tag to wrap the text content in
      const element = reactElements[block.type] || reactElements.paragraph

      return React.createElement(element, {
        // Potentially unsafe if the API isn't strict about the tags included in text strings
        dangerouslySetInnerHTML: { __html: block.data.text || '' },
        key: `json-string-${nanoid(6)}`,
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
