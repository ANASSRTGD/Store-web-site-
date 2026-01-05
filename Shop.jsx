import React, { useMemo, useState } from 'react'
import products from "./products";
import ProductCard from "./ProductCard";

export default function Shop() {
  const [filterType, setFilterType] = useState('all')
  const [filterPrice, setFilterPrice] = useState('all')
  const [query, setQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filtered = useMemo(() => {
    return productsData.filter(p => {
      if (filterType !== 'all' && p.type !== filterType) return false
      if (filterPrice === 'low' && p.price > 50) return false
      if (filterPrice === 'high' && p.price <= 50) return false
      if (query && !(`${p.name} ${p.description}`.toLowerCase().includes(query.toLowerCase()))) return false
      return true
    })
  }, [filterType, filterPrice, query])

  return (
    <section className="shop container">
      <header className="shop-header">
        <h2>المتجر</h2>
        <div className="filters">
          <input aria-label="بحث في المنتجات" placeholder="ابحث عن منتج..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} aria-label="فلتر النوع">
            <option value="all">الكل</option>
            <option value="set">طقم</option>
            <option value="bottom">بنطلون</option>
          </select>

          <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} aria-label="فلتر السعر">
            <option value="all">الكل</option>
            <option value="low">سعر منخفض (≤ 50 DH)</option>
            <option value="high">سعر عالي (&gt; 50 DH)</option>
          </select>
        </div>
      </header>

      <div className="grid">
        {filtered.length === 0 && (
          <div className="empty">لا توجد منتجات مطابقة. جرّب فلتر آخر أو أزل البحث.</div>
        )}
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} onOrder={(prod) => setSelectedProduct(prod)} />
        ))}
      </div>

      {selectedProduct && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button className="close" onClick={() => setSelectedProduct(null)} aria-label="إغلاق">✕</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p className="price">{selectedProduct.price} DH</p>
            <a className="btn" href={`https://wa.me/212765579644?text=${encodeURIComponent(`السلام عليكم، أريد طلب: ${selectedProduct.name} - السعر: ${selectedProduct.price} DH`)}`} target="_blank" rel="noopener noreferrer">اطلب عبر واتساب</a>
          </div>
        </div>
      )}
    </section>
  )
}
