export const getNumberWithZero = (n: number) => {
  return n >= 10 ? n : '0' + n;
}