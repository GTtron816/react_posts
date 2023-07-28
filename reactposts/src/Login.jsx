import React from 'react';
import LoginForm from './LoginForm';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'

export default function Login() {
  return (
    <>
      <div className="row row-cols-5"  >
      
         <div className="col" style={{margin: 20+'px'}}  >
        <LoginForm />
        </div>
    
   </div>

  

     
    </>
  );
}
