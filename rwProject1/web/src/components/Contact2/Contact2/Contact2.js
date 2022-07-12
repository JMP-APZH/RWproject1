import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_CONTACT2_MUTATION = gql`
  mutation DeleteContact2Mutation($id: Int!) {
    deleteContact2(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Contact2 = ({ contact2 }) => {
  const [deleteContact2] = useMutation(DELETE_CONTACT2_MUTATION, {
    onCompleted: () => {
      toast.success('Contact2 deleted')
      navigate(routes.contact2S())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete contact2 ' + id + '?')) {
      deleteContact2({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Contact2 {contact2.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{contact2.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{contact2.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{contact2.email}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>{contact2.message}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(contact2.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editContact2({ id: contact2.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(contact2.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Contact2
