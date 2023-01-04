export enum PizzaSize {
    SMALL = 'Small', // 20.0
    MEDIUM = 'Medium', // 25.0
    LARGE = 'Large', // 30.0
}
// preços pre definidos das pizza

// classe pizza define como será uma pizza -> Pizza genérica - descrever pizza

export default abstract class Pizza {


// *** Atributes
    public static COUNT: number = 0;
    // contar o numero de pizza assadas: NUMERO DE 'new' Pizza
    // vai somar isso nas classes filhas 
    // é 'STATIC' TUDO QUE É ESTATICO EXISTE APENAS EM UM LUGAR
    // TA NA DESCRIÇAO DA CLASSE E NAO NO OBJETO INSTANCIADO
    // 'existe um 'count' para todos objetos do tipo pizza'
    // nao acessa com 'this'

    protected _ingredients: string[]; // array de ingredients
    private _pricePerSize: Map<PizzaSize, number>;
    // preço por pizza -> é um array de objetos - 'PizzaSize' vem do enum
// *** Atributes


// *** Constructor 
        // recebe o size -> o cliente passa o tamanho
        // size é um atributo, mas como ele é recebido de fora, ele é aplicado no constructor 'recebe o tamanho da pizza na construção'
    constructor(private _size: PizzaSize) {
        this._ingredients = ['red sauce']; // na construção recebe esse ing. como padrão inicial
        this._pricePerSize = new Map<PizzaSize, number>([ 
            [ PizzaSize.SMALL, 25.00 ],
            [ PizzaSize.MEDIUM, 35.00 ],
            [ PizzaSize.LARGE, 40.00 ],
        ])
        // preço da pizza é baseado no tamanho -> 'PizzaSize' vem do enum
    }
// *** Constructor 

// *** Methods

    // method para assar pizza
    public abstract bake(graus: number): void ;
    // METODO ABSTRATO -> obrigatoriamente PARA quem for herdar de pizza
    // SUBCLASSE VAI TER QUE IMPLEMENTAR ESTE MÉTODO
    // metodo nao implementado, apenas declarado (tipo uma interface)
    // nao tem como implementar a contagem aqui de pizzas porque é abstract

    public bakeLog(graus: number): void{
        console.log(`Assando pizza a ${graus} celsius com ingredients:`,
        this._ingredients);
    }
    
    // ESSE É UM SET PARA INGREDIENTES CASO 'INGREDIENT' FOSSEM PRIVADOS
    public addIngredient(ing: string) {
        this._ingredients.push(ing);
    }
    // adicionar ing novo no array
    
    // method -> get size
    // so vai setar o tamanho da pizza uma vez
    // deixa publico o metodo de definer o tamanho da pizza
    public get size(): PizzaSize {
        return this._size;
    }


    // quando uma foo (FUNÇÃO) não faz referencia ao this, pode ser static
    public static getRandomHeight() {
        // não faz referencia ao this dentro da foo
        // NÃO FAZ REFERENCIA AO OBJETO ENTAO PODE SER STATICO
        return 5.0;
    }
    

    // acessar o preço da pizza
    public getPrice(): number {
        return this._pricePerSize.get(this._size) || 50.0;
    }
// *** Methods

}


// ************* abstract class -> NAO PERMITE 'new' a partir de uma classe abstrata
// proibe construçao do objeto diretamente
// e obrigatorio usar a herança (a partir de uma subclasse) da classe para criar objetos

// classe abstrata e um tipo de interface