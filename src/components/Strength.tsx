import React from 'react';

const Strength = () => {
  return (
    <div className="flex items-center justify-between bg-black mt-8 px-4 py-[14px]">
      <span className="text-gray text-base font-bold md:text-lg">Strength</span>
      <div className="flex gap-x-4">
        <span className="text-white font-bold text-lg md:text-2xl">MEDIUM</span>
        <div className="flex gap-x-2">
          <div className="w-[10px] h-[28px] border-2 border-white" />
          <div className="w-[10px] h-[28px] border-2 border-white" />
          <div className="w-[10px] h-[28px] border-2 border-white" />
          <div className="w-[10px] h-[28px] border-2 border-white" />
        </div>
      </div>
    </div>
  );
};

export default Strength;
