import { createContext, Dispatch, SetStateAction } from 'react';
import { CharSet } from '../interfaces/interfaces';

interface ContextState {
  password: string;
  generatePassword: (
    length: string,
    hasUpper: boolean,
    hasLower: boolean,
    hasNumber: boolean,
    hasSymbol: boolean,
    hasSimilar?: boolean | undefined,
    excludedChar?: string[] | undefined
  ) => string;
  lengthInput: string;
  setLengthInput: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  characters: CharSet[];
  setCharacters: Dispatch<
    SetStateAction<
      {
        title: string;
        selected: boolean;
        symbols: string;
        id: number;
      }[]
    >
  >;
}

export const PasswordContext = createContext({} as ContextState);
