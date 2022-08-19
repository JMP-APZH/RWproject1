import { Link, routes } from '@redwoodjs/router'

import Comments from 'src/components/Comment/Comments'
// import Comment from 'src/components/Comment'

export const QUERY = gql`
  query FindComments {
    comments2 {
      id
      name
      body
      postId
      createdAt
    }
    commentCount
  }
`

// export const QUERY = gql`
//   query FindComments($postId: Int!) {
//     comments(postId: $postId) {
//       id
//       name
//       body
//       createdAt
//     }
//     commentCount
//   }
// `

// export const QUERY = gql`
//   query CommentsQuery() {
//     comments {
//       id
//       name
//       body
//       postId
//       createdAt
//     }
//     commentCount
//   }
// `

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No comments yet. '}
      <Link to={routes.newComment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ comments, commentCount }) => {
  return (
    <>
    <p className="text-red-800 pt-5 text-center font-bold text-2xl">
      Hello from the CommentsCell
    </p>
    <div className="border border-red-800 p-2">
      <Comments
        comments={comments}
        commentCount={commentCount}
      />
      <p className="py-5 font-bold text-xl">
        Comments count is showned here: {commentCount}
      </p>
    </div>
    </>
    )
}
