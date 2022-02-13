import password from '../utils/generatePassword';

function PasswordOutput({ passwordOutput }: { passwordOutput: string }) {
  return (
    <div>
      <label>Password:</label>
      <div className='block overflow-hidden whitespace-nowrap overflow-ellipsis border-2 px-3 py-3 w-full'>
        {passwordOutput}
      </div>
    </div>
  );
}

export default PasswordOutput;
