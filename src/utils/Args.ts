import {ArgumentType} from '../types/ArgumentType';

const argsBrute: Array<string> = process.argv.slice(2);
const args: Array<ArgumentType> = [];

argsBrute.forEach(argB => {
  args.push({
    key: argB.split('=')[0],
    value: argB.split('=')[1],
  });
});

const findArg = (key: string): string => {
  const result: ArgumentType | undefined = args.find(arg => arg.key === key);
  return result ? result.value.trim() : '';
};

export {findArg};
