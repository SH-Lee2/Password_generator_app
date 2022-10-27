import React from 'react';

const STRENGTH = [
  {
    text: 'TOO WEAK!',
    color: 'bg-red',
  },
  { text: 'WEAK', color: 'bg-orange' },
  { text: 'MEDIUM', color: 'bg-yellow' },
  { text: 'STRONG', color: 'bg-green' },
];

const Strength = ({ strength }: { strength: number }) => {
  return (
    <div className="flex items-center justify-between bg-black mt-8 px-4 py-[14px]">
      <span className="text-gray text-base font-bold md:text-lg">Strength</span>
      <div className="flex gap-x-4">
        <span className="text-white font-bold text-lg md:text-2xl">{STRENGTH[strength].text}</span>
        <div className="flex gap-x-2">
          <div
            className={`w-[10px] h-[28px]  ${
              strength >= 0 ? STRENGTH[strength].color : 'border-2 border-white'
            }`}
          />
          <div
            className={`w-[10px] h-[28px]  ${
              strength >= 1 ? STRENGTH[strength].color : 'border-2 border-white'
            }`}
          />
          <div
            className={`w-[10px] h-[28px]  ${
              strength >= 2 ? STRENGTH[strength].color : 'border-2 border-white'
            }`}
          />
          <div
            className={`w-[10px] h-[28px]  ${
              strength >= 3 ? STRENGTH[strength].color : 'border-2 border-white'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Strength;
