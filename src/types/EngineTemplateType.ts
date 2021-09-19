export interface EngineTemplateType {
  description: string;
  template: string;
  data: {
    query: string;
    willReturn: string;
  };
  output: {
    path: string;
    params: [
      {
        from: string;
        to: string;
      }
    ];
  };
}
