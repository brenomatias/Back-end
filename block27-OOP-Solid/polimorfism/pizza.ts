export enum PizzaSize {
    SMALL = 'Small', // 20.0
    MEDIUM = 'Medium', // 25.0
    LARGE = 'Large', // 30.0
}
// preços pre definidos das pizza

// classe pizza define como será uma pizza -> Pizza genérica
export default abstract class Pizza {

// *** Atributes
    public static _count: number = 0;
    protected _ingredients: string[]; // array de ingredients
    private _pricePerSize: Map<PizzaSize, number>;
    // preço por pizza -> é um array de objetos
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
        // preço da pizza é baseado no tamanho
    }
// *** Constructor 

// *** Methods

    // method para assar pizza
    public abstract bake(graus: number): void ;

    public addIngredient(ing: string) {
        this._ingredients.push(ing);
    }
    
    // method -> get size
    // so vai setar o tamanho da pizza uma vez
    public get size(): PizzaSize {
        return this._size;
    }

    // quando uma foo não faz referencia ao this, pode ser static
    public static getRandomHeight() {
        // não faz referencia ao this dentro da foo
        return 5.0;
    }
    
    // acessar o preço da pizza
    public getPrice(): number {
        return this._pricePerSize.get(this._size) || 50.0;
    }
// *** Methods

}