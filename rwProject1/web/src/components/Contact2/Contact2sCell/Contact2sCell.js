import { Link, routes } from '@redwoodjs/router'

import Contact2s from 'src/components/Contact2/Contact2s'

export const QUERY = gql`
  query FindContact2s {
    contact2S {
      id
      name
      email
      message
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No contact2S yet. '}
      <Link to={routes.newContact2()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ contact2S }) => {
  return <Contact2s contact2S={contact2S} />
}
