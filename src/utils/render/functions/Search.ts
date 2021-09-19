import {getFirst, getMany} from './Get';

export const isSearchFunction = (value: string): boolean => {
  return value.match(/(^\$get)/i) !== null;
};

export const getValueFromSearch = (
  data: unknown,
  command: string,
  modeDeploy: string
): unknown | null => {
  command = command.replace('${MODE_DEPLOY}', modeDeploy);
  if (command.includes('$getFirst')) {
    return getFirst(data, command);
  } else if (command.includes('$getMany')) {
    return getMany(data, command);
  }
  return null;
};
