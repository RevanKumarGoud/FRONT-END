import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  const [id,idchange]     =  useState("")
  const [name, namechange] = useState("");
  const [phone, phonechange] = useState("");
  // const [email, emailchange] = useState("");
  const [GitHub, Githubchange] = useState("");
  const [Linkdin, Linkdinchange] = useState("");
  const [Fb, Fbchange] = useState("");
  const [Password, passwordchange] = useState("");

  const navigate = useNavigate();

  const IsValidater = () => {
    let isProced = true;
    let errormessage = "Plese enter the value in";
    if (id === null || idchange === "") {
      isProced = false;
      errormessage += "Please Enter Full name, ";
    }
    if (name === null || name === "") {
      isProced = false;
      errormessage += "Please Enter Full name, ";
    }
    if (Password === null || Password === "") {
      isProced = false;
      errormessage += "Enter Password, ";
    }
    // if (email === null || email === "") {
    //   isProced = false;
    //   errormessage += "Please Check Mail, ";
    // }
    if (Linkdin === null || Linkdin === "") {
      isProced = false;
      errormessage += "Please check your Url, ";
    }
    if (GitHub === null || GitHub === "") {
      isProced = false;
      errormessage += "Please Check GitHub url, ";
    }
    if (Fb === null || Fb === "") {
      isProced = false;
      errormessage += "Please Check Fb url, ";
    }
    if (!isProced) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(id)) {
      } else {
        isProced = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isProced;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regObj = { id, name, phone,  GitHub, Linkdin, Fb, Password };
    if (IsValidater()) {
      // console.log(regObj);
      fetch("http://localhost:8000/User", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/");
        })
        .catch((err) => {
          toast.error("failed: " + err.message);
        });
    }
  };
  return (
    <div className="change">
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
      <div className="offset-sm-3 col-sm-6">
        <form className="container " onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>Register Application</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <div className="form-group">
                      <label>
                     <span className="errmsg"><i className="bi bi-envelope-fill"></i></span>
                      </label>
                      <input
                      type="email"
                        value={id}
                        onChange={(e) => idchange(e.target.value)}
                        className="form-control"
                        placeholder="Enter UserId@.com"
                      ></input>
                    </div>
                    <label>
                      <span>
                        <i className="bi bi-person"></i>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                      placeholder="Enter Full Name"
                    ></input>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      <span>
                        <i className="bi bi-envelope-fill"></i>
                      </span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Enter GMail@.com"
                    ></input>
                  </div>
                </div> */}
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      <span>
                        <i className="bi bi-telephone mt-5"></i>
                      </span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                      type="tel"
                      className="form-control mt-5"
                      placeholder="Enter Mobile Number"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      <span>
                        <i className="bi bi-github"></i>
                      </span>
                    </label>
                    <input
                      value={GitHub}
                      onChange={(e) => Githubchange(e.target.value)}
                      type="url"
                      className="form-control icon"
                      placeholder="Enter GitHub UserName"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      <span className="errmsg">
                        <i className="bi bi-linkedin"></i>
                      </span>
                    </label>
                    <input
                      value={Linkdin}
                      onChange={(e) => Linkdinchange(e.target.value)}
                      type="url"
                      className="form-control"
                      placeholder="Enter Linkdin UserName"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      <span className="errmsg">
                        <i className="bi bi-twitter"></i>
                      </span>
                    </label>
                    <input
                      value={Fb}
                      onChange={(e) => Fbchange(e.target.value)}
                      type="url"
                      className="form-control"
                      placeholder="Enter Twiter UserName"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      <span><i className="bi bi-key"></i></span>
                    </label>
                    <input
                      value={Password}
                      onChange={(e) => passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary m-3">
                Register
              </button>
              <Link to={"/login"} className="btn btn-danger">
                close
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
