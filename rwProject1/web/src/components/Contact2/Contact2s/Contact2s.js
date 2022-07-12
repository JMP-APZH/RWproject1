import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Contact2/Contact2sCell'

const DELETE_CONTACT2_MUTATION = gql`
  mutation DeleteContact2Mutation($id: Int!) {
    deleteContact2(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const Contact2sList = ({ contact2S }) => {
  const [deleteContact2] = useMutation(DELETE_CONTACT2_MUTATION, {
    onCompleted: () => {
      toast.success('Contact2 deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete contact2 ' + id + '?')) {
      deleteContact2({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {contact2S.map((contact2) => (
            <tr key={contact2.id}>
              <td>{truncate(contact2.id)}</td>
              <td>{truncate(contact2.name)}</td>
              <td>{truncate(contact2.email)}</td>
              <td>{truncate(contact2.message)}</td>
              <td>{timeTag(contact2.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.contact2({ id: contact2.id })}
                    title={'Show contact2 ' + contact2.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editContact2({ id: contact2.id })}
                    title={'Edit contact2 ' + contact2.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete contact2 ' + contact2.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(contact2.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Contact2sList
