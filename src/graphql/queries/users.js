import gql from 'graphql-tag'

export default gql`
  query (
    $role: ID!
  ) {
    users (
      where:{
        role: $role
      }
    ) {
      id
      sexo
      peso
      audits {
        datos
        createdAt
      }
    }
  }
`
