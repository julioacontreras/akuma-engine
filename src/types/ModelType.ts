import {FieldType} from './FieldType';

export interface ModelType {
  name: string;
  fields: Array<FieldType>;
}
