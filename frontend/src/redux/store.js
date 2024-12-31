import { configureStore, createSlice, current } from '@reduxjs/toolkit';
import { authSlice } from './authSlice.js';
import { userLogin } from './userLogged.js';
export const store = configureStore({
    reducer:{
       userLoginStatus:authSlice.reducer,
       currentUser:userLogin.reducer,
       }
})

