import { render } from '@redwoodjs/testing/web'

import CommentPage from './CommentPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CommentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentPage />)
    }).not.toThrow()
  })
})
