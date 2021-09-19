import {jsonFind} from '../../../utils/JsonFind';
import {getFirst, isGetFirstFunction} from './Get';

export const isForEach = (value: string): boolean => {
  return value.trim().match(/(^\$forEach\()/i) !== null;
};

//$forEach($.endpoints, $.name as nameSelected ⇒ $getFirst($root.endpoints[?(@.name === nameSelected)]))
//$.endpoints, $.name as nameSelected ⇒ $getFirst($root.endpoints[?(@.name === nameSelected)])
//$.name as nameSelected ⇒ $getFirst($root.endpoints[?(@.name === nameSelected)])
//$getFirst($root.endpoints[?(@.name === nameSelected)])
export const processForEach = (
  rooData: unknown,
  data: unknown,
  value: string
): Array<unknown> => {
  const matches: RegExpMatchArray | null = value.match(/(^\$forEach\()/);
  const result: Array<unknown> = [];
  if (matches) {
    let commands: string = value;
    commands = commands.replace('$forEach(', '');
    commands = commands.slice(0, -1);
    const parameters = commands.split(',');
    const forEachData = jsonFind(data, parameters[0]) as Array<unknown>;
    const subParameters = parameters[1].split('⇒');
    const keyParameters = subParameters[0].split(' as ');
    forEachData.forEach(element => {
      const jsonSearch = keyParameters[0].trim();
      const value = String(jsonFind(element, jsonSearch));
      let getCommand = subParameters[1].replace(
        keyParameters[1].trim(),
        `"${value}"`
      );
      if (isGetFirstFunction(getCommand)) {
        if (getCommand.includes('$root')) {
          getCommand = getCommand.replace('$root', '$');
          const elData = getFirst(rooData, getCommand);
          result.push(elData);
        }
      }
    });
  }
  return result;
};
