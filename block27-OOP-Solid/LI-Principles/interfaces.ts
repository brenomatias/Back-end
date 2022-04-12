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