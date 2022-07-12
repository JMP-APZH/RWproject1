import { FieldError, Form, Label, Submit, TextAreaField, TextField, useForm, FormError } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContact2Mutation($input: CreateContact2Input!) {
    createContact2(input: $input) {
      id
      
    }
  }
`

const Contact2Page = () => {

  const formMethods = useForm({ mode: 'onBlur' })

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you very much for your message !')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    
    create({ variables: { input: data }})
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact2" description="Contact2 page" />

      <Toaster />

      <Form 
        onSubmit={onSubmit} 
        config={{ mode: 'onBlur' }}
        error={ error }
        formMethods={formMethods}
      >
        
        <FormError 
          error={ error }
          wrapperClassName="py-4 px-6 rounded-lg bg-red-100 text-red-700"
          listClassName="list-disc ml-4"
          listItemClassName=""
        />

        <>
        {console.log(error)}
        </>

        <Label 
          name="name" 
          errorClassName='error' 
        />
        <TextField name="name" errorClassName='error' validation={{ required: true }} />
        <FieldError name="name" className='error' />

        <Label name="email" errorClassName='error' />
        <TextField 
          name="email" 
          errorClassName='error' 
          validation={{ 
            required: true, 
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
              message: 'Please enter a valid email address',} }} />
        <FieldError name="email" className='error' />

        <Label name="message" errorClassName='error' />
        <TextAreaField name="message" errorClassName='error' validation={{ required: true }} />
        <FieldError name="message" className='error' />

        <Submit disabled={loading}>Send Message</Submit>
      </Form>

    </>
  )
}

export default Contact2Page
