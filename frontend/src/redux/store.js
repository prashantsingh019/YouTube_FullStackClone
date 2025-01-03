import { configureStore} from '@reduxjs/toolkit';
import { authSlice } from './authSlice.js';
import { visiblitySlice } from './componentSlice.js';
import { dataSlice } from './dataSlice.js';

export const store = configureStore({
    reducer:{
       userLoginStatus:authSlice.reducer,
       visible:visiblitySlice.reducer,
       data:dataSlice.reducer
       }
})

