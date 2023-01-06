import { IPartyMember, IPlayer, Item } from "./interfaces";
import Race from "./race";

// o player vai ser de uma raça mas ele não precisa herdar tudo de raç, logo faz sentido o player RECEBER NA ISNTANCIA a classe

// COMPOSIÇÃO
// 'composição de classes' é reunir todos os tipos de objetos que você precisa em uma mesma classe ao invés de fazer herança:


export default class Player<T extends IPlayer> implements IPlayer, IPartyMember {

// T extends IPlayer = programar generico separando por interfaces
// T pode ser uma classe ou um tipo
// implements -> implementa a interface

    constructor(
        private _hp: number,
        private _mp: number,
        private _player: T, // -> T = generics -> o requisito minimo para rodar -> T permite receber qualquer classe

        // compõe a classe player com um objeto do tipo Race em '_player' 

        // player tem acesso a tudo que é publico de race aqui
        // pela interface, 'Player' tem que ser 'algo' que tem a função 
        // 'pickUpItem' - entao pode ser genérico
        // '_player' precisa ser qualquer coisa que extenda a interface Iplayer -> recebe a base e adiciona especificações
    ) { }

    attack(): void {
        throw new Error("Method not implemented.");
    }

    // método que a INTERFACE exige
       pickUpItem(item: Item): void {
        this._player.pickUpItem(item);
    }
}

// Utilizamos herança sempre que queremos especializar uma classe, ou seja, deixar ela mais específica. Basta se perguntar se subclasse é um tipo de superclasse : se a resposta for não, então não devemos utilizar herança.

//         private _player: Race,
// em vez de herdar de 'Race', 'Player' esta usando esta classe para se compor 

// assim o atributo depende de um objeto de tipo race e nao somente a necessidade da funçao 'pickUpItem' como exige na interface