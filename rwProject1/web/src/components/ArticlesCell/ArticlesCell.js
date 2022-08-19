import { Link, routes } from "@redwoodjs/router"
import Article from "../Article/Article"

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
    postCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles, postCount }) => {
  return (
    <>
    <p className="text-blue-500 pt-5 text-center font-bold text-xl">
      Hello From the ArticlesCell {postCount} (postCount from the ArticlesCell)
    </p>
    <div className="border border-blue-500 p-2">
      {/* <ul className="flex flex-col items-center"> */}
        <div className="space-y-10">
          {articles.map((article) => (
            <Article article={article} key={article.id} summary={true} />
          ))}
        </div>
      {/* </ul> */}
    </div>
    </>
  )
}
