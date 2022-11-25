import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    fullName: '',
    email: '',
    token: '',
    isLogged: false,
  },
  reducers:{
    changeUser(state, { payload }) {
      localStorage.setItem('chatApp', JSON.stringify({token: payload.token, id: payload.id}))
      return { ...state, ...payload, isLogged: true }
    },
    logout(state){
      return {
        ...state, 
        id: '', 
        email: '', 
        token: '', 
        isLogged: false
      }
    }
  }
})

export const { changeUser, logout } = slice.actions;
export const selectUser = (state: { user: any; }) => state.user;
export default slice.reducer;