import axios from 'axios'
import React,{useState} from 'react'
import "./login.css"
//import { useState } from "react"
import {useHistory} from "react-router-dom"

const Login=({setLoginUser})=> {
    const history=useHistory()
    const [user,setUser]=useState({
        // name:" ",
        email:" ",
        password:"",
        // reEnterPassword:""
    })
    const handleChange=e=>{
        const {name,value}=e.target
        setUser({
            ...user,[name]:value
        })
    }
    const login=()=>{
        axios.post("http://localhost:9002/login",user)
        .then(res=>alert(res.data.message))
        setLoginUser(res.data.user)
        history.push("/")

    }
  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} placeholder="Enter your Email"onChange={handleChange}></input>
<input type="password"  name="password" value={user.password
} placeholder='Enter your password'onChange={handleChange}></input>
<div className='button' onChange={login}>Login</div>
<div>OR</div>
<div className='button' onClick={()=>history.push("/register")}>Register</div>

    </div>
  )
}

export default Login