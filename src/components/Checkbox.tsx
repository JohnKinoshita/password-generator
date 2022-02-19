import { useContext } from 'react';
import { CharSet } from '../interfaces/interfaces';
import { PasswordContext } from './PasswordContext';

function Checkbox({
  set,
  onCheckboxClick,
}: {
  set: CharSet;
  onCheckboxClick: (id: number) => void;
}) {
  return (
    <div className='px-3 py-3'>
      <input
        className='mr-2 cursor-pointer'
        id={set.symbols}
        type='checkbox'
        onChange={() => onCheckboxClick(set.id)}
        checked={set.selected}
      ></input>
      <label className='cursor-pointer select-none' htmlFor={set.symbols}>
        {set.symbols}
      </label>
    </div>
  );
}

export default Checkbox;
