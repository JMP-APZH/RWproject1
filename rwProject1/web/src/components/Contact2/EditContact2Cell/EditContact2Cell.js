import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Contact2Form from 'src/components/Contact2/Contact2Form'

export const QUERY = gql`
  query EditContact2ById($id: Int!) {
    contact2: contact2(id: $id) {
      id
      name
      email
      message
      createdAt
    }
  }
`
const UPDATE_CONTACT2_MUTATION = gql`
  mutation UpdateContact2Mutation($id: Int!, $input: UpdateContact2Input!) {
    updateContact2(id: $id, input: $input) {
      id
      name
      email
      message
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ contact2 }) => {
  const [updateContact2, { loading, error }] = useMutation(
    UPDATE_CONTACT2_MUTATION,
    {
      onCompleted: () => {
        toast.success('Contact2 updated')
        navigate(routes.contact2S())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateContact2({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Contact2 {contact2.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <Contact2Form
          contact2={contact2}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
