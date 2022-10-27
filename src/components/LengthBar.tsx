import React from 'react';

const LengthBar = ({ length }: { length: number }) => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="text-white md:text-lg">Character Length</h2>
        <span className="text-green text-2xl md:text-">{length}</span>
      </div>
      <div className="relative h-[8px]">
        <input
          type="range"
          readOnly
          min={0}
          max={20}
          value={!length ? 10 : length}
          step={1}
          className=" slider h-[8px]"
        />
        <div
          className={`bg-green h-[8px] absolute top-0 left-0`}
          style={{
            width: `${length ? length * 5 : 50}%`,
          }}
        />
      </div>
    </>
  );
};

export default LengthBar;
