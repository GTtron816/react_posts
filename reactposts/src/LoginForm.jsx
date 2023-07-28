import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
export default function LoginForm(){
  const navigate=useNavigate()
  

  const [email, setEmail]= useState("")
  const [pw, setpw]= useState("")
  function HandleSubmit(e){
    e.preventDefault()
    
    fetch('http://127.0.0.1:8000/users/'+email)
      .then((response) => response.json())
      .then((data) => ValidateLogin(data))
      .catch((error) => console.error('Error fetching data:', error))
      
  } 
  function ValidateLogin(logindata){
    if(logindata.email === email && pw === logindata.password){
      navigate("/posts",{state : {id : logindata.userid}})
    }
    else{
      console.log(logindata.email);
      console.log(logindata.password);
    }
  }

return(    
    <form onSubmit={HandleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} id="email" className="form-control" />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" value={pw} id="password" onChange={e => setpw(e.target.value)} className="form-control" />
    </div>
    <button type='submit' className="btn btn-primary">Login</button>
  </form>
)


}