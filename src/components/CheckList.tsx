import React from 'react';
import CheckBox from './icon/CheckBox';
interface Props {
  upperCase: number;
  lowerCase: number;
  numbers: number;
  symbols: number;
}

const CheckList = ({ upperCase, lowerCase, numbers, symbols }: Props) => {
  return (
    <ul className="grid gap-y-4 mt-8">
      <li className="flex items-center gap-x-5">
        <div
          className={`flex items-center justify-center border-2 border-white h-[20px] w-[20px] ${
            upperCase && 'bg-green border-green'
          }`}
        >
          <CheckBox />
        </div>
        <span className="text-white font-bold text-base md:text-lg">Include Uppercase Letters</span>
      </li>

      <li className="flex items-center gap-x-5">
        <div
          className={`flex items-center justify-center border-2 border-white h-[20px] w-[20px] ${
            lowerCase && 'bg-green border-green'
          }`}
        >
          <CheckBox />
        </div>
        <span className="text-white font-bold text-base md:text-lg">Include Lowercase Letters</span>
      </li>
      <li className="flex items-center gap-x-5">
        <div
          className={`flex items-center justify-center border-2 border-white h-[20px] w-[20px] ${
            numbers && 'bg-green border-green'
          }`}
        >
          <CheckBox />
        </div>
        <span className="text-white font-bold text-base md:text-lg">Include Numbers</span>
      </li>
      <li className="flex items-center gap-x-5">
        <div
          className={`flex items-center justify-center border-2 border-white h-[20px] w-[20px] ${
            symbols && 'bg-green border-green'
          }`}
        >
          <CheckBox />
        </div>
        <span className="text-white font-bold text-base md:text-lg">Include Symbols</span>
      </li>
    </ul>
  );
};

export default CheckList;
