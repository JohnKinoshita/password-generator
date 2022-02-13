function generatePassword(lengthInput: string) {
  const characterArrays = {
    lowercaseAlpha: [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ],
    uppercaseAlpha: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    symbols: [
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '{',
      '}',
      '[',
      ']',
      '=',
      '<',
      '>',
      '/',
      ',',
      '.',
    ],
  };

  let passwordLength = Number(lengthInput);
  let password = '';

  const characterArraysValues = Object.values(characterArrays);

  const randomCharacterArray = () => {
    return characterArraysValues[
      Math.floor(Math.random() * characterArraysValues.length)
    ];
  };

  const randomCharacter = () => {
    let currentCharArray = randomCharacterArray();
    return currentCharArray[
      Math.floor(Math.random() * currentCharArray.length)
    ];
  };

  for (let i = 0; i < passwordLength; i++) {
    password = password.concat(randomCharacter());
  }
  return password;
}

export default generatePassword;
