
'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function SafetyWarning() {
  const [alertLevel, setAlertLevel] = useState('all');

  const safetyData = [
    { time: '00:00', helmet: 98, smoke: 100, behavior: 95, equipment: 97 },
    { time: '04:00', helmet: 85, smoke: 100, behavior: 92, equipment: 98 },
    { time: '08:00', helmet: 76, smoke: 95, behavior: 88, equipment: 94 },
    { time: '12:00', helmet: 82, smoke: 100, behavior: 90, equipment: 96 },
    { time: '16:00', helmet: 88, smoke: 98, behavior: 93, equipment: 97 },
    { time: '20:00', helmet: 95, smoke: 100, behavior: 96, equipment: 99 },
  ];

  const radarData = [
    { subject: '人员安全', A: 85, fullMark: 100 },
    { subject: '设备状态', A: 92, fullMark: 100 },
    { subject: '环境监测', A: 78, fullMark: 100 },
    { subject: '消防安全', A: 95, fullMark: 100 },
    { subject: '违规行为', A: 88, fullMark: 100 },
    { subject: '应急准备', A: 90, fullMark: 100 },
  ];

  const alertList = [
    {
      id: 1,
      type: '人员安全',
      level: 'high',
      message: '检测到3名人员未佩戴安全帽',
      location: 'K125+320',
      time: '1分钟前',
      status: 'active'
    },
    {
      id: 2,
      type: '烟火检测',
      level: 'critical',
      message: '检测到异常烟雾信号',
      location: 'K125+280',
      time: '3分钟前',
      status: 'active'
    },
    {
      id: 3,
      type: '违规行为',
      level: 'medium',
      message: '人员进入危险区域',
      location: 'K125+450',
      time: '5分钟前',
      status: 'processing'
    },
    {
      id: 4,
      type: '设备异常',
      level: 'low',
      message: '监控摄像头信号异常',
      location: 'K125+200',
      time: '10分钟前',
      status: 'resolved'
    },
  ];

  const riskZones = [
    { zone: 'A区域', risk: 'high', personnel: 8, incidents: 3, lastCheck: '30分钟前' },
    { zone: 'B区域', risk: 'medium', personnel: 12, incidents: 1, lastCheck: '15分钟前' },
    { zone: 'C区域', risk: 'low', personnel: 5, incidents: 0, lastCheck: '5分钟前' },
    { zone: 'D区域', risk: 'low', personnel: 3, incidents: 0, lastCheck: '2分钟前' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">安全预警中心</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors cursor-pointer whitespace-nowrap">
            紧急撤离
          </button>
          <select 
            value={alertLevel} 
            onChange={(e) => setAlertLevel(e.target.value)}
            className="bg-[#2A3441] text-white text-sm rounded px-3 py-2 border border-gray-600 pr-8"
          >
            <option value="all">所有预警</option>
            <option value="critical">紧急预警</option>
            <option value="high">高级预警</option>
            <option value="medium">中级预警</option>
          </select>
          <button className="px-4 py-2 bg-[#2A3441] text-gray-300 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
            安全报告
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-[#1A2332] p-6 rounded-xl border border-red-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">活跃预警</p>
              <p className="text-2xl font-bold text-red-500">5</p>
            </div>
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
              <i className="ri-alarm-warning-line text-red-500 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">在场人员</p>
              <p className="text-2xl font-bold text-[#FFD166]">28</p>
            </div>
            <div className="w-12 h-12 bg-[#FFD166]/20 rounded-full flex items-center justify-center">
              <i className="ri-group-line text-[#FFD166] text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">安全得分</p>
              <p className="text-2xl font-bold text-[#00FF7F]">85</p>
            </div>
            <div className="w-12 h-12 bg-[#00FF7F]/20 rounded-full flex items-center justify-center">
              <i className="ri-shield-check-line text-[#00FF7F] text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">摄像头在线</p>
              <p className="text-2xl font-bold text-[#00FF7F]">15/16</p>
            </div>
            <div className="w-12 h-12 bg-[#00FF7F]/20 rounded-full flex items-center justify-center">
              <i className="ri-camera-line text-[#00FF7F] text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <h3 className="text-lg font-semibold text-white mb-4">安全监控趋势</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={safetyData}>
                <defs>
                  <linearGradient id="colorHelmet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF6B35" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSmoke" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00FF7F" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00FF7F" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorBehavior" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFD166" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FFD166" stopOpacity={0}/>
                  </linearGradient>
                </defs>
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
                <Area 
                  type="monotone" 
                  dataKey="helmet" 
                  stroke="#FF6B35" 
                  fillOpacity={1} 
                  fill="url(#colorHelmet)"
                  strokeWidth={2}
                  name="安全帽佩戴率"
                />
                <Area 
                  type="monotone" 
                  dataKey="smoke" 
                  stroke="#00FF7F" 
                  fillOpacity={1} 
                  fill="url(#colorSmoke)"
                  strokeWidth={2}
                  name="烟火安全"
                />
                <Area 
                  type="monotone" 
                  dataKey="behavior" 
                  stroke="#FFD166" 
                  fillOpacity={1} 
                  fill="url(#colorBehavior)"
                  strokeWidth={2}
                  name="行为规范"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <h3 className="text-lg font-semibold text-white mb-4">安全评估雷达</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="subject" className="text-xs fill-gray-400" />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  className="text-xs fill-gray-400"
                />
                <Radar
                  name="安全指数"
                  dataKey="A"
                  stroke="#FF6B35"
                  fill="#FF6B35"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <h3 className="text-lg font-semibold text-white mb-4">实时预警</h3>
          <div className="space-y-3 max-h-[28rem] overflow-y-auto custom-scrollbar">
            {alertList.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border-l-4 ${
                  alert.level === 'critical' ? 'bg-red-900/20 border-red-500' :
                  alert.level === 'high' ? 'bg-orange-900/20 border-orange-500' :
                  alert.level === 'medium' ? 'bg-yellow-900/20 border-yellow-500' :
                  'bg-gray-900/20 border-gray-500'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`inline-block w-3 h-3 rounded-full ${
                        alert.level === 'critical' ? 'bg-red-500 animate-pulse' :
                        alert.level === 'high' ? 'bg-orange-500' :
                        alert.level === 'medium' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`}></span>
                      <span className="text-white font-medium text-sm">{alert.type}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        alert.level === 'critical' ? 'bg-red-500/20 text-red-400' :
                        alert.level === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        alert.level === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {alert.level === 'critical' ? '紧急' :
                         alert.level === 'high' ? '高' :
                         alert.level === 'medium' ? '中' : '低'}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{alert.message}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>位置: {alert.location}</span>
                      <span>{alert.time}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    {alert.status === 'active' && (
                      <button className="px-3 py-1 bg-[#FF6B35] text-white rounded text-xs hover:bg-[#FF6B35]/80 transition-colors cursor-pointer whitespace-nowrap">
                        处理
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <h3 className="text-lg font-semibold text-white mb-4">风险区域热力图</h3>
          <div className="space-y-4">
            {riskZones.map((zone) => (
              <div key={zone.zone} className="p-4 bg-[#2A3441] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-white">{zone.zone}</span>
                    <span className={`inline-block w-3 h-3 rounded-full ${
                      zone.risk === 'high' ? 'bg-red-500' :
                      zone.risk === 'medium' ? 'bg-[#FFD166]' : 'bg-[#00FF7F]'
                    }`}></span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    zone.risk === 'high' ? 'bg-red-500/20 text-red-400' :
                    zone.risk === 'medium' ? 'bg-[#FFD166]/20 text-[#FFD166]' :
                    'bg-[#00FF7F]/20 text-[#00FF7F]'
                  }`}>
                    {zone.risk === 'high' ? '高风险' :
                     zone.risk === 'medium' ? '中风险' : '低风险'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
                  <div>
                    <span className="block">人员数量</span>
                    <span className="text-white font-medium">{zone.personnel}</span>
                  </div>
                  <div>
                    <span className="block">事件次数</span>
                    <span className="text-white font-medium">{zone.incidents}</span>
                  </div>
                  <div>
                    <span className="block">最后检查</span>
                    <span className="text-white font-medium">{zone.lastCheck}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
        <h3 className="text-lg font-semibold text-white mb-4">应急响应配置</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">预警阈值</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">烟雾浓度:</span>
                <span className="text-white">≥50ppm</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">人员密度:</span>
                <span className="text-white">≥10人/100m²</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">响应时间</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">紧急预警:</span>
                <span className="text-red-400">≤30秒</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">人员撤离:</span>
                <span className="text-[#FFD166]">≤5分钟</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">联动设备</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">声光报警:</span>
                <span className="text-[#00FF7F]">在线</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">通风系统:</span>
                <span className="text-[#00FF7F]">在线</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">快速操作</h4>
            <div className="space-y-2">
              <button className="w-full px-3 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap">
                启动应急预案
              </button>
              <button className="w-full px-3 py-2 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                测试报警系统
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
