import password from '../utils/generatePassword';

function PasswordOutput({ passwordOutput }) {
  return (
    <div>
      <label>Password:</label>
      <div className='block border-2 px-3 py-3 w-full'>{passwordOutput}</div>
    </div>
  );
}

export default PasswordOutput;
