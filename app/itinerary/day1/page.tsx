import React from 'react';
import Link from 'next/link';
import PixelCard from '../../components/PixelCard';

export default function Day1Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full text-center space-y-12 animate-fade-in pb-12">
      
      {/* Title Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-press-start text-primary leading-snug" style={{ textShadow: '3px 3px 0px #EC4899' }}>
          DAY 1: 龜有 <br/> & 夜景
        </h1>
        <p className="text-lg sm:text-xl font-vt323 text-secondary tracking-widest bg-yellow-100 p-2 inline-block border-2 border-primary">
          [ 任務 ]: 集合隊伍並開始探索！
        </p>
      </div>

      <div className="w-full max-w-4xl text-left space-y-8">
        
        {/* Checkpoint 1 */}
        <PixelCard className="relative">
          <div className="absolute top-[-15px] left-4 bg-accent-pink text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            15:00 - 17:30
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">📍 龜有集合</h2>
          <p className="font-vt323 text-lg mb-4 text-secondary">隊友抵達並於龜有集合。早到的成員可以先開始探索附近區域！</p>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li><strong>任務資訊:</strong> 探索烏龍派出所地標。</li>
            <li><strong>交通:</strong> 成田/羽田機場 ➜ 龜有 (參考交通指南)。</li>
            <li><strong>裝備:</strong> 龜有北口或 Ario 購物中心有投幣式置物櫃。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 2 */}
        <PixelCard className="relative bg-gray-50 border-secondary">
          <div className="absolute top-[-15px] left-4 bg-secondary text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            17:30 - 18:30
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🚇 前往池袋</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>取回裝備，準備搭乘電車。</li>
            <li><span className="bg-primary text-background px-1">路線:</span> 龜有 (千代田線) ➜ 西日暮里 (轉車) ➜ 山手線 ➜ 池袋</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 3 */}
        <PixelCard className="relative">
          <div className="absolute top-[-15px] left-4 bg-accent-pink text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            18:30 - 19:30
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🏨 據點資訊</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>池袋住宿 Check-in 並放置裝備。</li>
            <li><strong>地點:</strong> <Link href="/preparation/accommodation" className="underline hover:text-accent-pink">池袋住宿詳情</Link></li>
            <li><span className="text-red-500">注意:</span> 附近只有便利商店，沒有大型超市。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 4 */}
        <PixelCard className="relative bg-orange-50 border-orange-400">
           <div className="absolute top-[-15px] left-4 bg-orange-400 text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            19:30 - 21:30
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🍜 恢復 HP: 無敵家拉麵</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>排隊品嚐池袋傳說中的濃郁豚骨拉麵！</li>
            <li><span className="text-red-500">注意:</span> 無法預約，很有可能需要排隊排很久。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 5 */}
        <PixelCard className="relative bg-purple-50 border-purple-400">
          <div className="absolute top-[-15px] left-4 bg-purple-400 text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            21:30 - 23:30
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🥂 自由探索 / 賞夜景</h2>
          <p className="font-vt323 text-lg mb-4 text-secondary">根據剩餘體力選擇你的路線：</p>
          <ul className="list-none font-vt323 text-lg space-y-3 text-primary">
            <li className="flex items-start"><span className="mr-2 text-accent-pink">▶</span> <strong>路線 A:</strong> Bar Panorama 高空夜景 (建議預約)。</li>
            <li className="flex items-start"><span className="mr-2 text-accent-pink">▶</span> <strong>路線 B:</strong> 街道探索，隨機尋找居酒屋。</li>
            <li className="flex items-start"><span className="mr-2 text-accent-pink">▶</span> <strong>路線 C:</strong> 前往 <a href="https://maps.app.goo.gl/f1AdNK4qUc6zXNNd6" target="_blank" rel="noreferrer" className="underline hover:text-accent-pink">唐吉訶德</a> 購買藥水與道具，然後回旅館休息。</li>
          </ul>
        </PixelCard>

         {/* Checkpoint 6 */}
         <PixelCard className="relative flex justify-center items-center bg-gray-200">
          <h2 className="text-xl font-press-start text-secondary my-4">💤 遊戲存檔 - 在旅館休息</h2>
        </PixelCard>

      </div>
    </div>
  );
}
