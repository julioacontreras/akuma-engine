import {TemplateType} from '../../types/TemplateType';
import {
  prepareContentTemplate,
  ContentTemplateType,
} from './PrepareContentTemplate';

const mustache = require('mustache');
const fs = require('fs');

const loadTemplate = (pathTemplate: string): string => {
  console.info(`⏱  Loading template ${pathTemplate}...`);
  let template = '';
  try {
    template = fs.readFileSync(pathTemplate, 'utf8');
  } catch (error) {
    throw '💣 Template not found!';
  }
  return template;
};

const getRenderConfiguration = (): Array<string> => {
  const parseTags = [];
  parseTags.push('⟨');
  parseTags.push('⟩');
  return parseTags;
};

const prepareData = (data: unknown): TemplateType => {
  const templateObject = new TemplateType();
  templateObject.data = data;
  return templateObject;
};

const Render = (
  pathTemplate: string,
  rootData: unknown,
  data: unknown,
  modeDeploy: string
) => {
  const template = loadTemplate(pathTemplate);
  const contentTemplate: ContentTemplateType = prepareContentTemplate(
    rootData,
    data,
    template,
    modeDeploy
  );
  const rendered = mustache.render(
    contentTemplate.template,
    prepareData(contentTemplate.data),
    undefined,
    getRenderConfiguration()
  );
  return rendered;
};

export {Render};
