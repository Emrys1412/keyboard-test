import React from 'react';
import { ArrowLeft, Scan, Settings, RotateCcw, Bluetooth, BatteryMedium } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="bg-slate-50 border-b border-gray-200 pb-2">
      {/* System Status Bar Simulation (Optional for realism) */}
      <div className="flex justify-between items-center px-4 py-1 text-xs text-gray-500 mb-2">
        <span className="font-medium">13:41</span>
        <div className="flex items-center space-x-2">
          <Bluetooth size={14} />
          <BatteryMedium size={14} />
        </div>
      </div>

      {/* App Header */}
      <div className="flex justify-between items-center px-4">
        <button className="p-2 -ml-2 text-gray-700 active:bg-gray-200 rounded-full">
          <ArrowLeft size={24} />
        </button>

        <div className="flex bg-gray-200 rounded-lg p-0.5">
          <button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-sm font-bold text-gray-800">
            SCAN
          </button>
          <button className="px-4 py-1.5 text-sm font-medium text-gray-500">
            Товары
          </button>
        </div>

        <button className="p-2 text-gray-700 relative">
          <Scan size={24} />
        </button>
      </div>
    </div>
  );
};