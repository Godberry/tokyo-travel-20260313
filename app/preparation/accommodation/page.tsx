import React from 'react';

export default function AccommodationPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.6' }}>
      <h1>住宿 - 池袋</h1>

      <div style={{ backgroundColor: '#eef5f9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #005a9c' }}>
        <h3 style={{ marginTop: 0, color: '#005a9c' }}>🏠 池袋 Airbnb 住宿資訊</h3>
        <p>由於 Airbnb 官方具有安全性限制（禁止外部網站任意內嵌），無法直接在網頁中預覽。</p>
        
        <p>👉 <strong><a href="https://www.airbnb.com.tw/rooms/877472607787204984" target="_blank" rel="noreferrer" style={{ color: '#005a9c' }}>點擊此處前往 Airbnb 查看房源與預訂資訊</a></strong></p>
        
        <p>🧾 <strong><a href="https://www.airbnb.com/l/tJVV9VbZ" target="_blank" rel="noreferrer" style={{ color: '#005a9c' }}>點擊此處查看 Airbnb 訂單紀錄</a></strong></p>
      </div>
    </div>
  );
}
