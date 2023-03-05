export const shortenString = (string: string, start = 4, end = 4) => {
  return string.slice(0, start) + '...' + string.slice(string.length - end);
};

export const sleep = async (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
