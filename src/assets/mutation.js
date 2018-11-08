import { gql } from 'apollo-boost'



export const VIEW_USER = gql`
        query UserQuery {
            user {
                    id
                    username
                    phone_number
                    email
                }
        }


`


export const REGISTER_USER = gql`
    mutation RegisterUsers($username: String!, $email: String!, $phone_number: String!,$password: String!) {
        registerUser(username: $username, email: $email, phone_number: $phone_number, password: $password)
    }
`



export const LOGIN_USER = gql`

        mutation LoginUser($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                id
                username
                email
                phone_number
            }
        }

`



