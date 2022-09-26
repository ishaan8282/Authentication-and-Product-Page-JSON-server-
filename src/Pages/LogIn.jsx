import React,{useContext} from 'react';
import {AuthContext} from "../Context/AuthContext"
import { Navigate } from 'react-router-dom';
const LogIn= () => {

    const {isAuth, toggleAuth} = useContext(AuthContext)

    // console.log(isAuth,toggleAuth)

    if(isAuth)
    {
        return <Navigate to="/" />
    }
  return (
    <div>
          <h1>Log In</h1>
          <button onClick={toggleAuth}>LogIn</button> 
    </div>
    
  )
}

export default LogIn