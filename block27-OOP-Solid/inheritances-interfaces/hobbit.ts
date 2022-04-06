//  ESTÁ CLASSE VAI SER UM HERDEIRO DA CLASSE MÃE 'RACE'
// OU SEJA, ESTA SUBCLASSE VAI RECEBER TODOS OS ATRIBUTOS E MÉTODOS DA MAIN CLASSE MAS PODE CONTER A ATRIBUTOS PROPRIOS (adicionar ações especificas) -> 'todo Hobbit é da classe Race'

import { Item } from "./interfaces";
import Race from "./race";

// 'EXTENDS' é a palavra utilizada para receber a herança da classe mãe(attibutos public e protected por padrão são 'vistos' na subclasse)
export default class Hobbit extends Race {

// quando criar uma subclasse o constructor define quais parametros essa subclasse vai receber
    constructor(

        name: string, // atributo da classe mae

        private _stealth: number, // NOVOS atributos
        private _maxLoad: number, // NOVOS atributos    

    ) {
        // quando é uma herança, a classe base deve ser chamada --- quando se herda de uma classe base, na hora de construir um objeto da classe filha, primeiro se controi o objeto da classe base, depois as coisas especificas -> TEM QUE CHAMAR
        super(name, 0.6, 1.2); // construir a base da classe mãe
        // super inicializa o constructor da classe base

        // 'this.name' seria a forma de acessar o métod e get name()

        this._languages.push('hobbitês')
    }


    // este método irá SOBRESCREVER o método 'pickUpItem' na classe mãe -> mudar comportamento APENAS para esta subclasse
    public pickUpItem(item: Item): void {
       // Item = interface 

       // essa varíavel define o peso atual que ele carrega
        const currentLoad = this.inventory.reduce(
            (acc, curr) => acc + curr.weight,
            0,
        );

        // checagem do peso
        if (currentLoad + item.weight <= this._maxLoad) {
            super.pickUpItem(item);
        // se o peso for menor, apenas chama o método original e acrescenta o item

        } else {
            console.log(`Inventory is full.`);
        }
    }

}