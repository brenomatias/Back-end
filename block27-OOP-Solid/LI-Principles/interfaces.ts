// INTERFACE SEGREGATION -> conversar apenas por interfaces

// interfaces especificas para desaclopar os metodos da classe mãe
// para evitar que subclasses recebam metódos que nao utilizam
// estes metodos serão especificos para determinada subclasse de 'Mobile'
// INTERFACE SO DECLARA A ASSINATURA DO METODO(O QUE ELE FAZ)
// INTERFACES MENORES PARA CADA COMPORTAMENTO
export interface ITakePicture { 
    takePicture(cam: string): void;
}

export interface IRecordVideo {
    recordVideo(cam: string): void;
}


// METODO PARA MELHORAR O CODIGO DA CLASSE MÃE
// TIPO ABSTRATO
export interface IMobile {
    call(other: IMobile): string;
    cancelLine(): boolean;
}





// INTERFACE EXTEND CLASSE (INTERFACE HERDA DE CLASSE)
// NAO FAZER ISSO
class Base {
    attr: string;
    foo(): void {

    }
}

interface A extends Base {

}

let a: A;
a.foo();