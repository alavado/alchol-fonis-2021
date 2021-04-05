import { createSlice } from '@reduxjs/toolkit'
import { tragos } from '../../data/tragos'

const menuSlice = createSlice({
  name: 'registro',
  initialState: {
    dias: Array(7).fill(false),
    tragos: Array(7).fill(tragos.map(t => ({
      ...t,
      cantidad: 0
    })))
  },
  reducers: {
    seleccionaDia(state, action) {
      const [indice, estado] = action.payload
      state.dias[indice] = estado
    },
    agregaTrago(state, action) {
      const [indiceDia, nombreTrago] = action.payload
      const indiceTrago = state.tragos[indiceDia].findIndex(t => t.nombre === nombreTrago)
      state.tragos[indiceDia][indiceTrago].cantidad = state.tragos[indiceDia][indiceTrago].cantidad + 1
    },
    quitaTrago(state, action) {
      const [indiceDia, nombreTrago] = action.payload
      const indiceTrago = state.tragos[indiceDia].findIndex(t => t.nombre === nombreTrago)
      state.tragos[indiceDia][indiceTrago].cantidad = Math.max(0, state.tragos[indiceDia][indiceTrago].cantidad - 1)
    }
  }
})

export const { seleccionaDia, agregaTrago, quitaTrago } = menuSlice.actions

export default menuSlice.reducer
