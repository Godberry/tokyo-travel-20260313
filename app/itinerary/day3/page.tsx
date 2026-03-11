import React from 'react';
import PixelCard from '../../components/PixelCard';

export default function Day3Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full text-center space-y-12 animate-fade-in pb-12">
      
      {/* Title Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-press-start text-primary leading-snug" style={{ textShadow: '3px 3px 0px #EC4899' }}>
          DAY 3: 富士山 <br/> & 箱根
        </h1>
        <p className="text-lg sm:text-xl font-vt323 text-secondary tracking-widest bg-yellow-100 p-2 inline-block border-2 border-primary">
          [ 任務 ]: KKday 富士山箱根一日遊。
        </p>
      </div>

      <div className="w-full max-w-4xl text-left space-y-8">
        
        {/* Checkpoint 1 */}
        <PixelCard className="relative bg-gray-50 border-secondary">
          <div className="absolute top-[-15px] left-4 bg-secondary text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            07:00 - 08:30
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">📍 集合 (選擇你的傳送點)</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li><strong>07:00 - 08:30:</strong> 東京藍線內飯店接送 (僅限指定方案)。</li>
            <li><strong>07:50:</strong> JR 東京站集合 (新丸之內大廈前 BEAMS 招牌下)。08:00 準時出發。</li>
            <li><strong>08:20:</strong> 東京 MODE 學園集合 (新宿西口)。08:30 準時出發。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 2 */}
        <PixelCard className="relative">
          <div className="absolute top-[-15px] left-4 bg-accent-pink text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            10:30 - 11:30
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">⛩️ 箱根神社 & 蘆之湖</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>探索約 60 分鐘。在水上鳥居拍照，感受神聖氣息。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 3 */}
        <PixelCard className="relative bg-blue-50 border-blue-400">
          <div className="absolute top-[-15px] left-4 bg-blue-400 text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            11:30 - 12:00
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🚢 箱根海賊船</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>搭乘主題海賊船欣賞蘆之湖 (約 30 分鐘)。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 4 */}
        <PixelCard className="relative bg-orange-50 border-orange-400">
           <div className="absolute top-[-15px] left-4 bg-orange-400 text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            12:00 - 12:40
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🍱 午餐休息</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>約 40 分鐘。 (自理午餐)。</li>
          </ul>
        </PixelCard>
        
        {/* Checkpoint 5 */}
        <PixelCard className="relative">
          <div className="absolute top-[-15px] left-4 bg-accent-pink text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            12:40 - 14:10
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🌋 大涌谷</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>搭乘箱根空中纜車，觀賞火山地熱奇觀，可自費品嚐「黑玉子」。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 6 */}
        <PixelCard className="relative bg-blue-50 border-blue-400">
          <div className="absolute top-[-15px] left-4 bg-blue-400 text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            14:10 - 16:10
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🦢 山中湖 & 忍野八海</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li><strong>山中湖:</strong> 近距離觀賞富士山並尋找天鵝 (40 分鐘)。</li>
            <li><strong>忍野八海:</strong> 由富士山融雪過濾而成的 8 個清澈湧泉池 (60 分鐘)。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 7 */}
        <PixelCard className="relative bg-gray-50 border-secondary">
          <div className="absolute top-[-15px] left-4 bg-secondary text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            16:10 - 18:00+
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🚌 回程 & 休息</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>返回東京 (預計 18:00 抵達 JR 東京站 / 新宿 / 飯店)。</li>
            <li>晚餐及休息時間！</li>
          </ul>
        </PixelCard>

      </div>
    </div>
  );
}
