import { gql } from 'apollo-server-express'

export const typeDefs =gql`
    type User {
        id: ID!
        username: String!
        email: String!
        phone_number: String!
        password: String!
        confirmEmail: Boolean
    }

    type Query {
        user: User
    }

    type Mutation {
        registerUser(username: String!,email: String!, password: String!, phone_number: String! ,password: String!): Boolean!
        login(email: String!, password: String!): User!
        logout: Boolean!
        sendLinkToValidateEmail: User!
        validateEmail(confirmEmail: Boolean): User!
        deleteUser: Boolean!
    }
`