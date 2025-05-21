
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "./UserSlice";
import { setEmail } from "./EmailSlice";

const App = () => {
  let dispatch=useDispatch()
  const username=useSelector((state)=>state.username.value)
  const email=useSelector((state)=>state.email.value)
  // console.log(username)
  return (
    <div>
        {/* Do not remove the main div */}
    
    {/* <h1>{username}</h1> */}
    <h1>User Information</h1>
    <label >Name:</label>
    <input type="text" onChange={(e)=>{dispatch(setUsername(e.target.value))}} /><br/>
    <label htmlFor="">Email:</label>
    <input type="email" onChange={(e)=>{dispatch(setEmail(e.target.value))}}  />

    <p  >Current values in store:</p>
    <p className="output" >Name - {username}</p>
    <p className="output">Email - {email}</p>
    </div>
  )
}

export default App
