// subclasse de Pizza
// especificação de pizza
// pepperoni herda tudo de Pizza
import Pizza, { PizzaSize } from "./pizza";

// Pepperoni herda todas as caract de Pizza com o 'EXTENDS' .recebe metodos e atributos
// tudo que não é private 'Pepperoni' tem acesso
export default class Pepperoni extends Pizza {


    constructor() {
        super(PizzaSize.MEDIUM); // constroi os atributos da classe mãe(super)
    // chama constructor da classe Mãe 
    // **** assim esta definido que toda pizza de pepperoni tem tamanho MEDIUM

        this._ingredients.push('pepperoni', 'cheese');
        // adiciona os atributos da subclasse
    }
   
    // preço a mais da pizza: preço especifico -> sobscreve 'getPrice' da classe mãe
    public getPrice(): number {
        return 50.0;
    }
    
    // SOBSCREVE O METODO BAKE DA CLASSE MAE 'Pizza'
    public bake(temperature: number): void {
        console.log(`Assando por 40 minutos`);
    
    // metodo de acessar o 'count' da classe base 'Pizza'
        Pizza.COUNT++;
    // toda vez que esta classe for chamada acrescenta +1 no 'count'
        // que e um atributo da classe mãe Pizza(sempre que assar a pizza)
    }
}

// ***************
// caso a pizza de pepperoni aceite receber tamanhos:

// constructor(size: PizzaSize) {
//     super(size); 

//     this._ingredients.push('pepperoni', 'cheese');
// }

// *size poderia ser qualquer nome aqui porque o que importa é o 
// tipo do argumento 'PizzaSize'
// *** size : Argumento -> define o tipo da variavel size