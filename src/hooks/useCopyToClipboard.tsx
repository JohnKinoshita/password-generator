import { useState } from 'react';
import copy from 'copy-to-clipboard';

function useCopyToClipboard() {
  const [value, setValue] = useState<string>();
  const [success, setSuccess] = useState<boolean>();

  const copyToClipboard = (text: string, options: object): void => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };
  return [copyToClipboard, { value, success }];
}

export default useCopyToClipboard;
