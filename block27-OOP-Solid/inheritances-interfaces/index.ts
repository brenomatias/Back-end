import Hobbit from './hobbit';
import Player from './player';
import Race from './race';

// const player = new Race('Breno');
// // 'new' é o método pra instanciar a classe -> é o que usa pra criar 
// // um objeto real e guardar na memória
// 
// // PRIMEIRO PASSO NA CLASSE BASE

const hobbit = new Hobbit('Frodo', 1, 10);
// contructor de Hobbit 
        // constructor(

        //     name: string, // atributo da classe mae
        //     private _stealth: number, // NOVOS atributos
        //     private _maxLoad: number, // NOVOS atributos    
        // ) { 

const player = new Player<Race>(100, 10, hobbit);
console.log( `${player}`);


// método de hoobit
        player.pickUpItem({
            name: 'machete',
            weight: 2,
        })

        player.pickUpItem({
            name: 'large stone',
            weight: 9,
        })

console.log(player);

