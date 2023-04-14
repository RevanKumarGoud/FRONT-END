import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <a className="navbar-brand" href="#q">CardDev</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href='/Home'>HOME</a>
    </li>
    <li className="nav-item">
    <a className="nav-link " href='/Singup'> Singup</a>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Navbar
