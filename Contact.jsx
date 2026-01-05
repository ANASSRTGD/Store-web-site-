import React from 'react'

export default function Contact() {
  const whatsappNumber = '212765579644'
  return (
    <section className="container page">
      <h2>تواصل معنا</h2>
      <p>للطلب أو الاستفسار راسلنا مباشرة عبر واتساب أو اتصل:</p>
      <ul>
        <li>واتساب: <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">+212 765 579 644</a></li>
        <li>أوقات العمل: كل أيام الأسبوع (9 صباحاً - 8 مساءً)</li>
      </ul>
    </section>
  )
}