import Comment from 'src/components/Comment'
// import Comments from 'src/components/Comment/Comments'

export const QUERY = gql`
  query CommentsQuery($postId: Int!) {
    comments(postId: $postId) {
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
//   query CommentsQuery() {
//     comments() {
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
  return <div className="text-center text-gray-500">No comments yet</div>
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ comments, commentCount }) => {
  console.log('hello from the CommentsCell')
  console.log({commentCount})
  return (
    <>
    <p>
      Hello from the CommentsCell (components/CommentsCell)
    </p>
      <div className="border border-yellow-500">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}

        <p className="text-red-500 font-bold">
        This is the total of comments but not the amount of comment for that particular post
        <br />
        {commentCount}
        </p>

      </div>
    </>
  )
}
