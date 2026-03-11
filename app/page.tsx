import Link from 'next/link';
import React from 'react';
import PixelCard from './components/PixelCard';
import RetroButton from './components/RetroButton';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-12">
      
      {/* Hero Section / Title Screen */}
      <div className="space-y-6 animate-pulse">
        <h1 className="text-4xl sm:text-6xl font-press-start text-primary" style={{ textShadow: '4px 4px 0px #EC4899' }}>
          TOKYO 2026
        </h1>
        <p className="text-xl sm:text-2xl font-vt323 text-secondary tracking-widest">
          ~ 終極探索 ~
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
         <Link href="/itinerary/day1">
            <RetroButton variant="accent" className="animate-bounce">
              ▶ 開始遊戲
            </RetroButton>
         </Link>
      </div>

      {/* Quest Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-12 text-left">
        
        <PixelCard>
          <h2 className="text-xl font-press-start mb-4 text-accent-pink border-b-4 border-dotted border-primary pb-2">
            [ 玩家資訊 ]
          </h2>
          <ul className="space-y-3 font-vt323 text-lg">
            <li><span className="text-secondary opacity-70">隊伍人數:</span> 6 人</li>
            <li><span className="text-secondary opacity-70">日期:</span> 2026/03/13 - 03/17</li>
            <li><span className="text-secondary opacity-70">據點:</span> <Link href="/preparation/accommodation" className="underline hover:text-accent-pink">池袋</Link></li>
          </ul>
        </PixelCard>

        <PixelCard>
          <h2 className="text-xl font-press-start mb-4 text-accent-pink border-b-4 border-dotted border-primary pb-2">
            [ 關卡選擇 ]
          </h2>
          <ul className="space-y-3 font-vt323 text-lg">
            <li><Link href="/itinerary/day1" className="hover:text-accent-pink hover:bg-black hover:text-white px-1">LVL 1: 龜有 & 夜景</Link></li>
            <li><Link href="/itinerary/day2" className="hover:text-accent-pink hover:bg-black hover:text-white px-1">LVL 2: 淺草雷門</Link></li>
            <li><Link href="/itinerary/day3" className="hover:text-accent-pink hover:bg-black hover:text-white px-1">LVL 3: 富士山 & 箱根</Link></li>
            <li><Link href="/itinerary/day4" className="hover:text-accent-pink hover:bg-black hover:text-white px-1">LVL 4: 自由探索</Link></li>
            <li><Link href="/itinerary/day5" className="hover:text-accent-pink hover:bg-black hover:text-white px-1">LVL 5: 巢鴨 & 最終魔王</Link></li>
          </ul>
        </PixelCard>

      </div>
    </div>
  );
}
