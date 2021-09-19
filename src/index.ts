import {loadJSON} from './utils/LoaderJSON';
import {getPath, getMode} from './utils/GetPath';
import {generateGeneral} from './generators/general';
import {AppType} from './types/AppType';

const run = (
  dataPath: string,
  outputPath: string,
  templatesPath: string,
  modeDeploy: string
) => {
  console.info('🚀 Start generate!');
  console.info('🍒 Mode deploy: ', modeDeploy);
  console.info('🍒 Engine Templates: ', templatesPath);
  console.info('🍒 Data project: ', dataPath);
  console.info('🍒 Output project: ', outputPath);
  const data: AppType = loadJSON(dataPath);
  generateGeneral(data, templatesPath, outputPath, modeDeploy);
  console.info('🤘 Finished!');
};

const modeDeploy = getMode();
const templatesPath = getPath('templatePath', 'TEMPLATE_PATH');
const dataPath = getPath('dataPath', 'DATA_PATH');
const outputPath = getPath('outputPath', 'OUTPUT_PATH');

run(dataPath, outputPath, templatesPath, modeDeploy);
