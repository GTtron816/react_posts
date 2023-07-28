import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
export default function Addpost(){
    const location =useLocation();
    const userId=location.state.id;
    const [title, setTitle]= useState("")
    const [content, setContent]= useState("")
    const[publised,setPublished]=useState("True")
    function HandleSubmit(e){
        e.preventDefault()
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "userid": userId,
  "title": title,
  "content": content,
  "published": publised
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/posts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
      } 

return( 
<>
<h1 style={{marginLeft: 100+'px',}}>Add Post</h1>
      <form onSubmit={HandleSubmit} style={{margin: 100+'px'}}>
    
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" id="title" name="title"/>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea className="form-control" value={content} onChange={e => setContent(e.target.value)} id="content" name="content"></textarea>
        </div>
      
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
   
      </>
);

}


