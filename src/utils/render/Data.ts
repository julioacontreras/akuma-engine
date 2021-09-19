import {
  prepareVariable,
  isVariable,
  getValueFromVariable,
  getKeyFromVariable,
} from './Variable';
import {processForEach, isForEach} from './functions/ForEach';
import {isDataFunction} from './functions/UpdateData';

interface ResultObject {
  [key: string]: unknown;
}

export const processData = (
  header: Array<string>,
  rootData: unknown,
  data: unknown
): unknown => {
  header.forEach(possibleVariable => {
    const variable = prepareVariable(possibleVariable);
    if (!isVariable(variable)) {
      return;
    }
    let key = getKeyFromVariable(variable);
    const value = getValueFromVariable(variable);
    if (isDataFunction(key)) {
      if (isForEach(value)) {
        const object: ResultObject = {};
        const result = processForEach(rootData, data, value);
        key = key.replace('♠data.', '');
        key = key.replace('♠', '');
        object[key] = result;
        data = {...(data as Object), ...object};
      }
    }
  });
  return data;
};
