import React, { useState } from 'react';
import CheckList from './components/CheckList';
import ArrowRight from './components/icon/ArrowRight';
import Copy from './components/icon/Copy';
import LengthBar from './components/LengthBar';
import Strength from './components/Strength';

import copy from 'copy-to-clipboard';

function App() {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [upperCase, setUpperCase] = useState(0);
  const [lowerCase, setLowerCase] = useState(0);
  const [numbers, setNumbers] = useState(0);
  const [symbols, setSymbols] = useState(0);

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    checkPassword(e.target.value);
  };

  const checkPassword = (str: string) => {
    /[a-z]/.test(str) ? setLowerCase(1) : setLowerCase(0);
    /[A-Z]/.test(str) ? setUpperCase(1) : setUpperCase(0);
    /[0-9]/.test(str) ? setNumbers(1) : setNumbers(0);
    /[^a-zA-z0-9]/.test(str) ? setSymbols(1) : setSymbols(0);
  };

  const copyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password.length === 0) return;
    copy(password);
    setCopied(true);
  };

  return (
    <main className="flex flex-col justify-center items-center w-full px-4 gap-y-4 h-screen md:gap-y-6">
      <h1 className="text-gray text-sm md:text-2xl">Password Generator</h1>
      <form className="flex flex-col gap-y-4 w-full max-w-[343px] md:gap-y-6 md:max-w-[540px]">
        <label className="flex items-center bg-black-gray p-4 box-border md:px-8 md:py-5">
          <input
            type="text"
            value={password}
            maxLength={20}
            onChange={changePassword}
            placeholder="Password"
            className="w-full text-2xl placeholder:text-2xl text-white font-bold bg-black-gray outline-none md:text-[32px] md:placeholder:text-[32px]"
          />
          <div className="flex items-center group">
            {copied && (
              <span className="text-green font-bold text-base mr-4 group-hover:text-white md:text:lg">
                Copied
              </span>
            )}
            <button onClick={copyHandler} className="group-hover:fill-white">
              <Copy />
            </button>
          </div>
        </label>
        <div className="bg-black-gray p-4">
          <LengthBar length={password.length} />
          <CheckList
            upperCase={upperCase}
            lowerCase={lowerCase}
            numbers={numbers}
            symbols={symbols}
          />
          <Strength
            upperCase={upperCase}
            lowerCase={lowerCase}
            numbers={numbers}
            symbols={symbols}
          />
          <button className="bg-green mt-4 w-full flex items-center justify-center gap-x-4 font-bold p-[18px] text-base md:text-[18px] hover:bg-black-gray hover:text-green hover:outline hover:outline-2 hover:outline-green md:gap-x-6">
            GENERATE <ArrowRight />
          </button>
        </div>
      </form>
    </main>
  );
}

export default App;
