export interface ControllerType {
  name: string;
  isCRUD: boolean;
  endpoints: Array<string>;
}
