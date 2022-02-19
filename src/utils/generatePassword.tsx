function generatePassword(
  length: string,
  hasUpper: boolean,
  hasLower: boolean,
  hasNumber: boolean,
  hasSymbol: boolean,
  hasSimilar?: boolean,
  excludedChar?: string[]
) {
  let characterArrays;
  let passwordLength = +length;
  let generatedPassword = '';

  const generateCharArrays = () => {
    characterArrays = hasUpper
      ? [
          {
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
          },
        ]
      : [];
    characterArrays = hasLower
      ? [
          ...characterArrays,
          {
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
          },
        ]
      : characterArrays;
    characterArrays = hasNumber
      ? [
          ...characterArrays,
          { numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
        ]
      : characterArrays;
    characterArrays = hasSymbol
      ? [
          ...characterArrays,
          {
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
          },
        ]
      : characterArrays;
    return characterArrays;
  };

  const randomCharacterArray1 = (arrays) => {
    const keys = Object.keys(arrays);
    return arrays[keys[(keys.length * Math.random()) << 0]];
  };

  const randomCharacter = () => {
    let currentCharArray = Object.values(
      randomCharacterArray1(generateCharArrays())
    )[0];
    return currentCharArray[
      Math.floor(Math.random() * currentCharArray.length)
    ];
  };

  for (let i = 0; i < passwordLength; i++) {
    generatedPassword = generatedPassword.concat(randomCharacter());
  }
  return generatedPassword;
}

export default generatePassword;
