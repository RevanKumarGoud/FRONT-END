import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
  const [email, emailupdate] = useState('');
  const [Password, Passwordupdate] = useState('');

  const usenavigate=useNavigate()
const api = "http://localhost:8000/User/";

  //Login
  const ProceedLgin = (e) => {
    e.preventDefault();
    if(validate()){
      fetch(api + email).then((res) => {
                return res.json();
            }).then((resp) => {
                //console.log(resp)
                if (Object.keys(resp).length === email) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.Password === Password) {
                        toast.success('Success');
                        usenavigate('/Home')
                    }else{
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
   }
   
}
const validate = () => {
  let result = true;
  if (email === '' || email === null) {
      result = false;
      toast.warning('Please Enter Username');
  }
  if (Password === '' || Password === null) {
      result = false;
      toast.warning('Please Enter Password');
  }
  return result;
}
  return (
    <div>
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <a className="navbar-brand" href="#q">NavBar</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#q">HOME</a>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to={'/register'}>Register</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link"  to={'/'}>Login</Link>
    </li>
  </ul>
</nav>
      <div className='row'> 
<div className='offset-lg-3 col-lg-6'>
  <form className='container' onSubmit={ProceedLgin}>
    <div className='card'>
      <div className='card-header'><h2>User Login</h2></div>
      <div className='card-body'>
      <div className="form-group">
        <label>User Name <span className="errmsg"></span></label>
         <input value={email} onChange={e => emailupdate(e.target.value)} className="form-control"></input>
         </div>
      <div className="form-group">
        <label>Password<span className="errmsg">*</span></label>
         <input value={Password} onChange={e => Passwordupdate(e.target.value)} className="form-control"></input>
         </div>
      </div>
      <div className='card-footer'>
        <button type='submit' className='btn btn-primary m-3'>Login</button>
        <Link className="btn btn-success bi-justify-right " to={'/register'}>New User</Link>
      </div>
    </div>
  </form>
</div>
      </div>
    </div>
  )
}

export default Login
