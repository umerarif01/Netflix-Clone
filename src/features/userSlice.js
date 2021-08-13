
import { createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({

  name: 'user',
  initialState: {
      user: null
  },

  //reducers states
  reducers: {
    login: (state, action) => {
  
      state.user = action.payload;
    },
  
    logout: (state) => {
      state.user = null;
    },
  },
 
});

export const { login, logout } = userSlice.actions;//state actions

export const user_Selector = (state) => state.user.user;//allow us to pull the states

export default userSlice.reducer;//exporting the reducer
