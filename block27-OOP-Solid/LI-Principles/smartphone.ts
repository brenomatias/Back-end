import { IRecordVideo, ITakePicture } from "./interfaces";
import Mobile from "./mobile";

// S - SRP - PRA QUÊ ESTOU UTILIZANDO O MEU MÉTODO? CADA METODO/CLASSE/MODULO TEM UM CASO DE USO.
// O - OPEN AND CLOSE
// L - NÃO POSSO ALTERAR O COMPORTAMENTO DA CLASSE PAI NA CLASSE FILHA. SÓ POSSO EXTENDER.
// D - MÓDULOS EXTERNOS NÃO PODEM DEPENDER DE MÓDULOS INTERNOS. // DEPENDER DE ABSTRAÇÕES
// I - MÓDULOS CONVERSAM POR ABSTRAÇÕES E INTERFACES, e um módulo NÃO PODE DEPENDER DE COISAS QUE ELE NÃO UTILIZA.
// I - AO INVÉS DE TER UMA INTERFACE QUE FAZ TUDO, TER INTERFACES MENORES (DESACOPLAR O CÓDIGO)

interface Interface {
    foo(): void;
}

class Base implements Interface {
    foo(): void {

    }
}

class Filha extends Base {
    foo() {
        super.foo();
    }
}

class Composicao implements Interface {
    constructor(private b: Interface) {}
    foo() {
        this.b.foo();
    }
}

export default class SmartPhone extends Mobile implements ITakePicture, IRecordVideo {
    // recebe a herança da classe 'Mobile' (extends 'Mobile')

    // 'constructor' com suas caracteristicas unicas
    constructor(
        public num: string,
        public brand: string,
        public frontCam: string,
        public rearCam: string
    ) {
        super(num, brand); // 'super' para dar start na classe mãe
    }
    

    // funcionalidade(método) único da especifico 'Smartphone'
    playMusic(): void {
        console.log(`Smartphone is playing music.`);
    }
    
    // funcionalidade(método) especifico da subclasse 'Smartphone'
    browseTheInternet(): void {
        console.log(`Opening betrybe.com`);
    }

    // funcionalidade(método) especifico da subclasse 'Smartphone'
    takePicture(cam: string): void {
        // recebe por parametro a camera 'cam' que ele vai user
        console.log(`Taking picture with cam ${cam}`);
    }

    // funcionalidade(método) especifico da subclasse 'Smartphone'
    recordVideo(cam: string): void {
        console.log(`Recording video com ${cam}`)
    }

    setVolume(vol: number): void {
        // recebe numero para setar volume
        console.log(`Setting volume to ${vol}`);
    }

    public cancelLine(): boolean {
        console.log(`Waiting forever....`);

        return super.cancelLine();
    }
}