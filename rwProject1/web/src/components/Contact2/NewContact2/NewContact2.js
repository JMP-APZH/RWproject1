import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Contact2Form from 'src/components/Contact2/Contact2Form'

const CREATE_CONTACT2_MUTATION = gql`
  mutation CreateContact2Mutation($input: CreateContact2Input!) {
    createContact2(input: $input) {
      id
    }
  }
`

const NewContact2 = () => {
  const [createContact2, { loading, error }] = useMutation(
    CREATE_CONTACT2_MUTATION,
    {
      onCompleted: () => {
        toast.success('Contact2 created')
        navigate(routes.contact2S())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createContact2({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Contact2</h2>
      </header>
      <div className="rw-segment-main">
        <Contact2Form onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewContact2
