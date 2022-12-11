export const getImageRatio = (width: number): number => {
  if (width < 430) {
    return 0.1;
  } else if (width < 970) {
    return 0.4;
  } else if (width < 1230) {
    return 0.5;
  } else if (width < 1360) {
    return 0.8;
  }

  return 1;
};
