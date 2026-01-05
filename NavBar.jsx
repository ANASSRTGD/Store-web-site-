import React, { useState } from 'react'

export default function NavBar({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavigate = (page) => {
    onNavigate(page)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="navbar" role="banner">
      <div className="nav-inner container">
        <div className="brand" onClick={() => handleNavigate('home')} role="button" tabIndex={0} aria-label="العودة إلى الصفحة الرئيسية">
          <span className="logo">🛍️</span>
          <div className="brand-text">
            <h1>MAIRIE SHOP</h1>
            <p className="tagline">ملابس قطنية نسائية بجودة عالية</p>
          </div>
        </div>

        <nav className={`nav-links ${mobileOpen ? 'open' : ''}`} role="navigation" aria-label="روابط الموقع">
          <button type="button" className={currentPage === 'home' ? 'active' : ''} onClick={() => handleNavigate('home')}>الرئيسية</button>
          <button type="button" className={currentPage === 'shop' ? 'active' : ''} onClick={() => handleNavigate('shop')}>المتجر</button>
          <button type="button" className={currentPage === 'about' ? 'active' : ''} onClick={() => handleNavigate('about')}>من نحن</button>
          <button type="button" className={currentPage === 'contact' ? 'active' : ''} onClick={() => handleNavigate('contact')}>تواصل معنا</button>
        </nav>

        <div className="nav-actions">
          <a className="whatsapp" href="https://wa.me/212765579644" target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب">📞 واتساب</a>
          <button className="hamburger" onClick={() => setMobileOpen(v => !v)} aria-label="قائمة التنقل">
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>
    </header>
  )
}