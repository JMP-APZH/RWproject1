import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article key={article.id}>
      <header>
        <h2 className="box-border hover:box-content w-64 hover:text-yellow-500 text-2xl text-blue-400 font-semibold bg-contain">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>

      <div className="mt-2 text-xl text-gray-900 font-light">
        {article.body}
      </div>
      <div className="text-xs">Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
