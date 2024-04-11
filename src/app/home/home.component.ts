import { Component } from '@angular/core';
import { PatikeService } from '../services/patike/patike.service';
import { Patika } from '../shared/models/patika';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  patike: Patika[] = [];
  constructor(private patikeService: PatikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.patike = this.patikeService.getAll().filter(patika => patika.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else
        this.patike = this.patikeService.getAll();
    })

  }

}
