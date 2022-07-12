import { FieldError, Form, Label, Submit, TextAreaField, TextField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
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
          validation={{ required: true, pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/} }} />
        <FieldError name="email" className='error' />

        <Label name="message" errorClassName='error' />
        <TextAreaField name="message" errorClassName='error' validation={{ required: true }} />
        <FieldError name="message" className='error' />

        <Submit>Send Message</Submit>
      </Form>

    </>
  )
}

export default ContactPage
