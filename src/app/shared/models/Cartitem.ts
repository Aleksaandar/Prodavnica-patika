import { Patika } from "./patika";

export class CartItem {
    constructor(patika: Patika, size: number) {
        this.patika = patika;
        this.size = size;
    }
    patika: Patika;
    quantity: number = 1;
    size: number = 1;
    get price(): number {
        return this.patika.price * this.quantity;
    }
}