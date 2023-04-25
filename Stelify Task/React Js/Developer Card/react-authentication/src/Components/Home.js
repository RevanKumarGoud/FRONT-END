import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import  './Home.css';

function Home() {
  const [User,  setUser] = useState([])
  useEffect(() =>{
    axios.get("http://localhost:8000/User").then(res =>{
      // console.log(res)
      setUser(res.data)
    }).catch(err =>{
      console.log(err)
    })
  })


  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <a className="navbar-brand" href="#q">CardDev</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="/home">HOME</a>
    </li>
    <li className="nav-item">
    <Link className="nav-link"  to={'/'}>LogOut</Link>
    </li>
  </ul>
</nav>
      </div>
      <div className='row'>
          {User.map(post => (
          <div className="col-sm-5">
             <div className='card'> 
           <div className='card-heder' key={post.id}>
             <div className='cad-tittle'><h5 className='text-center text-bg-success'>User Detailes</h5></div>
             <div className='card-body'>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147133.png" alt=""  width={100} className='float-end'/>
              <p>Username :  <span>{post.name}</span></p>
              <p>UserMail : <a href="mailto:{post.mail}" target='-blanck' className='text-black'>{post.mail}</a></p>
              <p>mobile number : <span>{post.phone}</span></p>
              <div className='move'>
              <Link to={post.GitHub} target='-blanck' className='nav-link'><i className='bi bi-github'></i></Link>
              <Link to={post.Linkdin} target='-blanck' className='icons'><i className='bi bi-linkedin'></i></Link>
              <Link to={post.Fb} target='-blanck' className='icons'><i className='bi bi-twitter'></i></Link>
              </div>
             </div>
           </div>
           </div>
          </div>
        ))}
       
      </div>
      
    </div>
  )
}

export default Home
