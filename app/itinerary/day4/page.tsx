import React from 'react';
import PixelCard from '../../components/PixelCard';

export default function Day4Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full text-center space-y-12 animate-fade-in pb-12">
      
      {/* Title Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-press-start text-primary leading-snug" style={{ textShadow: '3px 3px 0px #EC4899' }}>
          DAY 4: 自由 <br/> 探索
        </h1>
        <p className="text-lg sm:text-xl font-vt323 text-secondary tracking-widest bg-yellow-100 p-2 inline-block border-2 border-primary">
          [ 任務 ]: 在東京選擇你的冒險！
        </p>
      </div>

      <div className="w-full max-w-4xl text-left space-y-8">
        
        {/* Checkpoint 1 */}
        <PixelCard className="relative">
          <div className="absolute top-[-15px] left-4 bg-accent-pink text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            ALL DAY
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🏨 開放世界模式</h2>
          <p className="font-vt323 text-lg mb-4 text-secondary">今天沒有固定行程。睡飽、自由探索、吃你想吃的、盡情購物！</p>
          
          <h3 className="font-press-start text-sm text-primary mb-2 mt-6">[ 推薦支線任務 ]</h3>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary bg-gray-50 border-2 border-secondary p-4">
            <li>🏰 東京迪士尼樂園 / 迪士尼海洋</li>
            <li>🛍️ 澀谷 / 原宿 / 表參道 購物</li>
            <li>👾 秋葉原 動漫與遊戲朝聖</li>
            <li>☕ 銀座 下午茶與精品</li>
            <li>🐼 上野公園 & 阿美橫町 伴手禮尋寶</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 2 */}
        <PixelCard className="relative bg-gray-50 border-secondary">
          <div className="absolute top-[-15px] left-4 bg-secondary text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            EVENING
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🍻 隊伍聚餐 (自由參加)</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>如果有空，晚上可以約吃飯分享戰利品與一天的冒險故事！</li>
          </ul>
        </PixelCard>

      </div>
    </div>
  );
}
