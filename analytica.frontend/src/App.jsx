import './App.css'
import Home from '../pages/Home.jsx'
import Header from '../pages/Header.jsx'
import Footer from '../pages/Footer.jsx'
import SideBar from '../pages/SideBar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Header />
      <SideBar/>
      <div className="main-content"> {/* Optional: Add styling for content area */}
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  )
}

export default App
