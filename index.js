const sortArrayOfNumberByLower = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

const wordToUnicode = string => {
  const arrayOfUnicode = [];

  for (let i = 0; i < string.length; i++) {
    arrayOfUnicode.push(string.charCodeAt(i));
  }
  return arrayOfUnicode;
};

const arrayOfUnicodeToWord = arrayOfUnicode => {
  const strJoin = [];
  for (let i = 0; i < arrayOfUnicode.length; i++) {
    strJoin.push(String.fromCharCode(arrayOfUnicode[i]));
  }
  return strJoin.join('');
};

const anagramGrouping = arrayOfString => {
  const anagramObject = {};
  for (let index = 0; index < arrayOfString.length; index++) {
    const arrayOfUnicode = wordToUnicode(
      (arrayOfString[index] || '').toLowerCase()
    );
    const arrayOfUnicodeSortedByLower = sortArrayOfNumberByLower(
      arrayOfUnicode
    );
    const word = arrayOfUnicodeToWord(arrayOfUnicodeSortedByLower);

    if (anagramObject[word]) {
      anagramObject[word].push(arrayOfString[index]);
    } else {
      anagramObject[word] = [arrayOfString[index]];
    }
  }

  const result = [];
  for (const item in anagramObject) {
    result.push(anagramObject[item]);
  }

  console.log(result);
  return result;
};

anagramGrouping(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']);
