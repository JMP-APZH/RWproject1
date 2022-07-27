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
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
    {/* <ul className="flex flex-col items-center"> */}
      <div className="space-y-10">
        {articles.map((article) => (
          <Article article={article} key={article.id} summary={true} />
        ))}
      </div>
    {/* </ul> */}
    </>
  )
}
