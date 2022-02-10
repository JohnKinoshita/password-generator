import Checkbox from '../components/Checkbox';

function CharactersUsed() {
  return (
    <>
      <label className='block'>Characters used:</label>
      <div className='flex justify-between'>
        <Checkbox></Checkbox>
        <Checkbox></Checkbox>
        <Checkbox></Checkbox>
        <Checkbox></Checkbox>
      </div>
    </>
  );
}

export default CharactersUsed;
