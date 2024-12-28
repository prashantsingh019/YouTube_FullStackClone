import { configureStore, createSlice } from '@reduxjs/toolkit';
import { authSlice } from './authSlice.js';

export const store = configureStore({
    reducer:{
       userLoginStatus:authSlice.reducer,
       }
})

