import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell'

import PostsCell from 'src/components/Post/PostsCell'
// import Posts from 'src/components/Post/Posts'

// export const QUERY = gql`
//   query FindPosts {
//     posts {
//       id
//       title
//       body
//       createdAt
//     }
//     postCount
//   }
// `

{/* <PostsCell postCount={postCount} /> */}

// import { QUERY } from 'src/components/Post/PostsCell'
import { useMutation } from '@redwoodjs/web'
import CommentsCell from 'src/components/CommentsCell'

const HomePage = ({ posts, postCount, commentCount }) => {
  // refetchQueries: [{ query: QUERY }],
  // awaitRefetchQueries: true,
  console.log({postCount})
  console.log('hello from the homepage')
  console.log({commentCount})
  return (
    <>

      <MetaTags title="Home" description="Home page" />

      <div className="" postCount={postCount}>
        <h1 className="text-white text-center text-2xl font-semibold tracking-tight bg-gray-500 rounded-xl pb-1">
          Blog Articles Overview
        </h1>


        <ArticlesCell postCount={postCount} />

        <PostsCell postCount={postCount} />

Here comes the comment count:
        <CommentsCell commentCount={commentCount} />

        {/* <Posts posts={posts} postCount={postCount} /> */}

      <div className="py-8">
          Where the Stats output will be displayed...
          <div className="bg-gray-500 text-yellow-600" postCount={postCount}>
            {/* <Posts posts={posts} postCount={postCount} /> */}
            {/* <postCount postCount={postCount} /> */}
            <div className="bg-green-500 text-red-600" postCount={postCount}>
            {/* <Posts posts={posts} postCount={postCount} /> */}

            Post count should be here!
            {postCount}
            </div>
            Is there something here?
          </div>
      </div>

      </div>

    </>
  )
}

export default HomePage
