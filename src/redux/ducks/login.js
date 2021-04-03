import { decode } from 'jsonwebtoken'


import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {
    guardaUsuario(state, action) {
      state.jwt = action.payload.jwt
      state.id = decode(action.payload.jwt).id
      state.nombre = action.payload.user.username
      state.email = action.payload.user.email
    },
    cierraLaSesion(state, action) {
      state.jwt = undefined
    }
  }
})

export const { guardaUsuario, cierraLaSesion } = loginSlice.actions

export default loginSlice.reducer
