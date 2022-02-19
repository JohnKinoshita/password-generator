import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import CharactersUsed from '../components/CharactersUsed';
import CopyButton from '../components/CopyButton';
import LengthControl from '../components/LengthControl';
import MoreOptions from '../components/MoreOptions';
import PasswordOutput from '../components/PasswordOutput';
import PasswordStats from '../components/PasswordStats';
import ThemeSwitcher from '../components/ThemeSwitcher';
import generatePassword from '../utils/generatePassword';
import { PasswordContext } from '../components/PasswordContext';
import { CharSet } from '../interfaces/interfaces';

const Home: NextPage = () => {
  const [password, setPassword] = useState('');
  const [lengthInput, setLengthInput] = useState<string>('20');
  const [characters, setCharacters] = useState<CharSet[]>([
    { title: 'hasUpper', selected: true, symbols: 'ABC', id: 0 },
    { title: 'hasLower', selected: true, symbols: 'abc', id: 1 },
    { title: 'hasNumber', selected: true, symbols: '123', id: 2 },
    {
      title: 'hasSymbol',
      selected: true,
      symbols: '!@#',
      id: 3,
    },
  ]);

  useEffect(() => {
    setPassword(generatePassword(lengthInput, true, true, false, true, true));
  }, []);

  return (
    <main className='container mx-auto p-4'>
      <PasswordContext.Provider
        value={{
          password,
          generatePassword,
          lengthInput,
          setLengthInput,
          setPassword,
          characters,
          setCharacters,
        }}
      >
        <ThemeSwitcher />
        <div>
          <h1 className='uppercase text-3xl font-bold bg-clip-text text-transparent my-8 bg-gradient-to-b from-black to-green-400'>
            Password Generator
          </h1>
        </div>
        <div className='container'>
          <PasswordOutput password={password} />
          <PasswordStats />
          <LengthControl />
          <CharactersUsed />
          <MoreOptions />
          <CopyButton />
        </div>
      </PasswordContext.Provider>
    </main>
  );
};

export default Home;
