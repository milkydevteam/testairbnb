export const hiddenText = (
  str: string,
  showLastOfNumbers = 0,
  showFirstOfNumbers = 0,
) => {
  let tmpStr = str.substr(0, showFirstOfNumbers);
  let i;
  for (i = showFirstOfNumbers; i < str.length - showLastOfNumbers; i++) {
    tmpStr += '*';
  }
  tmpStr += str.substr(i, showLastOfNumbers);
  return tmpStr;
};

export const cutString = (str: string, numberOfWordToShow = 0) => {
  if (!str) return '';
  const splitWords = str.split(' ');
  const more = splitWords.length > numberOfWordToShow ? '...' : '';
  return splitWords.slice(0, numberOfWordToShow).join(' ') + more;
};
