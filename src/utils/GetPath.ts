import {findArg} from './Args';
const fs = require('fs');
const path = require('path');
require('dotenv').config();

export const getMode = (): string => {
  if (!findArg('mode')) {
    return String(process.env.MODE);
  }
  return '';
};

export const getPath = (keyArg: string, keyEnv: string): string => {
  let pathValue = findArg(keyArg);
  if (!pathValue) {
    pathValue = String(process.env[keyEnv]);
  }
  pathValue = path.join(__dirname + '/../../../', pathValue);
  if (!fs.existsSync(pathValue)) {
    throw `💣 Error: ${keyArg} not exist! ${pathValue}`;
  }
  return pathValue;
};
