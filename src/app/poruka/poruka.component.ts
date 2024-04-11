import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-poruka',
  templateUrl: './poruka.component.html',
  styleUrls: ['./poruka.component.css']
})
export class PorukaComponent {
  constructor(private matDialog:MatDialog) {
   
  }
}
