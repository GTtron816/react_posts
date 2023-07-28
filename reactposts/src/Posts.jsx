import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
export default function Login() {
    const navigate=useNavigate()
    const [data, setData] = useState([]);
    const location =useLocation();
    const userId=location.state.id;
    function HandleClick(e){
        e.preventDefault()
        navigate("/addpost",{state : {id : userId}})
        console.log(userId)

    } 

    useEffect(() => {
        fetch('http://127.0.0.1:8000/userposts/'+userId)
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []); 

    return(  <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" onClick={HandleClick} >Add Post</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
</nav>



        
        <div className="row row-cols-5" >
        {data.map((posts) => (
             <div className="col" style={{margin: 20+'px'}} key={posts.id}  >
            <div>
            <p className='card-text'>Post Title: {posts.title}</p>
            <p className="card-text">Created At: {posts.createdat}</p>
            <p className="card-text">Content: {posts.content}</p>
   </div> </div>
    ))}
     </div>
  
    
  
       
      </>
    
    
    
    );
}