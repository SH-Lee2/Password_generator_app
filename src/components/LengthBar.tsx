const LengthBar = ({ length }: { length: number }) => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="text-white md:text-lg">Character Length</h2>
        <span className="text-green text-2xl md:text-">{length}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          readOnly
          min={0}
          max={20}
          value={length}
          step={1}
          className="slider h-[8px] w-full appearance-none"
        />
        <div
          className="bg-white h-[20px] w-[20px] rounded-[50%] absolute top-1 hover:bg-black hover:outline hover:outline-2 hover:outline-green"
          style={{
            left: `${length * 4.78}%`,
          }}
        />
      </div>
    </>
  );
};

export default LengthBar;
