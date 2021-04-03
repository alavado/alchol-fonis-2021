import gql from 'graphql-tag'

export default gql`
  mutation Login(
    $usuario: String!
    $password: String!
  ) {
    login(input:{
      identifier: $usuario
      password: $password
    }) {
      jwt
      user {
        email
        username
      }
    }
  }
`