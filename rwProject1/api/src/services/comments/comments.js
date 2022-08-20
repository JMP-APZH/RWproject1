import { db } from 'src/lib/db'

export const comments = ({ postId }) => {
  return db.comment.findMany({ where: { postId } })
}

export const comments2 = () => {
  return db.comment.findMany()
}

export const comment = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const Comment = {
  post: (_obj, { root }) =>
    db.comment.findUnique({ where: { id: root.id } }).post(),
}

export const createComment = ({ input }) => {
  return db.comment.create({
    data: input,
  })
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

export const commentCount = () => {
  return db.comment.count()
}

export const commentperpostCount = ({ postId }) => {
  return db.comment.count({ where: { postId } })
}
