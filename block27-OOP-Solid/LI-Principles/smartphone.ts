import { IMobile } from "./interfaces";

export default abstract class Mobile implements IMobile {
    public number: string;
    constructor(
        num: string,
        private _brand: string // marca
    ) {
        this.number = this.validateNumber(num);
    }

    private validateNumber = (num: string): string => {
        if (!num.startsWith('9')) {
            return `9${num}`;
        }

        return num;
    }

    public call(other: Mobile): string {
        return `${this.number} calling --> ${other.number}`;
    }

    public cancelLine(): boolean {
        console.log(`Cancelling line ${this.number}`);

        return true;
    }
}