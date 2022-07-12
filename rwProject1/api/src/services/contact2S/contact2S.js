import { db } from 'src/lib/db'
import { validate } from '@redwoodjs/api'

export const contact2S = () => {
  return db.contact2.findMany()
}

export const contact2 = ({ id }) => {
  return db.contact2.findUnique({
    where: { id },
  })
}

export const createContact2 = ({ input }) => {
  validate(input.email, 'email', { email: true })
  return db.contact2.create({
    data: input,
  })
}

export const updateContact2 = ({ id, input }) => {
  return db.contact2.update({
    data: input,
    where: { id },
  })
}

export const deleteContact2 = ({ id }) => {
  return db.contact2.delete({
    where: { id },
  })
}
