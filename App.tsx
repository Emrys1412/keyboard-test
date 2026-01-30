import React from 'react';
import { Header } from './components/Header';
import { ProductInfo } from './components/ProductInfo';
import { WriteOffForm } from './components/WriteOffForm';

export default function App() {
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto shadow-2xl overflow-hidden flex flex-col">
      <Header />
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <ProductInfo />
        <WriteOffForm />
      </div>
    </div>
  );
}