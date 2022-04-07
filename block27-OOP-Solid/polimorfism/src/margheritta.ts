import Pizza, { PizzaSize } from "./pizza";

// 
export default class Margheritta extends Pizza {

    // Margheritta pode receber qualquer valor de size, entao recebe no constructor
    constructor(size: PizzaSize) {

        super(size); // constroi a base da 
        this._ingredients.push('tomato', 'cheese')
        // adiciona ing especificos
    }

    // method
    public bake(graus: number) {
        Pizza._count++;
        
        console.log(`Assando a pizza à ${graus} celsius com ingredientes: `, this._ingredients);
        
        // adiciona manjericão depois que a pizza esta assada
        this._ingredients.push('basil');

        console.log(`Assando a pizza à ${graus} celsius com ingredientes: `, this._ingredients);
    }
}