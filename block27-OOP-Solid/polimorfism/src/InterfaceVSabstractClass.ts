abstract class ClasseAbstrata {
    constructor(
        private attrPrivate: string,
        public attrPublic: string,
        protected attrProt: number,
    ) { }

    static CONSTANTE: string = 'constante';

    abstract contract(): void;

    public foo() { return this.attrPrivate }
}

// const c = new ClasseAbstrata(); // não posso dar new por ser abstract

class Filha extends ClasseAbstrata implements Interface {
    attr: string;
    constructor() {
        super('', '', 3);
        this.attr = '';
    }

    contract(): void {
        throw new Error(this.attr);
    }

}


interface Interface {
    attr: string;
}