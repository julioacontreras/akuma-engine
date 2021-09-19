const fs = require('fs');

export const loadJSON = (dataFilePath: string) => {
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  return data;
};
