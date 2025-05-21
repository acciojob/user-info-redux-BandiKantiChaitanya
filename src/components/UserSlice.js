import { createSlice } from "@reduxjs/toolkit";
 const userSlicer=createSlice({
    name:'username',
    initialState:{
        value:''
    },
    reducers:{
        setUsername:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {setUsername}=userSlicer.actions
export default userSlicer.reducer