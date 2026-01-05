import React from 'react'

export default function ProductCard({ product, onOrder }) {
  const formattedPrice = `${product.price} DH`

  const whatsappNumber = '212765579644'
  const whatsappMessage = `السلام عليكم، أريد طلب: ${product.name} - السعر: ${product.price} DH`

  return (
    <article className="card" aria-labelledby={`title-${product.id}`}>
      <img src={product.image} alt={product.name} className="card-image" loading="lazy" />
      <div className="card-body">
        <h3 id={`title-${product.id}`}>{product.name}</h3>
        <p className="muted">{product.description}</p>
        <div className="card-footer">
          <strong className="price">{formattedPrice}</strong>
          <div className="actions">
            <a
              className="btn btn-outline"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`اطلب ${product.name} عبر واتساب`}
            >
              اطلب عبر واتساب
            </a>
            <button type="button" className="btn" onClick={() => onOrder(product)}>تفاصيل</button>
          </div>
        </div>
      </div>
    </article>
  )
}