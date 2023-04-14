import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, usernameupdate] = useState('');
  const [Password, Passwordupdate] = useState('');

  const usenavigate=useNavigate();

  //Login
  const ProceedLgin = (e) => {
    e.preventDefault();
    if (validate()) {
        ///implentation
        // console.log('proceed');
        fetch("http://localhost:8000/user/"+ username).then((res) => {
            return res.json();
        }).then((resp) => {
            //console.log(resp)
            if (Object.keys(resp).length === 0) {
                toast.error('Please Enter valid username');
            } else {
                if (resp.Password === Password) {
                    toast.success('Success');
                    usenavigate('/home')
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
    if (username === '' || username === null) {
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
          <label>
          <span className="errmsg"><i className="bi bi-person"></i></span>
          </label>
          <input type="text"  className='form-control' value={username} onChange={e => usernameupdate(e.target.value)} placeholder="Enter UserId@.com" />
        </div>
        <div className="form-group">
          <label>
          <span className="errmsg"><i className="bi bi-key"></i></span>
          </label>
          <input type="Password" className='form-control' value={Password} onChange={e => Passwordupdate(e.target.value)} placeholder="Enter password"/>
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
