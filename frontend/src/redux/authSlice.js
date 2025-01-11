import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        isSignedIn:null,
    },
    reducers:{
       signIn:(state,action)=>{
        state.isSignedIn = action.payload
        },
       logout:(state)=>{
        state.isSignedIn = false;
       },
    }
})

export const {signIn,logout} = authSlice.actions;

export default authSlice.reducer;