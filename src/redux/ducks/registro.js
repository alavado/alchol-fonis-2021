import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'registro',
  initialState: {
    dias: Array(7).fill(false)
  },
  reducers: {
    seleccionaDia(state, action) {
      const [indice, estado] = action.payload
      state.dias[indice] = estado
    }
  }
})

export const { seleccionaDia } = menuSlice.actions

export default menuSlice.reducer
