import ExcludeCharacters from './ExcludeCharacters';
import { useState } from 'react';

function MoreOptions() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVisible((prevIsVisible) => !prevIsVisible)}
        className='flex items-center py-3 rounded-md mb-4'
      >
        <span className='pr-2'>More options</span>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 640 640'
        >
          <path
            fill='#000'
            d='M144.512 241.536c13.952-14.272 33.376-15.392 50.432 0l125.056 119.904 125.056-119.904c17.056-15.392 36.512-14.272 50.368 0 13.952 14.24 13.056 38.304 0 51.68-12.992 13.376-150.24 144.064-150.24 144.064-6.944 7.136-16.064 10.72-25.184 10.72s-18.24-3.584-25.248-10.72c0 0-137.184-130.688-150.24-144.064-13.088-13.376-13.952-37.44 0-51.68z'
          ></path>
        </svg>
      </button>
      {isVisible === true ? <ExcludeCharacters /> : null}
    </>
  );
}

export default MoreOptions;
