import {PluginType} from './PluginType';
import {DatabaseType} from './DatabaseType';
import {ModelType} from './ModelType';
import {InputType} from './InputType';
import {OutputType} from './OutputType';
import {EndpointType} from './EndpointType';
import {ControllerType} from './ControllerType';
import {RepositoryType} from './RepositoryType';

export interface AppType {
  plugins: Array<PluginType>;
  databases: Array<DatabaseType>;
  models: Array<ModelType>;
  inputs: Array<InputType>;
  outputs: Array<OutputType>;
  controllers: Array<ControllerType>;
  endpoints: Array<EndpointType>;
  repositories: Array<RepositoryType>;
}
