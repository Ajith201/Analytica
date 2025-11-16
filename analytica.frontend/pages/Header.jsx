import './Header.css'

function Header() {

  return (
    <>
    <header className="header">
      <div className="logo">Analytica</div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>

      <div className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    </>
  )
}

export default Header