import type { NextPage } from 'next';
import Image from 'next/image';
import CharactersUsed from '../components/CharactersUsed';
import GenerateButton from '../components/GenerateButton';
import LengthControl from '../components/LengthControl';
import MoreOptions from '../components/MoreOptions';
import PasswordOutput from '../components/PasswordOutput';
import PasswordStats from '../components/PasswordStats';
import ThemeSwitcher from '../components/ThemeSwitcher';

const toggleButton = 'border-2 px-3 py-3 rounded-md';

const Home: NextPage = () => {
  return (
    <>
      <body>
        <main className='container mx-auto p-4'>
          <ThemeSwitcher />
          <div>
            <h1 className='uppercase text-3xl font-bold bg-clip-text text-transparent my-8 bg-gradient-to-b from-black to-green-400'>
              Password Generator
            </h1>
          </div>
          <div className='container'>
            <PasswordOutput />
            <PasswordStats />
            <LengthControl />
            <CharactersUsed />
            <MoreOptions />
            <GenerateButton />
          </div>
        </main>
      </body>
    </>
  );
};

export default Home;
