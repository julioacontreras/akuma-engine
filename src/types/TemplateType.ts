const pluralize = require('pluralize');

export class TemplateType {
  data: unknown;
  pluralize(): unknown {
    return (text: string, render: any): string => {
      const valueSanitized = render(text).trim();
      const valuePluralized = pluralize(valueSanitized);
      return valuePluralized;
    };
  }
  capitalize(): unknown {
    return (text: string, render: any): string => {
      const valueSanitized = render(text).trim();
      return valueSanitized.charAt(0).toUpperCase() + valueSanitized.slice(1);
    };
  }
}
