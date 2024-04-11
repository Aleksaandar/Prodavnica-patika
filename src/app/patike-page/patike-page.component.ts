import { Component, OnInit, ViewChild } from '@angular/core';
import { Patika } from '../shared/models/patika';
import { ActivatedRoute, Router } from '@angular/router';
import { PatikeService } from '../services/patike/patike.service';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/Cart';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-patike-page',
  templateUrl: './patike-page.component.html',
  styleUrls: ['./patike-page.component.css']
})
export class PatikePageComponent implements OnInit {
  patike!: Patika;
  @ViewChild("matButtonToggleGroup", { static: true })
  buttonToggleGroup!: MatButtonToggleGroup;
  validationMessage: string = '';
  constructor(private activatedRoute: ActivatedRoute,
    private patikeService: PatikeService,
    private cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.patike = patikeService.getPatikeById(params['id']);
    })
  }

  ngOnInit(): void {
    this.buttonToggleGroup.change.subscribe(event => {
      this.validationMessage = '';
    });
  }

  addToCart() {
    let selectedSize = this.getSelectedSizeValue();
    if (selectedSize) {
      this.cartService.addToCart(this.patike, selectedSize);
      this.router.navigateByUrl('/cart-page');
    }
  }

  getSelectedSizeValue() {
    let selectedButtonValue = this.buttonToggleGroup.selected as any;
    if (!selectedButtonValue) {
      this.validationMessage = 'Molimo odaberite velicinu patike.';
    }
    return selectedButtonValue.value;
  }
}
