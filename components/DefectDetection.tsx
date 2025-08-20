
'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function DefectDetection() {
  const [selectedDefect, setSelectedDefect] = useState<any>(null);
  const [filterType, setFilterType] = useState('all');

  const defectData = [
    { type: '渗水', count: 15, color: '#3B82F6' },
    { type: '空鼓', count: 8, color: '#F59E0B' },
    { type: '掉块', count: 5, color: '#EF4444' },
    { type: '裂缝', count: 12, color: '#8B5CF6' },
  ];

  const defectList = [
    {
      id: 1,
      type: '渗水',
      location: 'K125+315',
      severity: 'medium',
      time: '2小时前',
      description: '拱顶部位发现渗水现象，面积约0.5m²',
      status: 'pending'
    },
    {
      id: 2,
      type: '空鼓',
      location: 'K125+280',
      severity: 'high',
      time: '4小时前',
      description: '左侧墙壁衬砌空鼓，范围1.2m×0.8m',
      status: 'confirmed'
    },
    {
      id: 3,
      type: '掉块',
      location: 'K125+420',
      severity: 'high',
      time: '6小时前',
      description: '右侧拱肩混凝土块脱落',
      status: 'processing'
    },
    {
      id: 4,
      type: '裂缝',
      location: 'K125+380',
      severity: 'low',
      time: '1天前',
      description: '纵向微裂缝，长度约30cm',
      status: 'completed'
    },
  ];

  const timelineData = [
    { month: '1月', 渗水: 12, 空鼓: 5, 掉块: 2, 裂缝: 8 },
    { month: '2月', 渗水: 8, 空鼓: 7, 掉块: 3, 裂缝: 6 },
    { month: '3月', 渗水: 15, 空鼓: 8, 掉块: 5, 裂缝: 12 },
    { month: '4月', 渗水: 10, 空鼓: 6, 掉块: 1, 裂缝: 9 },
    { month: '5月', 渗水: 18, 空鼓: 11, 掉块: 4, 裂缝: 15 },
    { month: '6月', 渗水: 13, 空鼓: 9, 掉块: 3, 裂缝: 10 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">衬砌缺陷识别</h2>
        <div className="flex space-x-4">
          <select 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-[#2A3441] text-white text-sm rounded px-3 py-2 border border-gray-600 pr-8"
          >
            <option value="all">所有缺陷</option>
            <option value="渗水">渗水</option>
            <option value="空鼓">空鼓</option>
            <option value="掉块">掉块</option>
            <option value="裂缝">裂缝</option>
          </select>
          <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg text-sm font-medium hover:bg-[#FF6B35]/80 transition-colors cursor-pointer whitespace-nowrap">
            AI重新检测
          </button>
          <button className="px-4 py-2 bg-[#2A3441] text-gray-300 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
            生成报告
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">总缺陷数</p>
              <p className="text-2xl font-bold text-[#FF6B35]">40</p>
            </div>
            <div className="w-12 h-12 bg-[#FF6B35]/20 rounded-full flex items-center justify-center">
              <i className="ri-bug-line text-[#FF6B35] text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">高风险缺陷</p>
              <p className="text-2xl font-bold text-red-500">8</p>
            </div>
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
              <i className="ri-error-warning-line text-red-500 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">已处理</p>
              <p className="text-2xl font-bold text-[#00FF7F]">25</p>
            </div>
            <div className="w-12 h-12 bg-[#00FF7F]/20 rounded-full flex items-center justify-center">
              <i className="ri-check-line text-[#00FF7F] text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">AI准确率</p>
              <p className="text-2xl font-bold text-[#FFD166]">94%</p>
            </div>
            <div className="w-12 h-12 bg-[#FFD166]/20 rounded-full flex items-center justify-center">
              <i className="ri-brain-line text-[#FFD166] text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* 缺陷分布 */}
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20 h-[32rem] flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">缺陷分布</h3>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={defectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="count"
                >
                  {defectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #F3F4F6',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          color: '#000000',
                          fontSize: '14px'
                        }}>
                          {data.type}:{data.count}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {defectData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-400">{item.type}: {item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 缺陷列表 */}
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20 h-[32rem] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">缺陷列表</h3>
            <div className="text-sm text-gray-400">总计 {defectList.length} 条</div>
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
            {defectList.map((defect) => (
              <div
                key={defect.id}
                className={`p-4 rounded-lg transition-all cursor-pointer border ${
                  selectedDefect?.id === defect.id 
                    ? 'bg-[#FF6B35]/20 border-[#FF6B35]/50 shadow-lg' 
                    : 'bg-[#2A3441] border-gray-700/30 hover:bg-[#374151] hover:border-gray-600/50'
                }`}
                onClick={() => setSelectedDefect(defect)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">#{String(defect.id).padStart(3, '0')}</span>
                    <span className={`inline-block w-3 h-3 rounded-full ${
                      defect.severity === 'high' ? 'bg-red-500' :
                      defect.severity === 'medium' ? 'bg-[#FFD166]' : 'bg-[#00FF7F]'
                    }`}></span>
                    <span className="font-medium text-white">{defect.type}</span>
                    <span className="text-sm text-gray-400">{defect.location}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    defect.status === 'completed' ? 'bg-[#00FF7F]/20 text-[#00FF7F]' :
                    defect.status === 'processing' ? 'bg-[#FFD166]/20 text-[#FFD166]' :
                    defect.status === 'confirmed' ? 'bg-[#FF6B35]/20 text-[#FF6B35]' :
                    'bg-gray-600/20 text-gray-400'
                  }`}>
                    {defect.status === 'completed' ? '已完成' :
                     defect.status === 'processing' ? '处理中' :
                     defect.status === 'confirmed' ? '已确认' : '待处理'}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2 line-clamp-2">{defect.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">{defect.time}</p>
                  <div className="flex items-center space-x-1">
                    <i className="ri-eye-line text-gray-500 text-xs"></i>
                    <span className="text-xs text-gray-500">点击查看</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 月度趋势分析 */}
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20 h-[32rem] flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">月度趋势分析</h3>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="渗水" stackId="a" fill="#3B82F6" />
                <Bar dataKey="空鼓" stackId="a" fill="#F59E0B" />
                <Bar dataKey="掉块" stackId="a" fill="#EF4444" />
                <Bar dataKey="裂缝" stackId="a" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 缺陷记录 - 独占一行 */}
      <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
        <h3 className="text-lg font-semibold text-white mb-4">缺陷记录</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-80">
          {/* 缺陷记录图像 */}
          <div className="bg-[#0F1C2D] rounded-lg border border-[#FF6B35]/10 overflow-hidden flex flex-col">
            <div className="p-3 border-b border-[#FF6B35]/10">
              <h4 className="text-sm font-medium text-white flex items-center">
                <i className="ri-camera-line text-[#FF6B35] mr-2"></i>
                缺陷记录图像
              </h4>
            </div>
            <div className="flex-1 relative bg-gradient-to-br from-gray-800/50 to-gray-900/50">
              {/* 模拟缺陷图像 */}
              <div className="absolute inset-4">
                {/* 隧道壁面 */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-lg">
                  {/* 渗水区域 */}
                  <div className="absolute top-1/4 left-1/3 w-16 h-12 bg-blue-500/40 rounded-lg animate-pulse" title="渗水缺陷"></div>
                  {/* 渗水痕迹 */}
                  <div className="absolute top-1/3 left-1/3 w-1 h-8 bg-blue-400/60 animate-pulse"></div>
                  <div className="absolute top-1/3 left-1/2 w-1 h-6 bg-blue-400/40"></div>
                  
                  {/* 空鼓区域 */}
                  <div className="absolute bottom-1/3 right-1/4 w-12 h-8 border-2 border-[#FFD166] rounded bg-[#FFD166]/20 animate-pulse" title="空鼓缺陷"></div>
                </div>
                
                {/* 标注信息 */}
                <div className="absolute top-2 left-2 bg-red-500/90 text-white text-xs px-2 py-1 rounded">
                  #001 - 渗水
                </div>
                <div className="absolute bottom-2 right-2 bg-[#FFD166]/90 text-black text-xs px-2 py-1 rounded">
                  #002 - 空鼓
                </div>
                
                {/* 拍摄信息 */}
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  K125+315 | 2小时前
                </div>
              </div>
            </div>
          </div>
          
          {/* BIM模型缺陷映射 */}
          <div className="bg-[#0F1C2D] rounded-lg border border-[#FF6B35]/10 overflow-hidden flex flex-col">
            <div className="p-3 border-b border-[#FF6B35]/10">
              <h4 className="text-sm font-medium text-white flex items-center">
                <i className="ri-building-line text-[#FFD166] mr-2"></i>
                BIM模型缺陷映射
              </h4>
            </div>
            <div className="flex-1 relative bg-gradient-to-br from-gray-800/50 to-gray-900/50">
              {/* 隧道主体结构 */}
              <div className="absolute inset-4">
                {/* 隧道外轮廓 */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-20 border-2 border-blue-400/60 rounded-t-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-32 h-16 border-2 border-blue-400/60 border-t-0"></div>
                
                {/* 内部衬砌 */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-26 h-16 border border-gray-400/40 rounded-t-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-26 h-10 border border-gray-400/40 border-t-0"></div>
                
                {/* 同步缺陷标记点 */}
                <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse cursor-pointer" title="#001 渗水缺陷 K125+315"></div>
                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#FFD166] rounded-full animate-pulse cursor-pointer" title="#002 空鼓缺陷 K125+280"></div>
                
                {/* 当前选中缺陷信息框 */}
                <div className="absolute top-1/4 left-1/4 bg-red-500/90 text-white text-xs px-2 py-1 rounded pointer-events-none">
                  #001 渗水
                </div>
              </div>
              
              {/* 图例 */}
              <div className="absolute bottom-2 right-2 bg-black/70 rounded-lg p-2">
                <div className="text-white text-xs mb-1">缺陷位置</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-white">#001</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-[#FFD166] rounded-full"></div>
                    <span className="text-white">#002</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-2 right-2 text-xs text-blue-400 bg-black/60 px-2 py-1 rounded">
                3D BIM
              </div>
            </div>
          </div>
        </div>
        
        {/* 缺陷详情同步显示 */}
        <div className="mt-6 p-4 bg-[#2A3441] rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-white">当前选中缺陷</h4>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-[#FF6B35] text-white text-sm rounded hover:bg-[#FF6B35]/80 transition-colors">
                查看详情
              </button>
              <button className="px-3 py-1 bg-[#2A3441] text-gray-300 text-sm rounded hover:bg-[#374151] border border-gray-600 transition-colors">
                标记处理
              </button>
              <button className="px-3 py-1 bg-[#2A3441] text-gray-300 text-sm rounded hover:bg-[#374151] border border-gray-600 transition-colors">
                生成报告
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">缺陷编号:</span>
                <span className="text-white">#001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">缺陷类型:</span>
                <span className="text-red-400">渗水</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">位置:</span>
                <span className="text-white">K125+315</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">严重程度:</span>
                <span className="text-[#FFD166]">中等</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">发现时间:</span>
                <span className="text-white">2小时前</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">状态:</span>
                <span className="text-[#FFD166]">待处理</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">影响范围:</span>
                <span className="text-white">0.5m²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">检测方法:</span>
                <span className="text-white">AI识别</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">置信度:</span>
                <span className="text-[#00FF7F]">94%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
        <h3 className="text-lg font-semibold text-white mb-4">AI检测参数配置</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">检测敏感度</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">渗水检测:</span>
                <span className="text-white">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1">
                <div className="bg-[#3B82F6] h-1 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">识别阈值</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">最小缺陷:</span>
                <span className="text-white">2cm²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">置信度:</span>
                <span className="text-white">≥90%</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">处理状态</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">自动标记:</span>
                <span className="text-[#00FF7F]">开启</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">预警推送:</span>
                <span className="text-[#00FF7F]">开启</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">快速操作</h4>
            <div className="space-y-2">
              <button className="w-full px-3 py-2 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                重训练模型
              </button>
              <button className="w-full px-3 py-2 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                导出结果
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
