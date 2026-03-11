import React from 'react';
import PixelCard from '../../components/PixelCard';

export default function Day2Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full text-center space-y-12 animate-fade-in pb-12">
      
      {/* Title Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-press-start text-primary leading-snug" style={{ textShadow: '3px 3px 0px #EC4899' }}>
          DAY 2: 淺草雷門 <br/> \ 寺廟參拜
        </h1>
        <p className="text-lg sm:text-xl font-vt323 text-secondary tracking-widest bg-yellow-100 p-2 inline-block border-2 border-primary">
          [ 任務 ]: 探索淺草並品嚐當地小吃。
        </p>
      </div>

      <div className="w-full max-w-4xl text-left space-y-8">
        
        {/* Checkpoint 1 */}
        <PixelCard className="relative bg-gray-50 border-secondary">
          <div className="absolute top-[-15px] left-4 bg-secondary text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            09:00 - 10:00
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🏨 HP 恢復！起床</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>起床，為今天的冒險做準備。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 2 */}
        <PixelCard className="relative bg-gray-50 border-secondary">
          <div className="absolute top-[-15px] left-4 bg-secondary text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            10:00 - 11:00
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🚇 前往淺草</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>從池袋出發。車程約 40 分鐘。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 3 */}
        <PixelCard className="relative">
          <div className="absolute top-[-15px] left-4 bg-accent-pink text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            11:00 - 12:00
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">👘 抵達 & 裝備盔甲？</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>抵達淺草。隊伍需討論是否要租借並換上和服裝備！</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 4 */}
        <PixelCard className="relative border-4 border-red-500 shadow-[6px_6px_0_0_#ef4444]">
          <div className="absolute top-[-15px] left-4 bg-red-500 text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            12:00 - 17:30
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🏮 主線任務: 淺草探索</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li><strong>午餐 / 道具:</strong> 在仲見世通商店街邊吃邊逛。</li>
            <li><strong>地標:</strong> 在雷門拍照、於淺草寺參拜，欣賞五重塔。</li>
          </ul>
        </PixelCard>

        {/* Checkpoint 5 */}
        <PixelCard className="relative bg-orange-50 border-orange-400">
           <div className="absolute top-[-15px] left-4 bg-orange-400 text-white font-press-start text-xs px-2 py-1 border-2 border-primary">
            18:00 - 20:00
          </div>
          <h2 className="text-xl font-press-start text-primary mb-4 mt-2">🍳 恢復 HP: 文字燒</h2>
          <ul className="list-disc list-inside font-vt323 text-lg space-y-2 text-primary">
            <li>晚餐：豚骨文字燒 粉魔 (淺草店)</li>
            <li><strong>任務資訊:</strong> 淺草 豚骨文字燒 粉魔 (KONAMAMIRE)</li>
          </ul>
        </PixelCard>

         {/* Checkpoint 6 */}
         <PixelCard className="relative flex justify-center items-center bg-gray-200">
          <h2 className="text-xl font-press-start text-secondary my-4">💤 遊戲存檔 - 返回池袋</h2>
        </PixelCard>

      </div>
    </div>
  );
}
