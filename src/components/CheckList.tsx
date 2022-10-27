import React from 'react';
import CheckBox from './icon/CheckBox';

const CheckList = () => {
  return (
    <ul className="grid gap-y-4 mt-8">
      <li className="flex items-center gap-x-5">
        <div className="flex items-center justify-center border-2 border-white h-[20px] w-[20px]">
          <CheckBox />
        </div>
        <span className="text-white font-bold text-base md:text-lg">Include Uppercase Letters</span>
      </li>

      <li className="flex items-center gap-x-5">
        <div className="flex items-center justify-center border-2 border-white h-[20px] w-[20px]">
          <CheckBox />
        </div>
        <span className="text-white font-bold text-base md:text-lg">Include Lowercase Letters</span>
      </li>
      <li className="flex items-center gap-x-5">
        <div className="flex items-center justify-center border-2 border-white h-[20px] w-[20px]">
          <CheckBox />
        </div>
        <span className="text-white font-bold text-base md:text-lg">Include Numbers</span>
      </li>
      <li className="flex items-center gap-x-5">
        <div className="flex items-center justify-center border-2 border-white h-[20px] w-[20px]">
          <CheckBox />
        </div>
        <span className="text-white font-bold text-base md:text-lg">Include Symbols</span>
      </li>
    </ul>
  );
};

export default CheckList;
