import gql from 'graphql-tag'

export default gql`
  query {
    roles {
      id
      name
    }
  }
`
