import { render } from '@redwoodjs/testing/web'

import Contact2Page from './Contact2Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Contact2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Contact2Page />)
    }).not.toThrow()
  })
})
