
'use client';

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

export default function Sidebar({ activeModule, setActiveModule }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: '总览仪表板', icon: 'ri-dashboard-3-line' },
    { id: 'robot', label: '机械狗控制台', icon: 'ri-robot-line' },
    { id: 'excavation', label: '超欠挖监测', icon: 'ri-ruler-2-line' },
    { id: 'defect', label: '衬砌缺陷识别', icon: 'ri-bug-line' },
    { id: 'safety', label: '安全预警中心', icon: 'ri-alarm-warning-line' },
    { id: 'hardware', label: '硬件状态监控', icon: 'ri-server-line' },
  ];

  return (
    <aside className="w-64 bg-[#1A2332] border-r border-[#FF6B35]/10 p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all cursor-pointer whitespace-nowrap ${
              activeModule === item.id
                ? 'bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]/30'
                : 'text-gray-400 hover:text-white hover:bg-[#2A3441]'
            }`}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className={`${item.icon} text-lg`}></i>
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="mt-8 p-4 bg-[#2A3441] rounded-lg">
        <h3 className="text-sm font-medium text-gray-300 mb-3">系统状态</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">CPU使用率</span>
            <span className="text-[#00FF7F]">45%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div className="bg-[#00FF7F] h-1 rounded-full" style={{ width: '45%' }}></div>
          </div>
          
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">内存使用</span>
            <span className="text-[#FFD166]">72%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div className="bg-[#FFD166] h-1 rounded-full" style={{ width: '72%' }}></div>
          </div>
          
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">网络流量</span>
            <span className="text-[#FF6B35]">128MB/s</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div className="bg-[#FF6B35] h-1 rounded-full" style={{ width: '65%' }}></div>
          </div>
          
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">磁盘使用</span>
            <span className="text-[#9CA3AF]">38%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div className="bg-[#9CA3AF] h-1 rounded-full" style={{ width: '38%' }}></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
