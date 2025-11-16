import './Footer.css'

function Footer() {

  return (
    <>
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3 className="footer-logo">Analytica</h3>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Analytica — All Rights Reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer