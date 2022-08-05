import { render } from '@redwoodjs/testing/web'

import CommentLayout from './CommentLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CommentLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentLayout />)
    }).not.toThrow()
  })
})
