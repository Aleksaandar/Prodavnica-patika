import { Injectable } from '@angular/core';
import { Patika } from 'src/app/shared/models/patika';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class PatikeService {

  constructor() { }
  getPatikeById(id: number): Patika {
    return this.getAll().find(patika => patika.id == id)!;
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Nike', count: 6 },
      { name: 'Adidas', count: 5 },
      { name: 'Jordan', count: 3 },
      { name: 'Muski', count: 7 },
      { name: 'Zenski', count: 7 },
    ]
  }
  getAll(): Patika[] {
    return [
      {
        id: 1,
        name: 'Adidas Superstar',
        price: 120,
        favorite: true,
        pol: 'Muski',
        imageUrl: '/assets/images/patika1.jpg',
        velicine: [39.5,41.5,42,43]
      },
      {
        id: 2,
        name: 'Nike Air Max 90',
        price: 210,
        favorite: true,
        pol: 'Muski',
        imageUrl: '/assets/images/patika2.jpg',
        velicine: [ 39.5,41,42,44,45,45.5]
      },
      {
        id: 3,
        name: 'Nike Air Force',
        price: 220,
        favorite: false,
        pol: 'Muski',
        imageUrl: '/assets/images/patika3.jpg',
        velicine: [40,41,42,43.5]
      },
      {
        id: 4,
        name: 'Nike Air Max 90',
        price: 200,
        favorite: false,
        pol: 'Zenski',
        imageUrl: '/assets/images/patika4.jpg',
        velicine: [37.5,38.5, 39, 39.5]
      },
      {
        id: 5,
        name: 'Adidas Superstar',
        price: 140,
        pol: 'Muski',
        favorite: false,
        imageUrl: '/assets/images/patika5.jpg',
        velicine: [40,41.5,42,43,44.5]
      },
      {
        id: 6,
        name: 'Jordan',
        price: 190,
        favorite: true,
        pol: 'Zenksi',
        imageUrl: '/assets/images/patika8.jpg',
        velicine: [37,37.5,38.5, 39, 39.5]
      }
    ]
  }
}
