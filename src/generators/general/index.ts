import {Render} from '../../utils/render/Render';
import {loadJSON} from '../../utils/LoaderJSON';
import {processExpression} from '../../utils/ProcessExpression';
import {jsonFind} from '../../utils/JsonFind';
import {AppType} from '../../types/AppType';
import {EngineTemplateType} from '../../types/EngineTemplateType';

const fs = require('fs');
const path = require('path');

const prepareOutputPath = (
  data: unknown,
  template: EngineTemplateType,
  filePath: string,
  outputPath: string
): string => {
  filePath = filePath.replace('${OUTPUT_PATH}', '');
  template.output.params.forEach(param => {
    const from = param.from;
    filePath = filePath.replace(from, processExpression(data, param.to));
  });
  return path.join(outputPath, filePath);
};

const renderTemplate = (
  rooData: unknown,
  data: unknown,
  template: EngineTemplateType,
  templatePath: string,
  outputPath: string,
  modeDeploy: string
) => {
  const filePath = prepareOutputPath(
    data,
    template,
    template.output.path,
    outputPath
  );
  const content = Render(templatePath, rooData, data, modeDeploy);
  try {
    fs.writeFile(filePath, content, (error: unknown) => {
      if (error) throw error;
    });
  } catch (error) {
    throw '💣 Error to copy controller!' + error;
  }
};

const prepareEnginePath = (
  template: EngineTemplateType,
  templatesPath: string
): string => {
  return template.template.replace('${TEMPLATE_PATH}', templatesPath);
};

export const generateGeneral = (
  appData: AppType,
  templatesPath: string,
  destinyPathApp: string,
  modeDeploy: string
) => {
  const templates: Array<EngineTemplateType> = loadJSON(
    path.join(templatesPath, '/json/templates.json')
  );
  templates.forEach((template: EngineTemplateType) => {
    const data = jsonFind(appData, template.data.query);
    const templateFilePath = prepareEnginePath(template, templatesPath);
    if (template.data.willReturn === 'Array') {
      const list = data as Array<unknown>;
      list.forEach(element => {
        renderTemplate(
          appData,
          element,
          template,
          templateFilePath,
          destinyPathApp,
          modeDeploy
        );
      });
    } else if (template.data.willReturn === 'Object') {
      renderTemplate(
        appData,
        data,
        template,
        templateFilePath,
        destinyPathApp,
        modeDeploy
      );
    }
  });
};
