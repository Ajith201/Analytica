import React from "react";
import './Header.css'
function Header(){
return(
    <header className="header">
      <div className="logo">
        <a href="/">Analytica</a>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/pipelines">Pipelines</a></li>
          <li><a href="/analytics">Dashoboards</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      </nav>
    </header>
)
}

export default Header