export const prepareVariable = (variable: string): Array<string> => {
  return variable.split('←');
};

export const isVariable = (possibleVariable: Array<string>): boolean => {
  if (possibleVariable.length < 2) {
    return false;
  }
  return true;
};

export const getKeyFromVariable = (variable: Array<string>): string => {
  return variable[0].trim();
};

export const getValueFromVariable = (variable: Array<string>): string => {
  return variable[1].trim();
};
