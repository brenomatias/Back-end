export interface Item {
    name: string,
    weight: number,
}

export interface IPartyMember {
    attack(): void;
}

// assinatura da interface - notação de 'I' para interface
export interface IPlayer {
    pickUpItem(item: Item): void;
}