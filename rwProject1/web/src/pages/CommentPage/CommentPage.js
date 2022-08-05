import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CommentPage = () => {
  return (
    <>
      <MetaTags title="Comment" description="Comment page" />

      <h1>CommentPage</h1>
      <p>
        Find me in <code>./web/src/pages/CommentPage/CommentPage.js</code>
      </p>
      <p>
        My default route is named <code>comment</code>, link to me with `
        <Link to={routes.comment()}>Comment</Link>`
      </p>
    </>
  )
}

export default CommentPage
