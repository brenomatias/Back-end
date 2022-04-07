import Margheritta from "./margheritta";
import Pepperoni from "./pepperoni";
import Pizza, { PizzaSize } from "./pizza";

// INSTANCIAR = 'new'

const pizzaGeneric = new Pizza(PizzaSize.LARGE);
pizzaGeneric.bake(240.0);
console.log(`Pizza será vendida a :`, pizzaGeneric.getPrice());
// impressão genérica da pizza sem antes aplicar o abstract na classe
// COM CLASSE ABSTRATAS NAO É POSSIVEL ISNTANCIAR OBJETOS DIRETAMENTE


const pepperoni = new Pepperoni();
pepperoni.bake(180.0);
console.log(`Pizza será vendida a`, pepperoni.getPrice());
// instanciar uma pizza de pepperoni

const margheritta = new Margheritta(PizzaSize.SMALL);
margheritta.bake(180.0);
console.log(`Pizza será vendida a`, margheritta.getPrice());
// *** nao tem 'getPrice' especifico da margheritta entao esse metodo é da classe mãe
// criar pizza de margheritta pequena
const margherittaLarge = new Margheritta(PizzaSize.LARGE);



// **** POLIMORFISMO

// nao instancia nada novo aqui

const bakePizza = (obj: Pizza, temperature: number) => {
  obj.bake(temperature);
  // ESTE OBJETO TEM QUE TER O METODO 'bake' -> deve ser passado para ele
  // varia para cada classe
  console.log(`Pizza será vendida a: `, obj.getPrice());
}
// SIGNIFICA QUE NO LUGAR QUE ESTAMOS ESPERAMOS 'Pizza', podemos passar qualquer classe 
// QUE SEJA 'Pizz' OU EXTENDA 'Pizza'
// 'obj' -> e do tipo 'Pizza'
// Pepperoni, Margheritta SÃO 'Pizza'

// **** POLIMORFISMO

// Polimorfismo por SUBTIPAGEM -> aplicação do polimorfismo(SUBTIPAGEM)
bakePizza(pizzaGeneric, 180.0)
bakePizza(pepperoni, 180.0); // -> aceita objeto do tipo 'pepperoni'  
bakePizza(margheritta, 220.0);
bakePizza(margherittaLarge, 220.0);
// neste caso estamos esperando uma classe MAS podemos passar uma subclasse
// este o polimorfismo de subtipagem



console.log(`Foram assadas ${Pizza._count} pizzas`);