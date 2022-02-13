import { ChangeEvent } from 'react';

function LengthControl({
  setLengthInput,
  lengthInput,
}: {
  setLengthInput: (value: string) => void;
  lengthInput: string;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLengthInput(e.target.value);
  };

  return (
    <div>
      <label className='block'>Length:</label>
      <div className='h-12 flex mb-4'>
        <input
          className='appearance-none w-16 h-full mr-2 border-neutral-300 border-[1px] text-center shadow-[inset_0_1px_2px_0_rgba(0,0,0,.25)] rounded-md'
          onChange={handleChange}
          value={lengthInput}
          type='number'
          min='0'
          max='128'
          step='1'
        ></input>
        <input
          className='w-full'
          type='range'
          min='0'
          max='128'
          value={lengthInput}
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
}

export default LengthControl;
