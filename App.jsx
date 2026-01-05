import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="app" dir="rtl">
      <NavBar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="container" role="main">
        {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
        {currentPage === 'shop' && <Shop />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}