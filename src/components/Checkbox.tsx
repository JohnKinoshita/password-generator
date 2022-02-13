function Checkbox({ title }: { title: string }) {
  return (
    <div className='px-3 py-3'>
      <input className='mr-2 cursor-pointer' id={title} type='checkbox'></input>
      <label className='cursor-pointer select-none' htmlFor={title}>
        {title}
      </label>
    </div>
  );
}

export default Checkbox;
