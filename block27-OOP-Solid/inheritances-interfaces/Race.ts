class Race {
// ******* ATTRIBUTES************ // 

    // private _name: string; ---> É O ÚNICO ATRIBUTO QUE SERÁ RECEBIDO(height, lang, inv = valor inicial padrão)
    private _height: number;
        // private: modificador de atributos
    private _languages: string[];
    private _inventory: Object[];
      // underline '_' indicates this attibute is private(pattern)

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

    }

    private getRandomHeight(min: number, max: number) {
        return parseFloat(
            (Math.random() * (max - min) + min).toFixed(2)
        );
    }

}





class ClassName {
    attribute1: type;
    attribute2: type;
}

* Os atributos criados sem modificadores de visibilidade são públicos por padrão. podem ser acessados e alterados tanto dentro quanto fora da classe
*  principais modificadores de atributos:  public ,  private ,  protected, readonly
* Os atributos criados com o modificador private só podem ser lidos e modificados dentro da classe. Isso significa que se você tentar utilizar a notação objeto.atributo do lado de fora das chaves que delimitam a criação da classe