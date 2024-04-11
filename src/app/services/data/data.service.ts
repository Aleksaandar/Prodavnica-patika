import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patika } from 'src/app/shared/models/patika';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost/patike-php/api/get_data.php'; // Adjust this URL

  constructor(private http: HttpClient) {}

  getAllData(): Observable<Patika[]> {
    return this.http.get<Patika[]>(`${this.apiUrl}/get_data.php`);
  }

 
}