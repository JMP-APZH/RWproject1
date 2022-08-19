import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell'

import PostsCell from 'src/components/Post/PostsCell'

import { useMutation } from '@redwoodjs/web'
import CommentsCell from 'src/components/Comment/CommentsCell'
// import CommentsCell from 'src/components/CommentsCell'

// import { QUERY } from 'src/components/Post/PostsCell'

// import { postCount } from 'rwProject1/api/src/services/posts/posts.js'

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


const HomePage = ({ posts, postCount, commentCount }) => {
  console.log({postCount})
  console.log('hello from the homepage')
  console.log({commentCount})
  return (
    <>

      <MetaTags title="Home" description="Home page" />

      <div
        className=""
        postCount={postCount}
      >
        <h1 className="text-white text-center text-2xl font-semibold tracking-tight bg-gray-500 rounded-xl pb-1">
          Blog Articles Overview { postCount }
        </h1>


        <ArticlesCell />

        <p className="text-center font-semibold text-3xl pt-8">
          Where the Stats output will be displayed...
        </p>

        <PostsCell />
        <p className="p-2 font-bold text-center text-xl">
          I expect here the list of all comments independent of the post
        </p>
        <p className="p-2 italic text-center text-xl">
          Something is wrong
        </p>
        <CommentsCell />



      </div>

    </>
  )
}

export default HomePage
