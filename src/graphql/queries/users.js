import gql from 'graphql-tag'

export default gql`
  query (
    $role: ID!
  ) {
    users (
      where: {
        role: $role
      }
      sort: "createdAt:desc"
    ) {
      id
      sexo
      peso
      fechaNacimiento
      createdAt
      audits {
        datos
        createdAt
      }
    }
  }
`
