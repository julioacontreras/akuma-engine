export interface InputType {
  name: string;
  type: string;
  inputs: [
    {
      name: string;
      based: string;
    }
  ];
}
