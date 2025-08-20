
'use client';

import { useState } from 'react';

export default function RobotControlPanel() {
  const [selectedRobot, setSelectedRobot] = useState('robot-01');
  const [controlMode, setControlMode] = useState('auto');

  const robotList = [
    { id: 'robot-01', name: '机械狗#01', status: 'active', battery: 85, location: 'K125+300' },
    { id: 'robot-02', name: '机械狗#02', status: 'active', battery: 72, location: 'K125+450' },
    { id: 'robot-03', name: '机械狗#03', status: 'charging', battery: 95, location: '充电站' },
    { id: 'robot-04', name: '机械狗#04', status: 'offline', battery: 12, location: '维修中' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">机械狗控制台</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg text-sm font-medium hover:bg-[#FF6B35]/80 transition-colors cursor-pointer whitespace-nowrap">
            紧急停止
          </button>
          <button className="px-4 py-2 bg-[#2A3441] text-gray-300 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
            巡检计划
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-96">
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-white mb-4">设备列表</h3>
          <div className="flex-1 flex flex-col justify-start space-y-3 overflow-y-auto custom-scrollbar">
            {robotList.map((robot) => (
              <div
                key={robot.id}
                onClick={() => setSelectedRobot(robot.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedRobot === robot.id
                    ? 'bg-[#FF6B35]/20 border border-[#FF6B35]/30'
                    : 'bg-[#2A3441] hover:bg-[#374151]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">{robot.name}</span>
                  <span className={`inline-block w-2 h-2 rounded-full ${
                    robot.status === 'active' ? 'bg-[#00FF7F]' :
                    robot.status === 'charging' ? 'bg-[#FFD166]' : 'bg-red-500'
                  }`}></span>
                </div>
                <div className="text-sm text-gray-400">
                  <div className="flex justify-between mb-1">
                    <span>位置: {robot.location}</span>
                    <span>电量: {robot.battery}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full ${
                        robot.battery > 50 ? 'bg-[#00FF7F]' :
                        robot.battery > 20 ? 'bg-[#FFD166]' : 'bg-red-500'
                      }`}
                      style={{ width: `${robot.battery}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-white mb-4">实时视频监控</h3>
          <div className="flex-1 flex items-center justify-center">
            {/* 前置摄像头 - 全屏显示 */}
            <div className="bg-[#0F1C2D] rounded-lg border border-[#FF6B35]/10 overflow-hidden w-full h-full">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                {/* 模拟隧道视频画面 */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-700/20 to-gray-900/40">
                  {/* 隧道轮廓 */}
                  <div className="absolute top-1/4 left-0 right-0 h-1/2 bg-gradient-to-r from-transparent via-gray-600/30 to-transparent rounded-full"></div>
                  
                  {/* 模拟灯光效果 */}
                  <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                  
                  {/* 模拟机器人视角 */}
                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-[#FF6B35] rounded-full animate-bounce border-2 border-white shadow-lg"></div>
                  </div>
                  
                  {/* 画面信息 */}
                  <div className="absolute top-4 left-4 text-sm text-white bg-black/60 px-3 py-1 rounded">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>LIVE</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-sm text-white bg-black/60 px-3 py-1 rounded">
                    1920×1080@30fps
                  </div>
                  <div className="absolute bottom-4 left-4 text-sm text-white bg-black/60 px-3 py-1 rounded">
                    机械狗#01 - 前置摄像头
                  </div>
                  <div className="absolute bottom-4 right-4 text-sm text-white bg-black/60 px-3 py-1 rounded">
                    K125+300
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-record-circle-line mr-1"></i>录制
              </button>
              <button className="px-3 py-1 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-camera-line mr-1"></i>截图
              </button>
              <button className="px-3 py-1 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-fullscreen-line mr-1"></i>全屏
              </button>
            </div>
            <div className="text-sm text-gray-400">
              信号强度: 95% | 延迟: 12ms
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
        <h3 className="text-lg font-semibold text-white mb-4">三维地图导航</h3>
        <div className="bg-[#0F1C2D] rounded-lg border border-[#FF6B35]/10 overflow-hidden">
          <div className="relative h-80 bg-gradient-to-br from-green-900/20 to-blue-900/20">
            {/* 隧道路径 */}
            <div className="absolute inset-4">
              {/* 主隧道路径 */}
              <div className="absolute top-1/2 left-4 right-4 h-12 bg-gray-600/40 rounded-full transform -translate-y-1/2">
                {/* 巡检路径 */}
                <div className="absolute top-1/2 left-0 w-3/4 h-2 bg-[#FFD166] rounded-full transform -translate-y-1/2 animate-pulse"></div>
                {/* 完成路径 */}
                <div className="absolute top-1/2 left-0 w-1/2 h-2 bg-[#00FF7F] rounded-full transform -translate-y-1/2"></div>
              </div>
              
              {/* 里程标记 */}
              <div className="absolute top-1/4 left-8 text-sm text-gray-300 bg-black/60 px-2 py-1 rounded">K125+200</div>
              <div className="absolute top-1/4 left-1/2 text-sm text-gray-300 bg-black/60 px-2 py-1 rounded">K125+300</div>
              <div className="absolute top-1/4 right-8 text-sm text-gray-300 bg-black/60 px-2 py-1 rounded">K125+400</div>
              
              {/* 机器人位置 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full animate-pulse border-2 border-white shadow-lg relative">
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00FF7F] rounded-full border border-white"></div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-[#FF6B35] whitespace-nowrap bg-black/60 px-2 py-1 rounded">
                  机械狗#01
                </div>
              </div>
              
              {/* 其他机器人 */}
              <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-[#00FF7F] rounded-full border border-white"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#00FF7F] whitespace-nowrap">
                  #02
                </div>
              </div>
              
              <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-[#FFD166] rounded-full border border-white"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#FFD166] whitespace-nowrap">
                  #03
                </div>
              </div>
              
              {/* 检测点 */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse cursor-pointer" title="检测点1"></div>
              <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-yellow-400 rounded-full cursor-pointer" title="检测点2"></div>
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse cursor-pointer" title="异常点"></div>
              
              {/* 路径方向指示 */}
              <div className="absolute top-1/2 left-3/4 transform -translate-y-1/2">
                <div className="text-[#FFD166] text-2xl animate-pulse">→</div>
              </div>
            </div>
            
            {/* 控制按钮 */}
            <div className="absolute top-4 left-4 flex space-x-2">
              <button className="px-3 py-2 bg-black/60 text-white text-sm rounded hover:bg-black/80 transition-colors">
                <i className="ri-zoom-in-line"></i>
              </button>
              <button className="px-3 py-2 bg-black/60 text-white text-sm rounded hover:bg-black/80 transition-colors">
                <i className="ri-zoom-out-line"></i>
              </button>
              <button className="px-3 py-2 bg-black/60 text-white text-sm rounded hover:bg-black/80 transition-colors">
                <i className="ri-refresh-line"></i>
              </button>
            </div>
            
            {/* 图例 */}
            <div className="absolute bottom-4 right-4 bg-black/60 rounded-lg p-3 text-xs">
              <div className="text-white mb-2 font-medium">图例</div>
              <div className="space-y-1">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                  <span className="text-white">当前机器人</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-[#00FF7F] rounded-full"></div>
                  <span className="text-white">在线机器人</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-[#FFD166] rounded-full"></div>
                  <span className="text-white">充电中</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-white">检测点</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-white">异常点</span>
                </div>
              </div>
            </div>
            
            {/* 状态信息 */}
            <div className="absolute top-4 right-4 bg-black/60 rounded-lg p-3">
              <div className="text-[#00FF7F] text-sm mb-1">实时导航</div>
              <div className="text-white text-xs">更新时间: 1秒前</div>
            </div>
          </div>
        </div>
      </div>



      <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
        <h3 className="text-lg font-semibold text-white mb-4">控制面板</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">控制模式</h4>
            <div className="flex space-x-2">
              <button
                onClick={() => setControlMode('auto')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  controlMode === 'auto'
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-[#2A3441] text-gray-300 hover:bg-[#374151]'
                }`}
              >
                自主模式
              </button>
              <button
                onClick={() => setControlMode('manual')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  controlMode === 'manual'
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-[#2A3441] text-gray-300 hover:bg-[#374151]'
                }`}
              >
                手动控制
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">运动控制</h4>
            <div className="grid grid-cols-3 gap-2">
              <div></div>
              <button className="w-10 h-10 bg-[#2A3441] rounded-lg flex items-center justify-center hover:bg-[#374151] transition-colors cursor-pointer">
                <i className="ri-arrow-up-line text-white"></i>
              </button>
              <div></div>
              <button className="w-10 h-10 bg-[#2A3441] rounded-lg flex items-center justify-center hover:bg-[#374151] transition-colors cursor-pointer">
                <i className="ri-arrow-left-line text-white"></i>
              </button>
              <button className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center hover:bg-[#FF6B35]/80 transition-colors cursor-pointer">
                <i className="ri-stop-line text-white"></i>
              </button>
              <button className="w-10 h-10 bg-[#2A3441] rounded-lg flex items-center justify-center hover:bg-[#374151] transition-colors cursor-pointer">
                <i className="ri-arrow-right-line text-white"></i>
              </button>
              <div></div>
              <button className="w-10 h-10 bg-[#2A3441] rounded-lg flex items-center justify-center hover:bg-[#374151] transition-colors cursor-pointer">
                <i className="ri-arrow-down-line text-white"></i>
              </button>
              <div></div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">传感器状态</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">激光雷达</span>
                <span className="text-[#00FF7F] text-sm">正常</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">IMU传感器</span>
                <span className="text-[#00FF7F] text-sm">正常</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">温度传感器</span>
                <span className="text-[#FFD166] text-sm">26°C</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">湿度传感器</span>
                <span className="text-[#FFD166] text-sm">65%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
