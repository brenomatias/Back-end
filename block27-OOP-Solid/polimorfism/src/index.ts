import Margheritta from "./margheritta";
import Pepperoni from "./pepperoni";
import Pizza, { PizzaSize } from "./pizza";

const pizzaGeneric = new Pizza(PizzaSize.LARGE);
pizzaGeneric.bakeLog(240.0);
console.log(`Pizza será vendida a :`, pizzaGeneric.getPrice());
// impressão genérica da pizza sem antes aplicar o abstract na classe

const pepperoni = new Pepperoni();
pepperoni.bake(180.0);
console.log(`Pizza assada a`, pepperoni.getPrice());
// instanciar uma pizza de pepperoni

const margheritta = new Margheritta(PizzaSize.SMALL);
const margherittaLarge = new Margheritta(PizzaSize.LARGE);

const bakePizza = (obj: Pizza, temperature: number) => {
  obj.bake(temperature);
  console.log(`Pizza será vendida a: `, obj.getPrice());
}

bakePizza(pepperoni, 180.0);
bakePizza(margheritta, 220.0);
bakePizza(margherittaLarge, 220.0);



console.log(`Foram assadas ${Pizza._count} pizzas`);