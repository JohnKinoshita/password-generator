import { useContext } from 'react';
import Checkbox from '../components/Checkbox';
import { CharSet } from '../interfaces/interfaces';
import { PasswordContext } from './PasswordContext';

function CharactersUsed() {
  const {
    characters,
    setCharacters,
    setPassword,
    generatePassword,
    lengthInput,
  } = useContext(PasswordContext);

  const onCheckboxClick = (id: number): void => {
    const newCharacters = [...characters];
    const set: CharSet = newCharacters.find((set) => set.id === id);
    set.selected = !set.selected;
    setCharacters(newCharacters);
    setPassword(
      generatePassword(
        lengthInput,
        characters[0].selected,
        characters[1].selected,
        characters[2].selected,
        characters[3].selected
      )
    );
  };

  return (
    <>
      <label className='block'>Characters used:</label>
      <div className='flex justify-between'>
        {characters.map((charSet) => (
          <Checkbox
            set={charSet}
            key={charSet.id}
            onCheckboxClick={onCheckboxClick}
          />
        ))}
      </div>
    </>
  );
}

export default CharactersUsed;
