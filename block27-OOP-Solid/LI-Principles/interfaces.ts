// interfaces especificas para desaclopar os metodos da classe mãe
// para evitar que subclasses recebam metódos que nao utilizam
// estes metodos serão especificos para determinada subclasse de 'Mobile'

export interface ITakePicture { 
    takePicture(cam: string): void;
}

export interface IRecordVideo {
    recordVideo(cam: string): void;
}

export interface IMobile {
    call(other: IMobile): string;
    cancelLine(): boolean;
}

class Base {
    attr: string;
    foo(): void {

    }
}