import {EnvType} from './EnvType';

export interface DatabaseType {
  name: string;
  plugin: string;
  models: Array<string>;
  env: Array<EnvType>;
}
