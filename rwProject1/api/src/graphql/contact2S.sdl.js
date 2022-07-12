export const schema = gql`
  type Contact2 {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contact2S: [Contact2!]! @requireAuth
    contact2(id: Int!): Contact2 @requireAuth
  }

  input CreateContact2Input {
    name: String!
    email: String!
    message: String!
  }

  input UpdateContact2Input {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContact2(input: CreateContact2Input!): Contact2! @requireAuth
    updateContact2(id: Int!, input: UpdateContact2Input!): Contact2!
      @requireAuth
    deleteContact2(id: Int!): Contact2! @requireAuth
  }
`
