const jp = require('jsonpath');

export const jsonFind = (data: unknown, query: string): unknown => {
  return jp.query(data, query);
};
