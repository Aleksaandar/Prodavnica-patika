import { Component } from '@angular/core';
import { Cart } from '../shared/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/Cartitem';
import { MatDialog } from '@angular/material/dialog';
import { PorukaComponent } from '../poruka/poruka.component';




@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(private cartService: CartService,private matDialog:MatDialog) {
   
  }
  emptyCart(){
    this.cartService.getCart().items = [];
    this.matDialog.open(PorukaComponent,{
      width:'350px'
    })
  }
  
}
