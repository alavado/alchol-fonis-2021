import gql from 'graphql-tag'

export default gql`
  mutation (
    $role: ID!
    $fechaNacimiento: Date!
    $sexo: String!
    $peso: Float!
    $username: String!
    $password: String!
    $email: String!
  ) {
    createUser (
      input: {
        data: {
          role: $role
          sexo: $sexo
          peso: $peso
          fechaNacimiento: $fechaNacimiento
          username: $username
          password: $password
          email: $email
        }
      }
    ) {
      user {
        id
      }
    }
  }
`