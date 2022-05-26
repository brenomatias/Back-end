export interface Service<ParamsType, ReturnType> {
    execute(params: ParamsType): Promise<ReturnType>
  }