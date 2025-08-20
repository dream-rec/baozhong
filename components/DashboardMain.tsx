
'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function DashboardMain() {
  const tunnelData = [
    { time: '00:00', excavation: 2.3, defects: 5, safety: 98 },
    { time: '02:00', excavation: 2.0, defects: 4, safety: 98 },
    { time: '04:00', excavation: 1.8, defects: 3, safety: 99 },
    { time: '06:00', excavation: 2.5, defects: 6, safety: 98 },
    { time: '08:00', excavation: 3.2, defects: 8, safety: 97 },
    { time: '10:00', excavation: 2.9, defects: 7, safety: 97 },
    { time: '12:00', excavation: 2.7, defects: 6, safety: 98 },
    { time: '14:00', excavation: 2.4, defects: 5, safety: 98 },
    { time: '16:00', excavation: 2.1, defects: 4, safety: 99 },
    { time: '18:00', excavation: 2.0, defects: 3, safety: 99 },
    { time: '20:00', excavation: 1.9, defects: 2, safety: 100 },
    { time: '22:00', excavation: 1.7, defects: 2, safety: 100 },
  ];

  const alertData = [
    { id: 1, type: '安全预警', message: '检测到未佩戴安全帽人员', time: '2分钟前', level: 'high' },
    { id: 2, type: '设备异常', message: '机械狗#01电池电量低于20%', time: '5分钟前', level: 'medium' },
    { id: 3, type: '质量问题', message: '隧道K125+300处发现衬砌空鼓', time: '8分钟前', level: 'high' },
    { id: 4, type: '系统提示', message: '今日点云数据采集完成', time: '15分钟前', level: 'low' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">工程监测总览</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg text-sm font-medium hover:bg-[#FF6B35]/80 transition-colors cursor-pointer whitespace-nowrap">
            生成报告
          </button>
          <button className="px-4 py-2 bg-[#2A3441] text-gray-300 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
            导出数据
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">机械狗在线</p>
              <p className="text-2xl font-bold text-[#00FF7F]">3/4</p>
            </div>
            <div className="w-12 h-12 bg-[#00FF7F]/20 rounded-full flex items-center justify-center">
              <i className="ri-robot-line text-[#00FF7F] text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <i className="ri-arrow-up-line text-[#00FF7F] mr-1"></i>
            <span className="text-[#00FF7F]">+12%</span>
            <span className="text-gray-400 ml-2">较昨日</span>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">超挖偏差(cm)</p>
              <p className="text-2xl font-bold text-[#FFD166]">2.3</p>
            </div>
            <div className="w-12 h-12 bg-[#FFD166]/20 rounded-full flex items-center justify-center">
              <i className="ri-ruler-2-line text-[#FFD166] text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <i className="ri-arrow-down-line text-[#FFD166] mr-1"></i>
            <span className="text-[#FFD166]">-5%</span>
            <span className="text-gray-400 ml-2">较昨日</span>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">缺陷检出</p>
              <p className="text-2xl font-bold text-[#FF6B35]">12</p>
            </div>
            <div className="w-12 h-12 bg-[#FF6B35]/20 rounded-full flex items-center justify-center">
              <i className="ri-bug-line text-[#FF6B35] text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <i className="ri-arrow-up-line text-[#FF6B35] mr-1"></i>
            <span className="text-[#FF6B35]">+3</span>
            <span className="text-gray-400 ml-2">新发现</span>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">安全得分</p>
              <p className="text-2xl font-bold text-[#00FF7F]">98</p>
            </div>
            <div className="w-12 h-12 bg-[#00FF7F]/20 rounded-full flex items-center justify-center">
              <i className="ri-shield-check-line text-[#00FF7F] text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <i className="ri-arrow-up-line text-[#00FF7F] mr-1"></i>
            <span className="text-[#00FF7F]">+2</span>
            <span className="text-gray-400 ml-2">较昨日</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-96">
        <div className="lg:col-span-2 bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">监测数据趋势</h3>
            <select className="bg-[#2A3441] text-white text-sm rounded px-3 py-1 border border-gray-600 pr-8">
              <option>今日</option>
              <option>本周</option>
              <option>本月</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={tunnelData}>
                <defs>
                  <linearGradient id="colorExcavation" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFD166" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FFD166" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorDefects" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF6B35" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  stroke="#9CA3AF" 
                  interval={0}
                  tick={{ fontSize: 12 }}
                  height={60}
                />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="excavation" 
                  stroke="#FFD166" 
                  fillOpacity={1} 
                  fill="url(#colorExcavation)" 
                  strokeWidth={2}
                  name="超挖偏差"
                />
                <Area 
                  type="monotone" 
                  dataKey="defects" 
                  stroke="#FF6B35" 
                  fillOpacity={1} 
                  fill="url(#colorDefects)"
                  strokeWidth={2}
                  name="缺陷数量"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">实时预警</h3>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400">{alertData.length} 条</span>
              <button className="px-2 py-1 bg-[#2A3441] text-gray-300 rounded text-xs hover:bg-[#374151] transition-colors">
                全部标记已读
              </button>
            </div>
          </div>
          <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
            {alertData.map((alert) => (
              <div key={alert.id} className="p-4 bg-[#2A3441] rounded-lg border border-gray-700/30 hover:border-gray-600/50 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`inline-block w-3 h-3 rounded-full ${
                        alert.level === 'high' ? 'bg-red-500' :
                        alert.level === 'medium' ? 'bg-[#FFD166]' : 'bg-[#00FF7F]'
                      }`}></span>
                      <span className="text-sm font-medium text-white">{alert.type}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          alert.level === 'high' ? 'bg-red-500/20 text-red-400' :
                          alert.level === 'medium' ? 'bg-[#FFD166]/20 text-[#FFD166]' : 'bg-[#00FF7F]/20 text-[#00FF7F]'
                        }`}>
                          {alert.level === 'high' ? '紧急' : alert.level === 'medium' ? '中等' : '一般'}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2 leading-relaxed">{alert.message}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-[#FF6B35] text-white rounded text-xs hover:bg-[#FF6B35]/80 transition-colors">
                          处理
                        </button>
                        <button className="px-3 py-1 bg-[#374151] text-gray-300 rounded text-xs hover:bg-[#4B5563] transition-colors">
                          查看详情
                        </button>
                  </div>
                  <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
                    <i className="ri-close-line text-sm"></i>
                  </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* 添加更多预警信息让列表更充实 */}
            <div className="p-4 bg-[#2A3441] rounded-lg border border-gray-700/30">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-[#FFD166]"></span>
                      <span className="text-sm font-medium text-white">环境监测</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#FFD166]/20 text-[#FFD166]">中等</span>
                    </div>
                    <span className="text-xs text-gray-500">10分钟前</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2 leading-relaxed">隧道内温度偏高，建议加强通风</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-[#FF6B35] text-white rounded text-xs hover:bg-[#FF6B35]/80 transition-colors">
                        处理
                      </button>
                      <button className="px-3 py-1 bg-[#374151] text-gray-300 rounded text-xs hover:bg-[#4B5563] transition-colors">
                        查看详情
                      </button>
                    </div>
                    <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
                      <i className="ri-close-line text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-[#2A3441] rounded-lg border border-gray-700/30">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-[#00FF7F]"></span>
                      <span className="text-sm font-medium text-white">数据同步</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#00FF7F]/20 text-[#00FF7F]">一般</span>
                    </div>
                    <span className="text-xs text-gray-500">12分钟前</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2 leading-relaxed">今日数据采集完成，共获取点云数据 2.3GB</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-[#00FF7F] text-gray-900 rounded text-xs hover:bg-[#00FF7F]/80 transition-colors">
                        已处理
                      </button>
                      <button className="px-3 py-1 bg-[#374151] text-gray-300 rounded text-xs hover:bg-[#4B5563] transition-colors">
                        查看详情
                      </button>
                    </div>
                    <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
                      <i className="ri-close-line text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
        <h3 className="text-lg font-semibold text-white mb-4">隧道三维沙盘</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* 点云模型 */}
          <div className="bg-[#0F1C2D] rounded-lg border border-[#FF6B35]/10 overflow-hidden">
            <div className="p-3 border-b border-[#FF6B35]/10">
              <h4 className="text-sm font-medium text-white flex items-center">
                <i className="ri-radar-line text-[#FF6B35] mr-2"></i>
                点云模型
              </h4>
            </div>
            <div className="relative h-64">
              <img 
                src="/pointcloud-model.png" 
                alt="隧道点云模型" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                实时扫描
              </div>
            </div>
          </div>

          {/* 设计BIM模型 */}
          <div className="bg-[#0F1C2D] rounded-lg border border-[#FFD166]/10 overflow-hidden">
            <div className="p-3 border-b border-[#FFD166]/10">
              <h4 className="text-sm font-medium text-white flex items-center">
                <i className="ri-building-line text-[#FFD166] mr-2"></i>
                设计BIM模型
              </h4>
            </div>
            <div className="relative h-64">
              <img 
                src="/bim-model.jpg" 
                alt="隧道BIM设计模型" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 text-xs text-[#FFD166] bg-black/60 px-2 py-1 rounded">
                BIM设计模型
              </div>
              <div className="absolute bottom-2 left-2 text-xs text-[#FFD166] bg-black/60 px-2 py-1 rounded">
                标准断面设计 | φ12.5m
              </div>
            </div>
          </div>

          {/* SfM图片重建实况模型 */}
          <div className="bg-[#0F1C2D] rounded-lg border border-[#00FF7F]/10 overflow-hidden">
            <div className="p-3 border-b border-[#00FF7F]/10">
              <h4 className="text-sm font-medium text-white flex items-center">
                <i className="ri-camera-3-line text-[#00FF7F] mr-2"></i>
                SfM实况重建
              </h4>
            </div>
            <div className="relative h-64">
              <img 
                src="/sfm-reconstruction.png" 
                alt="隧道SfM重建模型" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                SfM重建完成
              </div>
              <div className="absolute top-2 right-2 text-xs text-[#00FF7F] bg-black/60 px-2 py-1 rounded">
                多视角重建
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-xs text-[#00FF7F] mb-1 bg-black/60 px-2 py-1 rounded">
                  重建完成度: 100% | 点云密度: 高精度
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <i className="ri-radar-line text-[#FF6B35] text-sm"></i>
              <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
              <span className="text-gray-400">点云数据</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="ri-building-line text-[#FFD166] text-sm"></i>
              <div className="w-2 h-2 bg-[#FFD166] rounded-full"></div>
              <span className="text-gray-400">BIM设计</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="ri-camera-3-line text-[#00FF7F] text-sm"></i>
              <div className="w-2 h-2 bg-[#00FF7F] rounded-full"></div>
              <span className="text-gray-400">SfM重建</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-[#2A3441] text-gray-300 rounded text-xs hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
              模型对比
            </button>
            <button className="px-3 py-1 bg-[#2A3441] text-gray-300 rounded text-xs hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
              全屏查看
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
