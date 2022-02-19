import React from 'react';

function ExcludeCharacters() {
  return (
    <>
      <label className='block'>Exclude Characters:</label>
      <div className='h-12 flex mb-4'>
        <input className='appearance-none w-16 h-full mr-2 px-3 border-neutral-300 border-[1px] text-left shadow-[inset_0_1px_2px_0_rgba(0,0,0,.25)] rounded-md'></input>
      </div>
    </>
  );
}

export default ExcludeCharacters;
