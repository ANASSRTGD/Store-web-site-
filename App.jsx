import React, { useState } from 'react'
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";
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
        function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
