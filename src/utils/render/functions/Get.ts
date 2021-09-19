import {jsonFind} from '../../JsonFind';

export const getQuery = (name: string, command: string): string => {
  command = command.replace(`${name}(`, '');
  command = command.slice(0, -1);
  command = command.trim();
  return command;
};

export const isGetFirstFunction = (command: string): boolean => {
  command = command.trim();
  return command.match(/(^\$getFirst\()/i) !== null;
};

export const getFirst = (data: unknown, command: string): unknown | null => {
  const query = getQuery('$getFirst', command);
  const possibleResult = jsonFind(data, query) as unknown;
  if (Array.isArray(possibleResult)) {
    return possibleResult[0];
  }
  return possibleResult;
};

export const getMany = (
  data: unknown,
  command: string
): Array<unknown> | null => {
  const query = getQuery('$getMany', command);
  const possibleResult = jsonFind(data, query) as unknown;
  if (Array.isArray(possibleResult)) {
    return possibleResult;
  }
  return [possibleResult];
};
