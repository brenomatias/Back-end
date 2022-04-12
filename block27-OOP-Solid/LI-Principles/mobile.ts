import { IMobile } from "./interfaces";

// Primeira classe feita
export default abstract class Mobile implements IMobile {
    public number: string; // e publico para nao ter getter e setter

    constructor(
        num: string,
        private _brand: string // marca

        // (nos 'new' recebe estes parametor )
    ) {
        this.number = this.validateNumber(num);
    }

    private validateNumber = (num: string): string => {
        if (!num.startsWith('9')) {
            return `9${num}`;
        }

        return num;
    }
    

    // ligar para outro mobile
    public call(other: Mobile): string {
        // RECEBE OUTRA INSTANCIA DA CLASSE 'Mobile'

        return `${this.number} calling --> ${other.number}`;
    }


    // cancelar a linha(numero)
    // pode cancelar numero? sim ou nao
    public cancelLine(): boolean {
        console.log(`Cancelling line ${this.number}`);

        return true;
    }
}

