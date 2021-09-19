export const isDataFunction = (key: string): boolean => {
  return key.match(/(^♠data.)/i) !== null;
};
