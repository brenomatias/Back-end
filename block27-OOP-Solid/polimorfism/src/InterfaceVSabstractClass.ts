// classe abstrata define os 'contratos'(o que deve ser recebido)

abstract class ClasseAbstrata {

    constructor(
        private attrPrivate: string,
        public attrPublic: string,
        protected attrProt: number,
    ) { }

    static CONSTANTE: string = 'constante';
    // mesmo valor para classe inteira

    abstract contract(): void;
    //  UM 'CONTRATO' DA CLASSE ABSTRATA (TEM QUE USAR 'ABSTRACT')

    public foo() { return this.attrPrivate }
}

// const c = new ClasseAbstrata(); // não posso dar new por ser abstract


// CLASSE FILHA EXTENDS CLASSE MAE ABSTRATA E IMPLEMENTA INTERFACE
// obrigado a implementar os 'contratos' da classe abstrata
// obrigado a implementar os 'contratos' da INTEFACE
class Filha extends ClasseAbstrata implements Interface {
    attr: string; // IMPLEMENTAÇÃO DA INTERFACE

    constructor() {
        super('', '', 3); // CONSTRUÇÃO DA CLASSE ABSTRATA
        this.attr = '';
    }

    contract(): void {
        throw new Error(this.attr);
    }
    // CLASSE FILHA TEM QUE IMPLEMENTAR ESSA FUNÇÃO PORQUE ESTA NA
    // DEFINIÇÃO DA CLASSE ABSTRATA

}


interface Interface {
    attr: string;
}
 // interface nao tem nada de encapsulamento, nao gera construtor
 // nao tem implementaçao de nada 