import React, { useState } from 'react';
import CheckList from './components/CheckList';
import ArrowRight from './components/icon/ArrowRight';
import Copy from './components/icon/Copy';
import LengthBar from './components/LengthBar';
import Strength from './components/Strength';

function App() {
  const [password, setPassword] = useState('');

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <main className="flex flex-col justify-center items-center w-full px-4 gap-y-4 h-screen md:gap-y-6">
      <h1 className="text-gray text-sm md:text-2xl">Password Generator</h1>
      <form className="flex flex-col gap-y-4 md:gap-y-6">
        <label className="flex items-center bg-black-gray p-4 md:px-8 md:py-5">
          <input
            type="text"
            value={password}
            maxLength={20}
            onChange={changePassword}
            placeholder="비밀번호를 입력해주세요."
            className="flex-1 text-2xl placeholder:text-2xl text-white font-bold bg-black-gray outline-none md:text-[32px] md:placeholder:text-[32px]"
          />
          <Copy />
        </label>
        <div className="bg-black-gray p-4">
          <LengthBar length={password.length} />
          <CheckList />
          <Strength />
          <button className="bg-green mt-4 w-full flex items-center justify-center gap-x-4 font-bold p-[18px] text-base md:text-[18px] md:gap-x-6">
            GENERATE <ArrowRight />
          </button>
        </div>
      </form>
    </main>
  );
}

export default App;
