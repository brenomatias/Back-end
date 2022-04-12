import { ITakePicture } from "./interfaces";
import Mobile from "./mobile";

export default class Tijolao extends Mobile implements ITakePicture {
    // recebe herança (extends) a classe mãe Mobile
    // implementa a INTERFACE/METODO ESPECIFICA 'ITakePicture'
    // significa que esta subclasse  TEM QUE IMPLEMENTAR O METODO DE 
    // ITakePicture ('takePicture(cam: string): void;')
    
    // o modulo tem que conversar com interfaces

    constructor(
        num: string,
        brand: string,
        private cam: string, // so tem uma camera
        // cria o constutor para receber 'cam'
    ) {
        super(num, brand); // inicia classe mae
        // nao precisa do super se for usar o construtor da classe base
    }

    // metodo especifico
    throw(someone: string) {
        console.log(`Throwing tijolao on ${someone}`);
    }
    

    // mesma função em duas classes diferentes('Smartphone' & 'Tijolao')
    takePicture(): void {
        console.log(`Taking picture with cam ${this.cam}`);
    }
    // como obrigar as classes filhas a implementar esta funçao?
    // transforma 'Mobile' para abstract e passa os metodos
    
    
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

// TIJOLÃO NAO CONSEGUE LANÇAR VIDEO 
// com metodos abstracts, tijolao nao grava videos mas recebe o metodo 'recordVideo' da classe mãe (depende de metodo que nao usa)
// como resolver? INTERFACE