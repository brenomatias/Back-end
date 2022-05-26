export enum FrameServiceError {
    INVALID_MATERIAL = "INVALID_MATERIAL",
    INVALID_COLOR = "INVALID_COLOR",
  }
  
  export class ServiceError {
    constructor(
      private message: FrameServiceError
    ){}
  
    public getMessage(){
      return this.message;
    }
  }