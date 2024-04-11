import { Component } from '@angular/core';
import { Cart } from '../shared/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/Cartitem';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService,private matDialog:MatDialog) {
    this.setCart();
  }
openDialog(){
  this.matDialog.open(DialogComponent,{
    width:'350px'
  })
}
emptyCart(){
  this.cartService.getCart().items = [];
}
  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.patika.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem, quantity);
    this.setCart();
  }
}
