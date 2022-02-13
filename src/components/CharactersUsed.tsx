import Checkbox from '../components/Checkbox';

function CharactersUsed() {
  return (
    <>
      <label className='block'>Characters used:</label>
      <div className='flex justify-between'>
        <Checkbox title={'A-Z'}></Checkbox>
        <Checkbox title={'a-z'}></Checkbox>
        <Checkbox title={'0-9'}></Checkbox>
        <Checkbox title={'!@#$%^&*(){}[]=<>/,.'}></Checkbox>
      </div>
    </>
  );
}

export default CharactersUsed;
