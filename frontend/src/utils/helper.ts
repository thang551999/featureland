export const shortenString = (string: string, start = 4, end = 4) => {
  return string.slice(0, start) + '...' + string.slice(string.length - end);
};
