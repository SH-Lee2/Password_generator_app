import React from 'react';

const STRENGTH = [
  {},
  {
    text: 'TOO WEAK!',
    color: 'bg-red',
  },
  { text: 'WEAK', color: 'bg-orange' },
  { text: 'MEDIUM', color: 'bg-yellow' },
  { text: 'STRONG', color: 'bg-green' },
];

interface Props {
  upperCase: number;
  lowerCase: number;
  numbers: number;
  symbols: number;
}

const Strength = ({ upperCase, lowerCase, numbers, symbols }: Props) => {
  const getStrengthLen = () => {
    return upperCase + lowerCase + numbers + symbols;
  };
  const strengthLen = getStrengthLen();

  return (
    <div className="flex items-center justify-between bg-black mt-8 px-4 py-[14px]">
      <span className="text-gray text-base font-bold md:text-lg">Strength</span>
      <div className="flex gap-x-4">
        <span className="text-white font-bold text-lg md:text-2xl">
          {STRENGTH[strengthLen].text}
        </span>
        <div className="flex gap-x-2">
          <div
            className={`w-[10px] h-[28px]  ${
              strengthLen >= 1 ? STRENGTH[strengthLen].color : 'border-2 border-white'
            }`}
          />
          <div
            className={`w-[10px] h-[28px]  ${
              strengthLen >= 2 ? STRENGTH[strengthLen].color : 'border-2 border-white'
            }`}
          />
          <div
            className={`w-[10px] h-[28px]  ${
              strengthLen >= 3 ? STRENGTH[strengthLen].color : 'border-2 border-white'
            }`}
          />
          <div
            className={`w-[10px] h-[28px]  ${
              strengthLen >= 4 ? STRENGTH[strengthLen].color : 'border-2 border-white'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Strength;
