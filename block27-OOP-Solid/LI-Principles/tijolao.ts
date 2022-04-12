import { ITakePicture } from "./interfaces";
import Mobile from "./mobile";

export default class Tijolao extends Mobile implements ITakePicture {
    constructor(
        num: string,
        brand: string,
        private cam: string,
    ) {
        super(num, brand);
    }
    throw(someone: string) {
        console.log(`Throwing tijolao on ${someone}`);
    }

    takePicture(): void {
        console.log(`Taking picture with cam ${this.cam}`);
    }
}