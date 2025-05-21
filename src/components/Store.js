import {configureStore} from '@reduxjs/toolkit'
import userNameReducer from './UserSlice'
import emailReducer from './EmailSlice'
export default configureStore({
    reducer:{
        username:userNameReducer,
        email:emailReducer
    }
})