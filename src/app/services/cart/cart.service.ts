import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/Cart';
import { CartItem } from 'src/app/shared/models/Cartitem';
import { Patika } from 'src/app/shared/models/patika';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  constructor() { }

  addToCart(patika: Patika, size: number): void {
    let cartItem = this.cart.items.find(item => item.patika.id === patika.id && item.size == size)
    if (cartItem) {
      this.changeQuantity(cartItem, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(patika, size));
  }

  removeFromCart(patikaId: number): void {
    this.cart.items =
      this.cart.items.filter(item => item.patika.id != patikaId);
  }

  changeQuantity(cartItem: CartItem, quantity: number) {
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }

}
