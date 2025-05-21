import { createSlice } from "@reduxjs/toolkit";
const emailSlicer=createSlice({
    name:'email',
    initialState:{
        value:''
    },
    reducers:{
        setEmail:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {setEmail}=emailSlicer.actions
export default emailSlicer.reducer