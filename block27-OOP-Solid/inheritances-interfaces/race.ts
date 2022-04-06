import { Item } from "./interfaces";

// interface serve como 'contrato' para como o objeto deve ser preenchido


export default class Race {
// ******* ATTRIBUTES************ // 

    // private _name: string; ---> É O ÚNICO ATRIBUTO QUE SERÁ RECEBIDO(height, lang, inv = valor inicial padrão)
    private _height: number;
        // private: modificador de atributos
    private _languages: string[];
          // underline '_' indicates this attibute is private(pattern)

    private _inventory: Item[]; // 'Item' é a interface

// ********* CONSTRUCTOR ******** // 

    //create an object. It prepares the new object for use (name é a unica coisa que sera recebida pelo usuário)
    constructor(
        private _name: string,
        min: number = 0.6,
        max: number = 2.1,) {

        this._height = this.getRandomHeight(min, max);
        // define o valor padrão de height inicial (this refere ao proprio atributo do objeto)
        this._languages = ['westron'];

        this._inventory = [{ name: 'rock', weight: 0.1 }];
        // [{ name: 'rock', weight: 0.1 }] = CONTRATO QUE O ITEM TEM QUE RESPEITAR ( A INTERFACE )
    }

// ****** SUGAR SINTATIC
// acessar attributos fora da classe -> deixa attributos disp. fora das classes 

    get name() { return this._name; }
    get height() { return this._height; }
    get languages() { return this._languages; }
    get inventory() { return this._inventory; }
// atributos privados não são obrigados a ter getters e setters
// Eles só precisam destes métodos caso seja necessário alterá-los diretamente
// O MÉTODO 'GET' PERMITE ACESSAR OS ATRIBUTOS FORA DA CLASSE



// ************ OUTROS MÉTODOS ***************

// Para alterar atributos privados fora de uma classe, utilizamos os métodos. Eles validam as leituras e alterações, de forma a não comprometer o funcionamento da classe.

// ação de adicionar item ao inventário
// este método é publico porque será acessado FORA DA CLASSE
    public pickUpItem(item: Item): void {
        this._inventory.push(item);      
        console.log(`Adicionado o item `, item.name);
    }

// ** quando o método é usado so dentro da classe o ideal é deixá-lo como private
    private getRandomHeight(min: number, max: number) {
        return parseFloat(
            (Math.random() * (max - min) + min).toFixed(2)
        );
    }

// método para impressão da frase desejada ao instanciar a classe
        public toString(): string {
            return `${this._name} speaks ${this._languages} and has height ${this._height}`;
        }

}






// class ClassName {
//     attribute1: type;
//     attribute2: type;
// }

// * Os atributos criados sem modificadores de visibilidade são públicos por padrão. podem ser acessados e alterados tanto dentro quanto fora da classe
// *  principais modificadores de atributos:  public ,  private ,  protected, readonly
// * Os atributos criados com o modificador private só podem ser lidos e modificados dentro da classe. Isso significa que se você tentar utilizar a notação objeto.atributo do lado de fora das chaves que delimitam a criação da classe