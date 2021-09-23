import {capitalize as capitalizeFn} from '../utils/Capitalize';
const pluralize = require('pluralize');

export class TemplateType {
  data: unknown;
  pluralize(): unknown {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (text: string, render: any): string => {
      const valueSanitized = render(text).trim();
      const valuePluralized = pluralize(valueSanitized);
      return valuePluralized;
    };
  }
  capitalize(): unknown {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (text: string, render: any): string => {
      const valueSanitized = render(text);
      return capitalizeFn(valueSanitized);
    };
  }
}
