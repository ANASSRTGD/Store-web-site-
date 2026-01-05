import React from 'react'
import products from '../data/products'

export default function Home({ onNavigate }) {
  const top = products.slice(0, 3)
  return (
    <section className="home-hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h2>مرحبا بكم في MAIRIE SHOP</h2>
          <p className="lead">ملابس قطنية نسائية بجودة عالية — راحة وأناقة لكل يوم.</p>
          <div className="hero-actions">
            <button className="btn" onClick={() => onNavigate('shop')}>تسوّق الآن</button>
            <a className="btn btn-outline" href="https://wa.me/212765579644" target="_blank" rel="noopener noreferrer">اطلب عبر واتساب</a>
          </div>
        </div>

        <div className="hero-cards">
          {top.map(p => (
            <div className="mini-card" key={p.id}>
              <img src={p.image} alt={p.name} loading="lazy" />
              <div className="mini-info">
                <h4>{p.name}</h4>
                <span className="price">{p.price} DH</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}