export interface EndpointType {
  name: string;
  method: string;
  route: string;
  description: string;
  isCRUDGetMany?: boolean;
  isCRUDGetOne?: boolean;
  isCRUDCreateOne?: boolean;
  isCRUDDeleteOne?: boolean;
  isCRUDUpdateOne?: boolean;
  roleAuth?: string;
  params: [
    {
      param: string;
      name: string;
      required: boolean;
    }
  ];
  input: string;
  output: string;
  resolver?: {
    instructions: [
      {
        success: [
          {
            name: string;
            params: [
              {
                name: string;
                source: string;
              }
            ];
            success: [
              {
                name: string;
                params: unknown;
              }
            ];
          }
        ];
        error: [
          {
            name: string;
            params: unknown;
          }
        ];
      }
    ];
  };
}
