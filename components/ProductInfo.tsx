import React from 'react';

export const ProductInfo: React.FC = () => {
  return (
    <div className="px-5 pt-6 pb-6">
      <h1 className="text-2xl font-bold text-slate-800 leading-tight mb-8 uppercase">
        ВОДА ПИТЬЕВАЯ ШИШКИН ЛЕС 5Л
      </h1>

      <div className="grid grid-cols-2 divide-x divide-gray-300 bg-slate-100 rounded-xl p-4">
        <div className="text-center">
          <div className="text-xs text-gray-500 font-medium mb-1">остаток</div>
          <div className="text-lg font-bold text-slate-900">14 шт.</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 font-medium mb-1">ср. вес шт.</div>
          <div className="text-lg font-bold text-slate-900">- шт.</div>
        </div>
      </div>
    </div>
  );
};