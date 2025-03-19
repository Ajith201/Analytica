import React from "react";
import './Footer.css'

function Footer(){
    return(
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Analytica. All rights reserved.</p>
        <nav className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
    </footer>
    )
}

export default Footer