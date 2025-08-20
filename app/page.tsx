
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardMain from '../components/DashboardMain';
import RobotControlPanel from '../components/RobotControlPanel';
import ExcavationMonitoring from '../components/ExcavationMonitoring';
import DefectDetection from '../components/DefectDetection';
import SafetyWarning from '../components/SafetyWarning';
import HardwareMonitoring from '../components/HardwareMonitoring';

export default function Home() {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderMainContent = () => {
    switch (activeModule) {
      case 'robot':
        return <RobotControlPanel />;
      case 'excavation':
        return <ExcavationMonitoring />;
      case 'defect':
        return <DefectDetection />;
      case 'safety':
        return <SafetyWarning />;
      case 'hardware':
        return <HardwareMonitoring />;
      default:
        return <DashboardMain />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1C2D] text-white">
      <Header />
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 p-6">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
}
