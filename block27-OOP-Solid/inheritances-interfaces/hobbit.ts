//  ESTÁ CLASSE VAI SER UM HERDEIRO DA CLASSE MÃE 'RACE'
// OU SEJA, ESTA SUBCLASSE VAI RECEBER TODOS OS ATRIBUTOS E MÉTODOS DA MAIN CLASSE MAS PODE CONTER A ATRIBUTOS PROPRIOS (adicionar ações especificas)

import { Item } from "./interfaces";
import Race from "./race";

// 'EXTENDS' é a palavra utilizada para receber a herança da classe mãe(attibutos public e protected por padrão são 'vistos' na subclasse)
export default class Hobbit extends Race {
    constructor(
        name: string,
        private _stealth: number,
        private _maxLoad: number,
    ) {
        super(name, 0.6, 1.2);
        this._languages.push('hobbitês')
    }

    public pickUpItem(item: Item): void {
        const currentLoad = this.inventory.reduce(
            (acc, curr) => acc + curr.weight,
            0,
        );

        if (currentLoad + item.weight <= this._maxLoad) {
            super.pickUpItem(item);
        } else {
            console.log(`Inventory is full.`);
        }
    }
}