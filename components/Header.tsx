
'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleString('zh-CN'));
    };
    
    // 立即更新一次
    updateTime();
    
    // 每秒更新时间
    const timer = setInterval(updateTime, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-[#0F1C2D] border-b border-[#FF6B35]/20 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 flex items-center justify-center">
            <i className="ri-radar-line text-2xl text-[#FF6B35]"></i>
          </div>
          <h1 className="text-xl font-bold text-white">四足机器人智能巡检系统</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-3 h-3 bg-[#00FF7F] rounded-full animate-pulse"></div>
            <span className="text-[#00FF7F]">系统正常</span>
          </div>
          
          <div className="text-sm text-gray-400">
            <span suppressHydrationWarning={true}>
              {currentTime || '2025/8/18 12:05:56'}
            </span>
          </div>
          
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF6B35]/20 hover:bg-[#FF6B35]/30 transition-colors cursor-pointer">
            <i className="ri-notification-3-line text-[#FF6B35]"></i>
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
            <i className="ri-user-line text-white"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
