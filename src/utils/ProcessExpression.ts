import {capitalize} from './Capitalize';
import {jsonFind} from './JsonFind';

const pluralize = require('pluralize');

export const processExpression = (
  data: unknown,
  expression: string
): string => {
  if (!expression.includes('♦')) {
    return String(jsonFind(data, expression));
  }

  // prepare
  const actions = expression.split('♦');
  let result = '';
  let command = String(actions.pop());
  command = command.replace('⟨', '');
  command = command.replace('⟩', '');

  // find data
  if (expression.includes('♦find')) {
    result = String(jsonFind(data, command));
  }

  // process data
  actions.forEach(action => {
    if (action === 'pluralize') {
      result = pluralize(result);
    }
    if (action === 'capitalize') {
      result = capitalize(result);
    }
  });
  return result;
};
