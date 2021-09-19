import {
  haveHeader,
  getHeader,
  removeHeaderFromTemplate,
  processHeader,
} from './Header';

import {processData} from './Data';

const updateContent = (
  rootData: unknown,
  data: unknown,
  template: string,
  modeDeploy: string
): ContentTemplateType => {
  if (haveHeader(template)) {
    const header = getHeader(template);
    if (header.length > 0) {
      data = processData(header, rootData, data);
      template = removeHeaderFromTemplate(template);
      template = processHeader(template, header, data, modeDeploy);
    }
  }
  return {
    template,
    data,
  };
};

export interface ContentTemplateType {
  template: string;
  data: unknown;
}

export const prepareContentTemplate = (
  rootData: unknown,
  data: unknown,
  template: string,
  modeDeploy: string
): ContentTemplateType => {
  console.info('⏱  Preparing content template...');
  return updateContent(rootData, data, template, modeDeploy);
};
