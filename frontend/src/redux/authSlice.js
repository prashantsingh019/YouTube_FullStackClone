import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        isSignedIn:false,
    },
    reducers:{
       signIn:(state)=>{
        state.isSignedIn = true;
       },
       logout:(state)=>{
        state.isSignedIn = false;
       },
    }
})

export const {signIn,logout} = authSlice.actions;

export default authSlice.reducer;