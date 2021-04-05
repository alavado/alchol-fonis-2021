import gql from 'graphql-tag'

export default gql`
  query (
    $id: ID!
  ) {
    user (
      id: $id
    ) {
      id
      sexo
      peso
    }
  }
`
