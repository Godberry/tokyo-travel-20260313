import React from 'react';
import PixelCard from '../../components/PixelCard';

export default function Day5Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full text-center space-y-12 animate-fade-in pb-12">
      
      {/* Title Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-press-start text-primary leading-snug" style={{ textShadow: '3px 3px 0px #EC4899' }}>
          DAY 5: 最終 <br/> \ 啟程
        </h1>
        <p className="text-lg sm:text-xl font-vt323 text-secondary tracking-widest bg-yellow-100 p-2 inline-block border-2 border-primary">
          [ 任務 ]: 巢鴨咖啡、神社 Buff、最後的搜刮 & 準備前往機場。
        </p>
      </div>

      <div className="w-full max-w-4xl text-left space-y-8">
        
        {/* Checkpoint 1 */}
        <PixelCard className="relative bg-gray-50 border-secondary">
          <div className="absolute top-[-15px] left-4 bg-secondary text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            08:30 - 09:00
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🏨 退房</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>退房並將行李寄放在旅館。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 2 */}
        <PixelCard className="relative bg-blue-50 border-blue-500">
          <div className="absolute top-[-15px] left-4 bg-blue-500 text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            09:20 - 10:15
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">☕ 早餐：伯爵咖啡 (巢鴨)</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>交通：步行 8 分鐘至池袋站 ➜ 搭乘山手線至巢鴨。</li>
            <li>在復古的昭和風咖啡廳享用早餐。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 3 */}
        <PixelCard className="relative bg-red-50 border-red-500">
          <div className="absolute top-[-15px] left-4 bg-red-500 text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            10:15 - 11:15
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">⛩️ 妙義神社 Buff</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>步行至駒込站。</li>
            <li>祈求「勝負運」並購買御守。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 4 */}
        <PixelCard className="relative border-4 border-yellow-500 shadow-[6px_6px_0_0_#eab308]">
          <div className="absolute top-[-15px] left-4 bg-yellow-500 text-black font-press-start text-xs px-2 py-1 border-2 border-primary">
            11:30 - 16:15
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🛍️ 池袋最後的搜刮</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
             <li><strong>寶可夢中心 Mega Tokyo</strong> (Sunshine City Alpa 2F)</li>
             <li><strong>陽光水族館</strong> (Sunshine City 頂樓)</li>
             <li><strong>唐吉訶德</strong> <a href="https://maps.app.goo.gl/1rw93Dxeva5VXMJ59" target="_blank" rel="noreferrer" className="underline hover:text-accent-pink">(藥水與美妝)</a></li>
             <li><strong>Bic Camera</strong> <a href="https://maps.app.goo.gl/xYREm56JYbqh3MtZA" target="_blank" rel="noreferrer" className="underline hover:text-accent-pink">(電子裝備)</a></li>
             <li><strong>Animate</strong> <a href="https://maps.app.goo.gl/bzjZDoC3pd6bAVSL8" target="_blank" rel="noreferrer" className="underline hover:text-accent-pink">(動漫周邊)</a></li>
          </ul>
        </PixelCard>

        {/* Checkpoint 5 */}
        <PixelCard className="relative bg-black text-white border-accent-pink shadow-[6px_6px_0_0_#A8326D]">
           <div className="absolute top-[-15px] left-4 bg-accent-pink text-white font-press-start text-xs px-2 py-1 border-2 border-white">
            16:50 - 18:00
          </div>
          <h2 className="text-xl font-press-start mb-4 mt-2">✈️ 前往機場的路線</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2">
            <li>領取行李，出發前往成田機場 (約 1 小時 10 分鐘)。</li>
            <li><strong className="text-accent-pink">路線 1:</strong> 搭乘山手線至日暮里 ➜ 轉 Skyliner。</li>
            <li><strong className="text-accent-pink">路線 2:</strong> 搭乘 Uber 至上野/日暮里 ➜ 轉 Skyliner。</li>
          </ul>
        </PixelCard>

         {/* Checkpoint 6 */}
         <PixelCard className="relative flex justify-center items-center bg-gray-200">
           <div className="text-center">
             <h2 className="text-2xl font-press-start text-primary my-4 mb-2">🎉 任務完成 🎉</h2>
             <p className="font-vt323 text-xl text-secondary">平安返回台北！</p>
          </div>
        </PixelCard>

      </div>
    </div>
  );
}
