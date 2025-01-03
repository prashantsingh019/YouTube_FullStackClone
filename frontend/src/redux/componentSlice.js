import { createSlice } from "@reduxjs/toolkit";

export const visiblitySlice = createSlice({
    name:'visiblity',
    initialState:{
        value:false
    },
    reducers:{
        setAppear:(state)=>{
            state.value = !state.value
        }
    }
})

export const {setAppear} = visiblitySlice.actions;
export default visiblitySlice.reducer;