import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



const Singup = () => {
  const [name, namechange] = useState("");
  const [phone, phonechange] = useState("");
  const [mail, mailchange] = useState("");
  const [GitHub, Githubchange] = useState("");
  const [Linkdin, Linkdinchange] = useState("");
  const [Fb, Fbchange] = useState("");
  const [Password, passwordchange] = useState("");



  const IsValidater = () => {
    let isProced = true;
    let errormessage = "Plese enter the value in";
    if (name === null || name === "") {
      isProced = false;
      errormessage += "Please Enter Full name, ";
    }
    if (Password === null || Password === "") {
      isProced = false;
      errormessage += "Enter Password, ";
    }
    if (mail === null || mail === "") {
      isProced = false;
      errormessage += "Please Check Mail, ";
    }
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
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(mail)) {
      } else {
        isProced = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isProced;
  };


  const handlesubmit = (e) => {
    if(IsValidater()){
    e.preventDefault();
    let regobj = { name,phone,mail,GitHub,Linkdin,Fb,Password}
    console.log(regobj);
    fetch("http://localhost:8000/Users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
        })
        .catch((err) => {
          toast.error("failed: " + err.message);
        });
    }
  }


  return (
    <div>
       <div className=" col-sm-6 page w-75">
        <form className="container " onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-title">
              <h1>Register Application</h1>
            </div>
            <div className="card-body">
              <div className="">

                <div className="col-sm-4">
                  <div className="form-group">
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
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>
                      <span>
                        <i className="bi bi-envelope-fill"></i>
                      </span>
                    </label>
                    <input
                      value={mail}
                      onChange={(e) => mailchange(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Enter GMail@.com"
                    ></input>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>
                      <span>
                        <i className="bi bi-telephone"></i>
                      </span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                      type="tel"
                      className="form-control"
                      placeholder="Enter Mobile Number"
                    ></input>
                  </div>
                </div>
                <div className="col-sm-4">
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
                <div className="col-sm-4">
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
                <div className="col-sm-4">
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
                <div className="col-sm-4">
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
            <div className="side">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="" width={500} />
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary m-3">
                Register
              </button>
              {/* <Link to={"/login"} className="btn btn-danger">
                close
              </Link> */}
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Singup
