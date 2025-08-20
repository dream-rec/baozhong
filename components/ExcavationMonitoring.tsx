
'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ExcavationMonitoring() {
  const [selectedSection, setSelectedSection] = useState('K125+300');
  const [viewMode, setViewMode] = useState('3d');

  const excavationData = [
    { position: 'K125+200', overExcavation: 2.1, underExcavation: 1.3, deviation: 0.8 },
    { position: 'K125+250', overExcavation: 3.2, underExcavation: 0.9, deviation: 2.3 },
    { position: 'K125+300', overExcavation: 2.8, underExcavation: 1.5, deviation: 1.3 },
    { position: 'K125+350', overExcavation: 1.9, underExcavation: 2.1, deviation: -0.2 },
    { position: 'K125+400', overExcavation: 2.5, underExcavation: 1.8, deviation: 0.7 },
    { position: 'K125+450', overExcavation: 3.1, underExcavation: 1.2, deviation: 1.9 },
  ];

  const sectionData = [
    { section: 'K125+300', status: 'warning', maxDeviation: 2.3, avgDeviation: 1.5, riskLevel: 'medium' },
    { section: 'K125+350', status: 'normal', maxDeviation: 1.2, avgDeviation: 0.8, riskLevel: 'low' },
    { section: 'K125+400', status: 'danger', maxDeviation: 3.5, avgDeviation: 2.1, riskLevel: 'high' },
    { section: 'K125+450', status: 'normal', maxDeviation: 1.8, avgDeviation: 1.1, riskLevel: 'low' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">超欠挖监测</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode(viewMode === '3d' ? '2d' : '3d')}
            className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg text-sm font-medium hover:bg-[#FF6B35]/80 transition-colors cursor-pointer whitespace-nowrap"
          >
            {viewMode === '3d' ? '2D视图' : '3D视图'}
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
              <p className="text-gray-400 text-sm">平均超挖</p>
              <p className="text-2xl font-bold text-[#FF6B35]">2.1cm</p>
            </div>
            <div className="w-12 h-12 bg-[#FF6B35]/20 rounded-full flex items-center justify-center">
              <i className="ri-arrow-up-line text-[#FF6B35] text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">平均欠挖</p>
              <p className="text-2xl font-bold text-[#FFD166]">1.4cm</p>
            </div>
            <div className="w-12 h-12 bg-[#FFD166]/20 rounded-full flex items-center justify-center">
              <i className="ri-arrow-down-line text-[#FFD166] text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">最大偏差</p>
              <p className="text-2xl font-bold text-red-500">3.5cm</p>
            </div>
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
              <i className="ri-error-warning-line text-red-500 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">合格率</p>
              <p className="text-2xl font-bold text-[#00FF7F]">89%</p>
            </div>
            <div className="w-12 h-12 bg-[#00FF7F]/20 rounded-full flex items-center justify-center">
              <i className="ri-check-line text-[#00FF7F] text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-96">
        <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-white mb-4">断面列表</h3>
          <div className="flex-1 flex flex-col justify-start space-y-3 overflow-y-auto custom-scrollbar">
            {sectionData.map((section) => (
              <div
                key={section.section}
                onClick={() => setSelectedSection(section.section)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedSection === section.section
                    ? 'bg-[#FF6B35]/20 border border-[#FF6B35]/30'
                    : 'bg-[#2A3441] hover:bg-[#374151]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">{section.section}</span>
                  <span className={`inline-block w-2 h-2 rounded-full ${
                    section.status === 'normal' ? 'bg-[#00FF7F]' :
                    section.status === 'warning' ? 'bg-[#FFD166]' : 'bg-red-500'
                  }`}></span>
                </div>
                <div className="text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>最大偏差: {section.maxDeviation}cm</span>
                    <span className={`${
                      section.riskLevel === 'low' ? 'text-[#00FF7F]' :
                      section.riskLevel === 'medium' ? 'text-[#FFD166]' : 'text-red-500'
                    }`}>
                      {section.riskLevel === 'low' ? '低风险' :
                       section.riskLevel === 'medium' ? '中风险' : '高风险'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
            <h3 className="text-lg font-semibold text-white mb-4">三维点云模型</h3>
            <div className="bg-[#0F1C2D] rounded-lg border border-[#FF6B35]/10 overflow-hidden">
              <div className="relative h-80">
                <img 
                  src="/excavation-pointcloud.png" 
                  alt="隧道点云模型" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-black/60 px-2 py-1 rounded text-sm text-white">
                  当前断面: {selectedSection}
                </div>
                <div className="absolute bottom-3 right-3 flex space-x-2">
                  <div className="flex items-center space-x-1 text-xs bg-black/60 px-2 py-1 rounded">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-white">超挖区域</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs bg-black/60 px-2 py-1 rounded">
                    <div className="w-2 h-2 bg-[#FFD166] rounded-full"></div>
                    <span className="text-white">欠挖区域</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs bg-black/60 px-2 py-1 rounded">
                    <div className="w-2 h-2 bg-[#00FF7F] rounded-full"></div>
                    <span className="text-white">正常区域</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
            <h3 className="text-lg font-semibold text-white mb-4">偏差趋势分析</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={excavationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="position" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="overExcavation" 
                    stroke="#FF6B35" 
                    strokeWidth={2}
                    name="超挖"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="underExcavation" 
                    stroke="#FFD166" 
                    strokeWidth={2}
                    name="欠挖"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="deviation" 
                    stroke="#00FF7F" 
                    strokeWidth={2}
                    name="净偏差"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A2332] p-6 rounded-xl border border-[#FF6B35]/20">
        <h3 className="text-lg font-semibold text-white mb-4">质量控制参数</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">允许偏差范围</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">超挖限值:</span>
                <span className="text-[#FF6B35]">≤3.0cm</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">欠挖限值:</span>
                <span className="text-[#FFD166]">≤2.0cm</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">测量精度</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">点云密度:</span>
                <span className="text-white">1000点/m²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">测量精度:</span>
                <span className="text-white">±0.5mm</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">数据统计</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">测点总数:</span>
                <span className="text-white">158,420</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">异常点数:</span>
                <span className="text-red-500">2,847</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">快速操作</h4>
            <div className="space-y-2">
              <button className="w-full px-3 py-2 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                重新扫描
              </button>
              <button className="w-full px-3 py-2 bg-[#2A3441] text-gray-300 rounded text-sm hover:bg-[#374151] transition-colors cursor-pointer whitespace-nowrap">
                导出数据
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
