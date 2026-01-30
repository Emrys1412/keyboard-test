import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  label: string;
  value: string;
  onClick?: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, value, onClick }) => {
  return (
    <div className="mb-4">
      <label className="block text-xs text-gray-500 font-medium mb-1 pl-1">
        {label}
      </label>
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center bg-sky-100/50 border border-transparent active:border-sky-300 rounded-xl px-4 py-3 text-left transition-colors"
      >
        <span className="text-slate-800 font-semibold text-sm truncate pr-2">
          {value}
        </span>
        <ChevronDown size={20} className="text-slate-600 flex-shrink-0" />
      </button>
    </div>
  );
};