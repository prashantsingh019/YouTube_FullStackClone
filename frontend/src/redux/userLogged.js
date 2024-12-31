import { createSlice } from "@reduxjs/toolkit";

export const userLogin = createSlice({
    name:'user',
    initialState:{
        currentUser:"Prashant Singh"
    },
    reducers:{
        login:(state,action)=>{
            state.currentUser = action.payload;
        }
    }
})

export const {login} = userLogin.actions;

export default userLogin.reducer;