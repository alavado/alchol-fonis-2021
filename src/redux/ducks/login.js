import { decode } from 'jsonwebtoken'

const limpiarToken = 'login/limpiarToken'
const guardarUsuario = 'login/guardarUsuario'

const defaultState = {}

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case guardarUsuario: {
      return {
        ...state,
        jwt: action.payload.jwt,
        id: decode(action.payload.jwt).id,
        nombre: action.payload.user.username,
        email: action.payload.user.email
      }
    }
    case limpiarToken: {
      return {
        ...state,
        jwt: undefined
      }
    }
    default: {
      return state
    }
  }
}

export const cierraLaSesion = () => {
  return { type: limpiarToken }
}

export const guardaUsuario = usuario => {
  return { type: guardarUsuario, payload: usuario }
}