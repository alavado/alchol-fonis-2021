import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    visible: false
  },
  reducers: {
    muestraMenu(state, action) {
      state.visible = action.payload
    }
  }
})

export const { muestraMenu } = menuSlice.actions

export default menuSlice.reducer
