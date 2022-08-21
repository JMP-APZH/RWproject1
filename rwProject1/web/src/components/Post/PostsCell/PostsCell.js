import { Link, routes } from '@redwoodjs/router'

import Posts from 'src/components/Post/Posts'

export const QUERY = gql`
  query FindPosts {
    posts {
      id
      title
      body
      createdAt
    }
    postCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No posts yet. '}
      <Link to={routes.newPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ posts, postCount }) => {
  console.log('hello from the PostsCell')
  console.log({postCount})
  return (
    <>

        <h1 className="text-white text-center text-2xl font-semibold tracking-tight bg-gray-500 rounded-xl pb-1">
          Blog Articles Overview { postCount } from the PostsCell
        </h1>

    <p className="pt-5 font-bold text-center text-2xl text-green-800">
      Hello from the PostsCell
    </p>
    <p className="italic text-center text-xl text-green-800">
    I am showing here the list of posts as in the DB
    </p>
    <div className='border border-green-800 p-2'>
      <p className="py-5 font-bold text-xl">
        We have currently {postCount} posts that have been created.
      </p>
      <Posts
        posts={posts}
      />

    </div>
    </>
  )

}
