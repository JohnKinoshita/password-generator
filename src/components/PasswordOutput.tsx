import { Dispatch, SetStateAction, useState } from 'react';
import BlurButton from './BlurButton';
import RegenerateButton from './RegenerateButton';

function PasswordOutput({
  password,
}: {
  password: string | Dispatch<SetStateAction<string>>;
}) {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleBlurButton = (): void => {
    setIsBlurred((prevIsBlurred) => !prevIsBlurred);
  };

  return (
    <div>
      <label>Password:</label>
      <div className='flex relative items-center border-2 h-12 w-full'>
        <div
          className={`w-full pl-3 py-3 overflow-hidden whitespace-nowrap overflow-ellipsis select-all cursor-text ${
            isBlurred === true && 'blur'
          }`}
        >
          {password}
        </div>
        <BlurButton handleBlurButton={handleBlurButton} isBlurred={isBlurred} />
        <RegenerateButton />
      </div>
    </div>
  );
}

export default PasswordOutput;
