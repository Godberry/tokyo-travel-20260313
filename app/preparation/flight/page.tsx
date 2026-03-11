import React from 'react';

export default function FlightPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.6' }}>
      <h1>航班資訊</h1>

      <section style={{ marginBottom: '30px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px', marginTop: 0 }}>✈️ 書孟、玥玥、晨宜、明訓</h2>
        
        <h3>去程</h3>
        <ul>
          <li><strong>日期</strong>：2026-03-13 (五)</li>
          <li><strong>航班</strong>：長榮航空 BR192</li>
          <li><strong>出發</strong>：07:15 松山機場 (TSA)</li>
          <li><strong>抵達</strong>：11:00 羽田機場 (HND)</li>
        </ul>

        <h3>回程</h3>
        <ul>
          <li><strong>日期</strong>：2026-03-17 (二)</li>
          <li><strong>航班</strong>：長榮航空 BR195</li>
          <li><strong>出發</strong>：20:20 成田機場 (NRT)</li>
          <li><strong>抵達</strong>：23:25 桃園國際機場 (TPE)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px', marginTop: 0 }}>✈️ 草莓、于真</h2>
        
        <h3>去程</h3>
        <ul>
          <li><strong>日期</strong>：2026-03-13 (五)</li>
          <li><strong>航班</strong>：台灣虎航 IT200</li>
          <li><strong>出發</strong>：06:35 桃園國際機場 (TPE) - 第一航廈 (Terminal 1)</li>
          <li><strong>抵達</strong>：10:35 東京成田機場 (NRT) - 第二航廈 (Terminal 2)</li>
        </ul>

        <h3>回程</h3>
        <ul>
          <li><strong>日期</strong>：2026-03-17 (二)</li>
          <li><strong>航班</strong>：台灣虎航 IT203 (tigerlight)</li>
          <li><strong>出發</strong>：20:25 東京成田機場 (NRT) - 第二航廈 (Terminal 2)</li>
          <li><strong>抵達</strong>：23:30 桃園國際機場 (TPE) - 第一航廈 (Terminal 1)</li>
        </ul>
      </section>
    </div>
  );
}
