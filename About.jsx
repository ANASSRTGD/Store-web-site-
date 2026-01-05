import React from 'react'

export default function About() {
  return (
    <section className="container page">
      <h2>من نحن</h2>
      <p>نحن متخصصون في بيع الملابس القطنية النسائية، نركّز على الجودة والراحة ومتابعة تفاصيل التصميم. هدفنا أن تشعري بالأناقة في كل يوم.</p>

      <div className="values">
        <div className="value">
          <h4>جودة</h4>
          <p>خامات قطنية مختارة بعناية.</p>
        </div>
        <div className="value">
          <h4>سعر مناسب</h4>
          <p>أسعار شفافة ومنافسة.</p>
        </div>
        <div className="value">
          <h4>خدمة سريعة</h4>
          <p>تواصل عبر واتساب وطلبات سريعة.</p>
        </div>
      </div>
    </section>
  )
}