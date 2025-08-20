
'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function HardwareMonitoring() {
  const [selectedDevice, setSelectedDevice] = useState('server-01');

  const performanceData = [
    { time: '00:00', cpu: 45, memory: 72, network: 85, storage: 68 },
    { time: '04:00', cpu: 38, memory: 69, network: 82, storage: 70 },
    { time: '08:00', cpu: 62, memory: 78, network: 88, storage: 72 },
    { time: '12:00', cpu: 55, memory: 75, network: 90, storage: 74 },
    { time: '16:00', cpu: 48, memory: 73, network: 87, storage: 71 },
    { time: '20:00', cpu: 41, memory: 70, network: 84, storage: 69 },
  ];

  const deviceList = [
    {
      id: 'server-01',
      name: '主服务器#01',
      type: 'server',
      status: 'online',
      cpu: 45,
      memory: 72,
      storage: 68,
      network: 85,
      temperature: 42,
      uptime: '15天3小时'
    },
    {
      id: 'server-02',
      name: '备份服务器#02',
      type: 'server',
      status: 'online',
      cpu: 28,
      memory: 54,
      storage: 45,
      network: 88,
      temperature: 38,
      uptime: '15天3小时'
    },
    {
      id: 'switch-01',
      name: '核心交换机',
      type: 'network',
      status: 'online',
      cpu: 15,
      memory: 32,
      storage: 12,
      network: 92,
      temperature: 35,
      uptime: '30天12小时'
    },
    {
      id: 'storage-01',
      name: '存储阵列',
      type: 'storage',
      status: 'warning',
      cpu: 22,
      memory: 45,
      storage: 85,
      network: 78,
      temperature: 48,
      uptime: '8天15小时'
    },
  ];

  const networkData = [
    { device: '交换机01', upload: 245, download: 678 },
    { device: '交换机02', upload: 189, download: 542 },
    { device: '路由器01', upload: 156, download: 423 },
    { device: '无线AP', upload: 89, download: 234 },
  ];

  const alertHistory = [
    { id: 1, type: 'CPU', message: '服务器CPU使用率超过80%', time: '2小时前', level: 'warning' },
    { id: 2, type: '存储', message: '存储空间使用率超过85%', time: '4小时前', level: 'critical' },
    { id: 3, type: '网络', message: '网络延迟异常', time: '6小时前', level: 'info' },
    { id: 4, type: '温度', message: '机房温度偏高', time: '1天前', level: 'warning' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">硬件状态监控</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg text-sm font-medium hover:bg-[#FF6B35]/80 transition-colors cursor-pointer whitespace-nowrap">
            系统诊断
          </button>
          <button className="px-4 py-2 bg-[#2A3441] text-gray-300 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
            性能报告
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">设备在线</p>
              <p className="text-2xl font-bold text-[#00FF7F]">18/20</p>
            </div>
            <div className="w-12 h-12 bg-[#00FF7F]/20 rounded-full flex items-center justify-center">
              <i className="ri-server-line text-[#00FF7F] text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">平均CPU使用率</p>
              <p className="text-2xl font-bold text-[#FFD166]">45%</p>
            </div>
            <div className="w-12 h-12 bg-[#FFD166]/20 rounded-full flex items-center justify-center">
              <i className="ri-cpu-line text-[#FFD166] text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">内存使用率</p>
              <p className="text-2xl font-bold text-[#FF6B35]">72%</p>
            </div>
            <div className="w-12 h-12 bg-[#FF6B35]/20 rounded-full flex items-center justify-center">
              <i className="ri-database-2-line text-[#FF6B35] text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">网络流量</p>
              <p className="text-2xl font-bold text-[#00FF7F]">850MB/s</p>
            </div>
            <div className="w-12 h-12 bg-[#00FF7F]/20 rounded-full flex items-center justify-center">
              <i className="ri-wifi-line text-[#00FF7F] text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <h3 className="text-lg font-semibold text-white mb-4">设备列表</h3>
          <div className="space-y-3 max-h-[26rem] overflow-y-auto custom-scrollbar">
            {deviceList.map((device) => (
              <div
                key={device.id}
                onClick={() => setSelectedDevice(device.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedDevice === device.id
                    ? 'bg-[#FF6B35]/20 border border-[#FF6B35]/30'
                    : 'bg-[#2A3441] hover:bg-[#374151]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className={`${
                        device.type === 'server' ? 'ri-server-line' :
                        device.type === 'network' ? 'ri-router-line' : 'ri-hard-drive-2-line'
                      } text-[#FF6B35] text-lg`}></i>
                    </div>
                    <span className="font-medium text-white">{device.name}</span>
                  </div>
                  <span className={`inline-block w-2 h-2 rounded-full ${
                    device.status === 'online' ? 'bg-[#00FF7F]' :
                    device.status === 'warning' ? 'bg-[#FFD166]' : 'bg-red-500'
                  }`}></span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                  <div>CPU: <span className="text-white">{device.cpu}%</span></div>
                  <div>内存: <span className="text-white">{device.memory}%</span></div>
                  <div>温度: <span className="text-white">{device.temperature}°C</span></div>
                  <div>运行: <span className="text-white">{device.uptime}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
            <h3 className="text-lg font-semibold text-white mb-4">系统性能趋势</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="cpu" 
                    stroke="#FF6B35" 
                    strokeWidth={2}
                    name="CPU使用率"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="memory" 
                    stroke="#FFD166" 
                    strokeWidth={2}
                    name="内存使用率"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="network" 
                    stroke="#00FF7F" 
                    strokeWidth={2}
                    name="网络使用率"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="storage" 
                    stroke="#8B5CF6" 
                    strokeWidth={2}
                    name="存储使用率"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
            <h3 className="text-lg font-semibold text-white mb-4">网络流量统计</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={networkData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="device" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="upload" fill="#FF6B35" name="上传(MB/s)" />
                  <Bar dataKey="download" fill="#00FF7F" name="下载(MB/s)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <h3 className="text-lg font-semibold text-white mb-4">告警历史</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
            {alertHistory.map((alert) => (
              <div key={alert.id} className="p-4 bg-[#2A3441] rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`inline-block w-2 h-2 rounded-full ${
                        alert.level === 'critical' ? 'bg-red-500' :
                        alert.level === 'warning' ? 'bg-[#FFD166]' : 'bg-[#00FF7F]'
                      }`}></span>
                      <span className="text-sm font-medium text-white">{alert.type}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-1">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <h3 className="text-lg font-semibold text-white mb-4">系统健康度</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">服务器集群</span>
                <span className="text-[#00FF7F]">良好 95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-[#00FF7F] h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">网络设备</span>
                <span className="text-[#FFD166]">正常 88%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-[#FFD166] h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">存储系统</span>
                <span className="text-[#FF6B35]">警告 75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-[#FF6B35] h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">环境监控</span>
                <span className="text-[#00FF7F]">优秀 92%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-[#00FF7F] h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-600">
            <h4 className="text-sm font-medium text-gray-300 mb-3">快速操作</h4>
            <div className="grid grid-cols-2 gap-2">
              <button className="px-3 py-2 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                重启服务
              </button>
              <button className="px-3 py-2 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                清理日志
              </button>
              <button className="px-3 py-2 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                备份数据
              </button>
              <button className="px-3 py-2 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                系统更新
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
        <h3 className="text-lg font-semibold text-white mb-4">详细配置信息</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">硬件规格</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">CPU核心:</span>
                <span className="text-white">32核心</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">内存容量:</span>
                <span className="text-white">128GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">存储容量:</span>
                <span className="text-white">2TB SSD</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">网络配置</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">带宽:</span>
                <span className="text-white">10Gbps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">延迟:</span>
                <span className="text-white">2ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">连接数:</span>
                <span className="text-white">256</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">环境监控</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">机房温度:</span>
                <span className="text-white">22°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">机房湿度:</span>
                <span className="text-white">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">UPS状态:</span>
                <span className="text-[#00FF7F]">正常</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">系统信息</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">操作系统:</span>
                <span className="text-white">Ubuntu 22.04</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">系统版本:</span>
                <span className="text-white">v2.1.5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">最后更新:</span>
                <span className="text-white">3天前</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
