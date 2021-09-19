import {
  prepareVariable,
  isVariable,
  getValueFromVariable,
  getKeyFromVariable,
} from './Variable';
import {getValueFromSearch, isSearchFunction} from './functions/Search';

export const haveHeader = (template: string): boolean => {
  return template.includes('---');
};

export const getHeader = (template: string): Array<string> => {
  const matches: RegExpMatchArray | null = template.match(/(\W|\w)+-/);
  if (matches) {
    let variables: string = matches[0];
    variables = variables.replace('---', '');
    return variables.split('\n');
  }
  return [];
};

export const removeHeaderFromTemplate = (template: string): string => {
  return template.replace(/(\W|\w)+-/, '');
};

export const processHeader = (
  template: string,
  header: Array<string>,
  data: unknown,
  modeDeploy: string
): string => {
  header.forEach(possibleVariable => {
    const variable = prepareVariable(possibleVariable);
    if (!isVariable(variable)) {
      return;
    }
    const key = getKeyFromVariable(variable);
    const value = getValueFromVariable(variable);
    let result = value;
    if (isSearchFunction(value)) {
      const r = getValueFromSearch(data, value, modeDeploy);
      if (typeof r === 'string' || typeof r === 'number') {
        result = String(r);
      } else {
        throw '💣 Value not expected! ' + r;
      }
    }
    const re = new RegExp(key, 'g');
    template = template.replace(re, result);
  });
  return template;
};
