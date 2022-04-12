import { ITakePicture } from "./interfaces";
import Mobile from "./mobile";

export default class Tijolao extends Mobile implements ITakePicture {
    // recebe herança (extends) a classe mãe Mobile

    constructor(
        num: string,
        brand: string,
        private cam: string,
    ) {
        super(num, brand); // inicia classe mae
    }

    // metodo especifico
    throw(someone: string) {
        console.log(`Throwing tijolao on ${someone}`);
    }

    takePicture(): void {
        console.log(`Taking picture with cam ${this.cam}`);
    }
}