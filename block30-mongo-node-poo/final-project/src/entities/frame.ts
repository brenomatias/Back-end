export interface Frame {
    material: FrameMaterial,
    color: FrameColor
  }
  
  export enum FrameMaterial {
    ACETATO = 'ACETATO',
    METAL = 'METAL'
  }
  
  export enum FrameColor {
    BLACK = 'BLACK',
    WHITE = 'WHITE'
  }