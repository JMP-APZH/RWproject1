import Contact2 from 'src/components/Contact2/Contact2'

export const QUERY = gql`
  query FindContact2ById($id: Int!) {
    contact2: contact2(id: $id) {
      id
      name
      email
      message
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Contact2 not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ contact2 }) => {
  return <Contact2 contact2={contact2} />
}
