import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import JSONString from './JSONString'
import { paragraph } from '../../_stubs/jsonString'

afterEach(cleanup)

const wrapperId = 'test-wrapper'

const renderJSONString = (jsonString) => render(
  <div data-testid={wrapperId}>
    <JSONString json={jsonString} />
  </div>,
)

describe('JSONString component', () => {
  it('renders a paragraph block', () => {
    const screen = renderJSONString(paragraph)
    const html = screen.getByTestId(wrapperId).innerHTML

    expect(html).toBe('<p>Use bar soap to wash away dirt, bacteria, yeasts, fungi and viruses </p>')
  })
})
