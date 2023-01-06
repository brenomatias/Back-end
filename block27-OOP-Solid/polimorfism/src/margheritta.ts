import Pizza, { PizzaSize } from "./pizza";

// 
export default class Margheritta extends Pizza {

// ***** CONSTRUCTOR
    // Margheritta pode receber qualquer valor de size, entao recebe no constructor
    constructor(size: PizzaSize) {

        super(size); // constroi a base da 
        this._ingredients.push('tomato', 'cheese')
        // adiciona ing especificos
    }
// ***** CONSTRUCTOR


    // method -> SOBRESCREVE O método 'bake' da classe mãe
    public bake(graus: number) {      
        Pizza.COUNT++;
        // toda vez que esta classe for chamada acrescenta +1 no 'count'
        // que e um atributo da classe mãe Pizza

        console.log(`Assando a pizza à ${graus} celsius com ingredientes: `, this._ingredients);
        
        // adiciona manjericão depois que a pizza esta assada
        this._ingredients.push('basil');

        console.log(`Assando a pizza à ${graus} celsius com ingredientes: `, this._ingredients);
    }


    // public bake(graus: number, maxTemp: number): void; -
}