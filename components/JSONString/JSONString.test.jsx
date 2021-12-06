import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import JSONString from './JSONString'
import { paragraphStub } from '../../_stubs'

afterEach(cleanup)

const renderJSONString = (jsonString) => render(
  <JSONString json={jsonString} />,
)

describe('JSONString component', () => {
  it('renders a paragraph block', () => {
    const screen = renderJSONString(paragraphStub)
    const html = screen.container.innerHTML

    expect(html).toBe('<p>Use bar soap to wash away dirt, bacteria, yeasts, fungi and viruses </p>')
  })
})
