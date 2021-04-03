import { decode } from 'jsonwebtoken'

const guardarToken = 'jwt/guardarToken'
const limpiarToken = 'jwt/limpiarToken'
const guardarUsuario = 'jwt/guardarUsuario'

// const defaultState = {
//   jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNmI1NGJiNmY0ZTAxMzY1Y2U5NjBjNiIsImlhdCI6MTYwNzEwNjA0MSwiZXhwIjoxNjA5Njk4MDQxfQ.NU-loAA8PfC5f13eMouA3nBiRaLDAUIVS3FW3_IunW4",
//   rol: 'SENASA Central',
//   id: decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNmI1NGJiNmY0ZTAxMzY1Y2U5NjBjNiIsImlhdCI6MTYwNzEwNjA0MSwiZXhwIjoxNjA5Njk4MDQxfQ.NU-loAA8PfC5f13eMouA3nBiRaLDAUIVS3FW3_IunW4").id
// }

// const defaultState = {
//   jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzNiZDBiZWFkNTA1MTJkYTFmOTEwMyIsImlhdCI6MTYwNjY2Mzg1NSwiZXhwIjoxNjA5MjU1ODU1fQ.9MuVgWbnp49GsV3oqAYkLe0fBZc2t_bpGvMgFOAVIkI",
//   rol: 'Productor',
//   id: decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzNiZDBiZWFkNTA1MTJkYTFmOTEwMyIsImlhdCI6MTYwNjY2Mzg1NSwiZXhwIjoxNjA5MjU1ODU1fQ.9MuVgWbnp49GsV3oqAYkLe0fBZc2t_bpGvMgFOAVIkI").id
// }

const defaultState = {}

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case guardarToken: {
      return {
        ...state,
        jwt: action.payload.jwt,
        id: decode(action.payload.jwt).id,
        rol: action.payload.user.role.name
      }
    }
    case limpiarToken: {
      return {
        ...state,
        jwt: undefined
      }
    }
    case guardarUsuario: {
      return {
        ...state,
        usuario: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export const tomaEsteToken = payload => {
  return { type: guardarToken, payload }
}

export const cierraLaSesion = () => {
  return { type: limpiarToken }
}

export const guardaUsuario = usuario => {
  return { type: guardarUsuario, payload: usuario }
}