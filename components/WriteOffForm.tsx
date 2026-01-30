import React, { useState, useRef } from 'react';
import { Dropdown } from './Dropdown';
import { Leaf } from 'lucide-react';

export const WriteOffForm: React.FC = () => {
  const [count, setCount] = useState<string>("1");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelectAll = () => {
    // Simulate "Select All" functionality
    setCount("14"); // Sets to max stock as per example logic
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="px-5 pb-20">
      <h2 className="text-md font-bold text-slate-800 mb-4">
        Выбор причины списания
      </h2>

      {/* Dropdowns */}
      <Dropdown 
        label="Статья" 
        value="116 - Срок годности" 
        onClick={() => console.log('Dropdown 1 clicked')}
      />
      
      <Dropdown 
        label="Причина" 
        value="141 - СГ" 
        onClick={() => console.log('Dropdown 2 clicked')}
      />

      {/* Action Row */}
      <div className="flex items-end space-x-3 mt-6 mb-8">
        
        {/* Input Group - The area of interest for the bug */}
        <div className="relative w-1/3">
           {/* "Select All" badge floating button */}
          <button 
            onClick={handleSelectAll}
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-100 text-sky-700 text-[10px] font-bold px-2 py-0.5 rounded-full z-10 whitespace-nowrap border border-sky-200"
          >
            Выбрать все
          </button>

          <div className="relative">
            <input
              ref={inputRef}
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              className="w-full h-12 text-center text-lg font-bold border-2 border-sky-200 rounded-xl bg-sky-50 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all text-slate-800"
            />
          </div>
        </div>

        {/* Action Button */}
        <button className="flex-1 h-12 bg-emerald-500 active:bg-emerald-600 text-white font-bold rounded-xl shadow-sm text-sm transition-colors">
          Добавить в акт
        </button>
      </div>

      {/* Bottom Info Card */}
      <div className="bg-cyan-100/50 rounded-xl p-3 flex items-center justify-center space-x-2 text-cyan-800 border border-cyan-200/50">
        <Leaf size={16} className="fill-current" />
        <span className="text-xs font-semibold">Товары без ШК (Сегодня в 11:10)</span>
      </div>
    </div>
  );
};