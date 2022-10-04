const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    id: ID!
    name: String!
  }
`
const resolvers = {
  Query: {
    me: (parent, args) => {
      return {
        id: "0001",
        name: "John"
      }
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers})
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
