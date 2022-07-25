import gql from 'graphql-tag'

export default gql`
  mutation (
    $idUsuario: ID
    $datos: JSON
  ) {
    createAudit(input: {
      data: {
        user: $idUsuario
        datos: $datos
      }
    }) {
      audit {
        id
        datos
      }
    }
  }
`