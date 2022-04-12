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
        // nao precisa do super se for usar o construtor da classe base
    }

    // metodo especifico
    throw(someone: string) {
        console.log(`Throwing tijolao on ${someone}`);
    }

    takePicture(): void {
        console.log(`Taking picture with cam ${this.cam}`);
    }
    
    
    // todo mundo que herda de 'Mobile' tem este método
    // sobscreve o metodo 'call' da mãe (que retorna 'string')
    // FERE LISKOV (o comportamento é diferente na mae e filha -> mae espera 'string' e não 'void'). 'void' para 'string' rola

            // call(other: Mobile): void {
            //     console.log('00010000100101010');
            // }
            
    // typscript nao roda porqe a prop que tenta sobscrever, nao pode
    // a classe mae retorna string
    // ai o typscript crash


}