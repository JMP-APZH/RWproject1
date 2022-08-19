import { Link, routes } from '@redwoodjs/router'
import CommentsCell from 'src/components/CommentsCell'
import CommentForm from 'src/components/CommentForm'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const Article = ({ article, summary = false }) => {
  return (
    <article
      key={article.id}
      className="text-center"
    >
      <header>
        <h2 className="w-full hover:text-yellow-500 text-2xl text-blue-400 font-semibold bg-contain">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>

      <div className="mt-2 text-xl text-gray-900 font-light">
        {/* {article.body} */}
        {summary ? truncate(article.body, 50) : article.body}
      </div>
      <div className="text-xs italic">Posted at: {timeTag(article.createdAt)}</div>
      {!summary && (
        <div className="mt-12">
          <CommentForm postId={article.id} />
          <div className="mt-12">
            <CommentsCell postId={article.id} />
          </div>
        </div>
      )}
    </article>
  )
}

export default Article
